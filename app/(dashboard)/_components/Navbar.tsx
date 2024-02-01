import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <div className="flex items-center p-5 gap-x-4">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "8px",
                backgroundColor: "white",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
              },
            },
          }}
        />
      </div>
      <UserButton />
    </div>
  );
}

export default Navbar;
