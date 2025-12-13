import React, { useState, useRef, useEffect, use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { HiMenu, HiX } from "react-icons/hi";
import { MdLogout, MdOutlineLogin } from "react-icons/md";
import { LiaUserPlusSolid } from "react-icons/lia";


const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef(null);

  // dropdown close
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("Logged out successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <header className="w-full">
      <div className="bg-white rounded-full shadow-sm px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenu(true)}
            className="text-2xl lg:hidden"
          >
            <HiMenu />
          </button>

          <h1 className="text-xl font-bold">
            <span className="text-black">Green</span>
            <span className="text-green-600">Nest</span>
          </h1>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
        </nav>

        <div className="relative flex items-center gap-3" ref={dropdownRef}>
          {user && (
            <img
              src={user.photoURL}
              alt={user.displayName}
              onClick={() => setDropdown(!dropdown)}
              className="w-9 h-9 rounded-full cursor-pointer border"
            />
          )}

          {!user && (
            <div className="flex items-center gap-3">
              <Link
                to="/auth/login"
                className="px-5 py-1.5 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition font-medium flex items-center gap-2"
              ><MdOutlineLogin size={18} />
                Login
              </Link>

              <Link
                to="/auth/register"
                className="px-5 py-1.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition font-medium flex items-center gap-2"
              ><LiaUserPlusSolid size={18} />
                Register
              </Link>
            </div>
          )}

          {/* DROPDOWN */}
          {user && dropdown && (
            <div className="absolute right-0 top-12 bg-white shadow-lg p-4 rounded-lg w-48 flex flex-col gap-2">
              <span className="font-semibold">{user.displayName}</span>
              <span className="text-xs text-gray-500">{user.email}</span>

              <button
                onClick={handleLogOut}
                className="btn btn-primary flex items-center gap-2"
              >
                <MdLogout size={18} /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-xl font-bold">
            <span className="text-black">Green</span>
            <span className="text-green-600">Nest</span>
          </h2>

          <button onClick={() => setMobileMenu(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4 text-lg">
          <NavLink to="/" onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>

          <NavLink to="/plants" onClick={() => setMobileMenu(false)}>
            Plants
          </NavLink>

          <NavLink to="/profile" onClick={() => setMobileMenu(false)}>
            My Profile
          </NavLink>

          {!user && (
            <>
              <Link
                to="/auth/login"
                onClick={() => setMobileMenu(false)}
                className="btn btn-primary"
              >
                Login
              </Link>

              <Link
                to="/auth/register"
                onClick={() => setMobileMenu(false)}
                className="btn btn-primary"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
