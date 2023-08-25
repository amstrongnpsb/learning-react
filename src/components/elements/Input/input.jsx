const Input = ({ placeholder, type, name }) => {
  return (
    <input
      type={`${type}`}
      className="block font-bold w-full p-2 mt-2 rounded-md"
      placeholder={`${placeholder}`}
      name={`${name}`}
      id={`${name}`}
    />
  );
};

export default Input;
