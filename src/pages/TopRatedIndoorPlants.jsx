import React, { useState } from "react";
import PlantCard from "../components/PlantCard";
import usePlants from "../Hooks/usePlants";

const TopRatedIndoorPlants = () => {
  const { plants } = usePlants();

  const [showAll, setShowAll] = useState(false);

  const visiblePlants = showAll ? plants : plants.slice(0, 8);

  // console.log(plants);
  return (
    <section className="my-10">
      <h1 className="text-3xl text-center font-bold mb-6">
        Top Rated Indoor Plants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {visiblePlants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>

      {/* Show More / Show Less */}
      {plants.length > 8 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-2 rounded-full 
                       bg-green-600 text-white font-semibold 
                       hover:bg-green-700 transition"
          >
            {showAll ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>
      )}
    </section>
  );
};

export default TopRatedIndoorPlants;
