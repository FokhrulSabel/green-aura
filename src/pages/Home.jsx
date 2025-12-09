import React from "react";
import CoverflowSwiper from "../components/CoverflowSwiper";
import TopRatedIndoorPlants from "./TopRatedIndoorPlants";

const Home = () => {
  return (
    <main>
      <section>
        <CoverflowSwiper />
      </section>

      <TopRatedIndoorPlants></TopRatedIndoorPlants>
    </main>
  );
};

export default Home;
