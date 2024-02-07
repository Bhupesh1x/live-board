function Info() {
  return (
    <div className="absolute top-2 left-2 px-1.5 h-12 rounded-md shadow-md flex items-center bg-white">
      Information about the board
    </div>
  );
}

export default Info;

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 px-1.5 h-12 rounded-md shadow-md flex items-center bg-white w-[300px]" />
  );
};
