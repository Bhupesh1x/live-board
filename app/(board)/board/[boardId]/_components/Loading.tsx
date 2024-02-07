import { Loader2 } from "lucide-react";

import Info from "./Info";
import Toolbar from "./Toolbar";
import Participants from "./Participants";

function Loading() {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader2 className="h-6 w-6 text-gray-600 animate-spin" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  );
}

export default Loading;
