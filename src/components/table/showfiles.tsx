import { SidebarContext } from "@/context/SideBarContext";
import useAsync from "@/hooks/useAsync";
import { SidebarContextType } from "@/types/SidebarContextType";
import React from "react";
import { useState, useContext } from "react";
import Pagination from "../Pagination";
import LoadingDataTable from "../LoadingDataTable";
import { Table } from "flowbite-react";
import FilesTable from "./FilesTable";
import ChatbotModal from "../modal/chatbot";

function ShowFilesTable() {
  const [limit] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [showForm, setShowForm] = useState(true);

  const { serviceId, isDrawerOpen, toggleDrawer } = useContext(
    SidebarContext
  ) as SidebarContextType;

  const { data, isLoading } = useAsync(
    serviceId
      ? `chatbot/${serviceId}/files?offset=${page}&limit=${limit}&order=asc&search=${search}`
      : ""
  );
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <ChatbotModal />

      <div className="overflow-x-auto rounded-md border shadow-sm p-6">
        <Table>
          <Table.Head>
            <Table.HeadCell>Serial Number</Table.HeadCell>
            <Table.HeadCell>File</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          {!isLoading ? (
            <FilesTable tableData={data?.data || []} action={"Files"} />
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
export default ShowFilesTable;
