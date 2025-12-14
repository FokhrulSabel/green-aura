import React from "react";
import CoverflowSwiper from "../components/CoverflowSwiper";
import TopRatedIndoorPlants from "./TopRatedIndoorPlants";
import PlantCareTips from "./PlantCareTips";
import MeetOurGreenExperts from "./MeetOurGreenExperts";
import EcoDecorIdeas from "./EcoDecorIdeas";
import usePlants from "../Hooks/usePlants";

const Home = () => {
   const { plants, loading } = usePlants();
  return (
    <main className="mt-4">
      <section>
        <CoverflowSwiper />
      </section>

      <TopRatedIndoorPlants plants={plants}></TopRatedIndoorPlants>
      <PlantCareTips></PlantCareTips>
      <MeetOurGreenExperts></MeetOurGreenExperts>
      <EcoDecorIdeas></EcoDecorIdeas>
    </main>
  );
};

export default Home;
