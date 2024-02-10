import React, { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  type?: 'button' | 'submit' | 'reset';
  icons?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;

}

function TextButton({ type, children, className, icons, onClick }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-indigo-600 hover:bg-indigo-100 flex items-center justify-center gap-2 rounded-lg px-3 py-2 duration-150 ${className}`}
    >
      {children} {icons}
    </button>
  );
}

TextButton.defaultProps = {
  type: 'button',
  icons: undefined,
  onClick: undefined,
  className: '',
  disabled: undefined,
};

export default TextButton;
