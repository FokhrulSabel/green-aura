import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="navbar-start">
        <h1 className="text-[#008000] text-xl font-bold">GreenAura</h1>
      </div>
      <div className="navbar-center flex gap-5 text-[#008000]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>

      <div className="navbar-end login-btn flex gap-1">
        <Link to="/auth/login" className="btn btn-primary px-10 ">
          Login
        </Link>
        <Link to="/auth/register" className="btn btn-primary px-10 ">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
