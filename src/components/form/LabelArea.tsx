import React from 'react';

function LabelArea({ label }: { label: string }) {
  return (
    <p className="col-span-4 block text-gray-700 dark:text-gray-400 sm:col-span-2">
      {label}
    </p>
  );
}

export default LabelArea;
