import React, { useState } from "react";
// Title component
import Title from "../title/Title";
// Project Data
import { projectsData } from "../../data/data";
// ProjectItems component
import ProjectsItems from "./ProjectsItems";

const Projects = () => {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 6);
  };
  return (
    <section id="projects" className="py-16 border-b-black border-b-[1px]">
      <div>
        {/* Title */}
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          desc="My Projects"
          styles='text-center'
          fontSize='text-3xl md:text-5xl'
        />
        {/* Project Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.slice(0, visible).map((item) => (
            <ProjectsItems key={item.id} item={item} />
          ))}
        </div>
        { visible < projectsData.length && (
          <div className="mt-8">
            <button className="btn" onClick={showMoreItems}>
              View More 
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
