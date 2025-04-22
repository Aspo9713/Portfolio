import React from 'react';
import { Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceHook() {
  return (
    <motion.section
      className=" py-16 px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <Handshake className="w-16 h-16 text-gray-900" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-4">
          Spolupráce na míru vašim potřebám
        </h2>
        <p className="text-white mb-8">
          Věřím ve vzájemnou důvěru a otevřenou komunikaci. Pojďme společně vytvořit
          projekt, který bude odrážet vaši jedinečnou vizi a přitáhne pozornost.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 border border-gray-600 rounded-full text-gray-900 font-medium hover:bg-gray-600 hover:text-white transition bg-white"
        >
          Kontaktujte mě
        </a>
      </div>
    </motion.section>
  );
}
