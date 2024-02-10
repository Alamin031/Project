import AdminServices from '@/service/admin.service';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { notifyError, notifySuccess } from '@/utils/toast';

interface NewPasswordForm {
  newPassword: string;
  confirmPassword: string;
}

const useNewPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordForm>();
  const router = useRouter();

  const onSubmit = async (data: NewPasswordForm) => {
    const {newPassword} = data;
    const {confirmPassword} = data;
    const emailData = localStorage.getItem('email');
    const email = emailData ? JSON.parse(emailData).email : null;

    if (newPassword === confirmPassword && email) {
      setLoading(true);
      try {
        const response = await AdminServices.resetPassword({
          email,

          password: newPassword,
        });

        if (response) {
          notifySuccess('Password changed successfully');
          setLoading(false);
          router.push({
            pathname: '/login',
          });
        } else {
          setLoading(false);
          notifyError('Failed to change password. Please try again.');
        }
      } catch (error) {
        setLoading(false);
        notifyError('Failed to change password. Please try again.');
      }
    } else {
      notifyError('Passwords do not match');
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
export default useNewPasswordForm;
