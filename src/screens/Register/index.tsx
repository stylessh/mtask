import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

import "./register.scss";

const Register: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="register">
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </section>
  );
};

export default Register;
