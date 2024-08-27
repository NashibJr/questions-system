"use client";

import React, { PropsWithChildren } from "react";
import store from "./store";
import { Provider } from "react-redux";

const MyProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MyProvider;
