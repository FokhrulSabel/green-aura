import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import TopRatedIndoorPlants from "../pages/TopRatedIndoorPlants";
import usePlants from "../Hooks/usePlants";
import LoadingPage from "../pages/LoadingPage";

const HomeLayout = () => {
  const { plants, loading } = usePlants();
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div className="w-11/12 mx-auto">
      <nav>
        <Navbar></Navbar>
      </nav>

      <main className="mt-4">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
