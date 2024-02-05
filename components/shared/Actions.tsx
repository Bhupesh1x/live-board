import { toast } from "sonner";
import { Link2, Trash2 } from "lucide-react";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import ConfirmModal from "./ConfirmModal";

type Props = {
  children: React.ReactNode;
  id: string;
  title: string;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
};

function Actions({ id, children, title, side, sideOffset }: Props) {
  const { mutate, pending } = useApiMutation(api.board.remove);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/board/${id}`
      );

      toast.success("Link copied");
    } catch (error) {
      toast.error("Failed to copy link");
    }
  };

  const onDelete = async () => {
    try {
      await mutate({ id });
      toast.success("Board deleted");
    } catch (error) {
      toast.success("Failed to delete board");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        onClick={(e) => e.stopPropagation()}
        className="w-60"
      >
        <DropdownMenuItem className="p-3 cursor-pointer" onClick={copyLink}>
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <ConfirmModal
          disabled={pending}
          onConfirm={onDelete}
          header="Delete board?"
          description="This will delete board and all of its contents."
        >
          <Button
            className="p-3 cursor-pointer font-normal w-full justify-start text-sm"
            variant="ghost"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete board
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Actions;
