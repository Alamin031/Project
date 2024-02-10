import { Table } from 'flowbite-react';
import React from 'react';

export default function LoadingDataTable() {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell className="flex justify-center text-center" colSpan={6}>
          Loading...
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}
