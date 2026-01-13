import { Home, Heart, Users, Clock, Shield, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Atendimento Domiciliar',
    description: 'Cuidados personalizados com profissionais qualificados disponíveis 24 horas por dia, 7 dias por semana.',
  },
  {
    icon: Stethoscope,
    title: 'Cuidados Pós-Cirúrgicos',
    description: 'Acompanhamento especializado durante o período de recuperação, garantindo conforto e segurança.',
  },
  {
    icon: Users,
    title: 'Acompanhamento de Idosos',
    description: 'Cuidado compassivo e atencioso para garantir o bem-estar e qualidade de vida dos idosos.',
  },
  {
    icon: Heart,
    title: 'Enfermagem Domiciliar',
    description: 'Profissionais de enfermagem capacitados para procedimentos técnicos e cuidados complexos.',
  },
  {
    icon: Clock,
    title: 'Plantão 24h',
    description: 'Disponibilidade total com equipes preparadas para atendimento emergencial e rotineiro.',
  },
  {
    icon: Shield,
    title: 'Cuidados Paliativos',
    description: 'Assistência humanizada focada no conforto e dignidade em momentos delicados.',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#003049] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-[#6b7280] font-normal max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços de home care para atender todas as necessidades da sua família
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profissional de enfermagem"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0077b6] text-white p-8 rounded-[24px] shadow-xl max-w-xs">
              <p className="text-sm font-medium leading-relaxed">
                Atendemos instituições públicas, privadas e residências
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f8f9fa] rounded-[24px] p-6 hover:shadow-xl hover:bg-white transition-all duration-300 group border border-transparent hover:border-[#0077b6]/20"
                >
                  <div className="mb-4 inline-block p-3 bg-white rounded-[16px] group-hover:bg-[#003049] transition-colors shadow-sm">
                    <Icon className="text-[#0077b6] group-hover:text-white transition-colors" size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#003049] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
