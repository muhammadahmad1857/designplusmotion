import React from "react";
import RevealOnScroll from "./animation/revealOnScroll";

interface ComponentProps {
  title: string;
  data: { skillName: string }[];
}

const ServiceCard = ({ title, data }: ComponentProps) => {
  return (
    <RevealOnScroll>
      <div className="border max-md:w-full hover:border-main/50 transition-colors duration-300 border-main/25 rounded-lg shadow-lg glassmorphism backdrop-blur-lg p-20">
        <h3 className="sm:text-3xl text-xl main pb-10 font-bold text-main">
          {title}
        </h3>
        <div className="md:grid-cols-3 grid-cols-1 grid gap-6 place-items-center">
          {data.map((skill, index) => (
            <div
              key={index}
              className="px-10 py-5 w-3/4 max-sm:w-full  border hover:border-main/50 transition-colors duration-300  border-main/25 rounded-lg"
            >
              {skill.skillName}
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default ServiceCard;
