import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Hint from "@/components/shared/Hint";

function NewOrgButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className="h-full w-full bg-white/25 rounded-md flex items-center justify-center opacity-70 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent max-w-[480px] border-none flex items-center justify-center">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
}

export default NewOrgButton;
