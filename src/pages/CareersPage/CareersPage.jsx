import React from "react";
import { useLocation } from "react-router-dom";

const CareersPage = () => {
  const location = useLocation();
  const { careerChoices } = location.state || {}; // Access career choices passed from CareerForm

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">
        Recommended Career Paths
      </h1>

      {careerChoices && careerChoices.length > 0 ? (
        <div>
          {careerChoices.map((career, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold">{career.careerName}</h2>
              <p className="mb-2">{career.description}</p>
              <h3 className="font-medium">Prospective Job Titles:</h3>
              <ul className="list-disc pl-5">
                {career.jobTitles.map((title, idx) => (
                  <li key={idx}>{title}</li>
                ))}
              </ul>
              <h3 className="font-medium">Free Courses:</h3>
              <ul className="list-disc pl-5">
                {career.courseLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No career recommendations available at the moment.</p>
      )}
    </div>
  );
};

export default CareersPage;
