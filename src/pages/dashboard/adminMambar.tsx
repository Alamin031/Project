import PageTitle from "@/components/PageTitle";

import { Button, Table } from "flowbite-react";

import React, { useContext } from "react";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import Breadcrumbs from '@/components/Breadcrumbs';
import UserTable from "@/components/table/UserTable";

import { SidebarContext } from "@/context/SideBarContext";
import { SidebarContextType } from "@/types/SidebarContextType";

import LoadingDataTable from "@/components/LoadingDataTable";
import useAsync from "@/hooks/useAsync";

import Pagination from "@/components/Pagination";
// import MainModal from '@/components/modal';
import SearchArea from "@/components/form/SearchArea";
import UserDrawer from "@/components/drawer/UserDrawer";
import MainModal from "@/components/modal";

function Users() {
  const [limit] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const { toggleDrawer } = useContext(SidebarContext) as SidebarContextType;

  const { data, isLoading } = useAsync(
    `users?offset=${page}&limit=${limit}&order=asc&search=${search}`
  );

  return (
    <>
      <UserDrawer />

      <MainModal />
      {/* <Breadcrumbs /> */}
      <div className="items-center justify-between py-5 md:flex">
        <PageTitle
          title="All Member"
          subtitle="See Informations about All Members"
        />
        <div className=" flex justify-end gap-2 max-md:py-3 max-sm:flex-col ">
          <SearchArea
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => {
              setSearch(e.target.value);
            }}
            icon={
              MagnifyingGlassIcon as React.FunctionComponent<
                React.SVGProps<SVGSVGElement>
              >
            }
            placeholder="Search by username/email"
          />
          <Button
            onClick={() => {
              toggleDrawer();
            }}
            className=" flex items-center justify-center gap-2  bg-indigo-600 duration-100 hover:bg-indigo-700 focus:right-0 focus:outline-none active:scale-[.98]"
            color="blue"
          >
            <PlusIcon className="mr-3 h-4 w-4" />
            Add Member
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-md border shadow-sm ">
        <Table>
          <Table.Head>
            <Table.HeadCell>Serial Number</Table.HeadCell>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell className="text-center">Avater</Table.HeadCell>
            <Table.HeadCell>Joining Date</Table.HeadCell>
            <Table.HeadCell>Username</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Verify Member</Table.HeadCell>


            <Table.HeadCell>role</Table.HeadCell>

            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          {!isLoading ? (
            <UserTable tableData={data?.data || []} />
          ) : (
            <LoadingDataTable />
          )}
        </Table>
        <Pagination
          onPageChange={(number) => {
            setPage(number);
          }}
          limit={limit}
          total={data?.meta?.total || 0}
          currentPage={page}
          totalPages={Math.ceil(Number(data?.meta?.total) / limit) || 0}
        />
      </div>
    </>
  );
}

Users.layout = "dashboard";
export default Users;
