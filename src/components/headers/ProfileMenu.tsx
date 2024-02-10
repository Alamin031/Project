import React, { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { Avatar } from 'flowbite-react';
import { PowerIcon } from '@heroicons/react/24/solid';
import {
  Squares2X2Icon,
  ChartPieIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Typography from '../Typography';

export default function ProfileMenu() {
  const { data } = useSession();

  return (
    <Menu as="div" className="relative z-30 inline-block text-left">
      <Menu.Button>
        <Avatar
          className=" cursor-pointer"
          rounded
          img={data?.user?.image ? data?.user.image : '/me_anime.jpg'}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className=" flex px-3 py-1">
            <Avatar
              img={data?.user?.image ? data?.user.image : '/me_anime.jpg'}
              rounded
            >
              <div className=" flex flex-col justify-center py-2 ">
                <Typography variant="h6" className="mb-0 text-gray-900">
                  {data?.user?.name}
                </Typography>
                <a className="group" href={`mailto:${data?.user?.email}` || ''}>
                  <Typography
                    variant="small"
                    className="text-gray-900 duration-300 group-hover:text-indigo-500"
                  >
                    {data?.user?.email}
                  </Typography>
                </a>
              </div>
            </Avatar>
          </div>

          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Squares2X2Icon
                    className={`mr-2 h-5 w-5 ${
                      active ? 'text-indigo-100' : 'text-indigo-400'
                    } `}
                  />
                  Dashboard
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <ChartPieIcon
                    className={`mr-2 h-5 w-5 ${
                      active ? 'text-indigo-100' : 'text-indigo-400'
                    } `}
                  />
                  Analytics
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <CogIcon
                    className={`mr-2 h-5 w-5 ${
                      active ? 'text-indigo-100' : 'text-indigo-500'
                    } `}
                  />
                  Settings
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <PowerIcon
                    className={`mr-2 h-5 w-5 ${
                      active ? 'text-indigo-100' : 'text-indigo-500'
                    } `}
                  />
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
