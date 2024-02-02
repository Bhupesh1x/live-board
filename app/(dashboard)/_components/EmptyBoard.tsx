"use client";

import { toast } from "sonner";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";

import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/useApiMutation";

function EmptyBoard() {
  const { organization } = useOrganization();

  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = async () => {
    if (!organization) return;

    try {
      const id = await mutate({
        orgId: organization.id,
        title: "Untitled",
      });

      toast.success("Board created");
    } catch (error) {
      toast.error("Failed to create board");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-board.svg" alt="Empty" width={110} height={110} />

      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Start by creating a board for your organization
      </p>

      <div className="mt-6">
        <Button size="lg" onClick={onClick} disabled={pending}>
          Create board
        </Button>
      </div>
    </div>
  );
}

export default EmptyBoard;
