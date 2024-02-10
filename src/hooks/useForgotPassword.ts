import AdminServices from "@/service/admin.service";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { notifyError, notifySuccess } from '@/utils/toast';

interface ForgotPasswordForm {
  email: string;
}

const useForgotPassword = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordForm) => {
    setLoading(true);

    try {
      const response = await AdminServices.forgetOTP(data);

      if (response) {
        localStorage.setItem("email", JSON.stringify({ email: data.email, timestamp: Date.now() }));

        notifySuccess("OTP sent to your email.");
        router.push({
          pathname: "/OtpVerification",
          query: { email: data.email },
        });
        setLoading(false);

        setTimeout(() => {
          localStorage.removeItem("email");
        }, 4 * 60 * 1000);
      } else {
        notifyError("Failed to send OTP. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      notifyError("Failed to send OTP. Please try again.");
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

export default useForgotPassword;
