import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const CareerForm = () => {
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
    setSelectedOption(option);
  };

  const handleNextQuestion = async () => {
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);
    const nextQuestionIndex = questionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setQuestionIndex(nextQuestionIndex);
      setSelectedOption(null);
    } else {
      try {
        setLoading(true);
        setError("");
        // Compose a prompt from the answers
        const prompt = `
Based on these answers, suggest the most suitable STEM career path and 3 alternative options.
Answers: ${updatedAnswers.join(", ")}
Respond ONLY with valid JSON in this format:
{
  "suitableCareer": "...",
  "careerChoices": ["...", "...", "..."]
}
Do not include any explanation or extra text.
`;

        console.log("Gemini API Key:", import.meta.env.VITE_GEMINI_API_KEY);
        console.log("About to call Gemini API with prompt:", prompt);
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
        });
        console.log("Gemini response:", response);

        // Parse the JSON from Gemini's response
        let data;
        try {
          data = JSON.parse(response.text);
        } catch {
          // Try to extract JSON object from the response using regex
          const match = response.text.match(/\{[\s\S]*\}/);
          if (match) {
            try {
              data = JSON.parse(match[0]);
            } catch {
              setError("AI response was not in the expected format. Please try again.");
              setLoading(false);
              return;
            }
          } else {
            setError("AI response was not in the expected format. Please try again.");
            setLoading(false);
            return;
          }
        }
        if (!data || !data.suitableCareer || !data.careerChoices) {
          setError("No career recommendations available at the moment.");
          setLoading(false);
          return;
        }

        const suitableCareerPath = data.suitableCareer;
        const careerChoices = data.careerChoices;

        navigate(`/career-path/${suitableCareerPath}`, {
          state: { careerChoices },
        });
        setLoading(false);
      } catch (error) {
        console.error("Gemini API error:", error);
        setLoading(false);
        setError("Error fetching career recommendations. Please try again.");
      }
    }
  };

  return (
    <div className="career-form my-20 mx-auto w-full max-w-xl p-3 md:p-6 bg-white">
      {loading && (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-blue-600 font-semibold">Getting your career recommendations...</p>
        </div>
      )}
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">
          {error}
        </div>
      )}
      <h1 className="text-2xl font-bold mb-6 text-center">
        Find Your Ideal STEM Career
      </h1>
      <p className="text-lg mb-4">{questions[questionIndex]}</p>

      {!loading && (
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
      )}

      {!loading && (
        <div className="text-center">
          {questionIndex === questions.length - 1 ? (
            <Link
              to={`/career-path/${selectedOption}`}
              className={`px-4 py-2 rounded focus:outline-none bg-blue-600 text-white hover:bg-blue-700`}
            >
              See Suitable Career Choices
            </Link>
          ) : (
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className={`px-4 py-2 rounded focus:outline-none ${
                selectedOption
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CareerForm;