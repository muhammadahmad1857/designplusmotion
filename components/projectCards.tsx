import React, { useRef, useEffect } from "react";
import projectsData from "@/data/projectsData.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectType {
  path: string;
  title: string;
  id: string;
}

const ProjectCards = () => {
  const projectsContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const container = projectsContainerRef.current;

    if (container) {
      // Calculate the translateX value dynamically based on screen size
      const translateValue = window.innerWidth > 768 ? "-60vw" : "-900vw";

      gsap.to(container, {
        translateX: translateValue, // Adjusted translateX value for responsiveness
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=1500", // Adjust this value as needed for scroll length
          scrub: true,
          pin: true,
        },
      });

      // Optional: Update scroll settings on window resize
      const updateScrollTrigger = () => {
        ScrollTrigger.refresh(); // Refresh the ScrollTrigger instance to adjust positions
      };
      window.addEventListener("resize", updateScrollTrigger);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", updateScrollTrigger);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-10 px-10">
      <div
        ref={projectsContainerRef}
        className="flex items-center gap-4 md:gap-8" // Responsive gap between cards
      >
        {projectsData.map((project: ProjectType) => (
          <div
            className="h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 shrink-0 flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden hover:rounded-none transition-all duration-300"
            key={project.id}
          >
            <img
              className="w-full h-full hover:scale-110 hover:rounded-none transition-all duration-300 object-cover"
              src={`/project-images/${project.path}`}
              alt={project.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
