import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import questionSlice from "./slices/questionSlice";
import organizationsSlice from "./slices/organizationsSlice";
import { PERSIST, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  users: userSlice.reducer,
  questions: questionSlice.reducer,
  organizations: organizationsSlice.reducer,
});

const config = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(config, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: !![PERSIST],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
