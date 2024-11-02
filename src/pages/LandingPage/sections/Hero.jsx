import React, { useState } from 'react';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        "src/assets/women-in-tech1.jpg",
        "src/assets/women-in-tech2.jpg",
        "src/assets/women-in-tech3.jpg",
        "src/assets/women-in-tech4.jpg"
    ];

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="carousel-section py-5">
            <div className="relative">
                <div className="flex justify-center mb-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`rounded-full w-2 h-2 mx-1 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                            aria-current={currentIndex === index ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>

                <div className="flex justify-center">
                    <div className="relative col-10">
                        <div className="overflow-hidden relative w-full">
                            <div className="transition-all duration-500 ease-in-out">
                                <img
                                    src={slides[currentIndex]}
                                    className="d-block w-full h-auto object-cover"
                                    alt={`Slide ${currentIndex + 1}`}
                                />
                            </div>
                        </div>

                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 focus:outline-none"
                            onClick={handlePrevSlide}
                            aria-label="Previous"
                        >
                            <span className="material-icons">chevron_left</span>
                        </button>
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 focus:outline-none"
                            onClick={handleNextSlide}
                            aria-label="Next"
                        >
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;


