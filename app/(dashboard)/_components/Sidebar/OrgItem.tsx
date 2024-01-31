import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

type Props = {
  id: string;
  name: string;
  imageUrl: string;
};

function OrgItem({ id, name, imageUrl }: Props) {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  console.log("first", isActive);

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Image
        fill
        alt={name}
        src={imageUrl}
        onClick={onClick}
        className={cn(
          "rounded-md cursor-pointer opacity-60 hover:opacity-100 transition",
          isActive && "opacity-100"
        )}
      />
    </div>
  );
}

export default OrgItem;
