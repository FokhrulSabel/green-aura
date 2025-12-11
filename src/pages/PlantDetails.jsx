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
    e.preventDefault();
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
        <div className="bg-gradient-to-b from-green-50 via-white to-white py-20">
          <div className="w-full lg:w-10/12 mx-auto py-5 px-4 lg:px-20">
            <div className="card lg:card-side bg-base-100 shadow-xl my-8 border-t-8 border-green-600">
              {/* Left: Image */}
              <figure className="lg:w-1/2">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-full h-full object-cover"
                />
              </figure>

              {/* Right: Content */}
              <div className="p-6 lg:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-green-600">
                  {plant.plantName}
                </h2>

                <p className="text-green-800 font-semibold">{plant.category}</p>

                <p className="text-neutral-600">{plant.description}</p>

                {/* Price + Rating */}
                <div className="flex justify-between items-center py-5">
                  <p className="px-8 rounded-md py-2 font-semibold bg-green-600 text-white hover:bg-green-800 transition-all">
                    {plant.price} $
                  </p>

                  <p className="flex items-center gap-2 font-semibold px-6">
                    <FaStar className="text-yellow-400 size-4" />
                    {plant.rating}
                  </p>
                </div>

                {/* Table Data */}
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Available:</th>
                      <td>
                        {plant.availableStock > 0
                          ? `${plant.availableStock} available`
                          : "Out of stock"}
                      </td>
                    </tr>

                    <tr>
                      <th>Care Level:</th>
                      <td>{plant.careLevel}</td>
                    </tr>

                    <tr>
                      <th>Provider:</th>
                      <td className="text-accent font-bold">
                        {plant.providerName}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Booking Consultant */}
        <div className="shadow-xl max-w-2xl mx-auto my-15 p-10 bg-white rounded-xl">
          <h1 className="text-3xl text-base-300 mt-10">Book Consultation</h1>
          <div className="mx-auto w-full max-w-sm shadow-2xl bg-base-200 rounded mt-5">
            <form className="card-body" onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <button type="submit" className="btn btn-primary mt-4">
                  Book Now
                </button>
              </fieldset>
            </form>
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
