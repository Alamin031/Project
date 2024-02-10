import Link from 'next/link';
import React, { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { SidebarContextType } from '@/types/SidebarContextType';
import { SidebarContext } from '@/context/SideBarContext';
import NavItem from './NavItem';
import { Button } from '../buttons';

import sidebar from '@/utils/sidebar';
import { useUserContext } from '@/context/userContext';

export default function SidebarContent() {
  const router = useRouter();
  const { toggleSidebar } = useContext(SidebarContext) as SidebarContextType;
  const { state } = useUserContext();
  const { sidenavType } = state;
  const redirectCB = (path: string) => router.push(path);
  const sidebarStyle: {
    dark: string;
    white: string;
    transparent: string;
    gray: string;
    bgray: string;
    primary: string;
    deeporange: string;
    lightgreen: string;
    cyan: string;
    boxShadow: string;
    [key: string]: string;
  } = {
    dark: 'bg-black',
    white: 'bg-white',
    transparent: 'bg-brown-500',
    gray: 'bg-gray-900',
    bgray: 'bg-blue-gray-500',
    primary: 'bg-primary',
    deeporange: 'bg-deep-orange-500',
    lightgreen: 'bg-light-green-500',
    cyan: 'bg-cyan-500',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)',
  };
  return (
    <div className={`z-50  h-full w-64 lg:left-0  ${sidebarStyle[sidenavType]} ${sidebarStyle.boxShadow}`}>

      <div className="  flex h-full  flex-shrink-0 flex-col items-center justify-between self-stretch ">
        <div
          style={{
            // background: '#0D0E12',
            boxShadow:
              '0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)',
          }}
          className="flex h-full w-full flex-col justify-between "
        >
          <div className="flex flex-col gap-5 ">
            <div
              style={{
                borderBottom: '1px dashed gray',
              }}
              className="flex w-full items-center justify-between p-5"
            >
              <Link href="/" className="w-full  text-white">
                {/* <ChatbotLogo /> */}
                Chatbot
              </Link>
              {/* <ChatbotLogo /> */}

              <button
                onClick={toggleSidebar}
                className="hidden cursor-pointer rounded-full bg-gray-50/10 duration-300 hover:bg-gray-50/20 max-lg:block"
              >
                <XMarkIcon color="white" className="h-6 w-6 " />
              </button>
            </div>

            <div className="flex w-full flex-col gap-2 p-3">
              {sidebar.map((item, index: number) => (
                <NavItem
                  key={`${index + 1}`}
                  href={item.path}
                  Inco={item.icon}
                  name={item.name}
                >
                  {item.children &&
                    item.children.map((child, childIndex) => (
                      <NavItem
                        key={`${index + 1}.${childIndex + 1}`}
                        href={child.path}
                        Inco={child.icon}
                        name={child.name}
                      />
                    ))}
                </NavItem>
              ))}
            </div>
          </div>

          <Button
            onClick={() => {
              signOut({
                redirect: false,
              });
              redirectCB('/login');
            }}
            className=" m-5  text-sm"
          >
            Logout
          </Button>
        </div>
      </div>
     </div>
  );
}
