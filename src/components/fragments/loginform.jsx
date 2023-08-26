import InputForm from "../elements/Input/Index";
import Button from "../elements/Button/Index";
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
    </form>
  );
};

export default LoginForm;
