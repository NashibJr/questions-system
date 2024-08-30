"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const Finish = () => {
  const router = useRouter();
  const data = JSON.parse(sessionStorage.getItem("attemptedQns")!);
  let correctQns: any[] = [];
  for (let index = 0; index < data?.qns.length; index++) {
    const element = data?.qns[index];
    if (
      element?.answer?.toLowerCase() === element?.givenAnswer?.toLowerCase()
    ) {
      correctQns.push(element);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center pt-14 gap-5">
      <h2 className="text-2xl">Thank you for Attempting the questions</h2>
      <p className="text-lg">
        Your score is {correctQns.length}/{data?.qns.length}
      </p>
      <Button
        type="button"
        label="Continue to login page"
        className="bg-black text-white hover:opacity-75 rounded-md p-[6px] min-w-16 m-5 w-52"
        onClick={() => {
          router.replace("/");
        }}
      />
    </div>
  );
};

export default Finish;
