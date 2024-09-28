// "use client";
// import React, { useRef } from "react";
// import projectsData from "@/data/projectsData.json";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// interface ProjectType {
//   path: string;
//   title: string;
//   id: string;
// }

// const ProjectCards = () => {
//   const projectsContainerRef = useRef<HTMLDivElement | null>(null);
//   const translateValue = window?.innerWidth > 768 ? "-60vw" : "-200vw";
//   // // Optional: Update scroll settings on window resize
//   // const updateScrollTrigger = () => {
//   //   ScrollTrigger.refresh(); // Refresh the ScrollTrigger instance to adjust positions
//   // };
//   // window.addEventListener("resize", updateScrollTrigger);

//   useGSAP(() => {
//     const container = projectsContainerRef.current;

//     if (container) {
//       // Calculate the translateX value dynamically based on screen size

//       gsap.to(container, {
//         translateX: translateValue, // Adjusted translateX value for responsiveness
//         scrollTrigger: {
//           trigger: container,
//           start: "top top",
//           end: "+=1500", // Adjust this value as needed for scroll length
//           scrub: true,
//           pin: true,
//         },
//       });
//     }
//   }, []);

//   return (
//     <div className="w-full overflow-hidden py-10 px-10">
//       <div
//         ref={projectsContainerRef}
//         className="flex items-center gap-4 md:gap-8" // Responsive gap between cards
//       >
//         {projectsData.map((project: ProjectType) => (
//           <div
//             className="h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 shrink-0 flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden hover:rounded-none transition-all duration-300"
//             key={project.id}
//           >
//             <img
//               className="w-full h-full hover:scale-110 hover:rounded-none transition-all duration-300 object-cover"
//               src={`/project-images/${project.path}`}
//               alt={project.title}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectCards;
'use client'

import React, { useRef, useState, useEffect } from "react"
import projectsData from "@/data/projectsData.json"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

interface ProjectType {
  path: string
  title: string
  id: string
}

export default function ProjectCards() {
  const projectsContainerRef = useRef<HTMLDivElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const [cardWidth, setCardWidth] = useState(280)
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(240)
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setCardWidth(260)
        setVisibleCards(2)
      } else {
        setCardWidth(280)
        setVisibleCards(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useGSAP(() => {
    if (!projectsContainerRef.current || !scrollContainerRef.current) return

    const container = projectsContainerRef.current
    const scrollContainer = scrollContainerRef.current
    const totalWidth = projectsData.length * (cardWidth + 16)
    const scrollDistance = Math.max(0, totalWidth - window.innerWidth)

    try {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(container, {
        x: -scrollDistance,
        ease: "none",
      })

      // Fallback for devices that don't support smooth scrolling
      if (!('scrollBehavior' in document.documentElement.style)) {
        scrollContainer.style.overflowX = 'auto'
      }

      console.log("ScrollTrigger initialized successfully")
    } catch (error) {
      console.error("Error initializing ScrollTrigger:", error)
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [cardWidth])

  return (
    <div ref={scrollContainerRef} className="w-full overflow-hidden">
      <div className="py-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <div
          ref={projectsContainerRef}
          className="flex items-center gap-4"
          style={{ width: `${projectsData.length * (cardWidth + 16)}px` }}
        >
          {projectsData.map((project: ProjectType, index: number) => (
            <div
              key={project.id}
              className={`flex-shrink-0 flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden hover:rounded-none transition-all duration-300 ${
                index >= visibleCards ? 'hidden sm:flex' : ''
              }`}
              style={{ width: `${cardWidth}px`, height: `${cardWidth}px` }}
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
    </div>
  )
}