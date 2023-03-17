import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import EroorMessage from "../components/EroorMessage";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(formFields.email, formFields.password);

    setFormFields({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <SectionTitle title={"Login Your Id"} />

        <FormControl
          label="email"
          lableInner="Email Address"
          inputType="email"
          placeholder="your Email"
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <FormControl
          label="password"
          lableInner="password"
          inputType="password"
          placeholder="Write a Password"
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <Button text={isLoading ? "loggin..." : "Login"} submit />

        {error && <EroorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Login);
