import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./login.scss";
import Loading from "../../components/Loading";

const Login: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="login">
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </section>
  );
};

export default Login;
