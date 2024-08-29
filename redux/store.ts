import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import questionSlice from "./slices/questionSlice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    questions: questionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
