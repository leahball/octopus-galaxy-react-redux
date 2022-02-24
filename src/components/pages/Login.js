import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../common/Input";
import { Button } from "../common/Button";
import Spinner from "../common/Spinner";

export const LoginWrapper = styled.div`
  background-color: ${(p) => p.theme.lightOcean};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1% 1%;
  min-height: 700px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1% 1%;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  background-color: ${(p) => p.theme.lightOcean};
  border: 1 px, solid ${(p) => p.theme.midRed};
  /* padding: 4%; */
  box-sizing: border-box;
  color: ${(p) => p.theme.darkRed};
  border-radius: 6px;
  .alt-text {
    text-align: center;
    font-family: poppins;
    font-weight: 500;
    margin: 4% 0;
  }
`;
let timeout;

function Login() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    e.preventDefault();
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <>
      <LoginWrapper>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <label htmlFor="username">Username: </label>
              <Input
                value={formFields.username}
                onChange={handleInputChange}
                type="text"
                name="username"
              />
              <label htmlFor="password">Password: </label>
              <Input
                value={formFields.password}
                onChange={handleInputChange}
                type="password"
                name="password"
              />
            </>
          )}
          <Button large type="submit" disabled={loading}>
            {loading ? "Loading ..." : "Login"}
          </Button>
          {!loading && (
            <>
              <div className="alt-text">or</div>
              <Button secondary type="button">
                Register
              </Button>
            </>
          )}
        </Form>
      </LoginWrapper>
    </>
  );
}

export default Login;
