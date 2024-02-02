import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import EmptyState from "./EmptyState";
import EmptyBoard from "./EmptyBoard";

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
  const board = useQuery(api.boards.get, { orgId });

  if (board === undefined) {
    return <div>Loading...</div>;
  }

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
    <div>
      <h1>Board List</h1>
    </div>
  );
}

export default BoardList;
