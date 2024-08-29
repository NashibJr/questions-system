import { organizations } from "@/types/constants";
import { OrganizationType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

type Iprops = {
  organizations: OrganizationType[];
};

const initialState = { organizations } as Iprops;

const organizationsSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {},
});

export default organizationsSlice;
