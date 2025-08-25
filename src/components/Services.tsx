
import { Droplets, Sparkles, RefreshCw, Shield, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Hidratação',
      description: 'Tratamentos profissionais para manter seus cabelos sempre hidratados e saudáveis.',
      features: ['Máscaras intensivas', 'Produtos premium', 'Resultados duradouros']
    },
    {
      icon: Sparkles,
      title: 'Nutrição',
      description: 'Nutrição profunda para cabelos danificados e ressecados, devolvendo vida e brilho.',
      features: ['Fórmulas nutritivas', 'Reparação profunda', 'Cabelos revitalizados']
    },
    {
      icon: RefreshCw,
      title: 'Reconstrução',
      description: 'Reconstrução capilar para cabelos extremamente danificados por processos químicos.',
      features: ['Reconstrução molecular', 'Fortalecimento', 'Recuperação total']
    },
    {
      icon: Shield,
      title: 'Alinhamento',
      description: 'Técnicas de alinhamento capilar para cabelos mais disciplinados e manejáveis.',
      features: ['Redução do volume', 'Controle do frizz', 'Cabelos alinhados']
    },
    {
      icon: Package,
      title: 'Kits Cronograma',
      description: 'Kits completos para manutenção e cuidado capilar em casa seguindo cronograma.',
      features: ['Produtos selecionados', 'Rotina personalizada', 'Resultados profissionais']
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="ornament-border pb-4 mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground px-4">
              Nossos <span className="text-golden">Serviços</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Oferecemos uma gama completa de tratamentos capilares profissionais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="card-elevated p-4 sm:p-6 rounded-xl animate-slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-xl w-fit mb-3 sm:mb-4">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/5563992742505?text=Olá! Gostaria de saber mais sobre o serviço de ${service.title}.`}
                  className="btn-secondary w-full text-center py-2 sm:py-3 rounded-lg block text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba Mais
                </a>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-primary to-accent p-6 sm:p-8 rounded-2xl text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-4">
              Pronta para transformar seus cabelos?
            </h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90 px-4">
              Entre em contato conosco e descubra qual tratamento é ideal para você
            </p>
            <a
              href="https://wa.me/5563992742505?text=Olá! Gostaria de agendar uma consulta para escolher o melhor tratamento capilar."
              className="bg-white text-primary px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors inline-block text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
