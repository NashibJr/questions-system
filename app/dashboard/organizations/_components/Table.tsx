"use client";

import React from "react";
import { Table, type TableProps } from "antd";
import Image from "next/image";
import Button from "../../../../components/Button";

interface DataTypes {
  key: string;
  name: string;
  id?: string;
  email: string;
  logo: string;
}

const MyTable = () => {
  const columns: TableProps<DataTypes>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => (
        <div className="flex gap-2">
          <Image
            src={item.logo}
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
  ];

  return (
    <div className="p-4">
      <Table columns={columns} />
    </div>
  );
};

export default MyTable;
