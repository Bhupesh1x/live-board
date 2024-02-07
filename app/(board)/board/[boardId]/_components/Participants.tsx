function Participants() {
  return (
    <div className="absolute top-2 right-2 p-3 h-12 rounded-md shadow-md flex items-center bg-white">
      <h1>List of the users</h1>
    </div>
  );
}

export default Participants;

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute top-2 right-2 p-3 h-12 rounded-md shadow-md flex items-center bg-white w-[100px]" />
  );
};
