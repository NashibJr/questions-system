"use client";

import React from "react";
import Head from "@/components/Head";
import MyTable from "./_components/Table";
import { useAppSelector } from "@/redux/hooks";
import { OrganizationType } from "@/types/types";

const Organizations = () => {
  const state = useAppSelector((state) => state.organizations);
  const [organizations, setOrganizations] = React.useState<OrganizationType[]>(
    []
  );
  const [filtereOrganizations, setFilteredOrganizations] = React.useState<
    OrganizationType[]
  >([]);

  React.useEffect(() => {
    setOrganizations(state.organizations);
    setFilteredOrganizations(state.organizations);
  }, [state.organizations]);

  return (
    <div className="p-5">
      <Head title="Organizations" />
      <MyTable organizations={filtereOrganizations} />
    </div>
  );
};

export default Organizations;
