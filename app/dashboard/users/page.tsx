import Head from "@/components/Head";
import React from "react";
import MyTable from "./_components/Table";

const Users = () => {
  return (
    <div className="p-5">
      <Head title="Users" />
      <MyTable />
    </div>
  );
};

export default Users;
