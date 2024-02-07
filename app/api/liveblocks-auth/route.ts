import { Liveblocks } from "@liveblocks/node";

import { auth, currentUser } from "@clerk/nextjs";
import { ConvexHttpClient } from "convex/browser";

import { api } from "@/convex/_generated/api";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET!,
});

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(req: Request) {
  const user = await currentUser();
  const authorize = await auth();

  if (!authorize || !user) {
    return new Response("User unauthorized", { status: 403 });
  }

  const { room } = await req.json();
  const board = await convex.query(api.board.get, { id: room });

  if (board?.orgId !== authorize?.orgId) {
    return new Response("User unauthorized", { status: 403 });
  }

  const userInfo = {
    name: user?.firstName || "Teammate",
    picture: user.imageUrl,
  };

  const session = liveblocks.prepareSession(user.id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();
  return new Response(body, { status });
}
