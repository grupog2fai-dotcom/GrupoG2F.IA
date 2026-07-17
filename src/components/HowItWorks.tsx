"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Você escolhe e contrata",
    text: "Online, agora, pelo próprio site. Parcelamos em até 3x. Em menos de 5 minutos o processo está concluído.",
  },
  {
    num: "02",
    title: "Nossa equipe entra em ação",
    text: "Em até 24h você recebe o contato do especialista responsável pelo seu projeto com o cronograma de implementação.",
  },
  {
    num: "03",
    title: "Resultado garantido",
    text: "Cada serviço tem uma garantia objetiva com prazo definido. Se não entregamos dentro do prazo, devolvemos 100%.",
  },
];

const testimonials = [
  {
    quote: "O agente de IA triplicou nossos agendamentos nos fins de semana, quando a recepção está fechada.",
    name: "Dr. Marcos",
    role: "OdontoMais",
    result: "+300% agendamentos",
  },
  {
    quote: "Em 7 dias já estávamos no topo do mapa do Google. Os clientes começaram a ligar sozinhos.",
    name: "Roberta Silva",
    role: "Salão Studio R",
    result: "Top 3 Google Maps",
  },
  {
    quote: "20 leads qualificados em 12 dias. Minha agenda encheu antes mesmo do prazo garantido.",
    name: "Carlos Mendes",
    role: "Personal Trainer",
    result: "Agenda lotada",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* How It Works */}
      <section id="como-funciona" className="py-24 md:py-36 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f84f1d]" />
              <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
                Como funciona
              </span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-white leading-[1.05] font-clash">
              Simples. Rápido.{" "}
              <span style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400, color: '#f84f1d' }}>
                Sem complicação.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#1f1f1f] last:border-r-0 last:border-b-0"
              >
                <span className="block text-5xl font-bold text-[#1a1a1a] mb-6 font-clash">
                  {step.num}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3 font-clash">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-satoshi">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — full-bleed inverted block */}
      <section id="resultados" className="py-24 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f84f1d]" />
              <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
                O que o mercado diz
              </span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-zinc-950 leading-[1.05] font-clash">
              Design With Purpose.{" "}
              <span style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400 }}>
                Build With Impact.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="flex flex-col gap-6 p-8 border border-zinc-200 rounded-sm bg-white"
              >
                <div className="bg-[#f84f1d] text-white text-xs font-bold px-3 py-1.5 rounded-sm self-start uppercase tracking-widest font-clash">
                  {t.result}
                </div>
                <blockquote className="text-xl text-zinc-800 leading-relaxed flex-1 font-clash" style={{ fontWeight: 400 }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center text-white text-sm font-bold font-clash">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-zinc-950 font-bold text-sm font-clash">{t.name}</p>
                    <p className="text-zinc-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
