import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import Typography from './Typography';
import ProfileMenu from './headers/ProfileMenu';
import { GrSettingsOption } from 'react-icons/gr';

export default function DashboardNav({toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {


  return (
    <div className="relative">
      <header className=" w-full bg-white-light/30 p-3 shadow-md dark:bg-gray-400 ">
        <div className="mx-auto flex h-full items-center justify-between text-gray-700 ">
          <div className="flex gap-3">
            <Typography
              variant="h6"
              className="flex items-start text-gray-500 lg:hidden"
            >
              Chatbot
            </Typography>
            {/* <Breadcrumbs /> */}
          </div>
          <div className="flex items-center gap-3">
            <span className="relative block cursor-pointer rounded-full bg-gray-300/40 bg-white-light/40 p-2 duration-300 hover:bg-gray-300/90 hover:bg-white-light/90 hover:text-indigo-500  hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
            <button
              aria-label="Open configurator"
            >
                <Cog6ToothIcon className="h-5 w-5" />
                </button>

            </span>

            <span className="relative block cursor-pointer rounded-full bg-gray-300/40 bg-white-light/40 p-2 duration-300 hover:bg-gray-300/90 hover:bg-white-light/90 hover:text-indigo-500  hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 6V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
                <span className="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]" />
                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-success" />
              </span>
            </span>
            {/* <button
              aria-label="Open configurator"
              onClick={() => setOpenConfigurator(dispatch, true)}
            >
              <GrSettingsOption className=" fill-[#4d6470] text-2xl" />
            </button> */}
            <button
              className="relative block cursor-pointer rounded-full bg-gray-300/40 bg-white-light/40 p-2 duration-150 hover:bg-gray-300/80 hover:bg-white-light/90 hover:text-indigo-500 hover:text-primary  dark:bg-dark/40 dark:hover:bg-dark/60 lg:hidden"
              onClick={() => toggleSidebar()}
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 " />
            </button>
            <ProfileMenu />

          </div>
        </div>
      </header>
    </div>
  );
}
