import React from "react";
import CoverflowSwiper from "../components/CoverflowSwiper";
import TopRatedIndoorPlants from "./TopRatedIndoorPlants";
import PlantCareTips from "./PlantCareTips";
import MeetOurGreenExperts from "./MeetOurGreenExperts";
import EcoDecorIdeas from "./EcoDecorIdeas";

const Home = () => {
  return (
    <main>
      <section>
        <CoverflowSwiper />
      </section>

      <TopRatedIndoorPlants></TopRatedIndoorPlants>
      <PlantCareTips></PlantCareTips>
      <MeetOurGreenExperts></MeetOurGreenExperts>
      <EcoDecorIdeas></EcoDecorIdeas>
    </main>
  );
};

export default Home;
