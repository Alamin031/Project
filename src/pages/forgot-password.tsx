/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FieldError } from 'react-hook-form';
import InputArea from '@/components/form/InputArea';
import { Button } from '@/components/buttons';
import TextButton from '@/components/buttons/TextButton';
import Typography from '@/components/Typography';
import { useRouter } from 'next/router';
import MenuButton from '@/components/buttons/MenuButton';
import useForgotPassword from '@/hooks/useForgotPassword';

function ForgotPassword() {
  const router = useRouter();
  const { onSubmit, register, handleSubmit, errors, loading } =
    useForgotPassword();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col rounded-md bg-white p-6 shadow-md md:w-[850px] lg:w-[850px]"
      >
        <div>
          <MenuButton
            onClick={() => {
              router.back();
            }}
          >
            Back
          </MenuButton>
        </div>
        <div className="flex w-full">
          <div className="hidden w-1/2 items-center justify-center sm:flex">
            <img
              src="./images/otp.webp"
              alt="OTP illustration"
              className="h-[200px]   object-cover"
            />
          </div>

          <div className="flex w-full flex-col gap-5 p-6 sm:w-1/2">
            <div className="">
              <Typography
                variant="h4"
                className="mb-4 font-serif text-4xl font-bold"
              >
                Forgot your password?
              </Typography>
              <Typography variant="small" className="mb-4 italic text-gray-600">
                Please enter the email address associated with your account, and
                we&rsquo;ll email you an OTP to reset your password.
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              <InputArea
                label="Email Address"
                name="email"
                register={register}
                error={errors.email as FieldError | undefined}
                type="email"
                placeholder="Enter your email"
                className="rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              />

              <Button
                className="mt-4 w-full bg-blue-500 text-white hover:bg-sky-600"
                type="submit"
              >
                {loading ? 'Send Mail...' : 'Reset Password'}
              </Button>
            </div>

            <TextButton
              onClick={() => {
                router.back();
              }}
              className="text-blue-500 hover:underline"
            >
              Back to login?
            </TextButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
