import React, { FC, useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import { TaskColumnProps } from "../../types";
import { ITask } from "../../interfaces";

import Task from "../Task";

import "./taskColumn.scss";

const TaskColumn: FC<TaskColumnProps> = ({ data, title, className }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  return (
    <section className={`taskColumn ${className}`}>
      <div className="header">
        <h2>{title}</h2>
      </div>
      <ReactSortable
        list={tasks}
        setList={setTasks}
        delayOnTouchOnly={true}
        animation={200}
        delay={200}
        easing="cubic-bezier(0.83, 0, 0.17, 1)"
        forceFallback={true}
        group="task-group"
        className="tasks-list"
      >
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ReactSortable>
    </section>
  );
};

export default TaskColumn;
