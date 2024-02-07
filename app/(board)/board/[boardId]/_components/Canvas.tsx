"use client";

import Info from "./Info";
import Toolbar from "./Toolbar";
import Participants from "./Participants";

type Props = {
  boardId: string;
};

function Canvas({ boardId }: Props) {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
}

export default Canvas;
