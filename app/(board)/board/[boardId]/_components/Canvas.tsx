"use client";

import { useState } from "react";

import { CanvasMode, CanvasState } from "@/types/canvas";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
} from "@/liveblocks.config";

import Info from "./Info";
import Toolbar from "./Toolbar";
import Participants from "./Participants";
import { CursorPresence } from "./CursorPresence";

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

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = { x: 0, y: 0 };

      setMyPresence({ cursor: current });
    },
    []
  );

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
      <svg className="h-[100vh] w-[100vw]">
        <g>
          <CursorPresence />
        </g>
      </svg>
    </main>
  );
}

export default Canvas;
