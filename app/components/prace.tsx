// app/prace/page.tsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavbarDemo } from "../components/navbar";
import Footer from "../components/footer";

// Příklad projektů – vyměň za své vlastní
const projects = [
  {
    id: "web-stranky",
    title: "Webové stránky pro restauraci",
    description:
      "Responzivní design, který odráží atmosféru vaší restaurace a zvyšuje počet rezervací online.",
    image: "/images/project1.jpg",
    link: "/prace/web-stranky",
  },
  {
    id: "branding-startup",
    title: "Branding pro startup",
    description:
      "Kompletní vizuální identita od loga až po marketingové materiály, která zaujme investory i zákazníky.",
    image: "/images/project2.jpg",
    link: "/prace/branding-startup",
  },
  {
    id: "marketing-materialy",
    title: "Marketingové materiály",
    description:
      "Atraktivní letáky, bannery a sociální grafiku, díky kterým vaše kampaň vynikne.",
    image: "/images/project3.jpg",
    link: "/prace/marketing-materialy",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <NavbarDemo />

      {/* Hero sekce */}
      <motion.section
        className="flex flex-col items-center justify-center py-20 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-12">Moje projekty</h1>
        <p className="max-w-2xl text-white">
          Prohlédněte si výběr mých realizací – webové stránky, vizuální identity
          a marketingové kampaně, které pomáhají klientům vyčnívat.
        </p>
      </motion.section>

      {/* Grid projektů */}
      <motion.section
        className="py-12 px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {proj.title}
                </h2>
                <p className="text-gray-700 mb-4">{proj.description}</p>
                <Link
                  href={proj.link}
                  className="inline-block px-4 py-2 border border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
                >
                  Více o projektu
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
