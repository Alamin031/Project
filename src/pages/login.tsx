/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/buttons";
import InputArea from "@/components/form/InputArea";
import Typography from "@/components/Typography";
import { useRouter } from "next/router";
import useLoginSubmit from "../hooks/useLoginSubmit";

function Login() {
  const router = useRouter();
  const { onSubmit, register, handleSubmit, errors, loading } =
    useLoginSubmit();

  const redirectCb = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex h-screen md:flex-row">
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-5 p-10 max-md:p-5">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <Typography variant="h3" className="text-4xl text-blue-600 font-bold">
              Hello!
            </Typography>
            <Typography variant="caption" className="text-gray-600">
              Sign in to your account
            </Typography>
          </div>

          <div className="rounded-lg bg-indigo-50 p-8 text-indigo-500">
            <Typography variant="small" className="text-center">
              Use account <strong className="font-bold">alamin@gmail.com</strong>{" "}
              and password <strong className="font-bold">123456</strong> to
              <br />
              continue
            </Typography>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <InputArea
              label="Username / Email "
              name="username"
              type="text"
              defaultValue="alamin@gmail.com"
              placeholder="mail@example.com"
              register={register}
              error={errors?.username}
            />
            <InputArea
              label="Password"
              name="password"
              defaultValue="123456"
              placeholder="***********"
              type="password"
              register={register}
              error={errors?.password}
            />
            <div className="cursor-pointer text-end font-semibold text-blue-500">
              <button
                type="button"
                onClick={() => {
                  redirectCb("/forgot-password");
                }}
                className="text-center text-blue-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <Button type="submit" className="my-2 bg-blue-500 hover:bg-blue-700 text-white">
              {loading ? "Loading..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>

      <div
        style={{
          padding: "3.75rem",
        }}
        className="hidden h-full w-full flex-1 flex-col items-center justify-center bg-cover bg-cente bg-cyan-600 lg:flex"
      >
        <div className="flex flex-col items-center justify-center text-white">
          <img
            src="./images/pngegg (1).png"
            alt="logo"
            className="mb-4 h-40 w-40"
          />
          <img
            src="./images/1.png"
            alt="cover"
            className="mt--12"
            style={{
              width: "500px",
            }}
          />
          <div className="max-w-lg text-center">
            <Typography
              variant="h2"
              className="text-3xl sm:text-2xl md:text-1xl lg:text-3xl xl:text-3xl font-bold mb-4"
            >
              Welcome to our website
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
