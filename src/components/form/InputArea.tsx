import React, { PropsWithChildren, useState } from "react";
import { FieldError, FieldValues } from "react-hook-form";
import { TextInput } from "flowbite-react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props extends PropsWithChildren<any> {
  labelShow?: boolean;
  label: string;
  name: keyof FieldValues;
  register?: any| undefined;
  error?:
    | FieldError
    | {
        message: string;
      }
    | undefined;
  type?: "text" | "number" | "email" | "password" | "checkbox" | "file";
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  tabIndex?: number;
  autoFocus?: boolean;
}

function InputArea({
  labelShow,
  label,
  name,
  register,
  error,
  type,
  placeholder,
  required,
  maxLength,
  tabIndex,
  autoFocus,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1 ">
      {labelShow && (
        <label className="ml-1 text-sm text-gray-500" htmlFor={name.toString()}>
          {label}
        </label>
      )}
      <div className="relative">
        <TextInput
          type={
            type === "password" ? (!showPassword ? "password" : "text") : type
          }
          placeholder={placeholder || label}
          maxLength={maxLength}
          tabIndex={tabIndex}
          autoFocus={autoFocus}
          id={name.toString()}
          {...register(name, {
            required: required ? `${label} is required!` : false,
          })}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-base leading-5"
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-500 ">{error.message}</p>}
    </div>
  );
}

InputArea.defaultProps = {
  labelShow: true,
  type: "text",
  placeholder: "",
  required: true,
  error: undefined,
};

export default InputArea;
