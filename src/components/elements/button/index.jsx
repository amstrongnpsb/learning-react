const Button = ({ background = "bg-red-700", name = "default-button" }) => {
  return (
    <button
      className={`${background} text-white w-2/6 p-3 rounded-lg font-bold `}
      type="submit"
    >
      {name}
    </button>
  );
};

export default Button;
