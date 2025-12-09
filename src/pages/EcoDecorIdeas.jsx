import React from "react";
import decor1Img from '../assets/decor1.jpg'
import decor2Img from '../assets/decor2.jpg'
import decor3Img from '../assets/decor3.jpg'
import decor4Img from '../assets/decor4.jpg'
import decor5Img from '../assets/decor5.webp'
import decor6Img from '../assets/decor6.jpeg'

const decorIdeas = [
  {
    id: 1,
    image: decor1Img,
    title: "Nature-Inspired Boho Corner",
    description:
      "Create a warm, inviting retreat with hanging pothos, woven baskets, and macramé décor. Add layers of greenery for a balanced boho look.",
  },
  {
    id: 2,
    image: decor2Img,
    title: "Clean & Calm Workspace Greens",
    description:
      "Keep your desk refreshing yet minimal by adding small succulents or air plants in neutral-toned pots for a productivity-boosting vibe.",
  },
  {
    id: 3,
    image: decor3Img,
    title: "Vertical Hanging Green Wall",
    description:
      "Use floating shelves and macramé hangers to build a layered green wall that brings depth, texture, and nature into your room.",
  },
  {
    id: 4,
    image: decor4Img,
    title: "Spa-Style Bathroom Retreat",
    description:
      "Transform your bathroom with humidity-loving plants, bamboo accessories, and soft lighting to create a relaxing spa-like atmosphere.",
  },
  {
    id: 5,
    image: decor5Img,
    title: "Cozy Reading Nook Oasis",
    description:
      "Design a peaceful reading corner by placing leafy plants beside your armchair, warm lighting, and wooden accents. The greenery softens the space and helps you unwind while enjoying your favorite books.",
  },
  {
    id: 6,
    image: decor6Img,
    title: "Serene Window Sill Garden",
    description:
      "Turn your window area into a mini indoor garden with small pots of herbs, succulents, or mini ferns. The natural sunlight helps your plants thrive while creating a refreshing view that brightens your room.",
  },
];

const EcoDecorIdeas = () => {
  return (
    <div className="my-10 lg:my-15 lg:w-4/5 w-full mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Eco Decor Ideas To Transform Your Space Into a Nature Haven
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {decorIdeas.map((idea) => (
          <div
            key={idea.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={idea.image}
              alt={idea.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-accent mb-2">
                {idea.title}
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                {idea.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoDecorIdeas;
