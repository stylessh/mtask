import React, { FC } from "react";
import { TaskProps } from "../../types";
import "./task.scss";


const Task: FC<TaskProps> = ({ task }) => {
  return (
    <article className="task" key={task.id}>
      <h2>{task.title}</h2>
      <p>{task.content}</p>
    </article>
  );
};

export default Task;
