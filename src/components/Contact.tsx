
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="ornament-border pb-4 mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Entre em <span className="text-golden">Contato</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para cuidar da sua beleza. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="card-elevated p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua 16 Quadra 38 Lote 01<br />
                      Palmas, TO
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Telefone</h4>
                    <a 
                      href="https://wa.me/5563992742505"
                      className="text-primary hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (63) 99274-2505
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <a 
                      href="mailto:triscosmeticos.to@gmail.com"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      triscosmeticos.to@gmail.com
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Horário de Funcionamento</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 08:00 às 18:00</p>
                      <p>Sábado: 08:00 às 12:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Redes Sociais</h4>
                    <a 
                      href="https://instagram.com/triscosmeticos"
                      className="text-primary hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @triscosmeticos
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CNPJ */}
            <div className="card-elevated p-4 rounded-xl bg-muted/30">
              <p className="text-sm text-muted-foreground text-center">
                <strong>CNPJ:</strong> 14.388.422/0001-26
              </p>
            </div>
          </div>

          {/* Formulário de Contato via WhatsApp */}
          <div className="card-elevated p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Fale Conosco
            </h3>
            
            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground">
                Entre em contato conosco através do WhatsApp para um atendimento mais rápido e personalizado.
              </p>
            </div>

            <div className="space-y-4">
              {/* WhatsApp Buttons */}
              <a
                href="https://wa.me/5563992742505?text=Olá! Gostaria de saber mais sobre os produtos da Trís Cosméticos."
                className="btn-primary w-full text-center py-4 rounded-lg font-semibold flex items-center justify-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="https://wa.me/5563992742505?text=Olá! Gostaria de agendar um horário para tratamento capilar."
                className="btn-secondary w-full text-center py-4 rounded-lg font-semibold flex items-center justify-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Clock className="h-5 w-5" />
                <span>Agendar Horário</span>
              </a>
            </div>

            {/* Informações Adicionais */}
            <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
              <h4 className="font-semibold text-foreground mb-2">
                💎 Atendimento Personalizado
              </h4>
              <p className="text-sm text-muted-foreground">
                Nossa equipe está pronta para te ajudar a escolher os melhores produtos 
                e tratamentos para o seu tipo de cabelo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
