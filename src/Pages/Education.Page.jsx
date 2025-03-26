import React from "react";
import EducationComponent from "../Components/EducationComponent";
import CertificationsComponent from "../Components/CertificationsComponent";

const EducationPage = () => {
  return (
    <>
      <div className="my-4 mb-14">
        <EducationComponent />
      </div>
      <div className="my-14">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic text-center my-2 bg-clip-text text-transparent bg-title-gradient">
          Certifications
        </h1>
        <CertificationsComponent />
      </div>
      <div></div>
    </>
  );
};

export default EducationPage;
