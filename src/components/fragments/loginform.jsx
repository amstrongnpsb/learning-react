import InputForm from "../elements/Input/Index";
import Button from "../elements/Button/Index";
const LoginForm = () => {
  const buttonClicked = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    localStorage.setItem(
      "auth",
      JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      })
    );
    window.location.href = "/products";
  };
  return (
    <form onSubmit={buttonClicked} className="m-2">
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
        <Button name="Login" background="bg-blue-950" type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
