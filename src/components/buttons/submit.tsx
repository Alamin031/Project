import React, { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  icons: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset';
}

export default function SubmitButton({
  children,
  icons,
  type,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
    >
      {children} {icons}
    </button>
  );
}
