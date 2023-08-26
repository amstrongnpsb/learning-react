import { Link } from "react-router-dom";
const AuthLayout = ({ children, title, type }) => {
  return (
    <div className=" max-w-screen-lg mx-auto flex min-h-screen items-center">
      <div className=" bg-slate-300 flex justify-center w-4/6 mx-auto flex-col flex-wrap gap-4 rounded-lg py-5">
        <h1 className="text-blue-950 text-center font-bold text-3xl">
          {title}
        </h1>
        {children}
        <p className="text-center mt-4 text-sm ">
          {type === "login" ? " Dont have Account? " : "Already have Account? "}

          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-950">
              Sign Up
            </Link>
          )}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-950">
              Sign In
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
