import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import BoardCard from "./BoardCard";
import EmptyState from "./EmptyState";
import EmptyBoard from "./EmptyBoard";
import NewBoardButton from "./NewBoardButton";

type Props = {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

export enum EmptyStateEnum {
  SEARCH = "SEARCH",
  FAVORITES = "FAVORITES",
}

function BoardList({ orgId, query }: Props) {
  const board = useQuery(api.boards.get, { orgId, ...query });

  if (!board?.length && query.search) {
    return <EmptyState type={EmptyStateEnum.SEARCH} />;
  }

  if (!board?.length && query.favorites) {
    return <EmptyState type={EmptyStateEnum.FAVORITES} />;
  }

  if (!board?.length) {
    return <EmptyBoard />;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold">
        {query.favorites ? "Favorites Boards" : "Team Boards"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} disabled={board === undefined} />
        {board === undefined ? (
          <>
            <BoardCard.Skeleton />
            <BoardCard.Skeleton />
            <BoardCard.Skeleton />
            <BoardCard.Skeleton />
            <BoardCard.Skeleton />
            <BoardCard.Skeleton />
          </>
        ) : (
          board?.map((board) => (
            <BoardCard
              key={board._id}
              id={board._id}
              title={board.title}
              authorId={board.authorId}
              authorName={board.authorName}
              orgId={board.orgId}
              imageUrl={board.imageUrl}
              createdAt={board._creationTime}
              isFavorite={board.isFavorite}
            />
          ))
        )}
      </div>
    </>
  );
}

export default BoardList;
