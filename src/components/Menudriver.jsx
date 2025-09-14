import { useEffect, useState } from "react";

// User Data
import {
  aboutSection,
  certificationSection,
  educationSection,
  extraSection,
  internshipSection,
  projectSection,
} from "../pages/UserData";

// Icons
import { MdOutlineTerminal } from "react-icons/md";

const Menudriver = () => {
  const [isMenuDriver, setIsMenuDriver] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isMenuDriver ? "hidden" : "auto";
  }, [isMenuDriver]);

  useEffect(() => {
    if (selectedOption == 8) {
      setIsMenuDriver(false);
      setSelectedOption(0);
    }
  }, [selectedOption]);

  return (
    <>
      <div
        onClick={() => {
          setIsMenuDriver(!isMenuDriver);
        }}
        className="w-[50px] h-[50px] z-10 rounded-full border-[4px] border-black cursor-pointer fixed left-4 top-48 hover:scale-110 transition-all duration-200 flex items-center justify-center"
      >
        <MdOutlineTerminal className="text-3xl font-bold" />
      </div>

      {isMenuDriver ? (
        <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto bg-black text-white z-50 p-4 flex flex-col gap-8 py-10">
          <h1 className="font-semibold text-md lg:text-lg">
            Welcome to the Terminal of my Menu Driver Portfolio
          </h1>
          {/* Options */}
          <ul className="flex flex-col gap-2 justify-center text-sm">
            <li>1. Who is Amaan Naseh ?</li>
            <li>2. Projects</li>
            <li>3. Experience</li>
            <li>4. Certification</li>
            <li>5. Education</li>
            <li>6. Extras</li>
            <li>7. Contact</li>
            <li>8. Exit</li>
          </ul>
          {/* Input */}
          <div className="flex items-center gap-2 text-sm my-4">
            Type an option:
            <div className="flex items-center">
              <input
                type="text"
                className="w-[25px] bg-black text-white outline-none px-2 border-b-white border-b-[1px]"
                onChange={(e) => {
                  setSelectedOption(parseInt(e.target.value));
                }}
                maxLength={1}
              />
            </div>
          </div>
          {selectedOption === 1 ? (
            <>
              <div>
                <p className="w-fit text-sm text-justify">
                  {aboutSection.aboutDescription}
                </p>
              </div>
            </>
          ) : (
            ""
          )}
          {selectedOption === 2 ? (
            <>
              {projectSection.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 text-white text-xs"
                  >
                    <p className="font-bold text-sm">{item.projectName}</p>
                    <p className="text-justify">{item.projectDescription}</p>

                    <p>{item.projectLink !== "NA" ? item.projectLink : ""}</p>
                    <p>{item.projectVideo !== "NA" ? item.projectVideo : ""}</p>
                    <p>{item.projectCode !== "NA" ? item.projectCode : ""}</p>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
          {selectedOption === 3 ? (
            <>
              {internshipSection.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 text-white text-xs"
                  >
                    <p className="font-bold text-sm">
                      {item.internshipInstitute}
                    </p>
                    <p>{item.internshipTopic}</p>
                    <p>{item.internshipDuration}</p>
                    <p className="text-justify">{item.internshipDescription}</p>
                    <p>
                      {item.internshipLink !== "NA" ? item.internshipLink : ""}
                    </p>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
          {selectedOption === 4 ? (
            <>
              {certificationSection.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 text-white text-xs"
                  >
                    <p className="font-bold text-sm">
                      {item.certificationInstitute}
                    </p>
                    <p>{item.certificationCourse}</p>
                    <p>{item.certificationDuration}</p>
                    <p className="text-justify">
                      {item.certificationDescription}
                    </p>
                    <p>
                      {item.certificationLink !== "NA"
                        ? item.certificationLink
                        : ""}
                    </p>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
          {selectedOption === 5 ? (
            <>
              {educationSection.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 text-white text-xs"
                  >
                    <p className="font-bold text-sm">
                      {item.educationInstitute}
                    </p>
                    <p>{item.educationCourse}</p>
                    <p>{item.educationDuration}</p>
                    <p>{item.educationPercentage}</p>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
          {selectedOption === 6 ? (
            <>
              {extraSection.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 text-white text-xs"
                  >
                    <p className="font-bold text-sm">{item.extraTitle}</p>
                    <p className="text-justify">{item.extraDescription}</p>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
          {selectedOption === 7 ? (
            <>
              <div className="flex flex-col gap-2 text-white text-xs">
                <p>{aboutSection.aboutEmail}</p>
                <p>
                  {aboutSection.aboutLinkedin != "NA"
                    ? aboutSection.aboutLinkedin
                    : ""}
                </p>
                <p>
                  {aboutSection.aboutGithub != "NA"
                    ? aboutSection.aboutGithub
                    : ""}
                </p>

                <p>
                  {aboutSection.aboutFacebook != "NA"
                    ? aboutSection.aboutFacebook
                    : ""}
                </p>

                <p>
                  {aboutSection.aboutInstagram != "NA"
                    ? aboutSection.aboutInstagram
                    : ""}
                </p>

                <p>
                  {aboutSection.aboutTwitter != "NA"
                    ? aboutSection.aboutTwitter
                    : ""}
                </p>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Menudriver;
