import React from "react";
import Image from "next/image";

const TopNavigator = () => {
  return (
    <div className="p-4 shadow-md w-full flex justify-between top-0 sticky">
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
          <p className="text-lg font-semibold">John Doe</p>
          <p>john@email.com</p>
        </div>
      </div>
    </div>
  );
};

export default TopNavigator;
