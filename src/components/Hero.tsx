
import { Sparkles, Crown, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/14b5257e-aa3e-4fdc-afb9-fe109683f8c1.png"
          alt="Produtos de beleza premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="absolute top-20 left-4 sm:left-10 animate-float hidden sm:block">
        <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-accent opacity-20" />
      </div>
      <div className="absolute top-32 sm:top-40 right-8 sm:right-20 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
        <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent opacity-30" />
      </div>
      <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-20 animate-float hidden sm:block" style={{ animationDelay: '2s' }}>
        <Star className="h-8 w-8 sm:h-10 sm:w-10 text-accent opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Logo Principal */}
          <div className="mb-6 sm:mb-8">
            <img
              src="/lovable-uploads/d832e90b-76da-4698-a324-38d05b825e3f.png"
              alt="Trís Cosméticos - Sua beleza em destaque"
              className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto mx-auto animate-float"
            />
          </div>

          {/* Título Principal */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Sua beleza em 
            <span className="text-accent block sm:inline sm:ml-2 lg:ml-4">
              destaque
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-4">
            Produtos de qualidade que realçam sua beleza natural, promovem bem-estar 
            e fortalecem sua confiança.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 px-4">
            <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-medium text-xs sm:text-sm">✨ Qualidade Premium</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-medium text-xs sm:text-sm">👑 Desde 2016</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-medium text-xs sm:text-sm">💎 Produtos Exclusivos</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              onClick={() => scrollToSection('servicos')}
              className="btn-outline-light px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto sm:min-w-[200px]"
            >
              Nossos Serviços
            </button>
            <a
              href="https://wa.me/5563992742505?text=Olá! Gostaria de saber mais sobre os produtos da Trís Cosméticos."
              className="btn-outline-light px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto sm:min-w-[200px] text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
