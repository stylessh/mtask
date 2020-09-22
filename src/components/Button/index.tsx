import React, { FC } from "react";

import "./button.scss";

type ButtonProps = {
  children: string;
  color?: "todo" | "process" | "done" | "review";
};

const index: FC<ButtonProps> = ({ children, color }) => {
  return <button className={color}>{children}</button>;
};

export default index;
