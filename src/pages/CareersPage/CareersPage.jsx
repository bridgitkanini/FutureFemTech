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
    <div className="py-20 px-2 md:px-0 min-h-[60vh] flex flex-col items-center bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900 drop-shadow">Recommended Career Paths</h1>
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
        {choices.map((career) => (
          <div key={career.name || career} className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full hover:scale-105 transition-transform duration-300 border-t-4 border-blue-400">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">{career.name || career}</h2>
            {career.description && (
              <p className="text-gray-700 mb-4 text-base md:text-lg">{career.description}</p>
            )}
            {career.courses && Array.isArray(career.courses) && career.courses.length > 0 && (
              <div>
                <h3 className="font-semibold text-blue-600 mb-1">Top Online Courses:</h3>
                <ul className="list-disc pl-5 text-blue-700">
                  {career.courses.map((course, cidx) => (
                    <li key={cidx} className="mb-1">
                      <a href={course.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {course.title || course.link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;
