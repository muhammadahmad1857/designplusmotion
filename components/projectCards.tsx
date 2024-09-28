"use client";

import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive"; // Import useMediaQuery for breakpoints
import projectsData from "@/data/projectsData.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectType {
  path: string;
  title: string;
  id: string;
}

export default function ProjectCards() {
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  // Breakpoints for responsive design
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1350px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1349px)",
  });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 376px) and (max-width: 767px)" });
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 375px)" }); // Breakpoint for <= 375px

  // Define translateValue based on screen size
  const translateValue = isLargeScreen
    ? "-60vw"
    : isMediumScreen
    ? "-100vw"
    : isSmallScreen
    ? "-230vw" // Translate value for screens between 376px and 767px
    : "-330vw"; // Translate value for screens <= 375px

  useGSAP(() => {
    const container = projectsContainerRef.current;

    if (container) {
      gsap.to(container, {
        translateX: translateValue,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: isLargeScreen
            ? "+=1500"
            : isMediumScreen
            ? "+=1200"
            : isSmallScreen
            ? "+=1000" // Different scroll lengths based on breakpoints
            : "+=800", // Scroll length for extra small screens
          scrub: true,
          pin: true,
        },
      });
    }
  }, [translateValue, isLargeScreen, isMediumScreen, isSmallScreen, isExtraSmallScreen]); // Dependencies for useGSAP hook

  return (
    <div className="w-full overflow-hidden py-10 px-10">
      <div
        ref={projectsContainerRef}
        className="flex items-center gap-4 md:gap-8"
      >
        {projectsData.map((project: ProjectType) => (
          <div
            className="h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 shrink-0 flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden hover:rounded-none transition-all duration-300"
            key={project.id}
          >
            <img
              className="w-full h-full hover:scale-110 cursor-pointer hover:rounded-none transition-all duration-300 object-cover"
              src={`/project-images/${project.path}`}
              alt={project.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
