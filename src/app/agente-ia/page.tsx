"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AgenteIAPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[#f84f1d]/30 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden border-b border-[#1f1f1f]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#0a0a0a] bg-opacity-90 z-10" />
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
                  Automação com Inteligência Artificial
                </span>
              </div>

              <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-8"
                style={{ fontFamily: 'var(--font-clash)' }}>
                Seu WhatsApp vendendo <br />
                <span style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400, color: '#a1a1aa' }}>
                  enquanto você dorme.
                </span>
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl"
                style={{ fontFamily: 'var(--font-satoshi)' }}>
                Acabe com o gargalo do atendimento humano. Um agente de Inteligência Artificial treinado com a linguagem do seu negócio para atender, qualificar e agendar leads em segundos.
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
                  Não é um robô de botões engessado. É inteligência artificial generativa.
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-satoshi)' }}>
                  Diferente dos chatbots antigos que irritam os clientes pedindo para "digitar 1 ou 2", nosso agente conversa de forma natural, entende áudios e resolve objeções reais de vendas.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Treinamento Personalizado", desc: "A IA lê todos os seus materiais, site e PDFs para aprender exatamente como sua empresa fala e vende." },
                    { title: "Qualificação de Leads Automática", desc: "A IA faz as perguntas certas para filtrar curiosos e enviar apenas clientes reais para você." },
                    { title: "Agendamento Integrado", desc: "Conexão direta com sua agenda (Calendly, Google Calendar) para marcar reuniões sozinho." },
                    { title: "Integração via Make/API", desc: "O bot se conecta ao seu CRM, enviando os dados do cliente sem que você precise digitar nada." }
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
                  <span className="text-[#f84f1d] text-sm font-bold tracking-widest uppercase mb-2 block" style={{ fontFamily: 'var(--font-satoshi)' }}>Setup Único</span>
                  <h3 className="text-3xl text-white font-semibold" style={{ fontFamily: 'var(--font-clash)' }}>R$ 997<span className="text-zinc-500 text-lg">/implementação</span></h3>
                  <p className="text-zinc-400 mt-4 text-sm" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    Garantimos que o bot automatizará pelo menos 50 conversas em 15 dias. Menos dor de cabeça, mais conversão.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white">
                    <span className="text-zinc-400">Tempo de implementação</span>
                    <span className="font-medium text-right">Até 7 dias úteis</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white">
                    <span className="text-zinc-400">Mensalidade (Plataformas)</span>
                    <span className="font-medium text-right">~ R$ 150 a R$ 300</span>
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
                  O pagamento de R$ 997 refere-se ao setup (pagamento único) via Cakto.
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
