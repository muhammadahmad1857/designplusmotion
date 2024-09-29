import React from "react";
import projectsData from "@/data/projectsData.json";
import RevealOnScroll from "./animation/revealOnScroll";

interface ProjectType {
  path: string;
  title: string;
  id: string;
}
const ProjectSecCard = () => {
  return (
    <RevealOnScroll>
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-8 md:mx-3">
        {projectsData.slice(0, 4).map((project: ProjectType) => {
          return (
            <img
              src={`/project-images/${project.path}`}
              alt={project.title}
              className="sm:h-96 cursor-pointer md:h-[500px] aspect-square hover:scale-105 transition-transform duration-500 rounded-lg"
            />
          );
        })}
      </div>
    </RevealOnScroll>
  );
};

export default ProjectSecCard;
