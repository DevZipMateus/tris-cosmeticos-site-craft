
import { Sparkles, Crown, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Crown className="h-8 w-8 text-accent opacity-20" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="h-6 w-6 text-accent opacity-30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="h-10 w-10 text-accent opacity-25" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo Principal */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/81546172-0537-4bbe-acb2-cb944df58da9.png"
              alt="Trís Cosméticos - Sua beleza em destaque"
              className="h-32 lg:h-40 w-auto mx-auto animate-float"
            />
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sua beleza em 
            <span className="text-accent block lg:inline lg:ml-4">
              destaque
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Produtos de qualidade que realçam sua beleza natural, promovem bem-estar 
            e fortalecem sua confiança.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-medium">✨ Qualidade Premium</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-medium">👑 Desde 2016</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-medium">💎 Produtos Exclusivos</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('servicos')}
              className="btn-outline-light px-8 py-3 rounded-lg text-lg font-semibold min-w-[200px]"
            >
              Nossos Serviços
            </button>
            <a
              href="https://wa.me/5563992742505?text=Olá! Gostaria de saber mais sobre os produtos da Trís Cosméticos."
              className="btn-outline-light px-8 py-3 rounded-lg text-lg font-semibold min-w-[200px] text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
