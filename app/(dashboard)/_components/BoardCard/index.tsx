import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal } from "lucide-react";

import Footer from "./Footer";
import Overlay from "./Overlay";

import Actions from "@/components/shared/Actions";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  id: string;
  orgId: string;
  title: string;
  imageUrl: string;
  authorId: string;
  createdAt: number;
  authorName: string;
  isFavorite: boolean;
};

function BoardCard({
  id,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  isFavorite,
  orgId,
  title,
}: Props) {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;

  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] overflow-hidden rounded-lg border flex flex-col justify-between">
        <div className="flex-1 bg-amber-50 relative">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity outline-none">
              <MoreHorizontal className="text-white opacity-80 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          title={title}
          disabled={false}
          isFavorite={isFavorite}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
        />
      </div>
    </Link>
  );
}

export default BoardCard;

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] overflow-hidden rounded-lg">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
