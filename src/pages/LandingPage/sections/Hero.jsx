import React, { useState, useEffect } from "react";
import {
  womenImage1,
  womenImage2,
  womenImage3,
  womenImage4,
} from "../../../assets";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite carousel auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-section relative w-full h-screen overflow-hidden">
      {/* Slide 1 */}
      {currentIndex === 0 && (
        <div className="w-full h-full relative transition-all duration-700 ease-in-out">
          <img
            src={womenImage1}
            alt="Empowering Women in STEM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Empowering Women in STEM
            </h2>
          </div>
        </div>
      )}

      {/* Slide 2 */}
      {currentIndex === 1 && (
        <div className="w-full h-full relative transition-all duration-700 ease-in-out">
          <img
            src={womenImage2}
            alt="Inspiring Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
            <h2 className="text-4xl font-bold mb-4">Inspiring Innovation</h2>
          </div>
        </div>
      )}

      {/* Slide 3 */}
      {currentIndex === 2 && (
        <div className="w-full h-full relative transition-all duration-700 ease-in-out">
          <img
            src={womenImage3}
            alt="Building Future Leaders"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
            <h2 className="text-4xl font-bold mb-4">Building Future Leaders</h2>
          </div>
        </div>
      )}

      {/* Slide 4 */}
      {currentIndex === 3 && (
        <div className="w-full h-full relative transition-all duration-700 ease-in-out">
          <img
            src={womenImage4}
            alt="Breaking Barriers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
            <h2 className="text-4xl font-bold mb-4">Breaking Barriers</h2>
          </div>
        </div>
      )}

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2, 3].map((index) => (
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
