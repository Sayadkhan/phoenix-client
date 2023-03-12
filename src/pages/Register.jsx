import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register flex flex-col justify-center items-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register In our App"} />
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className="cursor-pointer">
            Name
          </label>
          <input
            type="text"
            placeholder="write your name"
            id="name"
            value={formFields.name}
            onChange={(e) =>
              setFormFields({ ...formFields, name: e.target.value })
            }
            className="border py-3 px-5 w-[25rem] rounded outline-none focus:border-violet-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
