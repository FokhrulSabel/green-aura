import React from "react";
import expert1Img from "../assets/expert1.jpg";
import expert2Img from "../assets/expert2.jpg";
import expert3Img from "../assets/expert3.jpg";
import expert4Img from "../assets/expert4.webp";

const greenExperts = [
  {
    expertId: 1,
    expertName: "Momo",
    expertSpecialization: "Ornamental Horticulture",
    expertImage: expert1Img,
  },
  {
    expertId: 2,
    expertName: "Harry",
    expertSpecialization: "Garden Expert",
    expertImage: expert2Img,
  },
  {
    expertId: 3,
    expertName: "Ron",
    expertSpecialization: "Horticulture",
    expertImage: expert3Img,
  },
  {
    expertId: 4,
    expertName: "Maisha",
    expertSpecialization: "Indoor Plant Styling",
    expertImage: expert4Img,
  },
];

const MeetOurGreenExperts = () => {
  return (
    <section className="my-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Meet Our Green Experts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {greenExperts.map((expert) => (
          <div
            className="transform transition-transform duration-300 hover:scale-105 flex flex-col items-center bg-[#ECFFDC] px-2 py-4 rounded-lg border-b-10 border-t-10  border-green-500"
            key={expert.expertId}
          >
            <img
              src={expert.expertImage}
              alt=""
              className="w-50 h-50 rounded-full object-cover mb-4 border-4 border-green-600"
            />
            <h2 className="text-xl font-bold text-center">
              {expert.expertName}
            </h2>
            <p className="text-[#355E3B] text-center">
              {expert.expertSpecialization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurGreenExperts;
