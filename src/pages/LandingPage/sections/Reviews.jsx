import React from "react";
import {
  profileImage00,
  profileImage01,
  profileImage02,
  profileImage03,
  profileImage04,
} from "../../../assets";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const reviewsData = [
    {
      review:
        "This website has been a game-changer for me! I was struggling to find resources and mentors in data science, but through this platform, I connected with incredible women who’ve guided me through every step of my career. The articles are so practical, and I’ve learned new techniques that I can apply in my work. I feel empowered and connected to a strong community of women who understand the journey.",
      image: profileImage00,
      name: "Nia Johnson",
      career: "Data Scientist",
    },
    {
      review:
        "I never thought I’d find a place where I could read stories from women in mechanical engineering who’ve faced the same challenges as me. The advice on handling workplace dynamics and gaining hands-on experience has been invaluable. This site is like having a big sister who’s been there before, cheering you on every step of the way!",
      image: profileImage01,
      name: "Adaku Okafor",
      career: "Mechanical Engineer",
    },
    {
      review:
        "I just love how this platform is tailored for women in STEM! The coding challenges and workshops have helped me improve my programming skills so much. The discussions on balancing work and life, especially for women, are really eye-opening. This site makes me feel that I can thrive in this field without sacrificing my personal life.",
      image: profileImage02,
      name: "Li Wei",
      career: "Software Developer",
    },
    {
      review:
        "The resources on this site have helped me tremendously as a young researcher. From grant writing tips to advice on networking, it’s a treasure trove of information that I didn’t have access to before. Seeing other women sharing their journeys has encouraged me to stay resilient and pursue my dreams in biomedical research.",
      image: profileImage03,
      name: "Wanjiru Mwangi",
      career: "Biomedical Researcher",
    },
    {
      review:
        "As someone passionate about environmental science, it’s refreshing to find a space dedicated to women like me. The articles and webinars on environmental issues have given me new insights and a sense of purpose. It’s empowering to know that there are so many women working to make a positive impact on the planet. This site keeps me inspired and motivated every day!",
      image: profileImage04,
      name: "Maria Gonzalez",
      career: "Environmental Scientist",
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        STEM Girls Reviews
      </h2>
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {reviewsData.map((reviewData, index) => (
          <div
            key={index}
            className="bg-white p-6 m-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-80 flex-shrink-0 min-h-[325px] min-w-[350px]"
          >
            <div className="flex items-center mb-4">
              <img
                src={reviewData.image}
                alt={`${reviewData.name}`}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  {reviewData.name}
                </p>
                <p className="text-sm text-gray-500">{reviewData.career}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{reviewData.review}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;
