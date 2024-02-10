import React from "react";
import { Table, Avatar } from "flowbite-react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { SiInstatus } from "react-icons/si";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import { AllChatbot } from "@/types/AllChatbot";
import { GrDocumentConfig } from "react-icons/gr";
import { useRouter } from "next/router";

export default function AllChatbotTable({
  tableData,
}: {
  tableData: AllChatbot[];
}) {
  const { handleUpdate, handleModalOpen } = useToggleDrawer();
  const router = useRouter();

 

  return (
    <Table.Body className="divide-y">
      {tableData.map((item, index) => (
        <Table.Row
          key={item.id}
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>
            {item?.icone ? (
              <Avatar
                rounded
                img={process.env.NEXT_PUBLIC_API_ENDPOINT + item.icone}
              />
            ) : (
              <Avatar
                rounded
                placeholderInitials={item.name.charAt(0).toUpperCase()}
              />
            )}
          </Table.Cell>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{item.url}</Table.Cell>
          <Table.Cell>{item.requiredRole}</Table.Cell>
          <Table.Cell>
            {item.Configure}
            <button
              aria-label="Configure"
              onClick={() => {
                router.push("/dashboard/ChatbotConfigure");
              }}
            >
              <GrDocumentConfig className="h-5 w-5 hover:text-green-500" />
            </button>
          </Table.Cell>
          <Table.Cell>
            {item.Status}
            <button
              aria-label="Change Status"
              onClick={() => {
                /* Status logic */
              }}
            >
              <SiInstatus className="h-5 w-5 hover:text-red-500" />
            </button>
          </Table.Cell>
          <Table.Cell>
            <button
              aria-label="Edit"
              onClick={() => {
                handleUpdate(item.id);
              }}
            >
              <PencilSquareIcon className="h-5 w-5 hover:text-green-500" />
            </button>
          </Table.Cell>
          <Table.Cell>
            <button
              aria-label="Delete"
              onClick={() => {
                handleModalOpen(item.id);
              }}
            >
              <TrashIcon className="h-5 w-5 hover:text-red-500" />
            </button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
