"use client";

import React from "react";
import { Table, type TableProps } from "antd";
import Image from "next/image";
import Button from "../../../../components/Button";
import { UserTypes } from "@/types/types";

interface Iprops {
  users: UserTypes[];
}

const MyTable = ({ users }: Iprops) => {
  const columns: TableProps<UserTypes>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => (
        <div className="flex gap-2">
          <Image
            src={item.avator! ?? "/assets/images/user.jpeg"}
            width={30}
            height={30}
            alt=""
            className="rounded-full"
          />
          <p className="text-sm font-semibold">{item.name}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <Button
          type="button"
          label="Invite"
          className={`p-[6px] rounded-md bg-black outline-none text-white hover:text-black hover:bg-white border border-black ${
            item.role === "admin" && "hidden"
          }`}
        />
      ),
    },
  ];

  return (
    <div className="p-4">
      <Table columns={columns} dataSource={users} />
    </div>
  );
};

export default MyTable;
