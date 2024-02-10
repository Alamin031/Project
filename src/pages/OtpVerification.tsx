/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { FieldError } from "react-hook-form";
import { Button } from "@/components/buttons";
import TextButton from "@/components/buttons/TextButton";
import Typography from "@/components/Typography";
import { useRouter } from "next/router";
import MenuButton from "@/components/buttons/MenuButton";
import useOtpVerification from "@/hooks/useOtpVerification";

function OTPVerification() {
  const router = useRouter();
  const { email } = router.query;
  const isClient = typeof window !== "undefined";

  const [timer, setTimer] = useState(60);
  const [isResendButtonVisible, setIsResendButtonVisible] = useState(false);

  useEffect(() => {
    const storedEmail = isClient ? localStorage.getItem("email") : null;
    if (!storedEmail) {
      if (isClient) {
        router.push("/forgot-password");
      }
    }
  }, [isClient]);

  const {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loading,
    handleInputChange,
  } = useOtpVerification();

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
  
    return () => {
      clearInterval(timerId);
    };
  }, [timer]);
  
  useEffect(() => {
    setIsResendButtonVisible(timer === 0);
  }, [timer]);
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 flex flex-col gap-8 bg-white rounded-md shadow-md"
      >
        <div className="flex justify-between">
          <MenuButton
            onClick={() => {
              router.back();
            }}
          >
            Back
          </MenuButton>

          <Typography variant="small" className="text-sm text-gray-500">
            Time remaining: {Math.floor(timer / 60)}:
            {(timer % 60).toString().padStart(2, "0")}
          </Typography>
        </div>

        <div className="text-center">
          <Typography
            variant="h2"
            className="font-serif text-3xl font-bold mb-4"
          >
            Email Verification
          </Typography>

          <Typography variant="small" className="text-sm font-medium italic">
            We&rsquo;ve sent an OTP to your email address:
            <span className="text-blue-500">{email}</span>
          </Typography>
        </div>

        <div className="flex flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((index) => {
            const fieldName = `otp${index}`;
            const error = (errors as any)[fieldName] as FieldError | undefined;
            return (
              <div key={index} className="w-1/6 p-1">
                <input
                  {...register(
                    fieldName as
                      | "otp1"
                      | "otp2"
                      | "otp3"
                      | "otp4"
                      | "otp5"
                      | "otp6",
                    { required: true, pattern: /^\d{1}$/ }
                  )}
                  name={fieldName}
                  type="text"
                  maxLength={1}
                  onChange={(e: any) => {
                    handleInputChange(e, index);
                  }}
                  className={`w-full h-12 text-center border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:border-blue-500`}
                />
                {error && <p className="text-red-500">{error.message}</p>}
              </div>
            );
          })}
        </div>

        <Button
          className="mt-4 bg-blue-500 text-white hover:bg-blue-600 w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify Otp"}
        </Button>

        {isResendButtonVisible && (
          <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
            <p>Didn&rsquo;t receive code?</p>
            <TextButton
              onClick={() => {
                router.back();
              }}
              className="text-blue-500 hover:underline"
            >
              Resend OTP
            </TextButton>
          </div>
        )}
      </form>
    </div>
  );
}

export default OTPVerification;
