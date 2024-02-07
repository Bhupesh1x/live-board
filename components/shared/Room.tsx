"use client";

import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "@/liveblocks.config";

type Props = {
  roomId: string;
  children: React.ReactNode;
  fallback: NonNullable<React.ReactNode> | null;
};

function Room({ children, roomId, fallback }: Props) {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default Room;
