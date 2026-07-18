"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AgenteIAPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[#f84f1d]/30 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#1f1f1f]">
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
                <span className="text-xs font-semibold text-[#f84f1d] tracking-widest uppercase font-satoshi">
                  Atendimento inteligente por WhatsApp
                </span>
              </div>

              <h1 className="text-[clamp(3.5rem,7vw,5.5rem)] font-bold text-white leading-[0.95] tracking-tight mb-8 font-clash">
                O seu WhatsApp vendendo <br />
                <span className="font-melodrama font-serif-italic text-[#f84f1d]">
                  enquanto você dorme.
                </span>
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl font-satoshi">
                Se a sua equipe demora mais do que 5 minutos para responder um novo lead no WhatsApp, a chance de fechar negócio cai drasticamente. O consumidor moderno exige atendimento imediato. Com a nossa automação de inteligência artificial, você garante que nenhum cliente fique esperando, 24 horas por dia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Visual Proof Section */}
        <section className="py-24 bg-[#0a0a0a] border-b border-[#1f1f1f]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6 font-clash">
                  Conversar pelo WhatsApp <span className="text-[#f84f1d]">é a norma no Brasil.</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6 font-satoshi">
                  O comércio conversacional é a realidade do mercado brasileiro. A maioria esmagadora dos consumidores prefere fechar compras e tirar dúvidas diretamente pelo WhatsApp, ao invés de preencher formulários em sites.
                  <br /><br />
                  Nossos agentes de IA absorvem o fluxo inicial de atendimento respondendo em poucos segundos. Eles são treinados para entender o contexto, tirar dúvidas complexas, qualificar o cliente e agendar reuniões diretamente no seu calendário, de forma autônoma.
                </p>
                <ul className="flex flex-col gap-3">
                  {["Entendimento preciso de áudio e texto em linguagem natural", "Agendamento autônomo perfeitamente integrado ao seu calendário", "Qualificação técnica para focar sua equipe apenas em quem vai comprar"].map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-satoshi">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f84f1d]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-[4/3] md:aspect-video rounded-sm overflow-hidden border border-[#1f1f1f] shadow-[0_0_50px_rgba(248,79,29,0.05)]"
              >
                <Image 
                  src="/mockup_whatsapp_v2.jpg" 
                  alt="Mockup do Agente de IA atendendo no WhatsApp" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detalhamento e Onboarding */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-10 font-clash">
                  Processo de implantação.
                </h2>
                
                <div className="relative border-l border-zinc-800 ml-3 md:ml-4 space-y-10 pb-4">
                  {[
                    { step: "01", title: "Ativação de Contrato", desc: "O processo é iniciado imediatamente após a confirmação do pagamento através do nosso checkout seguro." },
                    { step: "02", title: "Imersão de Conhecimento", desc: "Você recebe um link de onboarding por e-mail para nos fornecer as bases de conhecimento da sua empresa (PDFs, áudios, textos)." },
                    { step: "03", title: "Alinhamento Técnico", desc: "Um especialista da nossa equipe entra em contato via WhatsApp para confirmar os dados e iniciar a parametrização do sistema." },
                    { step: "04", title: "Treinamento do Agente", desc: "Nós configuramos a inteligência artificial, construímos os prompts adequados e integramos o robô ao seu sistema ou calendário." },
                    { step: "05", title: "Homologação e Lançamento", desc: "Realizamos uma reunião técnica para testarmos juntos a fluidez da conversa antes de colocar o agente em produção." }
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#111111] border border-[#f84f1d] flex items-center justify-center">
                        <span className="text-[#f84f1d] text-[10px] font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-white font-medium mb-1 font-clash text-lg">{item.title}</h3>
                      <p className="text-sm text-zinc-500 font-satoshi leading-relaxed">{item.desc}</p>
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
                  <span className="text-[#f84f1d] text-sm font-bold tracking-widest uppercase mb-2 block font-satoshi">Setup e Implementação</span>
                  <h3 className="text-3xl text-white font-semibold font-clash">R$ 997<span className="text-zinc-500 text-lg">/único</span></h3>
                  <p className="text-zinc-400 mt-4 text-sm font-satoshi">
                    Garantia de Qualidade: Se em 15 dias de operação o agente de IA não qualificar adequadamente pelo menos metade das interações, realizamos ajustes finos sem qualquer custo adicional.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white font-satoshi">
                    <span className="text-zinc-400">Tempo de implementação</span>
                    <span className="font-medium text-right">Até 7 dias úteis</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white font-satoshi">
                    <span className="text-zinc-400">Plataformas Externas</span>
                    <span className="font-medium text-right">Média de R$ 150/mês</span>
                  </div>
                </div>

                <a
                  href="#checkout-cakto"
                  className="w-full block text-center font-bold py-5 px-6 bg-[#f84f1d] hover:bg-[#c93c0f] text-white rounded-sm transition-all tracking-widest uppercase text-sm mb-4 font-clash"
                >
                  Contratar Agora
                </a>
                <p className="text-center text-xs text-zinc-500 font-satoshi">
                  Valor exclusivo do setup pago uma única vez via Cakto.
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
