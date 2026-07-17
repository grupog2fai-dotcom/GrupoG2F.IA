"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SeoLocalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[#f84f1d]/30 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden border-b border-[#1f1f1f]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#0a0a0a] bg-opacity-90 z-10" />
            {/* Subtle radial gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f84f1d] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          </div>

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f84f1d]" />
                <span className="text-xs font-semibold text-[#f84f1d] tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-satoshi)' }}>
                  Aceleração de Negócios Locais
                </span>
              </div>

              <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-8"
                style={{ fontFamily: 'var(--font-clash)' }}>
                Domine as buscas <br />
                <span style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400, color: '#a1a1aa' }}>
                  na sua região.
                </span>
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl"
                style={{ fontFamily: 'var(--font-satoshi)' }}>
                Enquanto você confia apenas em indicações, seu concorrente está capturando todos os clientes que buscam pelo seu serviço no Google Maps neste exato momento.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detalhamento do Serviço */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-clash)' }}>
                  O método cirúrgico para colocar sua empresa no Top 3.
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-satoshi)' }}>
                  Não fazemos apenas um "cadastro" no Google. Executamos uma reengenharia completa da sua presença digital local para garantir que o algoritmo do Google priorize o seu negócio.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Otimização de Perfil", desc: "Configuração completa do Perfil da Empresa no Google (antigo Google Meu Negócio) com palavras-chave estratégicas." },
                    { title: "Estratégia de Avaliações", desc: "Sistema automatizado para capturar avaliações 5 estrelas de clientes reais, aumentando sua autoridade." },
                    { title: "Citações Locais", desc: "Distribuição do seu NAP (Nome, Endereço, Telefone) em diretórios relevantes da sua cidade." },
                    { title: "Monitoramento de Ranking", desc: "Acompanhamento semanal de como sua empresa aparece para buscas em um raio de até 15km." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-6 bg-[#0f0f0f] border border-[#1f1f1f] rounded-sm hover:border-zinc-700 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-[#f84f1d]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[#f84f1d] text-sm font-bold">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-2" style={{ fontFamily: 'var(--font-clash)' }}>{item.title}</h3>
                        <p className="text-sm text-zinc-500" style={{ fontFamily: 'var(--font-satoshi)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#111111] border border-[#f84f1d]/20 rounded-sm p-10 lg:sticky lg:top-32 shadow-[0_0_80px_rgba(248,79,29,0.07)]"
              >
                <div className="mb-8">
                  <span className="text-[#f84f1d] text-sm font-bold tracking-widest uppercase mb-2 block" style={{ fontFamily: 'var(--font-satoshi)' }}>Garantia G2F</span>
                  <h3 className="text-3xl text-white font-semibold" style={{ fontFamily: 'var(--font-clash)' }}>R$ 297<span className="text-zinc-500 text-lg">/mês</span></h3>
                  <p className="text-zinc-400 mt-4 text-sm" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    Garantimos que sua empresa aparecerá no Top 3 das buscas locais em 7 dias, ou devolvemos 100% do seu investimento. Sem letras miúdas.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white">
                    <span className="text-zinc-400">Tempo de execução</span>
                    <span className="font-medium text-right">Imediato (em até 48h)</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white">
                    <span className="text-zinc-400">Contrato</span>
                    <span className="font-medium text-right">Sem fidelidade</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white">
                    <span className="text-zinc-400">Pagamento</span>
                    <span className="font-medium text-right">Via Cakto (Seguro)</span>
                  </div>
                </div>

                <a
                  href="#checkout" // Aqui entrará o link do Cakto futuramente
                  className="w-full block text-center font-bold py-5 px-6 bg-[#f84f1d] hover:bg-[#c93c0f] text-white rounded-sm transition-all tracking-widest uppercase text-sm mb-4"
                  style={{ fontFamily: 'var(--font-clash)' }}
                >
                  Contratar Agora
                </a>
                <p className="text-center text-xs text-zinc-500" style={{ fontFamily: 'var(--font-satoshi)' }}>
                  Cobrança recorrente mensal processada com segurança via Cakto.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
