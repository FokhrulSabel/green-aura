import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto min-h-screen">
      <nav className="sticky top-0 z-50"> 
        <Navbar></Navbar>
      </nav>
      <main className="max-w-1/2 mx-auto">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
