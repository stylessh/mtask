import React, { useState, useEffect } from "react";
import { groupBy } from "lodash";
import Loading from "react-loading";

import TaskColumn from "../../components/TaskColumn";
import data from "../../data";

import "./dashboard.scss";

const Dashboard = () => {
  let columns = groupBy(data, (d) => d.status);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="dashboard">
      {loading ? (
        <Loading
          type="cylon"
          color="green"
          width={64}
          height={64}
          className="spinner"
        />
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
