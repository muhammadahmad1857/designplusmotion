
// Main component to render all features
import featureData from "@/data/featureData.json"; // Ensure featureData is typed correctly
import FeatureCard,{FeatureType} from "./featureCard";

const FeaturesSection = () => {
    // Ensure featureData is typed correctly
    const typedFeatureData: FeatureType[] = featureData as FeatureType[];
  
    return (
      <div className="w-full flex flex-wrap justify-center items-center py-10">
        {typedFeatureData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title1={feature.title1}
            title2={feature.title2}
            description1={feature.description1}
            description2={feature.description2}
          />
        ))}
      </div>
    );
  };
  
  export default FeaturesSection;
  