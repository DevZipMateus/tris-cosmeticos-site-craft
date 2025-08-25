
import { Heart, Award, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="ornament-border pb-4 mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Nossa <span className="text-golden">História</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a jornada da Trís Cosméticos e nossa paixão pela beleza
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* História */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
              <div className="mb-6">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  A Realização de um Sonho
                </h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Trís Cosméticos é a realização de um sonho. Em 2015, após meu esposo fazer uma 
                  cirurgia e ter que fechar uma empresa de vendas de veículos, decidimos começar do 
                  zero na área da beleza.
                </p>
                <p>
                  Abrimos um salão "MD Sempre Bella" em Planaltina DF, onde descobrimos nossa verdadeira 
                  paixão pela área da beleza e bem-estar.
                </p>
                <p>
                  Em fevereiro de 2016, compramos uma pequena franquia de cosméticos e nos mudamos 
                  para Palmas TO, onde nasceu oficialmente a <strong className="text-primary">Trís Cosméticos</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Missão e Valores */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Missão */}
            <div className="card-elevated p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Nossa Missão</h4>
                  <p className="text-muted-foreground">
                    Fornecer produtos de qualidade que realcem a beleza, promovam o bem-estar, 
                    satisfação e a confiança dos nossos clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center card-elevated p-6 rounded-xl">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">2016</div>
                <div className="text-sm text-muted-foreground">Fundação</div>
              </div>
              <div className="text-center card-elevated p-6 rounded-xl">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-4 text-accent">Horário de Funcionamento</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-medium">08:00 às 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">08:00 às 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium text-accent">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
