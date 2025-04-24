// app/page.tsx
"use client";

import React from "react";
import { NavbarDemo } from "./components/navbar";
import Landingpage from "./components/landingpage";
import Footer from "./components/footer";
import { CarouselDemo } from "./components/carousel";
import ServicesGrid from "./components/sluzby";
import ServiceHook from "./components/hook";



const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <NavbarDemo />
      
      <Landingpage />
      <ServicesGrid/>
      <CarouselDemo />
      <ServiceHook/>
      <Footer />
      
    </div>
  );
};

export default LandingPage;
