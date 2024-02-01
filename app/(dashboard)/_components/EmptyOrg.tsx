import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

function EmptyOrg() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Empty" width={200} height={200} />

      <h2 className="text-2xl font-semibold mt-6">Welcome to LiveBoard</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Create an organization to get started.
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px] flex items-center justify-center">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default EmptyOrg;
