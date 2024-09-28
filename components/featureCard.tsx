"use client";

import React from "react";
import * as LucideIcons from "lucide-react"; // Import all icons from `lucide-react`

// Define a type for the available icon names
type IconName = keyof typeof LucideIcons;

// FeatureType interface to define your data structure
export interface FeatureType {
  icon: IconName; // Ensure icon is one of the valid keys
  title1: string;
  title2: string;
  description1: string;
  description2: string;
}

// Create a feature card component
const FeatureCard: React.FC<FeatureType> = ({
  icon,
  title1,
  title2,
  description1,
  description2,
}) => {
  // Dynamically select the correct icon component from LucideIcons
  const IconComponent = LucideIcons[icon] as React.FC<
    React.SVGProps<SVGSVGElement>
  >; // Assert the type

  return (
    <div className="flex flex-col items-center justify-center w-72 h-80 text-center p-6 border hover:border-main/50 transition-colors duration-300 border-main/25 rounded-lg shadow-lg glassmorphism backdrop-blur-lg m-4">
      <div className=" mb-4">
        {IconComponent ? (
          <IconComponent
            width={48}
            height={48}
            className="text-white icon h-10 w-10 rounded-full p-2 hover:border-main/25 transition-colors duration-300 border-main"
          /> // Use width and height
        ) : (
          <LucideIcons.AlertCircle
            width={48}
            height={48}
            className="text-white"
          /> // Fallback icon
        )}
      </div>
      <h2 className=" text-3xl font-semibold mb-2">
        {title1} <br /> {title2}
      </h2>
      <p className="text-gray-600 mb-1">
        {description1} <br />
        {description2}
      </p>
    </div>
  );
};

export default FeatureCard;