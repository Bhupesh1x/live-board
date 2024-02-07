"use client";

import Info from "./Info";
import Toolbar from "./Toolbar";
import Participants from "./Participants";

import { useSelf } from "@/liveblocks.config";

type Props = {
  boardId: string;
};

function Canvas({ boardId }: Props) {
  const info = useSelf((me) => me.info);

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
}

export default Canvas;
