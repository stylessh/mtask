import { ITask } from "../interfaces";

export type TaskProps = {
  task: ITask;
};

export type TaskColumnProps = {
  title: string;
  className?: string;
  data: ITask[];
};

export type InputProps = {
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  className?: string;
};

export type ButtonProps = {
  children: string;
  color?: "todo" | "process" | "done" | "review";
};
