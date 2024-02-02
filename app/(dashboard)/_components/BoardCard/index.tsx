import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";

import Footer from "./Footer";
import Overlay from "./Overlay";
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
