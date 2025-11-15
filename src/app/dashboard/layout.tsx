// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <main className="flex-1 p-6">{children}</main>
//       </div>
//     </div>
//   );
// }

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800">
        <Sidebar />
      </div>

      {/* Right content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Fixed Header */}
        <div className="fixed top-0 left-64 right-0 h-16 bg-white z-20 shadow">
          <Header />
        </div>

        {/* Scrollable main content */}
        <main className="flex-1 pt-16 p-6 overflow-auto h-screen mt-7 scroll-smooth">
          {children}
        </main>
      </div>
    </div>
  );
}
