"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPageTrafegoPage() {
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
                  Atração e Conversão de Leads
                </span>
              </div>

              <h1 className="text-[clamp(3.5rem,7vw,5.5rem)] font-bold text-white leading-[0.95] tracking-tight mb-8 font-clash">
                Sua agenda lotada. <br />
                <span className="font-melodrama font-serif-italic text-[#f84f1d]">
                  Sem depender de indicações.
                </span>
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl font-satoshi">
                Enviar tráfego pago para um site lento ou mal estruturado é o caminho mais rápido para desperdiçar o seu orçamento. Grande parte dos usuários abandona uma página confusa em poucos segundos. Nós construímos o ambiente ideal para converter cada clique em uma oportunidade real de negócio.
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
                  Transparência total sobre o <span className="text-[#f84f1d]">seu crescimento.</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6 font-satoshi">
                  Muitas empresas se frustram ao investir em anúncios por não conseguirem medir o retorno exato das campanhas. O WhatsApp recebe mensagens, mas no final do mês a conta do marketing não fecha.
                  <br /><br />
                  Nossa abordagem resolve esse problema. Desenhamos Landing Pages focadas exclusivamente na conversão e fornecemos um painel de métricas transparente. Você acompanha em tempo real o custo de cada lead e o retorno exato sobre o valor investido nas campanhas de Google e Meta Ads.
                </p>
                <ul className="flex flex-col gap-3">
                  {["Desenvolvimento de Landing Pages otimizadas para conversão", "Gestão profissional de tráfego no Google Ads, Instagram e Facebook", "Painéis integrados para rastreamento claro do seu retorno financeiro"].map((bullet, i) => (
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
                className="relative aspect-video rounded-sm overflow-hidden border border-[#1f1f1f] shadow-[0_0_50px_rgba(248,79,29,0.05)]"
              >
                <Image 
                  src="/mockup_dashboard_v2.jpg" 
                  alt="Mockup de Dashboard de Performance e Leads" 
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
                    { step: "01", title: "Ativação de Contrato", desc: "Sua contratação para a criação da Landing Page e setup das campanhas é processada em um ambiente seguro." },
                    { step: "02", title: "Imersão de Negócio", desc: "Enviamos imediatamente um link de onboarding. Neste formulário, você nos passa os detalhes das suas ofertas e o perfil do seu cliente ideal." },
                    { step: "03", title: "Alinhamento com Gestor", desc: "Nosso especialista de mídia entra em contato via WhatsApp para organizar os acessos às suas contas de anúncios (Google e Meta)." },
                    { step: "04", title: "Construção da Estrutura", desc: "Nossa equipe desenvolve a Landing Page, escreve os textos comerciais e configura corretamente todo o rastreamento." },
                    { step: "05", title: "Lançamento Oficial", desc: "Realizamos uma reunião de alinhamento para apresentar a página pronta, o painel de métricas e colocar as campanhas no ar." }
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
                  <span className="text-[#f84f1d] text-sm font-bold tracking-widest uppercase mb-2 block font-satoshi">Setup de Ativação</span>
                  <h3 className="text-3xl text-white font-semibold font-clash">R$ 1.497<span className="text-zinc-500 text-lg">/único</span></h3>
                  <p className="text-zinc-400 mt-4 text-sm font-satoshi">
                    Garantia de Qualidade: Se a Landing Page não for entregue no prazo estipulado e com as métricas de acompanhamento perfeitamente rastreadas, estornamos o valor do setup.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white font-satoshi">
                    <span className="text-zinc-400">Tempo de entrega (LP)</span>
                    <span className="font-medium text-right">Até 7 dias úteis</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white font-satoshi">
                    <span className="text-zinc-400">Gestão Mensal (Ads)</span>
                    <span className="font-medium text-right">A combinar no Kick-off</span>
                  </div>
                </div>

                <a
                  href="#checkout-cakto"
                  className="w-full block text-center font-bold py-5 px-6 bg-[#f84f1d] hover:bg-[#c93c0f] text-white rounded-sm transition-all tracking-widest uppercase text-sm mb-4 font-clash"
                >
                  Contratar Agora
                </a>
                <p className="text-center text-xs text-zinc-500 font-satoshi">
                  O pagamento via Cakto cobre a criação da Landing Page e setup da primeira campanha.
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
