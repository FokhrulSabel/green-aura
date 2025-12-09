import React from "react";
import { Link } from "react-router";

const PlantsCard = ({ plant }) => {
  return (
    <div
      className="w-full my-5 mx-auto rounded-xl bg-white shadow-md 
                 hover:shadow-2xl hover:-translate-y-2 transition-all 
                 duration-300 overflow-hidden relative"
    >
      {/* Top Image */}
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <div className="text-left">
            <h2 className="text-xl font-bold">{plant.plantName}</h2>
            <p className="text-gray-500 text-sm">{plant.category}</p>
          </div>

          <p className="text-lg font-semibold text-green-700">${plant.price}</p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-yellow-500">⭐ {plant.rating}</p>
        </div>

        <Link
          to={`/plant/${plant.plantId}`}
          className="btn btn-primary w-full text-white font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantsCard;
