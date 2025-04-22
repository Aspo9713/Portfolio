"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Junák",
      button: "Explore Component",
      src: "/imgs/plakat2.png",
    },
    {
      title: "Geometrie",
      button: "Explore Component",
      src: "/imgs/jelen.jpg",
    },
    {
      title: "Jičín město pohádky",
      button: "Explore Component",
      src: "/imgs/jmp.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
