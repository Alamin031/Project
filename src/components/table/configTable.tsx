import { Table, Avatar } from "flowbite-react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ConfigType } from "@/types/configType";
import useChatbotDrawer from "@/hooks/useChatbotDrawer";
import ChatbotModal from "../modal/chatbot";
import { SidebarContext } from "@/context/SideBarContext";
import { SidebarContextType } from "@/types/SidebarContextType";
import { useContext } from "react";

export default function PromptTable({
  tableData,
  action,
}: {
  tableData: ConfigType[];
  action: "prompt";
  }) {
    const { setActionType } =
    useContext(SidebarContext) as SidebarContextType;
  const { handleChatbotUpdate, handleChatbotModalOpen } = useChatbotDrawer();

  return (
      <Table.Body className="divide-y">
        {tableData.map((item, index) => (
          <Table.Row
            key={item.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{item.PromptInput}</Table.Cell>
            <Table.Cell>{item.PromptOutput}</Table.Cell>
            <Table.Cell className="flex gap-3">
              <button
                onClick={() => {
                  setActionType(action)
                  handleChatbotUpdate(item.id);
                }}
              >
                <PencilSquareIcon className="h-5 w-5 hover:text-green-500" />
              </button>
              <button
                onClick={() => {
                  setActionType(action)
                  handleChatbotModalOpen(item.id);
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
