import React, { useState, useEffect, FC } from "react";
import { groupBy } from "lodash";
import Loading from "../../components/Loading";

import TaskColumn from "../../components/TaskColumn";
import data from "../../data";

import "./dashboard.scss";

const Dashboard: FC = () => {
  let columns = groupBy(data, (d) => d.status);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="dashboard">
      {loading ? (
        <Loading />
      ) : (
        <div className="tasks-container">
          <TaskColumn title="To Do" data={columns.todo} className="todo" />
          <TaskColumn
            title="Process"
            data={columns.process}
            className="process"
          />
          <TaskColumn title="Review" data={columns.review} className="review" />
          <TaskColumn title="Done" data={columns.done} className="done" />
        </div>
      )}
    </section>
  );
};

export default Dashboard;
