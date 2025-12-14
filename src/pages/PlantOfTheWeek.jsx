import React from "react";
import { Link } from "react-router";
import topImg from "../assets/MonsteraDeliciosa.webp"

const PlantOfTheWeek = () => {
  return (
    <section className="w-11/12 mx-auto my-16">
      <div className="bg-green-50 rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={topImg}
            alt="Plant of the Week"
            className="w-full max-w-sm mx-auto rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <span className="text-sm font-semibold text-green-600 uppercase">
            🌿 Plant of the Week
          </span>

          <h2 className="text-3xl font-bold mt-2">
            Monstera Deliciosa
          </h2>

          <p className="text-gray-600 mt-3">
            A favorite among plant lovers, Monstera is known for its
            beautiful split leaves and air-purifying qualities.
            Perfect for bright indoor spaces.
          </p>

          
          <ul className="mt-4 text-gray-700 space-y-1">
            <li>☀️ Bright indirect light</li>
            <li>💧 Water once a week</li>
            <li>🌡️ Loves warm environments</li>
          </ul>

          {/* <Link
            to="/plantdetails/monstera"
            className="inline-block mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            View Details
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
