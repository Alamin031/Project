import DashboardNav from '@/components/DashboardNav';
import Sidebar from '@/components/Sidebar';
import { SidebarContext } from '@/context/SideBarContext';
import { SidebarContextType } from '@/types/SidebarContextType';

import React, { PropsWithChildren, useContext } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { isSidebarOpen, toggleSidebar } = useContext(
    SidebarContext,
  ) as SidebarContextType;

  return (
    <div
      className={`flex h-screen bg-[#F8F9FA] dark:bg-gray-900 ${
        isSidebarOpen && 'overflow-hidden'
      }`}
    >
      <div>
        <Sidebar />
      </div>
      <div className="flex w-full flex-1 flex-col">
        <DashboardNav toggleSidebar={toggleSidebar} />
        <main className="container h-full overflow-y-auto">
          <div className="grid max-w-full px-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
