import useToggleDrawer from '@/hooks/useToggleDrawer';
import { Badge, Table } from 'flowbite-react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { LocalTypes } from '@/types/LocalTypes';

export default function LocalTable({ tableData }: { tableData: LocalTypes[] }) {
  const { handleUpdate, handleModalOpen } = useToggleDrawer();

  return (
    <Table.Body className="divide-y">
      {tableData.map((item) => (
        <Table.Row
          key={item.id}
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <Table.Cell>{item.id}</Table.Cell>
          <Table.Cell>
            {new Date(item.createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Table.Cell>
          <Table.Cell>{item.key}</Table.Cell>
          <Table.Cell>{item.language}</Table.Cell>

          <Table.Cell>
            <Badge className="flex justify-center" color="purple">
              {item.status}
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
