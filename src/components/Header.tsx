
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000] border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection('inicio')}
          >
            <img
              src="/lovable-uploads/d832e90b-76da-4698-a324-38d05b825e3f.png"
              alt="Trís Cosméticos - Logo"
              className="h-6 sm:h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="font-medium transition-colors text-sm xl:text-base text-white hover:text-primary"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="font-medium transition-colors text-sm xl:text-base text-white hover:text-primary"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="font-medium transition-colors text-sm xl:text-base text-white hover:text-primary"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="font-medium transition-colors text-sm xl:text-base text-white hover:text-primary"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/5563992742505"
              className="px-4 xl:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm xl:text-base bg-white/10 text-white border border-white/60 hover:bg-primary hover:text-black hover:border-primary backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#000000] border-t border-white/10 shadow-lg">
            <nav className="py-4 space-y-1">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <a
                  href="https://wa.me/5563992742505"
                  className="bg-white/10 text-white border border-white/60 hover:bg-primary hover:text-black hover:border-primary block text-center py-3 rounded-lg transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale Conosco
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
