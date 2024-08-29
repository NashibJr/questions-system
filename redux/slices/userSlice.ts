import { users } from "@/types/constants";
import { UserTypes } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  user: UserTypes | null;
  users: UserTypes[];
}

const initialState: initialStateTypes = {
  user: null,
  users,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice;
