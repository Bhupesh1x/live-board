import Image from "next/image";

import { EmptyStateEnum } from "./BoardList";
import { Button } from "@/components/ui/button";

type Props = {
  type: EmptyStateEnum;
};

function EmptyState({ type }: Props) {
  let data;
  const isEmptyBoard = type === EmptyStateEnum.BOARD;

  switch (type) {
    case EmptyStateEnum.SEARCH:
      data = {
        imgSrc: "/empty-search.svg",
        title: "No results found!",
        description: "Try searching for something else.",
      };
      break;
    case EmptyStateEnum.FAVORITES:
      data = {
        imgSrc: "/empty-favorites.svg",
        title: "No favorite board!",
        description: "Try favoriting a board.",
      };
      break;
    case EmptyStateEnum.BOARD:
      data = {
        imgSrc: "/empty-board.svg",
        title: "Create your first board!",
        description: "Start by creating a board for your organization",
      };
      break;
    default:
      data = {};
      break;
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={data.imgSrc!}
        alt="Empty"
        width={isEmptyBoard ? 110 : 140}
        height={isEmptyBoard ? 110 : 140}
      />

      <h2 className="text-2xl font-semibold mt-6">{data.title}</h2>
      <p className="text-muted-foreground mt-2 text-sm">{data.description}</p>

      {isEmptyBoard && (
        <div className="mt-6">
          <Button size="lg">Create board</Button>
        </div>
      )}
    </div>
  );
}

export default EmptyState;
