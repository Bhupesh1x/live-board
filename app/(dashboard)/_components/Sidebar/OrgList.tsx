"use client";

import { useOrganizationList } from "@clerk/nextjs";

import OrgItem from "./OrgItem";

function OrgList() {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((membership) => (
        <OrgItem
          key={membership.organization.id}
          id={membership.organization.id}
          name={membership.organization.name}
          imageUrl={membership.organization.imageUrl}
        />
      ))}
    </ul>
  );
}

export default OrgList;
