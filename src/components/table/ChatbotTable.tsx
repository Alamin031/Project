import useToggleDrawer from "@/hooks/useToggleDrawer";
import { Table, Avatar } from "flowbite-react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ChatbotTypes } from "@/types/ChatbotType";

export default function ChatbotTable({
  tableData,
}: {
  tableData: ChatbotTypes[];
}) {
  const { handleUpdate, handleModalOpen } = useToggleDrawer();

  return (
    <Table.Body className="divide-y">
      {tableData.map((item, index) => (
        <Table.Row
          key={item.id}
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>
            {new Date(item.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Table.Cell>
          <Table.Cell className="flex gap-3">
            <button
              onClick={() => {
                handleUpdate(item.id);
              }}
            >
              <PencilSquareIcon className="h-5 w-5 hover:text-green-500" />
            </button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
