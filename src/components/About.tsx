import { CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    'Equipe multidisciplinar com anos de experiência',
    'Tecnologia avançada para monitoramento contínuo',
    'Planos flexíveis que se adaptam às suas necessidades',
    'Suporte 24/7 com resposta rápida em emergências',
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-[#dbeafe] rounded-full mb-6">
                <p className="text-[#003049] text-sm font-medium">Sobre Nós</p>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#003049] mb-6 leading-tight">
                Transformando o Cuidado de Saúde no Rio de Janeiro
              </h2>
              <p className="text-lg text-[#6b7280] leading-relaxed font-normal mb-6">
                Somos a escolha preferida de centenas de famílias cariocas que buscam excelência em atendimento domiciliar. Combinamos tecnologia de ponta, profissionais altamente qualificados e um atendimento verdadeiramente humanizado.
              </p>
              <p className="text-base text-[#6b7280] leading-relaxed font-normal">
                Mais do que um serviço de home care, somos parceiros na jornada de saúde da sua família. Oferecemos soluções completas que vão desde cuidados básicos até procedimentos complexos, sempre com a segurança e conforto que você merece.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="text-[#0077b6]" size={24} strokeWidth={2} />
                  </div>
                  <p className="text-[#4b5563] font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-[#0077b6] to-[#003049] text-white px-10 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold text-lg">
              Agende uma Avaliação Gratuita
            </button>
          </div>

          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7551677/pexels-photo-7551677.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Enfermeira profissional da Nexa Care"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#0077b6] to-[#003049] rounded-[24px] p-8 shadow-2xl">
              <p className="text-5xl font-extrabold text-white mb-2">10+</p>
              <p className="text-sm text-white/90 font-medium">Anos de Excelência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
