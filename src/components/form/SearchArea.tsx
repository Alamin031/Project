import { TextInput } from 'flowbite-react';
import React from 'react';

export default function SearchArea({
  onChange,
  icon,
  placeholder,
}: {
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
  placeholder: string;
}) {
  if (icon)
    return (
      <TextInput onChange={onChange} icon={icon} placeholder={placeholder} />
    );

  return <TextInput onChange={onChange} placeholder={placeholder} />;
}
