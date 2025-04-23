import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <div className="max-w-4xl mx-auto  bg-opacity-80 backdrop-blur-md rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-gray-900/80 mb-6 text-center">
          O mně
        </h1>
        <p className="text-white mb-4">
          Jmenuji se Adam Špiroch a již více než 12 let se věnuji profesionálnímu grafickému designu. Moje práce pomáhá značkám vyčnívat a oslovit zákazníky prostřednictvím originálních vizuálních řešení.
        </p>
        <p className="text-white mb-8">
          Specializuji se na branding, ilustraci a fotografii. Ke každému projektu přistupuji individuálně, od počáteční konzultace až po finální dodání podkladů.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
          <div>
            <span className="text-3xl font-bold text-gray-900">12</span>
            <p className="text-white">let zkušeností</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">21</span>
            <p className="text-white">dokončených projektů</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">1000+</span>
            <p className="text-white">dodání návrhů</p>
          </div>
        </div>

        <div className="text-center">
          <motion.a
            href="/contact"
            className="inline-block px-8 py-3 border border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Ozvěte se mi
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
