"use client";

import { useOrganization } from "@clerk/nextjs";

import EmptyOrg from "./EmptyOrg";
import BoardList from "./BoardList";

type Props = {
  query: {
    search?: string;
    favorites?: string;
  };
};

function Dashboard({ query }: Props) {
  const { organization } = useOrganization();

  return !organization ? (
    <EmptyOrg />
  ) : (
    <BoardList orgId={organization.id} query={query} />
  );
}

export default Dashboard;
