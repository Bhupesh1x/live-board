import Image from "next/image";

import { EmptyStateEnum } from "./BoardList";

type Props = {
  type: EmptyStateEnum;
};

function EmptyState({ type }: Props) {
  let data;

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
    default:
      data = {};
      break;
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={data.imgSrc!} alt="Empty" width={140} height={140} />

      <h2 className="text-2xl font-semibold mt-6">{data.title}</h2>
      <p className="text-muted-foreground mt-2 text-sm">{data.description}</p>
    </div>
  );
}

export default EmptyState;
