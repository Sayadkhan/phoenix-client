import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(formFields);

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
        <Button text="Login" submit />
      </form>
    </div>
  );
};

export default Login;
