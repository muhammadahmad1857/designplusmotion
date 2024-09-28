"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const TextSwap = ({ text1, text2 }: { text1: string; text2: string }) => {
  // const ref = useRef<HTMLElement | null>(null);
  // using usegsap
  console.log(text1, text2);
  // const tl = gsap.timeline();
  useGSAP(() => {
    gsap.from(".mot", {
      duration: 1,
      ease: "power3.inOut",

      translateX: 50,
      //   opacity: 0,
      delay: 2,
      stagger: 1,
    });
  });
  // // function to split text
  // const splitText = (text: string) =>
  //   text.split("").map((char, index) => (
  //     <span key={index} style={{ display: "inline-block" }}>
  //       {char}
  //     </span>
  //   ));
  return (
    <div>
      <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold  text-center">
        {["M", "O", "T", "I", "O", "N", " "].map((char, i) => {
          return (
            <span className="mot" key={i}>
              {char}
            </span>
          );
        })}
        {/* {["D", "E", "S", "I", "G", "N", " "].map((char, i) => {
          return (
            <span className="mot" key={i}>
              {char}
            </span>
          );
        })}{" "} */}
        when you <br /> need it!
      </h1>
    </div>
  );
};

export default TextSwap;
