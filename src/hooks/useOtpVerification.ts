import AdminServices from "@/service/admin.service";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { notifyError, notifySuccess } from '@/utils/toast';
import { useState } from "react";


interface OTPVerificationForm {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp5: string;
  otp6: string;
}

const useOtpVerification = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPVerificationForm>({
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
  });
  // Inside your useOtpVerification hook
const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number
) => {
  const {value} = e.target;

  if ((e.nativeEvent as InputEvent).inputType === 'deleteContentBackward') {
    const prevSibling = document.querySelector(
      `input[name=otp${index - 1}]`
    ) as HTMLInputElement;
    
    if (prevSibling !== null) {
      prevSibling.focus();
    }
  } else if (value.match(/^\d*$/) && value.length === 1) {
    const nextSibling = document.querySelector(
      `input[name=otp${index + 1}]`
    ) as HTMLInputElement;

    if (nextSibling !== null) {
      nextSibling.focus();
    }
  }
};

  
  
  

  const onSubmit = async (data: OTPVerificationForm) => {
    const otpCode =
      `${data.otp1}${data.otp2}${data.otp3}${data.otp4}${data.otp5}${data.otp6}`.toString();
      setLoading(true)
    try {
      const response = await AdminServices.verifyOTP({
        otp: otpCode,
      });
      if (response) {
        notifySuccess("OTP verified.");
        setLoading(false)

        router.push({
          pathname: "/PasswordForm",
        });
      } else {
        setLoading(false)
        notifyError("Otp Not Match verify OTP. Please try again.");
      }
    } catch (error) {
      setLoading(false)
      notifyError("Failed to verify OTP. Please try again.");
    }
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    handleInputChange,
    loading,
  };
};
export default useOtpVerification;
