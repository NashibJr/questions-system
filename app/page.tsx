"use client";

import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/schema";
import { useRouter } from "next/navigation";

interface loginData {
  email: string;
  password: string;
}

const Login = () => {
  const [user] = React.useState<loginData>({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = (values: loginData) => {
    console.log(values);
    router.replace("/dashboard");
  };

  const formik = useFormik({
    initialValues: user,
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="m-0 top-0 bottom-0 flex flex-col justify-center items-center bg-black w-full min-h-screen">
      <h2 className="text-white text-center font-semibold text-3xl mb-10">
        Welcome User <br />
        Login to continue
      </h2>
      <form
        className="flex flex-col gap-4 sm:min-w-[500px]"
        onSubmit={formik.handleSubmit}
      >
        <Input
          label="Email"
          required
          labelColor="text-white"
          placeholder="Enter email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email && formik.errors.email}
        />
        <Input
          label="password"
          required
          labelColor="text-white"
          placeholder="Enter password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password && formik.errors.password}
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
