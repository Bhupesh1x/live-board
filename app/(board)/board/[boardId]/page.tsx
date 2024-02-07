import Room from "@/components/shared/Room";

import Canvas from "./_components/Canvas";
import Loading from "./_components/Loading";

type Props = {
  params: {
    boardId: string;
  };
};

function BoardIdPage({ params }: Props) {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
}

export default BoardIdPage;
