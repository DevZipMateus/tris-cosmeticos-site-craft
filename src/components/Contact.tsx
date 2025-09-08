
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="ornament-border pb-4 mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground px-4">
              Entre em <span className="text-golden">Contato</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos aqui para cuidar da sua beleza. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-6 sm:space-y-8">
            <div className="card-elevated p-4 sm:p-6 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Endereço */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Endereço</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Rua Ms 22 Quadra 69A Lote 03<br />
                      CEP: 77066-024 - Palmas, TO
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Telefone</h4>
                    <a 
                      href="https://wa.me/5563992742505"
                      className="text-primary hover:text-accent transition-colors text-xs sm:text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (63) 99274-2505
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:triscosmeticos.to@gmail.com"
                      className="text-primary hover:text-accent transition-colors text-xs sm:text-sm break-all"
                    >
                      triscosmeticos.to@gmail.com
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Horário de Funcionamento</h4>
                    <div className="text-muted-foreground space-y-1 text-xs sm:text-sm">
                      <p>Segunda a Sexta: 08:00 às 18:00</p>
                      <p>Sábado: 08:00 às 12:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Redes Sociais</h4>
                    <a 
                      href="https://instagram.com/triscosmeticos"
                      className="text-primary hover:text-accent transition-colors text-xs sm:text-sm"
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
            <div className="card-elevated p-3 sm:p-4 rounded-xl bg-muted/30">
              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                <strong>CNPJ:</strong> 14.388.432/0001-26
              </p>
            </div>
          </div>

          {/* Formulário de Contato via WhatsApp */}
          <div className="card-elevated p-4 sm:p-6 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Fale Conosco
            </h3>
            
            <div className="space-y-4 mb-4 sm:mb-6">
              <p className="text-muted-foreground text-sm sm:text-base">
                Entre em contato conosco através do WhatsApp para um atendimento mais rápido e personalizado.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* WhatsApp Buttons */}
              <a
                href="https://wa.me/5563992742505?text=Olá! Gostaria de saber mais sobre os produtos da Trís Cosméticos."
                className="btn-primary w-full text-center py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="https://wa.me/5563992742505?text=Olá! Gostaria de agendar um horário para tratamento capilar."
                className="btn-secondary w-full text-center py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Agendar Horário</span>
              </a>
            </div>

            {/* Informações Adicionais */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                💎 Atendimento Personalizado
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
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
