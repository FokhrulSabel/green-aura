import React from "react";
import WateringImg from "../assets/Watering.jpg";
import SunlightImg from "../assets/Sunlight.webp";
import FertilizingImg from "../assets/Fertilizing.jpg";
import PruningImg from "../assets/Pruning.webp";

const careTips = [
  {
    careId: 1,
    careTitle: "Watering",
    careDescription:
      "Water your plants only when the top layer of soil feels dry. Consistent but moderate watering helps prevent root rot and supports steady growth.",
    careImage: WateringImg,
  },
  {
    careId: 2,
    careTitle: "Sunlight",
    careDescription:
      "Place your plants where they can receive bright, indirect sunlight. Too much direct sun can scorch the leaves, while too little can slow growth.",
    careImage: SunlightImg,
  },
  {
    careId: 3,
    careTitle: "Fertilizing",
    careDescription:
      "Use a balanced liquid fertilizer every 3–4 weeks during the growing season to provide essential nutrients and promote lush, vibrant foliage.",
    careImage: FertilizingImg,
  },
  {
    careId: 4,
    careTitle: "Pruning",
    careDescription:
      "Remove dry, damaged, or yellowing leaves to maintain plant health and shape. Regular pruning encourages new growth and prevents overcrowding.",
    careImage: PruningImg,
  },
];

const PlantCareTips = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold  mb-2 text-center">Plant Care Tips</h2>

      <section className="py-4 rounded-2xl flex flex-col lg:flex-row gap-5 ">
        {careTips.map((cares) => (
          <div
            key={cares.careId}
            className="transform transition-transform duration-300 hover:scale-105 flex flex-row items-center w-full  shadow-2xl p-5 justify-between gap-4 mb-4"
          >
            <img
              src={cares.careImage}
              alt={cares.careTitleTitle}
              className="w-30 h-40 object-cover rounded-2xl"
            />
            <div className="mr-2">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl text-base-300 font-semibold">
                  {cares.careTitle}
                </h3>
              </div>
              <p className=" text-accent">{cares.careDescription}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlantCareTips;
