"use client";

import React, { PropsWithChildren } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.users.user);
  React.useEffect(() => {
    if (user?.role === "user") {
      router.replace("/user-dashboard");
    }
  }, [user?.id, user?.role, user?.email]);
  return <>{children}</>;
};

export default Layout;
