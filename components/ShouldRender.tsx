import React, { PropsWithChildren } from "react";

type Iprops = PropsWithChildren & {
  visible: boolean;
};

const ShouldRender: React.FC<Iprops> = ({ children, visible }) => {
  return <>{visible && <>{children}</>}</>;
};

export default ShouldRender;
