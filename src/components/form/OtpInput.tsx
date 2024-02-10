// import React, { PropsWithChildren, useState } from 'react';
// import { FieldError, FieldValues } from 'react-hook-form';
// import { TextInput } from 'flowbite-react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


// interface Props extends PropsWithChildren<any> {
//   labelShow?: boolean;
//   label: string;
//   name: keyof FieldValues;
//   register: any;
//   error?:
//     | FieldError
//     | {
//         message: string;
//       }
//     | undefined;
//   type?: 'text' | 'number' | 'email' | 'password' | 'checkbox';
//   placeholder?: string;
//   required?: boolean;
// }

// function InputArea({
//   labelShow,
//   label,
//   name,
//   register,
//   error,
//   type,
//   placeholder,
//   required,
// }: Props) {
//   const [showPassword, setShowPassword] = useState(false);



//   return (
//     <div className="flex flex-col gap-1 ">
//       {labelShow && (
//         <label className="ml-1 text-sm text-gray-500" htmlFor={name.toString()}>
//           {label}
//         </label>
//       )}
//       <div className="relative">
//               <TextInput
//               type= {Text | string}
//       </div>
//       {error && <p className="text-sm text-red-500 ">{error.message}</p>}
//     </div>
//   );
// }

// InputArea.defaultProps = {
//   labelShow: true,
//   type: 'text',
//   placeholder: '',
//   required: true,
//   error: undefined,
// };

// export default InputArea;
