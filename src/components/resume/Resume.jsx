import React, { useState } from "react";
// Data
import { educationData, experienceData } from "../../data/data";
// Components
import Title from "../title/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";
const Resume = () => {
  const [education, setEducation] = useState(true);
  const [skill, setSkill] = useState(false);
  const [experience, setExperience] = useState(false);
  const [achievement, setAchievement] = useState(false);
  return (
    <section id="resume" className="w-full py-16 border-b-black border-b-[1px]">
      {/* Title */}
      <Title
        title="5+ years of experience"
        desc="my resume"
        styles="text-center"
        fontSize="text-3xl md:text-5xl"
      />
      <div className="mb-14">
        <ul className="w-full grid md:grid-cols-2  lg:grid-cols-4">
          <li
            onClick={() =>
              setEducation(true) &
              setSkill(false) &
              setExperience(false) &
              setAchievement(false)
            }
            className={`${
              education
                ? "border-secondaryColor rounded-lg"
                : "border-transparent"
            } w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducation(false) &
              setSkill(true) &
              setExperience(false) &
              setAchievement(false)
            }
            className={`${
              skill ? "border-secondaryColor rounded-lg" : "border-transparent"
            } w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducation(false) &
              setSkill(false) &
              setExperience(true) &
              setAchievement(false)
            }
            className={`${
              experience
                ? "border-secondaryColor rounded-lg"
                : "border-transparent"
            } w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducation(false) &
              setSkill(false) &
              setExperience(false) &
              setAchievement(true)
            }
            className={`${
              achievement
                ? "border-secondaryColor rounded-lg"
                : "border-transparent"
            } w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px]`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {education && (
        <Education
          educationData={educationData}
          experienceData={experienceData}
        />
      )}
      {skill && <Skills />}
      {experience && (
        <Experience
          educationData={educationData}
          experienceData={experienceData}
        />
      )}
      {achievement && (
        <Achievements
          educationData={educationData}
          experienceData={experienceData}
        />
      )}
    </section>
  );
};

export default Resume;
