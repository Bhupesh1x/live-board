"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameModal } from "@/store/useRenameModal";

import Hint from "@/components/shared/Hint";
import { Button } from "@/components/ui/button";
import Actions from "@/components/shared/Actions";

type Props = {
  boardId: string;
};

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

function Info({ boardId }: Props) {
  const board = useQuery(api.board.get, { id: boardId as Id<"boards"> });

  const { onOpen } = useRenameModal();

  if (!board) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 px-1.5 h-12 rounded-md shadow-md flex items-center bg-white">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" height={30} width={30} />
            <span
              className={`text-xl font-semibold ml-2 text-black ${font.className}`}
            >
              LiveBoard
            </span>
          </Link>
        </Button>
      </Hint>
      <div className="text-neutral-400 px-1.5">|</div>
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-base font-normal px-2"
          onClick={() => onOpen(board._id, board.title)}
        >
          {board.title}
        </Button>
      </Hint>
      <div className="text-neutral-400 px-1.5">|</div>

      <Actions id={board._id} title={board.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
}

export default Info;

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 px-1.5 h-12 rounded-md shadow-md flex items-center bg-white w-[300px]" />
  );
};
