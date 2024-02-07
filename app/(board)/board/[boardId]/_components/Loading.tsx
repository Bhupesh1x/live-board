import { Loader2 } from "lucide-react";

import { InfoSkeleton } from "./Info";
import { ToolbarSkeleton } from "./Toolbar";
import { ParticipantsSkeleton } from "./Participants";

function Loading() {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader2 className="h-6 w-6 text-gray-600 animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
}

export default Loading;
