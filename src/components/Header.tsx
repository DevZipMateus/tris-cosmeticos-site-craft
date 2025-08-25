
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <img
              src="/lovable-uploads/81546172-0537-4bbe-acb2-cb944df58da9.png"
              alt="Trís Cosméticos - Logo"
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-accent'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-accent'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-accent'
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-accent'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/5563992742505"
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'btn-primary' 
                  : 'btn-outline-light'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-lg">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <a
                  href="https://wa.me/5563992742505"
                  className="btn-primary block text-center py-2 rounded-lg"
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
