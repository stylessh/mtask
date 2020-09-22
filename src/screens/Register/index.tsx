import React, { FC } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./register.scss";

const index: FC = () => {
  return (
    <section className="register">
      <form className="form">
        <div className="form-header">
          <h1>Register</h1>
        </div>

        <div className="form-body">
          <Input type="email" placeholder="email" className="email-input" />
          <Input
            type="password"
            placeholder="password"
            className="password-input"
          />

          <Button color="review">Sign Up</Button>
        </div>

        <div className="form-footer">
          <p>already have an account?</p>
          <Link to="/login">login</Link>
        </div>
      </form>
    </section>
  );
};

export default index;
