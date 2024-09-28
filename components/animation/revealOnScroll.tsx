"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOnScrollProps {
  children: React.ReactNode;
}

export default function RevealOnScroll({ children }: RevealOnScrollProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = revealRef.current;

    if (element) {
      gsap.from(
        element,

        {
          opacity: 0,
          y: 50,
          duration: 3,
          scrollTrigger: {
            trigger: element,
            start: "top 400",
            end: "bottom top",
            // markers: process.env.NODE_ENV === "development",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={revealRef} className="pb-10 reveal-section">
      {children}
    </div>
  );
}
