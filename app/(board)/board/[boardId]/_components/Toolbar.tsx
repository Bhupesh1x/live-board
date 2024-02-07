function Toolbar() {
  return (
    <div className="absolute top-[50%] -traslate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md shadow-md gap-y-1 p-1.5 flex flex-col items-center">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
      </div>
      <div className="bg-white rounded-md shadow-md p-1.5 flex flex-col items-center">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
}

export default Toolbar;

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md" />
  );
};
