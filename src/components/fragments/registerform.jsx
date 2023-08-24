import InputForm from "../elements/Input";
import Button from "../elements/Button/index";
const RegisterForm = () => {
  return (
    <div className=" bg-teal-300 flex justify-center w-4/5 mx-auto flex-col flex-wrap gap-4 rounded-lg">
      <h1 className="text-blue-950 text-center font-bold text-3xl">Register</h1>
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
    </div>
  );
};

export default RegisterForm;
