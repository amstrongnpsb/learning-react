import { Link } from "react-router-dom";
const Navbar = () => {
  const authUser = JSON.parse(window.localStorage.getItem("auth"));
  const buttonClicked = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };
  return (
    <div className="w-full h-auto bg-white flex-row items-center justify-between flex gap-3 box-border p-4 font-bold text-blue-950 text-xl">
      <div className=" w-2/12 px-20 h-full">Learning React</div>
      <div className=" w-2/4 ">
        <ul className="flex justify-evenly">
          <li className="hover:text-emerald-500">
            <Link to="/products">Home</Link>
          </li>
          <li className="hover:text-emerald-500">
            <Link to="/products">Product</Link>
          </li>
          <li className="hover:text-emerald-500">
            <Link to="/products">About</Link>
          </li>
        </ul>
      </div>
      <div className="w-2/12 flex flex-row justify-between pr-6">
        {authUser == null ? (
          <div>
            <button
              className="hover:text-emerald-500 flex gap-1"
              onClick={buttonClicked}
            >
              Login
              <span>
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>
            </button>
          </div>
        ) : (
          <div className="flex justify-between w-full">
            <p>{authUser.username}</p>
            <button
              className="hover:text-emerald-500 flex gap-1"
              onClick={buttonClicked}
            >
              Logout
              <span>
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
