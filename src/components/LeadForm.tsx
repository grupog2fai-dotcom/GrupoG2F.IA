"use client";

import { motion } from "framer-motion";

export default function LeadForm() {
  return (
    <section id="diagnostico" className="py-24 md:py-36 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f84f1d]" />
              <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
                Iniciar aceleração
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white leading-[1.05] font-clash">
              A escolha é sua.{" "}
              <span style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400, color: '#f84f1d' }}>
                O tempo, não.
              </span>
            </h2>

            <p className="text-xl text-zinc-400 leading-relaxed font-satoshi">
              Enquanto você lê isso, seu concorrente está aparecendo no Google para o cliente que deveria ser seu.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Sem compromisso — diagnóstico 100% gratuito",
                "Resposta em até 15 minutos em horário comercial",
                "Todos os dados são protegidos com NDA padrão",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm bg-[#f84f1d]/10 border border-[#f84f1d]/30 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#f84f1d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-zinc-400 text-sm font-satoshi">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <form className="flex flex-col gap-6 bg-[#111111] border border-[#1f1f1f] p-8 md:p-10 rounded-sm">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-satoshi">
                  Seu nome
                </label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm px-4 py-3.5 text-white text-base placeholder:text-zinc-700 focus:outline-none focus:border-[#f84f1d] transition-colors font-satoshi"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-satoshi">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm px-4 py-3.5 text-white text-base placeholder:text-zinc-700 focus:outline-none focus:border-[#f84f1d] transition-colors font-satoshi"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-satoshi">
                  Serviço de interesse
                </label>
                <select
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm px-4 py-3.5 text-zinc-300 text-base focus:outline-none focus:border-[#f84f1d] transition-colors appearance-none cursor-pointer font-satoshi"
                >
                  <option value="" className="bg-zinc-900">Selecione um serviço</option>
                  <option value="seo" className="bg-zinc-900">SEO Local — R$ 297/mês</option>
                  <option value="ia" className="bg-zinc-900">Agente de IA WhatsApp — R$ 997</option>
                  <option value="landing" className="bg-zinc-900">Landing Page + Tráfego — R$ 1.497</option>
                  <option value="nao-sei" className="bg-zinc-900">Não sei ainda — quero diagnóstico</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-satoshi">
                  Qual o maior problema hoje?
                </label>
                <textarea
                  rows={3}
                  placeholder="Descreva brevemente..."
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm px-4 py-3.5 text-white text-base placeholder:text-zinc-700 focus:outline-none focus:border-[#f84f1d] transition-colors resize-none font-satoshi"
                />
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-[#f84f1d] hover:bg-[#c93c0f] text-white font-bold py-[1.125rem] px-8 rounded-sm transition-all duration-300 text-sm uppercase tracking-widest mt-2 font-clash"
              >
                Solicitar diagnóstico estratégico
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <p className="text-center text-zinc-600 text-xs font-satoshi">
                Resposta em até 15 minutos. Sem SPAM, sem compromisso.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
