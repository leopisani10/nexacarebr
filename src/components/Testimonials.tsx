import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Testimonial } from '../types';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      if (data && data.length > 0) {
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const displayedTestimonials = testimonials.length > 0 ? testimonials.slice(0, 3) : [
    {
      id: 1,
      name: 'Carla Mendes',
      role: 'Filha de Paciente',
      content: 'Quando minha mãe teve AVC, fiquei perdida sem saber como cuidar dela em casa. A Nexa Care chegou como um anjo da guarda. A enfermeira Patrícia não só cuida com excelência técnica, mas trata minha mãe com um carinho que me emociona todos os dias. Já são 8 meses e a evolução é visível.',
    },
    {
      id: 2,
      name: 'Roberto Almeida',
      role: 'Esposo e Cuidador',
      content: 'Minha esposa tem Alzheimer e eu estava me sentindo sobrecarregado tentando cuidar sozinho. A equipe da Nexa Care trouxe não apenas cuidado profissional, mas também orientação e apoio emocional para mim. Hoje consigo trabalhar tranquilo sabendo que ela está em boas mãos.',
    },
    {
      id: 3,
      name: 'Juliana Ferreira',
      role: 'Neta de Paciente',
      content: 'Meu avô de 89 anos precisava de cuidados paliativos e queríamos que ele ficasse em casa, cercado de amor. A Nexa Care nos proporcionou isso com total dignidade. Os profissionais são pontuais, carinhosos e sempre nos mantêm informados. Gratidão eterna por esses momentos preciosos.',
    },
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-6">
            <p className="text-[#003049] text-sm font-medium">Depoimentos</p>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#003049] mb-6">
            O Que Dizem Nossas Famílias
          </h2>
          <p className="text-lg text-[#6b7280] font-normal max-w-2xl mx-auto">
            A confiança das famílias que atendemos é o nosso maior reconhecimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[28px] p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <Quote className="text-[#0077b6]" size={36} strokeWidth={1.5} />
              </div>
              <p className="text-[#6b7280] text-base leading-relaxed mb-8 font-normal">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center">
                  <span className="text-[#003049] font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-extrabold text-[#003049] text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-[#6b7280] text-sm font-normal">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#003049] w-10' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
