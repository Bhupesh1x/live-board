import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

function InviteMembers() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px] flex items-center justify-center">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
}

export default InviteMembers;
