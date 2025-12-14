import React from "react";
import CoverflowSwiper from "../components/CoverflowSwiper";
import TopRatedIndoorPlants from "./TopRatedIndoorPlants";
import PlantCareTips from "./PlantCareTips";
import MeetOurGreenExperts from "./MeetOurGreenExperts";
import EcoDecorIdeas from "./EcoDecorIdeas";
import usePlants from "../Hooks/usePlants";
import PlantOfTheWeek from "./PlantOfTheWeek";

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
      <PlantOfTheWeek></PlantOfTheWeek>
    </main>
  );
};

export default Home;
