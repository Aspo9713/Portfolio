'use client';

import React from 'react';
import Link from 'next/link';


const LandingPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-gray-900 text-center px-4 bg-cover bg-center bg-no-repeat"
    >
      <h1 className="text-7xl font-black mb-8 mt-24">Grafický design</h1>

      <p className="text-xl max-w-xl mb-12">
        Nabízím profesionální služby v oblasti grafického designu, které pomohou tvému projektu vyniknout.
      </p>

      <div className="flex space-x-4 mb-8">
        <Link href="/prace">
          <button className="bg-gray-600 hover:bg-gray-700 transition-colors text-white font-semibold py-2 px-4 rounded-full">
            Zobrazit portfolio
          </button>
        </Link>
        <Link href="/kontakt">
          <button className="border border-white hover:bg-white hover:text-gray-700 transition-colors text-white font-semibold py-2 px-4 rounded-full">
            Kontaktovat
          </button>
        </Link>
      </div>

      {/* Statistiky – pod sebou na mobilu, vedle sebe na desktopu */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-32 space-y-8 md:space-y-0 mt-7 md:mt-32">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-gray-900">12</span>
          <span className="text-sm text-white">Let zkušeností</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-gray-900">21</span>
          <span className="text-sm text-white">Dokončených projektů</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-gray-900">1000+</span>
          <span className="text-sm text-white">Dodaných návrhů</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
