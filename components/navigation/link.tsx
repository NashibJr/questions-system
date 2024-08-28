"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MyLinkProps {
  link: string;
  label: string;
  icon?: JSX.Element;
}

const MyLink: React.FC<MyLinkProps> = ({ label, link, icon }) => {
  const pathname = usePathname();

  return (
    <li className={`w-full p-3 ${pathname === link && "active-link"}`}>
      <Link href={link} className="flex gap-1">
        {icon} <span>{label}</span>
      </Link>
    </li>
  );
};

export default MyLink;
