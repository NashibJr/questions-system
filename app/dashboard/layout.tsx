"use client";

import React, { PropsWithChildren } from "react";
import SideLinks from "@/components/navigation/SideLinks";
import Button from "@/components/Button";
import TopNavigator from "@/components/navigation/TopNavigator";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/redux/hooks";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.users.user);
  React.useEffect(() => {
    if (user?.role === "user") {
      router.replace("/user-dashboard");
    }
  }, [user?.id, user?.role, user?.email]);

  return (
    <div className="container_">
      <nav className="h-screen bg-black text-white">
        <div className="p-4 border-b border-[#d3d3d3] sticky top-0 bg-black">
          <h2 className="text-3xl font-semibold">Question Generator</h2>
        </div>
        <div className="flex flex-col h-[80vh]">
          <SideLinks />
          <div className="p-4 mt-auto">
            <Button
              type="button"
              label="Logout"
              className="bg-black w-full text-white p-[6px] rounded-md outline-none border border-white hover:bg-red-500"
              onClick={() => {
                dispatch(logout());
                router.replace("/");
              }}
            />
          </div>
        </div>
      </nav>
      <main className="main-content hide-scroll-bar">
        <TopNavigator />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
