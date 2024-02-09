"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";

import { Layer } from "@/types/canvas";
import { RoomProvider } from "@/liveblocks.config";

type Props = {
  roomId: string;
  children: React.ReactNode;
  fallback: NonNullable<React.ReactNode> | null;
};

function Room({ children, roomId, fallback }: Props) {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{ cursor: null }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default Room;
