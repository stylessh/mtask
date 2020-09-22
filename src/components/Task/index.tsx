import React, { FC } from "react";
import { ITask } from "../../interface/Task";

import "./task.scss";

type TaskProps = {
  task: ITask;
};

const Task: FC<TaskProps> = ({ task }) => {
  return (
    <article className="task" key={task.id}>
      <h2>{task.title}</h2>
      <p>{task.content}</p>
    </article>
  );
};

export default Task;
