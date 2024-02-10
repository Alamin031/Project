import AdminServices from "@/service/admin.service";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { notifyError, notifySuccess } from "@/utils/toast";
import UserServices from "@/service/user.service";

interface PasswordForm {
  newPassword: string;
  confirmPassword: string;
}

const usePassword = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordForm>();
  const router = useRouter();
  const { email, password } = router.query;


  const onSubmit = async (data: PasswordForm) => {
    const { newPassword, confirmPassword } = data;

    if (newPassword === confirmPassword) {
      setLoading(true);
      try {
        const response = await UserServices.password(
          email as string,
          password as string,
          {
            password: newPassword,
          }
        );
        if (response) {
          notifySuccess("Password changed successfully");
          router.push({
            pathname: "/login",
          });
        } else {
          notifyError("Failed to change password. Please try again.");
        }
      } catch (error) {
        notifyError("Failed to change password. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      notifyError("Passwords do not match");
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

export default usePassword;
