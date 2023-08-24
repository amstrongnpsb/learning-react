import InputForm from "../elements/Input";
import Button from "../elements/Button/index";
const LoginForm = () => {
  return (
    <div className=" bg-teal-300 flex justify-center w-4/5 mx-auto flex-col flex-wrap gap-4 rounded-lg">
      <h1 className="text-blue-950 text-center font-bold text-3xl">Login</h1>
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
    </div>
  );
};

export default LoginForm;
