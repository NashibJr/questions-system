import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import questionSlice from "./slices/questionSlice";
import organizationsSlice from "./slices/organizationsSlice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    questions: questionSlice.reducer,
    organizations: organizationsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
