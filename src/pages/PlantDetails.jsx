import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLoaderData, useParams } from "react-router";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";

import toast, { Toaster } from "react-hot-toast";

const PlantDetails = () => {
  const data = useLoaderData();
  const { plantId } = useParams();

  const [plant, setPlant] = useState({});

  useEffect(() => {
    const plantDetails = data.find(
      (singlePlant) => singlePlant.plantId === parseInt(plantId)
    );
    setPlant(plantDetails);
  }, [data, plantId]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your consultation is booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-11/12 mx-auto">
      <Toaster />
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="flex flex-col justify-between items-center my-10">
        {/* Details */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full ">
          <div className="w-[30%] flex lg:justify-end">
            <img src={plant.image} alt="" />
          </div>
          <div className="flex flex-col items-center lg:items-start justify-between gap-2">
            <h1 className="text-lg">
              Plant Title:{" "}
              <span className="text-2xl font-bold lg:text-2xl text-base-300 font-bold">
                {plant.plantName}
              </span>
            </h1>
            <h1 className="text-lg">
              Provider:{" "}
              <span className="text-xl text-accent font-bold">
                {plant.providerName}
              </span>
            </h1>
            <div className="flex flex-row items-center gap-2">
              <p className="text-md text-accent bg-base-200 border rounded-2xl py-1 px-3">
                {plant.category}
              </p>
              <p className="text-md text-accent bg-base-100 border rounded-2xl py-1 px-3">
                {plant.careLevel}
              </p>
            </div>
            <p className="text-center text-md text-base-300 my-2">
              {plant.description}
            </p>
            <p className="text-lg">
              Available in Stock:{" "}
              <span className="text-xl text-base-300 font-bold">
                {plant.availableStock}
              </span>
            </p>

            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-row items-center gap-1 bg-base-100 border  rounded-lg py-2 px-3">
                <IoMdPricetags className="text-base-300" />
                <p className="text-xl text-base-300 ">
                  {plant.price} <span>$</span>
                </p>
              </div>

              <div className="flex flex-row items-center gap-1 bg-base-100 border border-green-700 rounded-lg py-2 px-3">
                <FaStar className="text-base-300" />
                <p className="text-xl text-base-300 ">{plant.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default PlantDetails;
