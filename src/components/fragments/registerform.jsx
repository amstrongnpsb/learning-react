import InputForm from "../elements/Input/Index";
import Button from "../elements/Button/Index";
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
    </form>
  );
};

export default RegisterForm;
