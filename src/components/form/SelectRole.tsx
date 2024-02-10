import React, { PropsWithChildren } from 'react';
import { Select } from 'flowbite-react';
import { FieldError, FieldValues } from 'react-hook-form';

interface Props extends PropsWithChildren<any> {
  labelShow?: boolean;
  label: string;
  name: keyof FieldValues;
  register: any;
  error?: FieldError | undefined;
  required?: boolean;
}

function SelectRole({
  labelShow,
  label,
  name,
  register,
  error,

  placeholder,
  required,
}: Props) {
  return (
    <div className="flex flex-col gap-1 ">
      {labelShow && (
        <label className="ml-1 text-sm text-gray-500" htmlFor={name.toString()}>
          {label}
        </label>
      )}
      <div className="relative">
        <Select
          placeholder={placeholder || label}
          id={name.toString()}
          {...register(name, {
            required: required ? `${label} is required!` : false,
          })}
        >
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </Select>
      </div>
      {error && <p className="text-sm text-red-500 ">{error.message}</p>}
    </div>
  );
}

SelectRole.defaultProps = {
  labelShow: true,
  error: undefined,
  required: false,
};

export default SelectRole;
