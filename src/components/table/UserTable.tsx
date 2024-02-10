import useToggleDrawer from "@/hooks/useToggleDrawer";
import { Avatar, Badge, Table } from "flowbite-react";
import { UserTypes } from "@/types/UserTypes";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function UserTable({ tableData }: { tableData: UserTypes[] }) {
  const { handleUpdate, handleModalOpen } = useToggleDrawer();

  return (
    <Table.Body className="divide-y">
      {tableData.map((item, index) => (
        <Table.Row
          key={item.id}
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{item.id}</Table.Cell>
          {item?.asset ? (
            <Table.Cell>
              <Avatar
                rounded
                img={process.env.NEXT_PUBLIC_API_ENDPOINT + item.asset.fileName}
              />
            </Table.Cell>
          ) : (
            <Table.Cell>
              <Avatar
                rounded
                placeholderInitials={item.username.charAt(0).toUpperCase()}
              />
            </Table.Cell>
          )}
          <Table.Cell>
            {new Date(item.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Table.Cell>
          <Table.Cell>{item.username}</Table.Cell>
          <Table.Cell>{item.email}</Table.Cell>
          {/* <Table.Cell>{item.isVerified ? 'Verified' : 'Not Verified'}</Table.Cell> */}
          <Table.Cell
            className={item.isVerified ? "text-green-500" : "text-red-500"}
          >
            {item.isVerified ? "Verified" : "Not Verified"}
          </Table.Cell>
          <Table.Cell>
            <Badge color={item.role === "ADMIN" ? "indigo" : "purple"}>
              {item.role}
            </Badge>
          </Table.Cell>
          <Table.Cell className="flex gap-3">
            <button
              onClick={() => {
                handleUpdate(item.id);
              }}
            >
              <PencilSquareIcon className="h-5 w-5 hover:text-green-500" />
            </button>
            <button
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
