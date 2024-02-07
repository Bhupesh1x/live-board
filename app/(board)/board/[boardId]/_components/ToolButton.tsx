import { LucideIcon } from "lucide-react";

import Hint from "@/components/shared/Hint";
import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  icon: LucideIcon;
  disabled?: boolean;
  isActive?: boolean;
  onClick: () => void;
};

function ToolButton({ label, icon: Icon, onClick, isActive, disabled }: Props) {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        size="icon"
        onClick={onClick}
        disabled={disabled}
        variant={isActive ? "boardActive" : "board"}
      >
        <Icon />
      </Button>
    </Hint>
  );
}

export default ToolButton;
