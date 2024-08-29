"use client";

import Head from "@/components/Head";
import React from "react";
import MyTable from "./_components/Table";
import { useAppSelector } from "@/redux/hooks";
import { UserTypes } from "@/types/types";

const Users = () => {
  const state = useAppSelector((state) => state.users);
  const [users, setUsers] = React.useState<UserTypes[]>([]);
  const [filteredUsers, setFilteredUsers] = React.useState<UserTypes[]>([]);
  React.useEffect(() => {
    setUsers(state.users);
    setFilteredUsers(state.users);
  }, [state.users]);

  return (
    <div className="p-5">
      <Head title="Users" />
      <MyTable users={filteredUsers} />
    </div>
  );
};

export default Users;
