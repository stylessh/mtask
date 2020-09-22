import React, { FC } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./login.scss";


const index: FC = () => {
  return (
    <section className="login">
      <form className="form">
        <div className="form-header">
          <h1>Login</h1>
        </div>

        <div className="form-body">
          <Input type="email" placeholder="email" className="email-input" />
          <Input
            type="password"
            placeholder="password"
            className="password-input"
          />

          <Button color="done">Sign In</Button>
        </div>

        <div className="form-footer">
          <p>don't have an account?</p>
          <Link to="/register">register</Link>
        </div>
      </form>
    </section>
  );
};

export default index;
