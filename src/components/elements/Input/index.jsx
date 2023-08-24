import Label from "./label";
import Input from "./input";
const InputForm = ({ name, type, placeholder, label }) => {
  return (
    <div>
      <div className=" font-bold w-3/6 mx-auto mb-5 text-blue-950 capitalize ">
        <Label name={name} label={label} />
        <Input placeholder={placeholder} type={type} name={name} />
      </div>
    </div>
  );
};

export default InputForm;
