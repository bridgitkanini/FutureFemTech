import { useState, useEffect } from "react";

const heroSlides = [
  {
    src: "/women-in-tech1.jpg",
    alt: "Empowering Women in STEM",
    title: "Empowering Women in STEM",
  },
  {
    src: "/women-in-tech2.jpg",
    alt: "Inspiring Innovation",
    title: "Inspiring Innovation",
  },
  {
    src: "/women-in-tech3.jpg",
    alt: "Building Future Leaders",
    title: "Building Future Leaders",
  },
  {
    src: "/women-in-tech4.jpg",
    alt: "Breaking Barriers",
    title: "Breaking Barriers",
  },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1));
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section style={{ minHeight: "100vh", position: "relative", width: "100%" }}>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <img
            src={heroSlides[currentIndex].src}
            alt={heroSlides[currentIndex].alt}
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0,0,0,0.4)",
            color: "white"
          }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {heroSlides[currentIndex].title}
            </h2>
          </div>
        </div>
        {/* Navigation dots */}
        <div style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8
        }}>
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              style={{
                width: 12, height: 12, borderRadius: "50%",
                background: currentIndex === idx ? "white" : "gray",
                border: "none"
              }}
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