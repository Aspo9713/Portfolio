// app/prace/page.tsx

"use client";

import React from "react";
import { NavbarDemo } from "../components/navbar";
import ProjectsPage from "../components/prace";
import Footer from "../components/footer";

const Práce: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <NavbarDemo />
      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default Práce;
