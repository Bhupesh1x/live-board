import OrgList from "./OrgList";
import NewOrgButton from "./NewOrgButton";

function Sidebar() {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex flex-col p-3 gap-y-4">
      <OrgList />
      <NewOrgButton />
    </aside>
  );
}

export default Sidebar;
