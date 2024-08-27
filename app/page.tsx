import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login = () => {
  return (
    <div className="m-0 top-0 bottom-0 flex flex-col justify-center items-center bg-black w-full min-h-screen">
      <h2 className="text-white text-center font-semibold text-3xl mb-10">
        Welcome User <br />
        Login to continue
      </h2>
      <form className="flex flex-col gap-4 sm:min-w-[500px]">
        <Input
          backgroundColor=""
          label="Email"
          required
          labelColor="text-white"
          placeholder="Enter email"
        />
        <Input
          backgroundColor=""
          label="password"
          required
          labelColor="text-white"
          placeholder="Enter password"
        />
        <Button
          type="submit"
          label="Login"
          className="bg-black text-white p-[6px] rounded-md outline-none border border-white mt-3 btn"
        />
      </form>
    </div>
  );
};

export default Login;
