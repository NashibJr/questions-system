import React, { ButtonHTMLAttributes } from "react";

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const Button: React.FC<BtnProps> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};

export default Button;
