"use client";
import React, { useState } from "react";

const reviewsData = [
  {
    id: 1,
    text: "It has been an absolute pleasure working with Stephan. Communication was clear, and I found the final product to be extremely professional.",
    username: "Aaron Micallef - University of Malta",
  },
  {
    id: 2,
    text: "Designplusmotion created user-friendly interface designs and produced animated graphics & marketing materials for one of our main apps.",
    username: "Melvin - NuronDigital Ltd",
  },
  {
    id: 3,
    text: "We all want to give our clients the 'wow' factor and this delivered it in spades.Thanks for making me look brilliant.",
    username: "Neuronfx - Product review",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(""); // Direction of the slide animation

  const nextReview = () => {
    setSlideDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setSlideDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative border flex items-center  mx-4 justify-center min-h-[60dvh] flex-col hover:border-main/50 transition-colors duration-300 border-main/25 rounded-lg shadow-lg glassmorphism backdrop-blur-lg p-6">
      {/* Review Text with Sliding Animation */}
      <img src="/qoutes.png" alt="" className="mb-4" />
      <div
        className={`p-4 text-center relative transition-transform duration-300 w-full md:w-[60%] text-main ${slideDirection}`} // Apply sliding class based on direction
        key={currentIndex} // Key changes to trigger CSS animation
      >
        <p className="sm:text-2xl text-base  font-bold animate-slide ">
          {reviewsData[currentIndex].text}
        </p>
        <p className="sm:text-lg text-sm font-semibold">
          - {reviewsData[currentIndex].username}
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevReview}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-main text-2xl"
      >
        &#10094; {/* Previous arrow */}
      </button>
      <button
        onClick={nextReview}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-main text-2xl"
      >
        &#10095; {/* Next arrow */}
      </button>
    </div>
  );
};

export default Slider;
