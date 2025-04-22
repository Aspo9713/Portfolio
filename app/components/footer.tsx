import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Popis */}
        <div>
          <h2 className="text-white text-2xl font-semibold mb-2">Portfolio</h2>
          <p className="text-sm">
            Profesionální grafický design, který tvému projektu dodá styl a sílu zaujmout.
          </p>
        </div>

        {/* Navigace */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Navigace</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Hlavní Stránka</a></li>
            <li><a href="#" className="hover:text-white">O mně</a></li>
            <li><a href="#" className="hover:text-white">Portfolio</a></li>
            <li><a href="#" className="hover:text-white">Kontakt</a></li>
          </ul>
        </div>

        {/* Sociální sítě */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Sleduj mě</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                📷
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                💼
              </a>
            </li>
            <li>
              <a href="#" aria-label="GitHub" className="hover:text-white">
                🐙
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Portfolio. Všechna práva vyhrazena.
      </div>
    </footer>
  );
};

export default Footer;
