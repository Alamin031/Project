import { SidebarContext } from '@/context/SideBarContext';
import { SidebarContextType } from '@/types/SidebarContextType';
import React, { useContext } from 'react';

export default function DrawerButton({
  id,
  title,
}: {
  id: string | number | null | undefined;
  title: string;
}) {
  const { toggleDrawer } = useContext(SidebarContext) as SidebarContextType;
  return (
    <div className="bg-(rgba(255,255,255,0.5)) fixed bottom-0 right-0 grid w-full gap-4  border-t border-gray-100 px-3 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 md:flex lg:gap-6 lg:py-3 xl:flex xl:gap-6">
      <div className="flex-grow-0 pr-0 md:flex-grow lg:flex-grow  xl:flex-grow">
        <button
          type="button"
          onClick={toggleDrawer}
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          Cancel
        </button>
      </div>
      <div className="flex-grow-0 pr-0 md:flex-grow lg:flex-grow  xl:flex-grow">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {id ? <span>Update {title}</span> : <span>Add {title}</span>}
        </button>
      </div>
    </div>
  );
}
