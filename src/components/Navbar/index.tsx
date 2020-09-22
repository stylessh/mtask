import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const index: FC = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">MyTasks</Link>
      </div>

      <ul className="links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default index;
