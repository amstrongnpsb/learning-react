const AuthLayout = ({ children, title }) => {
  return (
    <div className=" bg-slate-300 flex justify-center w-4/6 mx-auto flex-col flex-wrap gap-4 rounded-lg py-5">
      <h1 className="text-blue-950 text-center font-bold text-3xl">{title}</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
