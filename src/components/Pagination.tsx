import { Pagination } from 'flowbite-react';
import React from 'react';
import Typography from './Typography';

export default function PaginationTable({
  onPageChange,
  limit,
  total,
  currentPage,
  totalPages,
}: {
  onPageChange: (_number: number) => void;
  limit: number;
  total: number;
  currentPage: number;
  totalPages: number;
}) {
  const start = (currentPage - 1) * limit + 1;
  const end = currentPage * limit > total ? total : currentPage * limit;

  return (
    <div className=" items-center justify-between border-t-2 border-gray-500/20 px-3 dark:border-gray-200/10 dark:bg-[#1A1C23] sm:flex">
      <div>
        <Typography variant="small" className="text-gray-600">
          SHOWING <span className=" font-bold">{start}</span>-
          <span className=" font-bold">{end}</span> OF{' '}
          <span className=" font-bold">{total}</span>
        </Typography>
      </div>
      <Pagination
        showIcons
        className="mb-2 text-end"
        onPageChange={onPageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}