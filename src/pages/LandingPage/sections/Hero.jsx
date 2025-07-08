import { useState, useEffect } from "react";
import {
  womenImage1,
  womenImage2,
  womenImage3,
  womenImage4,
} from "../../../assets";

const heroSlides = [
  {
    src: womenImage1,
    alt: "Empowering Women in STEM",
    title: "Empowering Women in STEM",
  },
  {
    src: womenImage2,
    alt: "Inspiring Innovation",
    title: "Inspiring Innovation",
  },
  {
    src: womenImage3,
    alt: "Building Future Leaders",
    title: "Building Future Leaders",
  },
  {
    src: womenImage4,
    alt: "Breaking Barriers",
    title: "Breaking Barriers",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{ minHeight: "60vh", position: "relative", width: "100%" }}
      className="md:min-h-screen"
    >
      <div
        style={{ width: "100%", position: "relative" }}
        className="h-[60vh] md:h-screen"
      >
        <img
          src={heroSlides[currentIndex].src}
          alt={heroSlides[currentIndex].alt}
          style={{ width: "100%", objectFit: "cover" }}
          className="h-[60vh] md:h-screen"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0,0,0,0.4)",
            color: "white",
          }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-2 text-center">
            {heroSlides[currentIndex].title}
          </h2>
        </div>
      </div>
      {/* Navigation dots */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
        }}
        className="z-10"
      >
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: currentIndex === idx ? "white" : "gray",
              border: "none",
            }}
            className="active:scale-110 focus:outline-none"
            aria-current={currentIndex === idx ? "true" : "false"}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
