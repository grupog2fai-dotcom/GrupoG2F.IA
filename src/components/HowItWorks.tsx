"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Você escolhe e contrata",
    text: "Online, agora, pelo próprio site. Pix à vista ou cartão em até 4x sem juros. Em menos de 5 minutos o processo está concluído.",
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
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
              <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
                Como funciona
              </span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-white leading-[1.05] font-clash">
              Simples. Rápido.{" "}
              <span style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400, color: '#c8a84b' }}>
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

      {/* Facts stripe */}
      <section id="resultados" className="py-16 bg-[#111111] border-t border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
            {[
              { label: "Entrega", value: "48 a 72 horas", sub: "por contrato" },
              { label: "Garantia", value: "7 dias", sub: "de execução" },
              { label: "A partir de", value: "R$397", sub: "pagamento único" },
              { label: "Pagamento", value: "4x", sub: "sem juros no cartão" },
            ].map((fact, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-1">
                <span className="text-zinc-500 text-xs uppercase tracking-widest font-satoshi">{fact.label}</span>
                <span className="text-3xl font-bold text-white font-clash">{fact.value}</span>
                <span className="text-zinc-500 text-xs font-satoshi">{fact.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
