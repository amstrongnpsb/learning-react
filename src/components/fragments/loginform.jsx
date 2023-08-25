import InputForm from "../elements/Input/Index";
import Button from "../elements/Button/Index";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <form action="" className="m-2">
      <InputForm
        name="username"
        placeholder="username"
        type="text"
        label="username"
      />
      <InputForm
        name="password"
        placeholder="*****"
        type="password"
        label="password"
      />
      <div className="text-center mt-2">
        <Button name="Login" background="bg-blue-950" />
      </div>
      <p className="text-center mt-4 text-sm">
        Dont have Account?
        <Link to="/register" className="font-bold text-blue-950">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
