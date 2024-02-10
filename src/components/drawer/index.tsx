import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
// import { Button } from '../buttons';

type DrawerProps = {
  id?: string | number | null;
  title?: string;
  description?: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MainDrawer({
  id,
  title = "",
  description = "",
  children,
  isOpen,
  setIsOpen,
}: DrawerProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        className="fixed inset-y-0 right-0 z-40 w-screen overflow-y-auto"
      >
        <div className=" flex h-screen w-full  ">
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
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div
              className="fixed right-0 z-50 flex h-screen w-full flex-col 
                          overflow-hidden bg-white text-left
                          align-middle shadow-xl md:w-1/2 2xl:w-1/3"
            >
              <div className="relative flex w-full items-center justify-between border-b  bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <div>
                  <Dialog.Title className="text-xl font-semibold text-gray-800">
                    {id ? `Update ${title}` : `Add ${title}`}
                  </Dialog.Title>
                  <Dialog.Description className=" text-gray-600">
                    {description}
                  </Dialog.Description>
                </div>
                <button
                  //   onClick={toggleDrawer}
                  onClick={() => setIsOpen(false)}
                  className="absolute left-auto right-0 z-50 mr-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-center text-red-500 shadow-md transition-colors duration-150 hover:bg-red-100 hover:text-gray-700 focus:outline-none"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="h-[78vh] overflow-auto py-3 lg:h-[83vh]">
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

MainDrawer.defaultProps = {
  id: null,
  title: "",
  description: "",
};

export default MainDrawer;
