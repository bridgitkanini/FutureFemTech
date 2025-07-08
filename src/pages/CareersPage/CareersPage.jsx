import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const CareersPage = () => {
  const location = useLocation();
  const { careerChoices } = location.state || {};

  // Save to localStorage if present
  useEffect(() => {
    if (careerChoices && Array.isArray(careerChoices)) {
      localStorage.setItem("careerChoices", JSON.stringify(careerChoices));
    }
  }, [careerChoices]);

  // Try to load from localStorage if not present
  let choices = careerChoices;
  if (!choices) {
    const stored = localStorage.getItem("careerChoices");
    if (stored) {
      try {
        choices = JSON.parse(stored);
      } catch {
        // Ignore JSON parse errors
      }
    }
  }

  if (!choices || !Array.isArray(choices) || choices.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-6">Recommended Career Paths</h1>
        <p className="text-xl text-gray-600 my-12">
          No career recommendations available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Recommended Career Paths</h1>
      <ul className="list-disc pl-5 max-w-xl mx-auto">
        {choices.map((career) => (
          <li key={career} className="text-lg mb-2">{career}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareersPage;
