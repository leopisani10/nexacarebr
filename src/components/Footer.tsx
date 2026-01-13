import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-[#003049] text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-3">Links Rápidos</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-[#0077b6] transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-[#0077b6] transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-[#0077b6] transition-colors text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('precos')}
                  className="text-gray-300 hover:text-[#0077b6] transition-colors text-sm"
                >
                  Preços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('equipe')}
                  className="text-gray-300 hover:text-[#0077b6] transition-colors text-sm"
                >
                  Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-300 hover:text-[#0077b6] transition-colors text-sm"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300 text-sm flex flex-col items-center md:items-start">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#0077b6]" />
                <div>
                  <p>Avenida Ataulfo de Paiva, 1235</p>
                  <p>Sala 303 - Leblon Office Tower</p>
                  <p>Leblon, Rio de Janeiro - RJ</p>
                  <p>CEP: 22440-034</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-[#0077b6]" />
                <span>(21) 98768-1750</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-[#0077b6]" />
                <span>contato@nexacare.com.br</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-4">Atendimento</h3>
            <div className="space-y-3 text-gray-300 text-sm flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <Clock size={18} className="flex-shrink-0 text-[#0077b6]" />
                <div>
                  <p className="text-white font-semibold">24 horas por dia</p>
                  <p className="text-gray-400">7 dias por semana</p>
                </div>
              </div>
              <a
                href="https://wa.me/5521987681750"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full hover:bg-[#20bd5a] transition-all font-medium mt-2 hover:shadow-lg"
              >
                <MessageCircle size={18} />
                <span>Fale no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs">
              © 2025 Nexa Care. Todos os direitos reservados.
            </p>
            <div className="flex gap-5 text-xs text-gray-400">
              <a href="#" className="hover:text-[#0077b6] transition-colors">Privacidade</a>
              <a href="#" className="hover:text-[#0077b6] transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
