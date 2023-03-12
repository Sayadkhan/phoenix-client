import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-10 flex justify-between">
      <div className="logo">
        <Link
          to="/"
          className="text-xl font-semibold hover:text-violet-500 duration-300"
        >
          Phoenix
        </Link>
      </div>
      <nav>
        <div className="flex gap-5">
          <Link
            to="/login"
            className="hover:text-violet-500 hover:underline duration-300 underline-offset-4"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hover:text-violet-500 hover:underline duration-300 underline-offset-4"
          >
            Register
          </Link>
        </div>
        {/* <div>
          <p>
            Logged in As: <Spna>Abdullah Al Sayad</Spna>
          </p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
