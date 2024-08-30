import { users } from "@/types/constants";
import { UserTypes } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    login(state, action: PayloadAction<UserTypes>) {
      state.user = action.payload;
    },
    invite(state, action: PayloadAction<string>) {
      const user = state.users.find((user) => user.id === action.payload);
      user!.invited = true;
    },
    logout(state) {
      state.user = null;
    },
    enroll: (state) => {
      if (state.user !== null) {
        state.user.enrolled = true;
      }
    },
  },
});

export const { login, invite, logout, enroll } = userSlice.actions;

export default userSlice;
