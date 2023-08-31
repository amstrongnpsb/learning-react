const Button = ({
  background = "bg-red-700",
  name = "default-button",
  buttonClicked = () => {},
  type,
}) => {
  return (
    <button
      className={`${background} text-white w-2/6 p-3 rounded-lg font-bold `}
      type={type}
      onClick={buttonClicked}
    >
      {name}
    </button>
  );
};

export default Button;
