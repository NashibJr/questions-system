"use client";

import React, { PropsWithChildren } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const MyProvider = ({ children }: PropsWithChildren) => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};

export default MyProvider;
