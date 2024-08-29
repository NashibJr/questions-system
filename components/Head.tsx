import React from "react";

type HeadProps = {
  title: string;
};

const Head = ({ title }: HeadProps) => {
  return <h2 className="text-3xl font-semibold m-3">{title}</h2>;
};

export default Head;
