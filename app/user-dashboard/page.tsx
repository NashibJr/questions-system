"use client";

import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { enroll, logout } from "@/redux/slices/userSlice";

const Home = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.users.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/");
  };

  const handleClick = () => {
    dispatch(enroll());
    router.replace("/user-dashboard/questions");
  };

  React.useEffect(() => {
    if (user?.enrolled) {
      router.replace("/user-dashboard/questions");
    }
  }, [user?.enrolled]);

  if (!user?.invited) {
    return (
      <div className="flex flex-col justify-center items-center mt-24 gap-5">
        <p>You're not invited for any test just yet</p>
        <Button
          type="button"
          label="Logout"
          className="bg-black text-white hover:opacity-75 rounded-md p-[6px] min-w-16"
          onClick={handleLogout}
        />
      </div>
    );
  }

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
