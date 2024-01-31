import Navbar from "./_components/Navbar";
import OrgSidebar from "./_components/OrgSidebar";
import Sidebar from "./_components/Sidebar";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3">
          <OrgSidebar />
          <div className="flex-1 h-full">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export default layout;
