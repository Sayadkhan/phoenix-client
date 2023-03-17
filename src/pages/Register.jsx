import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import EroorMessage from "../components/EroorMessage";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, isLoading, error } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();

    await signup(formFields.name, formFields.email, formFields.password);

    setFormFields({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register In our App"} />
        <FormControl
          label="name"
          lableInner="Name"
          inputType="text"
          placeholder="write your name"
          formFields={formFields}
          setFormFields={setFormFields}
        />
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
        <Button text={isLoading ? "Refistering..." : "Register"} submit />

        {error && <EroorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Register);
