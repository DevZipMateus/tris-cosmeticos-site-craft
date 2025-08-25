
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5563992742505?text=Olá! Vim através do site da Trís Cosméticos e gostaria de mais informações."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </a>
  );
};

export default WhatsAppFloat;
