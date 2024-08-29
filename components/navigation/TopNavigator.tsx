"use client";

import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

const TopNavigator = () => {
  const user = useAppSelector((state) => state.users).user;

  return (
    <div className="p-4 shadow-md w-full flex justify-between top-0 sticky bg-white">
      <div />
      <div className="flex gap-2">
        <Image
          src="/assets/images/user.jpeg"
          alt=""
          height={50}
          width={60}
          className="rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">{user?.name}</p>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default TopNavigator;
