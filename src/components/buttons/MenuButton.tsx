import React, { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  type?: 'button' | 'submit' | 'reset';
  icons?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function MenuButton({ type, children, className, icons, onClick }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-indigo-600 fill-indigo-500 flex items-center justify-center gap-2 rounded-lg px-3 py-2 duration-150  hover:underline ${className}`}
    >
      {icons} {children}
    </button>
  );
}

MenuButton.defaultProps = {
  type: 'button',
  icons: undefined,
  onClick: undefined,
  className: '',
};

export default MenuButton;
