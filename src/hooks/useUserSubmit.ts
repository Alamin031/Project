/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// eslint-disable-next-line no-unused-vars
import { AxiosError } from 'axios';

import { notifyError, notifySuccess } from '@/utils/toast';

import { SidebarContext } from '@/context/SideBarContext';
import { SidebarContextType } from '@/types/SidebarContextType';
import UserServices from '@/service/user.service';

interface UserFormInputs {
  username: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'USER';
}

const useUserSubmit = () => {
  const { serviceId, setIsUpdate, closeDrawer } = useContext(
    SidebarContext,
  ) as SidebarContextType;

  const [image, setImage] = useState<any | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<UserFormInputs>();

  const onSubmit: SubmitHandler<UserFormInputs> = async (data) => {
    const addUpdateData = image ? { ...data, assetId: image.id } : data;

    try {
      if (serviceId) {
        const response = await UserServices.updateuser(
          addUpdateData,
          serviceId,
        );

        if (response) {
          notifySuccess(response.message);
          closeDrawer();

          setIsUpdate(true);
        }
      } else {
        const response = await UserServices.addUser(addUpdateData);
        if (response) {
          notifySuccess(response.message);
          closeDrawer();

          setIsUpdate(true);
        }
      }
    } catch (err: AxiosError | any | unknown) {
      if (Array.isArray(err.response.data.message)) {
        notifyError(err.response.data.message.join('\n'));
      } else notifyError(err ? err.response.data.message : err.message);
    }
  };

  useEffect(() => {
    if (!serviceId) {
      setValue('username', '');
      setValue('email', '');
      setValue('password', '');
      setValue('role', 'ADMIN');
      setImage(null);

      clearErrors('username');
      clearErrors('email');
      clearErrors('password');
      clearErrors('role');
    } else {
      UserServices.getUserById(serviceId).then((res) => {
        setValue('username', res.username);
        setValue('email', res.email);
        setValue('role', res.role);
        setImage(res.asset);
      });

      clearErrors('username');
      clearErrors('email');
      clearErrors('password');
      clearErrors('role');
    }
  }, [serviceId]);

  const changeImage = (files: FileList | null) => {
    if (!files) return;
    setImage(files[0]);
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    image,
    changeImage,
  };
};

export default useUserSubmit;
