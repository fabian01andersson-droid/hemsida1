import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen text-white relative overflow-hidden bg-[#020408]">
      {/* Subtle aurora gradient background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>
      <Sidebar />
      <main className="flex-1 px-8 md:px-16 lg:px-24 py-12 md:py-20 overflow-y-auto min-h-screen relative z-10">
        {children}
      </main>
    </div>
  );
}
