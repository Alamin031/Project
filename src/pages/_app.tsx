


import React from 'react';
import '@/styles/globals.css';

import type { AppPropsWithLayout } from '@/types';
// import PrivateGuard from '@/guards/PrivateGuard';

import useFonts from '@/hooks/useFonts';
import useSWR, { SWRConfig } from 'swr';

import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from '@/layouts/DashboardLayout';
import { ToastContainer } from 'react-toastify';
// import { AuthProvider } from '@/context/AuthContext';
import { SessionProvider, getSession } from 'next-auth/react';
import { SidebarProvider } from '@/context/SideBarContext';
import axios from 'axios';
import { UserProvider } from '@/context/userContext';

// const fetcher = async (url: string) => {
//   const data = await http(url, {
//     headers: {
//       // 'x-require-auth': 'true',
//       'Content-Type': 'application/json',
//     },
//   });
//   return data;
// };

const fetcher = async (url: string) => {
  type User = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    token?: string;
  };

  type Session = {
    user?: User;
  };

  const session: Session | null = await getSession();

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}${url}`,
    {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    },
  );

  return response.data;
};

const ComponentMap: any = {
  dashboard: ({ Component, pageProps }: AppPropsWithLayout) => (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  ),
  none: ({ Component, pageProps }: AppPropsWithLayout) => (
    <Component {...pageProps} />
  ),
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  ...rest
}: AppPropsWithLayout) {
  const { inter } = useFonts();
  const layout = Component.layout ?? 'none';
  const ModifiedComponent = ComponentMap[layout];

  const { data: Local, isLoading: isLocalLoading, mutate: localMuted } = useSWR(
    `local?offset=1&limit=1000&order=asc`,
    fetcher,
  );

  return (
    <SessionProvider session={session}>
      <SWRConfig value={{ fetcher }}>
      <UserProvider>

        <SidebarProvider>
          <div className={inter}>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              // zIndex={9999}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ModifiedComponent
              Component={Component}
              pageProps={{
                ...pageProps,
                localList: {
                  Local,
                  isLocalLoading,
                  localMuted
                },
              }}
              {...rest}
            />
            </div>
          </SidebarProvider>
          </UserProvider>

      </SWRConfig>
    </SessionProvider>
  );
}
