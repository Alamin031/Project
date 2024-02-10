import { Fragment, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { SidebarContext } from '@/context/SideBarContext';
import { SidebarContextType } from '@/types/SidebarContextType';
import SidebarContent from './SidebarContent';

function MobileSidebar() {
  const { isSidebarOpen, toggleSidebar } = useContext(
    SidebarContext,
  ) as SidebarContextType;
  return (
    <Transition show={isSidebarOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={toggleSidebar}
        className="fixed inset-y-0 right-0 z-10 w-screen overflow-y-auto"
      >
        <div className=" flex h-screen w-64  ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 "
            enterTo="opacity-50 "
            leave="ease-in duration-300"
            leaveFrom="opacity-50 "
            leaveTo="opacity-0 "
          >
            <Dialog.Overlay className="fixed inset-0 z-40 bg-black" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div
              className="fixed left-0 z-50 flex h-screen w-64 flex-col 
                    overflow-hidden bg-white text-left
                    align-middle shadow-xl "
            >
              <SidebarContent />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default MobileSidebar;
