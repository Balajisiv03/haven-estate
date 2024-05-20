import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          {" "}
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Haven</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <p className="text-slate-700 text-sm sm:text-base font-bold">
          Discover, Buy, and Sell with Us
        </p>
        <ul className="flex gap-6">
          <Link to="/">
            <li className="hidden sm:inline hover:underline text-slate-700">
              Home
            </li>
          </Link>
          <Link to="/About">
            {" "}
            <li className="hidden sm:inline hover:underline text-slate-700">
              About
            </li>
          </Link>
          <Link to="/Sign-in">
            {" "}
            <li className="hover:underline text-slate-700">SignIn</li>
          </Link>
          <Link to="/profile">
            {" "}
            <li className="hover:underline text-slate-700">profile</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
