import Canvas from "./_components/Canvas";

type Props = {
  params: {
    boardId: string;
  };
};

function BoardIdPage({ params }: Props) {
  return <Canvas boardId={params.boardId} />;
}

export default BoardIdPage;
