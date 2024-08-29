"use client";

import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {};

  return (
    <div className="flex flex-col justify-center items-center mt-24 gap-5">
      <p>You're invited to this test</p>
      <Button
        type="button"
        label="Enroll"
        className="bg-black text-white hover:opacity-75 rounded-md p-[6px] min-w-16"
        onClick={handleClick}
      />
    </div>
  );
};

export default Home;
