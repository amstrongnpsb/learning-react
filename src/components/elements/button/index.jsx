const Button = ({ background = "bg-red-700", name = "default-button" }) => {
  return (
    <button
      className={`flex-none w-auto p-2 h-12 uppercase font-medium tracking-wider ${background} text-white rounded-lg hover:bg-white hover:text-black `}
      type="submit"
    >
      {name}
    </button>
  );
};

export default Button;
