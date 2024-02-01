import EmptyState from "./EmptyState";

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
  BOARD = "BOARD",
}

function BoardList({ orgId, query }: Props) {
  const board = [];

  if (!board?.length && query.search) {
    return <EmptyState type={EmptyStateEnum.SEARCH} />;
  }

  if (!board?.length && query.favorites) {
    return <EmptyState type={EmptyStateEnum.FAVORITES} />;
  }

  if (!board?.length) {
    return <EmptyState type={EmptyStateEnum.BOARD} />;
  }

  return (
    <div>
      <h1>Board List</h1>
    </div>
  );
}

export default BoardList;
