import { toast } from "sonner";
import { Plus } from "lucide-react";

import { api } from "@/convex/_generated/api";

import { useApiMutation } from "@/hooks/useApiMutation";

type Props = {
  orgId: string;
  disabled?: boolean;
};

function NewBoardButton({ orgId, disabled }: Props) {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = async () => {
    try {
      const id = await mutate({
        orgId,
        title: "Untitled",
      });
      toast.success("Board created");
    } catch (error) {
      toast.error("Failed to create board");
    }
  };

  return (
    <button
      disabled={disabled || pending}
      onClick={onClick}
      className={`col-span-1 bg-blue-600 hover:bg-blue-800 flex flex-col gap-3 items-center justify-center aspect-[100/127] rounded-lg py-6 ${
        (disabled || pending) &&
        "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      }`}
    >
      <Plus className="h-12 w-12 stroke-1 text-white" />
      <p className="text-sm text-white font-light">New Board</p>
    </button>
  );
}

export default NewBoardButton;
