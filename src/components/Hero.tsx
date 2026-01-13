import { MessageCircle } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5521999999999';
    const message = encodeURIComponent('Olá! Gostaria de contratar os serviços de home care da Nexa Care.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="bg-white pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex items-center px-8 lg:px-12 py-20 lg:py-28">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#25D366] bg-opacity-10 rounded-full">
                <p className="text-[#003049] text-sm font-bold">Rio de Janeiro • Atendemos Todo o Estado</p>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#003049] leading-tight">
                Resolva Agora o Cuidado que Você Precisa
              </h1>
              <p className="text-lg text-[#003049] leading-relaxed font-semibold">
                Home care profissional para residências, clínicas, hospitais e instituições de longa permanência.
              </p>
              <p className="text-base text-[#6b7280] leading-relaxed font-normal">
                Equipe especializada disponível 24/7. Atendimento imediato em todo o Estado do Rio de Janeiro. Chame agora e resolva seu problema hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-full text-base hover:bg-[#20BA5A] transition-all hover:shadow-lg font-bold flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Chame Agora no WhatsApp
                </button>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="border-2 border-[#003049] text-[#003049] px-8 py-4 rounded-full text-base hover:bg-[#003049] hover:text-white transition-all font-medium"
                >
                  Ver Serviços
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-extrabold text-[#003049]">10+</p>
                  <p className="text-sm text-[#6b7280] font-normal">Anos de Experiência</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-extrabold text-[#003049]">24/7</p>
                  <p className="text-sm text-[#6b7280] font-normal">Disponibilidade</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-extrabold text-[#003049]">RJ</p>
                  <p className="text-sm text-[#6b7280] font-normal">Todo o Estado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] xl:h-[700px]">
            <img
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Médica profissional brasileira sorrindo"
              className="w-full h-full object-cover rounded-bl-[60px] lg:rounded-bl-[80px] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
