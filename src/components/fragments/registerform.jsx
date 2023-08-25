import InputForm from "../elements/Input/Index";
import Button from "../elements/Button/Index";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <form action="" className="m-2">
      <InputForm
        name="username"
        placeholder="username"
        type="text"
        label="username"
      />
      <InputForm name="age" placeholder="age" type="text" label="age" />
      <InputForm
        name="email"
        placeholder="example@example.com"
        type="email"
        label="email"
      />
      <InputForm
        name="phone_number"
        placeholder="phone number"
        type="text"
        label="phone number"
      />
      <InputForm
        name="password"
        placeholder="*****"
        type="password"
        label="password"
      />
      <div className="text-center mt-2">
        <Button name="Register" background="bg-blue-950" />
      </div>

      <p className="text-center mt-4 text-sm">
        Already have Account?
        <Link to="/login" className="font-bold text-blue-950">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
