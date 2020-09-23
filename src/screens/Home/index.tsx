import React, { FC, useState, useEffect } from "react";
import Loading from "../../components/Loading";

import "./home.scss";

const Home: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="home">
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </section>
  );
};

export default Home;
