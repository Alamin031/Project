/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FieldError } from 'react-hook-form';
import InputArea from '@/components/form/InputArea';
import { Button } from '@/components/buttons';
import Typography from '@/components/Typography';
import useNewPasswordForm from '@/hooks/usePasswordForm';

function NewPasswordForm() {
  const { onSubmit, register, handleSubmit, errors, loading } =
    useNewPasswordForm();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full rounded-md bg-white p-6 shadow-md md:w-[750px] lg:w-[750px]"
      >
        <div className="hidden w-1/2 sm:flex">
          <img
            src="./images/change-password.png"
            alt="Illustration for changing password"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col p-6 sm:w-1/2">
          <Typography
            variant="h4"
            className="mb-4 text-center text-4xl font-bold"
          >
            Change Password
          </Typography>

          <div className="mb-4 mt-12">
            <InputArea
              label="New Password"
              name="newPassword"
              register={register}
              error={errors.newPassword as FieldError | undefined}
              type="password"
              placeholder="Enter your new password"
              className="rounded-md border p-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <InputArea
              label="Confirm Password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword as FieldError | undefined}
              type="password"
              placeholder="Confirm your new password"
              className="rounded-md border p-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <Button
            className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Changing Password...' : 'Change Password'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewPasswordForm;
