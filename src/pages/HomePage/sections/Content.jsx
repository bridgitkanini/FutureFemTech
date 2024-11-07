import React from "react";
import { careerLogo, mentorshipLogo, scholarshipLogo } from "../../../assets";
import { Link } from "react-router-dom";

const Content = () => {
  const cardsData = [
    {
      title: "Careers",
      image: careerLogo,
      description:
        "Explore various career paths in STEM, from software development to environmental engineering. Find the best fit for your skills and interests, and take the first step towards a rewarding future.",
      link: "/careers",
      button: "Explore Careers",
    },
    {
      title: "Mentorship",
      image: mentorshipLogo,
      description:
        "Connect with experienced professionals who can guide you through your STEM journey. Learn from their experiences, get valuable advice, and gain insights that will help you succeed in your chosen field.",
      link: "/mentorship",
      button: "Connect With Mentors",
    },
    {
      title: "Scholarships",
      image: scholarshipLogo,
      description:
        "Discover scholarship opportunities designed to support women pursuing STEM education. Get financial assistance, mentorship, and resources to help you achieve your academic and professional goals.",
      link: "/scholarships",
      button: "Learn More",
    },
  ];

  return (
    <div className="py-12 px-6 bg-gray-50 flex flex-col items-center justify-center">
      <header className="text-center text-3xl font-semibold text-gray-900 mb-8 max-w-[500px]">
        With the right support, thriving in your STEM career is easier than you
        think
      </header>
      <div className="flex flex-col gap-8 items-center justify-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row min-h-[300px] max-w-[750px] items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 mt-4">{card.description}</p>
              {/* Link Button for each card */}
              <div className="mt-4">
                <Link
                  to={card.link} // Dynamically use the link for each card
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-lg"
                >
                  {card.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Forum Button */}
      <div className="mt-12">
        <Link
          className="my-6 inline-block bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-3 px-6 rounded-lg text-lg"
          to="/forum" // Link to your forum page or external URL
        >
          Join Our Forum
        </Link>
      </div>
    </div>
  );
};

export default Content;
