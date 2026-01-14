import { Heart, Stethoscope, Activity, Brain, Users, Apple, MessageCircle, Thermometer, Mic, Dumbbell, Award, CheckCircle, Sparkles } from 'lucide-react';

const teamMembers = [
  {
    icon: Heart,
    title: 'Cuidadores de Idosos',
    description: 'Profissionais dedicados ao cuidado diário e bem-estar dos idosos.',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600'
  },
  {
    icon: Activity,
    title: 'Técnicos de Enfermagem',
    description: 'Cuidados técnicos especializados e monitoramento profissional.',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Stethoscope,
    title: 'Enfermeiros',
    description: 'Profissionais graduados para cuidados complexos e supervisão clínica.',
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  {
    icon: Thermometer,
    title: 'Médicos',
    description: 'Todas as especialidades médicas para acompanhamento completo.',
    color: 'from-red-500 to-orange-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    icon: Mic,
    title: 'Fonoaudiólogos',
    description: 'Reabilitação da comunicação, linguagem e deglutição.',
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600'
  },
  {
    icon: Dumbbell,
    title: 'Fisioterapeutas',
    description: 'Reabilitação física e melhora da mobilidade funcional.',
    color: 'from-green-500 to-lime-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Terapeutas Ocupacionais',
    description: 'Promoção de independência nas atividades diárias.',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600'
  },
  {
    icon: Brain,
    title: 'Psicólogos',
    description: 'Suporte emocional e acompanhamento psicológico.',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    icon: Apple,
    title: 'Nutricionistas',
    description: 'Planejamento nutricional personalizado e dietas terapêuticas.',
    color: 'from-lime-500 to-green-600',
    bgColor: 'bg-lime-50',
    iconColor: 'text-lime-600'
  },
  {
    icon: MessageCircle,
    title: 'Assistentes Sociais',
    description: 'Apoio social e orientação familiar especializada.',
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600'
  }
];

const stats = [
  { number: '500+', label: 'Profissionais Qualificados', icon: Users },
  { number: '15+', label: 'Especialidades Disponíveis', icon: Award },
  { number: '24/7', label: 'Suporte Contínuo', icon: CheckCircle }
];

export function Team() {
  return (
    <section id="equipe" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,119,182,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(0,48,73,0.06),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0077b6]/10 px-6 py-2 rounded-full mb-6">
            <Sparkles className="text-[#0077b6]" size={20} />
            <span className="text-[#0077b6] font-bold text-sm uppercase tracking-wider">
              Equipe Multidisciplinar
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#003049] mb-6">
            Profissionais Especializados
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conte com uma equipe completa de especialistas comprometidos com o cuidado humanizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6] to-[#003049] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl text-center border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0077b6] to-[#003049] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} strokeWidth={2} />
                  </div>
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#003049] to-[#0077b6] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-16">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-3xl blur-md opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>
                <div className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className={`${member.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto`}>
                    <Icon className={member.iconColor} size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-center text-base lg:text-lg font-bold text-[#003049] mb-3 group-hover:text-[#0077b6] transition-colors">
                    {member.title}
                  </h3>
                  <p className="text-center text-gray-600 text-xs lg:text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6] to-[#003049] rounded-[32px] blur-2xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-[#003049] via-[#004d73] to-[#0077b6] rounded-[32px] p-10 lg:p-16 text-center shadow-2xl border border-white/10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Award className="text-white" size={20} />
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                Atendimento Personalizado
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Equipes Multiprofissionais Personalizadas
            </h3>
            <p className="text-blue-100 text-base lg:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Monte sua equipe ideal combinando diferentes profissionais. Entre em contato via WhatsApp para um orçamento personalizado.
            </p>
            <a
              href="https://wa.me/5521982020808?text=Olá! Gostaria de saber mais sobre equipes multiprofissionais."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#003049] px-10 py-5 rounded-full font-extrabold text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <MessageCircle size={24} />
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
