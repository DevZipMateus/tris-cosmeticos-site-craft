
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Trís Cosméticos - Sua beleza em destaque | Produtos de qualidade em Palmas TO';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Trís Cosméticos em Palmas TO oferece produtos de qualidade premium para realçar sua beleza. Tratamentos capilares profissionais: hidratação, nutrição, reconstrução e alinhamento.');
    }

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: 'Trís Cosméticos - Sua beleza em destaque | Produtos de qualidade em Palmas TO' },
      { property: 'og:description', content: 'Trís Cosméticos em Palmas TO oferece produtos de qualidade premium para realçar sua beleza. Tratamentos capilares profissionais: hidratação, nutrição, reconstrução e alinhamento.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/lovable-uploads/81546172-0537-4bbe-acb2-cb944df58da9.png' },
      { property: 'og:url', content: window.location.href },
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });

    // Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": "Trís Cosméticos",
      "description": "Produtos de qualidade premium para realçar sua beleza",
      "url": window.location.href,
      "telephone": "+5563992742505",
      "email": "triscosmeticos.to@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua 16 Quadra 38 Lote 01",
        "addressLocality": "Palmas",
        "addressRegion": "TO",
        "addressCountry": "BR"
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-12:00"
      ],
      "sameAs": [
        "https://instagram.com/triscosmeticos"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
