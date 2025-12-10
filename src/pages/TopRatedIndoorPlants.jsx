import React from "react";
import PlantCard from "../components/PlantCard";
import usePlants from "../Hooks/usePlants";

const TopRatedIndoorPlants = () => {
  const { plants } = usePlants();
  console.log(plants);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-4">
        Top Rated Indoor Plants
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center">
        {plants.map((plant) => (
          <PlantCard plant={plant} key={plant.plantId}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default TopRatedIndoorPlants;
