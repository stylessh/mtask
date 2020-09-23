import React, { FC } from "react";
import { ButtonProps } from "../../types";

import "./button.scss";

const index: FC<ButtonProps> = ({ children, color }) => {
  return <button className={color}>{children}</button>;
};

export default index;
