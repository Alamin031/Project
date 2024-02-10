import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { notifyError, notifySuccess } from '@/utils/toast';

import { signIn } from 'next-auth/react';

interface LoginFormInputs {
  username: string;
  password: string;
  rememberMe: boolean;
}

const useLoginSubmit = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async ({
    username,
    password,
  }) => {
    setLoading(true);

    try {
      const response = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });

      if (response && response.error) {
        notifyError(response.error);
        setLoading(false);
        return;
      }

      if (response && response.ok) {
        setLoading(false);
        router.replace('/dashboard');
        notifySuccess('Login Success!');
        router.push('/dashboard');
      }
    } catch (err: AxiosError | any | unknown) {
      if (Array.isArray(err.response.data.message)) {
        notifyError(err.response.data.message.join('\n'));
      } else notifyError(err ? err.response.data.message : err.message);
      setLoading(false);
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loading,
  };
};

export default useLoginSubmit;
