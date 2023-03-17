import React from "react";

import { Link } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
import Button from "./Button";

const Navbar = () => {
  const { user, dispatch } = useAuthContext();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };

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
        {!user && (
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
        )}
        {user && (
          <div className="flex gap-5 items-center">
            <p>
              Logged in As: <spna className="text-violet-500">{user.name}</spna>
            </p>

            <Button handleLogout={handleLogout} text="Logout" logout />
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
