import { Link2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { toast } from "sonner";

type Props = {
  children: React.ReactNode;
  id: string;
  title: string;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
};

function Actions({ id, children, title, side, sideOffset }: Props) {
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Actions;
