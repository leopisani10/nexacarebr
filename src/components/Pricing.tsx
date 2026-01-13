import { Clock, Sun, Moon, CheckCircle2, Shield, Heart, Stethoscope } from 'lucide-react';

export function Pricing() {
  const caregiversPlans = [
    {
      icon: Sun,
      title: 'Plantão Diurno',
      duration: '12 horas',
      schedule: '7h às 19h',
      price: '250',
      description: 'Acompanhamento completo durante o dia',
      benefits: [
        'Profissional qualificado e treinado',
        'Auxílio em atividades diárias',
        'Administração de medicamentos',
        'Auxílio de refeições',
        'Higiene pessoal e conforto',
        'Supervisão e segurança',
      ],
    },
    {
      icon: Clock,
      title: 'Plantão Integral',
      duration: '24 horas',
      schedule: '7h às 7h',
      price: '350',
      description: 'Cuidado completo e ininterrupto',
      featured: true,
      benefits: [
        'Cuidador dedicado 24 horas',
        'Cobertura diurna e noturna completa',
        'Acompanhamento em consultas médicas',
        'Gestão completa de medicamentos',
        'Atividades terapêuticas e recreativas',
        'Higiene, alimentação e mobilidade',
        'Relatórios detalhados para família',
        'Suporte emocional contínuo',
      ],
    },
    {
      icon: Moon,
      title: 'Plantão Noturno',
      duration: '12 horas',
      schedule: '19h às 7h',
      price: '280',
      description: 'Tranquilidade para você e seu familiar',
      benefits: [
        'Cuidador especializado em rotina noturna',
        'Monitoramento durante o sono',
        'Auxílio em necessidades noturnas',
        'Administração de medicamentos',
        'Prevenção de quedas e acidentes',
        'Relatório diário de atividades',
      ],
    },
  ];

  const nursingPlans = [
    {
      icon: Sun,
      title: 'Plantão Diurno',
      duration: '12 horas',
      schedule: '7h às 19h',
      price: '350',
      description: 'Cuidado técnico especializado durante o dia',
      benefits: [
        'Técnico de enfermagem certificado',
        'Administração de medicamentos injetáveis',
        'Curativos e procedimentos técnicos',
        'Monitoramento de sinais vitais',
        'Auxílio de refeições e hidratação',
        'Higiene e conforto do paciente',
        'Controle de glicemia e pressão',
      ],
    },
    {
      icon: Clock,
      title: 'Plantão Integral',
      duration: '24 horas',
      schedule: '7h às 7h',
      price: '420',
      description: 'Assistência técnica completa 24 horas',
      featured: true,
      benefits: [
        'Técnico de enfermagem dedicado 24h',
        'Todos os procedimentos técnicos',
        'Medicação via oral, IM, SC e EV',
        'Sondagens e cuidados com dispositivos',
        'Monitoramento de sinais vitais',
        'Curativos e aspiração de vias aéreas',
        'Controle de diurese e evacuação',
        'Relatórios técnicos para a família',
      ],
    },
    {
      icon: Moon,
      title: 'Plantão Noturno',
      duration: '12 horas',
      schedule: '19h às 7h',
      price: '380',
      description: 'Suporte técnico noturno profissional',
      benefits: [
        'Técnico especializado em plantão noturno',
        'Monitoramento contínuo de sinais vitais',
        'Administração de medicamentos',
        'Procedimentos técnicos noturnos',
        'Controle de oxigenoterapia',
        'Prevenção de escaras e posicionamento',
        'Relatório técnico detalhado',
      ],
    },
  ];

  const handleWhatsAppContact = (planTitle: string, serviceType: string) => {
    const phone = '5521996100386';
    const message = encodeURIComponent(`Olá! Gostaria de contratar o ${planTitle} de ${serviceType}.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const renderPlanSection = (plans: typeof caregiversPlans, title: string, icon: any, serviceType: string) => {
    const Icon = icon;
    return (
      <div className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#003049]/10 px-6 py-3 rounded-full mb-6">
            <Icon className="w-6 h-6 text-[#003049]" />
            <span className="text-[#003049] font-bold text-lg">{title}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan) => {
            const PlanIcon = plan.icon;
            return (
              <div
                key={plan.title}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  plan.featured ? 'ring-4 ring-[#003049] transform md:scale-105' : ''
                }`}
              >
                {plan.featured && (
                  <div className="bg-[#003049] text-white text-center py-2 text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#003049]/10 p-4 rounded-full">
                      <PlanIcon className="w-8 h-8 text-[#003049]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">{plan.description}</p>

                  <div className="text-center mb-2">
                    <div className="text-5xl font-bold text-[#003049] mb-2">
                      R$ {plan.price}
                    </div>
                    <div className="text-gray-600">
                      <div className="font-semibold">{plan.duration}</div>
                      <div className="text-sm">{plan.schedule}</div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 italic text-center mb-4">
                    *Valor diferenciado para contrato mensal.
                  </p>

                  <ul className="space-y-3 mb-6 text-left">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleWhatsAppContact(plan.title, serviceType)}
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Contratar Plano
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-lg">
            Entre em contato: <span className="font-semibold text-[#003049]">(21) 99610-0386</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="precos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Planos e Valores
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Profissionais qualificados com treinamento especializado e experiência comprovada.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="w-5 h-5 text-[#003049]" />
              <span className="font-medium">Profissionais Certificados</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-[#003049]" />
              <span className="font-medium">Treinamento Especializado</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Heart className="w-5 h-5 text-[#003049]" />
              <span className="font-medium">Cuidado Humanizado</span>
            </div>
          </div>
        </div>

        {renderPlanSection(caregiversPlans, 'Cuidador de Idosos', Heart, 'cuidador de idosos')}
        {renderPlanSection(nursingPlans, 'Técnico de Enfermagem', Stethoscope, 'técnico de enfermagem')}
      </div>
    </section>
  );
}
