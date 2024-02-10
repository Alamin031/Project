import React from 'react';
import SidebarContent from './SidebarContent';

function DesktopSidebar() {
  return (
    <aside className="z-30 hidden h-full w-64 flex-shrink-0 overflow-y-auto bg-white shadow-sm dark:bg-gray-800 lg:block">
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
