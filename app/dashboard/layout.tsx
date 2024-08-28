import React, { PropsWithChildren } from "react";
import SideLinks from "@/components/navigation/SideLinks";
import Button from "@/components/Button";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container">
      <nav className="h-screen bg-black text-white">
        <div className="p-4 border-b border-[#d3d3d3] sticky top-0">
          <h2 className="text-3xl font-semibold">Question Generator</h2>
        </div>
        <div className="flex flex-col h-[80vh]">
          <SideLinks />
          <div className="p-4 mt-auto">
            <Button
              type="button"
              label="Logout"
              className="bg-black w-full text-white p-[6px] rounded-md outline-none border border-white hover:bg-red-500"
            />
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
