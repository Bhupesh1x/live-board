import Image from "next/image";

import { Button } from "@/components/ui/button";

function EmptyBoard() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-board.svg" alt="Empty" width={110} height={110} />

      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Start by creating a board for your organization
      </p>

      <div className="mt-6">
        <Button size="lg">Create board</Button>
      </div>
    </div>
  );
}

export default EmptyBoard;
