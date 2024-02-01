import Dashboard from "./_components/Dashboard";

type Props = {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

export default function DashboardPage({ searchParams }: Props) {
  return (
    <main className="flex-1 h-[calc(100%-80px)] p-6">
      <Dashboard query={searchParams} />
    </main>
  );
}
