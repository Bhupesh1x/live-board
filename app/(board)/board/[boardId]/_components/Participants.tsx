"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useSelf, useOthers } from "@/liveblocks.config";

import UserAvatar from "./UserAvatar";

const MAX_SHOWN_USERS = 2;

function Participants() {
  const users = useOthers();
  const currUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USERS;

  return (
    <div className="absolute top-2 right-2 p-3 h-12 rounded-md shadow-md flex items-center bg-white">
      <div className="flex gap-2">
        {currUser && (
          <UserAvatar
            src={currUser?.info?.picture}
            name={`${currUser?.info?.name} (You)`}
            fallback={currUser?.info?.name?.[0]}
            borderColor={connectionIdToColor(currUser.connectionId)}
          />
        )}
        {users?.slice(0, MAX_SHOWN_USERS)?.map(({ connectionId, info }) => (
          <UserAvatar
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || "T"}
            borderColor={connectionIdToColor(connectionId)}
          />
        ))}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_USERS}`}
          />
        )}
      </div>
    </div>
  );
}

export default Participants;

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute top-2 right-2 p-3 h-12 rounded-md shadow-md flex items-center bg-white w-[100px]" />
  );
};
