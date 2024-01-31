import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="flex items-center p-5 bg-green-500 gap-x-4">
      <UserButton />
    </div>
  );
}

export default Navbar;
