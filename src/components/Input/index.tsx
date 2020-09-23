import React, { FC } from "react";
import { InputProps } from "../../types";

import "./input.scss";

const index: FC<InputProps> = ({ type, placeholder, className }) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};

export default index;
