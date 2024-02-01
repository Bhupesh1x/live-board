"use client";

import { useOrganization } from "@clerk/nextjs";

import EmptyOrg from "./EmptyOrg";

function Dashboard() {
  const { organization } = useOrganization();

  return !organization ? (
    <EmptyOrg />
  ) : (
    <div>
      <p>Board List!</p>
    </div>
  );
}

export default Dashboard;
