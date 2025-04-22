import React from 'react';
import { Camera, PenTool, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'branding',
    title: 'Branding',
    description: 'Vytvořím jedinečnou identitu vaší značky.',
    icon: <Palette className="w-12 h-12 text-gray-900" />,
  },
  {
    id: 'illustration',
    title: 'Ilustrace',
    description: 'Originální ilustrace pro vaše projekty.',
    icon: <PenTool className="w-12 h-12 text-gray-900" />,
  },
  {
    id: 'photography',
    title: 'Fotografie',
    description: 'Profesionální a stylové snímky.',
    icon: <Camera className="w-12 h-12 text-gray-900" />,
  },
];

export default function ServicesGrid() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white bg-opacity-80 backdrop-blur-md shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="mb-6 text-gray-600">{service.description}</p>
            <a
              href={`/services/${service.id}`}
              className="mt-auto inline-block px-5 py-2 border border-gray-600 rounded-full font-medium text-gray-600 hover:bg-gray-600 hover:text-white transition"
            >
              Detail služby
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
