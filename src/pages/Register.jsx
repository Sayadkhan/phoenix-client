import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(formFields);

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
        <Button text="Register" submit />
      </form>
    </div>
  );
};

export default Register;
