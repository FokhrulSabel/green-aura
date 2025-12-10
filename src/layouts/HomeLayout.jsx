import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import TopRatedIndoorPlants from "../pages/TopRatedIndoorPlants";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <nav className="border-amber-300">
        <Navbar></Navbar>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
