import React, { useEffect, useState } from "react";

const EducationComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const divPosn = document.getElementById("educationTable").offsetTop;
    const scrollPosn = window.scrollY + window.innerHeight;

    if (scrollPosn > divPosn + 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-center my-2 bg-clip-text text-transparent bg-title-gradient">
        Education
      </h1>
      <table
        id="educationTable"
        className={`border-separate border-spacing-1 text-[12px] md:text-sm md:border-spacing-5 text-black transition-all trasnform duration-[1100ms] ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-[-100px] opacity-0"
        }`}
      >
        <thead>
          <th className="border p-2 md:px-4 bg-white">S. No.</th>
          <th className="border p-2 md:px-4 bg-white">
            Academic Qualification
          </th>
          <th className="border p-2 md:px-4 bg-white">Passing Year</th>
          <th className="border p-2 md:px-4 bg-white">CGPA/%</th>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 md:px-4 bg-white">1.</td>
            <td className="border p-2 md:px-4 bg-white">
              B.Tech Automation and Robotics (GGSIPU)
            </td>
            <td className="border p-2 md:px-4 bg-white">2026</td>
            <td className="border p-2 md:px-4 bg-white">Appearing</td>
          </tr>
          <tr>
            <td className="border p-2 md:px-4 bg-white">2.</td>
            <td className="border p-2 md:px-4 bg-white">
              Boards Class 12th (JMI)
            </td>
            <td className="border p-2 md:px-4 bg-white">2021</td>
            <td className="border p-2 md:px-4 bg-white">96.4 %</td>
          </tr>
          <tr>
            <td className="border p-2 md:px-4 bg-white">3.</td>
            <td className="border p-2 md:px-4 bg-white">
              Boards Class 10th (JMI)
            </td>
            <td className="border p-2 md:px-4 bg-white">2019</td>
            <td className="border p-2 md:px-4 bg-white">93.28 %</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EducationComponent;
