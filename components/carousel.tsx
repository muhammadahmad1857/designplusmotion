import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "@/data/companies.json";
import { client } from "@/sanity/lib/client";

interface Company {
  path: string;
  name: string;
  id: number;
}

const fetchCompanies = async () => {
  try {
    const response = await client.fetch("*[type == 'companies']");
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
};
const MyCarousel = async () => {
    const data = await fetchCompanies()
  return (
    <Carousel
      className="w-full  py-20 "
      opts={{
        loop: true,
      }}
      plugins={[Autoplay({ delay: 1500, stopOnInteraction: false })]}
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center ">
        {companies.map(
          (company: { name: string; id: number; path: string }) => {
            return (
              <CarouselItem
                key={company.id}
                className="sm:basis-1/3 basis-1/2 lg:basis-1/6"
              >
                <img
                  src={company.path}
                  alt={company.name}
                  className="h-9 sm:h-14 object-contain cursor-pointer  transition-all duration-500 hover:scale-110 "
                />
              </CarouselItem>
            );
          }
        )}
      </CarouselContent>
    </Carousel>
  );
};

export default MyCarousel;
