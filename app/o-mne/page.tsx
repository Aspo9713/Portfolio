// app/about/page.tsx

"use client";

import React from "react";
import { NavbarDemo } from "../components/navbar";
import AboutPage from "../components/about";
import Footer from "../components/footer";

const About: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <NavbarDemo />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default About;
