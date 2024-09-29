"use client";

import TextSwap from "@/components/textSwap";
import React from "react";
import { Play } from "lucide-react";
import MyCarousel from "@/components/carousel";
import ProjectCards from "@/components/projectCards";
import RevealOnScroll from "@/components/animation/revealOnScroll";
import FeaturesSection from "@/components/featuredSection";
import Slider from "@/components/slider";
// import BenefitCards from "@/components/benefitCrads";
import ProjectSecCard from "@/components/projectSecCard";
import graphicDesignData from "@/data/graphicDesignData.json";
import motionDesignData from "@/data/graphicDesignData.json";
import ServiceCard from "@/components/serviceCard";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-10 text-center mt-32">
        <h1 className="text-white text-3xl">Logo</h1>
        <TextSwap text1="motion" text2="design" />
        <p className="text-3xl text-gray-600 font-semibold">
          Your on demand design team
        </p>
        <button className="btn p-6 hover:shadow-3xl transition-shadow duration-500 hover:shadow-main text-2xl ">
          Register Your Internet
        </button>
        <p className="text-main/90 text-xs -mt-6">Limited spots available</p>
      </div>
      <div className="min-h-[80dvh] glassmorphism border-main border-4 p-10 my-10">
        <div className="h-3/4 relative">
          <img
            className="w-full h-3/4 object-cover blur-md"
            src="https://img.freepik.com/free-vector/realistic-glassmorphism-background_52683-87287.jpg?t=st=1727468060~exp=1727471660~hmac=1a90e86ac44611bedeac9609f5b0ab1f59292b87b9d5bdbfc0885b57899be310&w=280"
            alt="Glassmorphism background"
          />
          <div className="absolute inset-0 backdrop-blur-md rounded-lg flex items-center justify-center">
            <button className="flex items-center justify-center rounded-full h-20 w-20 bg-blue-600 animate-scale text-white">
              <Play strokeWidth={2} size={"40px"} />
            </button>
          </div>
        </div>
        <div className="flex items-center h-1/4 flex-col gap-2 mt-10">
          <h1 className="text-2xl font-semibold">Let&apos;s Talk!</h1>
          <p className="text-gray-600 text-lg">Learn more about how it</p>
          <p className="text-gray-600 text-lg">
            works and how we can help you.
          </p>
          <button className="btn p-6 hover:shadow-3xl transition-shadow duration-500 hover:shadow-main text-2xl ">
            Book a call
          </button>
        </div>
      </div>
      <MyCarousel />
      <ProjectCards />

      <RevealOnScroll>
        <div className="flex mt-20  flex-col items-center gap-5 text-center">
          <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold  ">
            Empower your brand <br />
            with one flat monthly fee
          </h1>
          <FeaturesSection />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Slider />
      </RevealOnScroll>
      {/* <RevealOnScroll>
      <div className="flex pb-10 flex-col items-center gap-5 text-center">
        <h1 className="md:text-6xl mt-20 sm:text-4xl text-3xl font-bold ">
          Subscription Benefits
        </h1>
        <h3 className="text-3xl text-gray-600 font-semibold">
          Once you experience them, you'll wonder <br /> how you ever managed
          without!
        </h3>
        <BenefitCards/>
      </div>
      </RevealOnScroll> */}
      <div className="flex pb-10 flex-col items-center gap-5 text-center">
        <RevealOnScroll>
          <h1 className="md:text-6xl mt-20 sm:text-4xl text-3xl font-bold ">
            Recent works <br />
            to inspire{" "}
          </h1>
          <button className="hover:border-main rounded-full border p-5 mt-6 hover:shadow-3xl transition-shadow duration-500 hover:shadow-main/25  text-2xl ">
            See Recent Work
          </button>
        </RevealOnScroll>
        <ProjectSecCard />
      </div>
      <div className="flex pb-10 flex-col items-center gap-5 text-center">
        <RevealOnScroll>
          <h1 className="md:text-6xl mt-20 sm:text-4xl text-3xl font-bold ">
            One service <br />
            for all{" "}
          </h1>
        </RevealOnScroll>
        <div className="md:px-0 sm:px-4 w-full">
          <ServiceCard title={"Graphic Design"} data={graphicDesignData} />
          <ServiceCard title={"Motion Design"} data={motionDesignData} />
        </div>

        {/* <RevealOnScroll> */}
        <h3 className="md:text-3xl text-2xl text-gray-600 font-semibold">
          Outsourcing a simple explainer video could cost € 5,000 to € 10,000 or
          more. With Design Plus Motion you get constant premium quality for a
          fraction of the price.
        </h3>
        {/* </RevealOnScroll> */}
      </div>
    </>
  );
}
