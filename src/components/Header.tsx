import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <div className="bg-white shadow-xl rounded-3xl">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <nav className="flex items-center justify-between py-5">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center"
            >
              <img
                src="/nexa-care-logo-final.png"
                alt="Nexa Care Logo"
                className="h-8 md:h-10 transition-transform hover:scale-105"
              />
            </button>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-[#003049] transition-colors font-medium"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-600 hover:text-[#003049] transition-colors font-medium"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-600 hover:text-[#003049] transition-colors font-medium"
              >
                Sobre Nós
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('precos')}
                className="text-gray-600 hover:text-[#003049] transition-colors font-medium"
              >
                Preços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('equipe')}
                className="text-gray-600 hover:text-[#003049] transition-colors font-medium"
              >
                Equipe
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-gray-600 hover:text-[#003049] transition-colors font-medium"
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-[#003049] text-white px-7 py-3 rounded-full hover:bg-[#004c6d] transition-colors font-medium"
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>

        {isMenuOpen && (
          <ul className="lg:hidden pb-4 space-y-4">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-600 hover:text-[#004e5a] transition-colors font-medium"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-gray-600 hover:text-[#004e5a] transition-colors font-medium"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-gray-600 hover:text-[#004e5a] transition-colors font-medium"
              >
                Sobre Nós
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('precos')}
                className="block w-full text-left text-gray-600 hover:text-[#004e5a] transition-colors font-medium"
              >
                Preços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('equipe')}
                className="block w-full text-left text-gray-600 hover:text-[#004e5a] transition-colors font-medium"
              >
                Equipe
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('blog')}
                className="block w-full text-left text-gray-600 hover:text-[#004e5a] transition-colors font-medium"
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-[#003049] text-white px-6 py-3 rounded-full hover:bg-[#004c6d] transition-colors w-full font-medium"
              >
                Contato
              </button>
            </li>
          </ul>
        )}
        </div>
      </div>
    </header>
  );
}
