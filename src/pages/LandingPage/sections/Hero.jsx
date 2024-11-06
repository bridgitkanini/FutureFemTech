import React, { useState, useEffect } from "react";
import {
  womenImage1,
  womenImage2,
  womenImage3,
  womenImage4,
} from "../../../assets";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slides with image and text
  const slides = [
    {
      image: womenImage1,
      text: "Empowering Women in STEM",
    },
    { image: womenImage2, text: "Inspiring Innovation" },
    { image: womenImage3, text: "Building Future Leaders" },
    { image: womenImage4, text: "Breaking Barriers" },
  ];
  

  // Infinite carousel auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  console.log(slides[currentIndex].image); // Check the path in the console

  return (
    <section className="carousel-section relative w-full h-screen overflow-hidden">
      {/* Slide background */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        {/* Centralized text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
          <h2 className="text-4xl font-bold mb-4">
            {slides[currentIndex].text}
          </h2>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            aria-current={currentIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
