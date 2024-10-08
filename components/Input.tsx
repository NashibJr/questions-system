import React, { InputHTMLAttributes } from "react";
import { PiWarningCircleBold } from "react-icons/pi";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  backgroundColor?: string;
  labelColor?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  error,
  backgroundColor,
  labelColor,
  ...props
}) => {
  return (
    <label className="flex flex-col gap-1">
      <span>
        <span className={`${labelColor && labelColor}`}>{label + " "}</span>
        {props.required && (
          <span className="text-lg font-extrabold text-red-600">*</span>
        )}
      </span>
      <input
        className={`border border-[#d3d3d3] rounded-md p-[6px] w-full outline-none ${
          backgroundColor && backgroundColor
        }`}
        {...props}
      />
      {error && (
        <span className="text-red-600 flex">
          <PiWarningCircleBold className="font-bold mt-[2px] mr-1" />
          <span className="text-sm">{error}</span>
        </span>
      )}
    </label>
  );
};

export default Input;
