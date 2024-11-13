import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CareerForm = () => {
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // New state for tracking selected option
  const navigate = useNavigate();

  const questions = [
    "What area of STEM excites you the most?",
    "Do you prefer working on something that is tangible, like machines or physical products, or digital, like software?",
    "Which type of problem-solving do you enjoy?",
    "Are you more interested in working in a team or independently?",
  ];

  const options = [
    [
      "Computers and technology",
      "Engineering",
      "Biological & Biomedical Sciences",
      "Mathematics & Statistics",
    ],
    ["Tangible (machines, products)", "Digital (software, data)"],
    [
      "Improving software/systems",
      "Building/designing structures",
      "Analyzing biological/ecological data",
      "Solving mathematical problems",
    ],
    ["Working in a team", "Independently"],
  ];

  const handleAnswerSelection = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  const handleNextQuestion = async () => {
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);
    const nextQuestionIndex = questionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setQuestionIndex(nextQuestionIndex);
      setSelectedOption(null); // Reset the selected option for the next question
    } else {
      // Final submit to get suitable career choices
      try {
        const response = await axios.post("https://gemini-api-url.com", {
          responses: updatedAnswers,
        });

        const suitableCareerPath = response.data.suitableCareer;
        navigate(`/career-path/${suitableCareerPath}`);
      } catch (error) {
        console.error("Error fetching career recommendations:", error);
      }
    }
  };

  return (
    <div className="career-form my-20 mx-auto max-w-xl p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Find Your Ideal STEM Career
      </h1>
      <p className="text-lg mb-4">{questions[questionIndex]}</p>

      {/* Radio button options for each question */}
      <div className="flex flex-col gap-4 mb-6">
        {options[questionIndex].map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="radio"
              name="careerOption"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleAnswerSelection(option)}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>

      {/* Next button to proceed to the next question or see career choices */}
      <div className="text-center">
        <button
          onClick={handleNextQuestion}
          disabled={!selectedOption} // Enable only when an option is selected
          className={`px-4 py-2 rounded focus:outline-none ${
            selectedOption
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {questionIndex === questions.length - 1
            ? "See Suitable Career Choices"
            : "Next"}
        </button>
      </div>
    </div>
  );
};

export default CareerForm;
