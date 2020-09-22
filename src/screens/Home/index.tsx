import React, { FC } from "react";

import "./home.scss";

const index: FC = () => {
  return (
    <section className="home">
      <div className="info">
        <h1>Task managment app.</h1>

        <p>created by stylessh</p>

        <a
          href="https://github.com/stylessh"
          target="_blank"
          rel="noopener noreferrer"
          className="gh-link"
        >
          check out my github!
        </a>
      </div>
    </section>
  );
};

export default index;
