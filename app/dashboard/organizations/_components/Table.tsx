"use client";

import React from "react";
import { Table, type TableProps } from "antd";
import Image from "next/image";
import { OrganizationType } from "@/types/types";

interface DataTypes {
  organizations: OrganizationType[];
}

const MyTable: React.FC<DataTypes> = ({ organizations }) => {
  const columns: TableProps<OrganizationType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => (
        <div className="flex gap-2">
          <Image
            src={item.logo ?? "/assets/images/user.jpeg"}
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
      title: "Company Email",
      dataIndex: "email",
      key: "email",
      render: (_, item) => <p>{item.email}</p>,
    },
  ];

  return (
    <div className="p-4">
      <Table columns={columns} dataSource={organizations} />
    </div>
  );
};

export default MyTable;
