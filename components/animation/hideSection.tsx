"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HideSectionProps {
  children: React.ReactNode;
}

export default function HideSection({ children }: HideSectionProps) {
  const hideRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = hideRef.current;

    if (element) {
      gsap.to(
        element,

        {
          display: "none",
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top -70",
            end: "bottom top",
            // markers: process.env.NODE_ENV === "development",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={hideRef} className="pb-10 reveal-section">
      {children}
    </div>
  );
}
