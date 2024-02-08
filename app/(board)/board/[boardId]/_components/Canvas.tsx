"use client";

import { useState } from "react";

import { CanvasMode, CanvasState } from "@/types/canvas";
import { useCanRedo, useCanUndo, useHistory } from "@/liveblocks.config";

import Info from "./Info";
import Toolbar from "./Toolbar";
import Participants from "./Participants";

type Props = {
  boardId: string;
};

function Canvas({ boardId }: Props) {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        undo={history.undo}
        redo={history.redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />
    </main>
  );
}

export default Canvas;
