
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img
              src="/lovable-uploads/81546172-0537-4bbe-acb2-cb944df58da9.png"
              alt="Trís Cosméticos"
              className="h-16 w-auto"
            />
            <p className="text-white/80 leading-relaxed">
              Sua beleza em destaque com produtos de qualidade premium. 
              Desde 2016 cuidando da sua autoestima com carinho e dedicação.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/triscosmeticos"
                className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5563992742505"
                className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:triscosmeticos.to@gmail.com"
                className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent">Navegação</h3>
            <nav className="space-y-2">
              <a
                href="#inicio"
                className="block text-white/80 hover:text-accent transition-colors"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block text-white/80 hover:text-accent transition-colors"
              >
                Sobre Nós
              </a>
              <a
                href="#servicos"
                className="block text-white/80 hover:text-accent transition-colors"
              >
                Serviços
              </a>
              <a
                href="#contato"
                className="block text-white/80 hover:text-accent transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-white/80">
                  Rua 16 Quadra 38 Lote 01<br />
                  Palmas, TO
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="https://wa.me/5563992742505"
                  className="text-white/80 hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (63) 99274-2505
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:triscosmeticos.to@gmail.com"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  triscosmeticos.to@gmail.com
                </a>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="font-semibold text-accent mb-2">Horário</h4>
              <div className="text-sm text-white/80 space-y-1">
                <p>Seg - Sex: 08:00 às 18:00</p>
                <p>Sábado: 08:00 às 12:00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Trís Cosméticos. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm">
              CNPJ: 14.388.422/0001-26
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
