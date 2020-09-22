import React, { FC } from "react";

import "./input.scss";

type InputProps = {
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  className?: string;
};

const index: FC<InputProps> = ({ type, placeholder, className }) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};

export default index;
