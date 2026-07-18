"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SeoLocalPage() {
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
                  Posicionamento Geográfico
                </span>
              </div>

              <h1 className="text-[clamp(3.5rem,7vw,5.5rem)] font-bold text-white leading-[0.95] tracking-tight mb-8 font-clash">
                O seu concorrente está <br />
                <span className="font-melodrama font-serif-italic text-[#f84f1d]">
                  recebendo os seus clientes.
                </span>
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl font-satoshi">
                Quase metade de todas as buscas no Google têm intenção local, e a esmagadora maioria dos consumidores pesquisa online antes de contratar uma empresa física. Se a sua empresa não aparece no topo das buscas da sua região, você não existe para o cliente que está pronto para comprar hoje.
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
                  Quem busca no mapa <span className="text-[#f84f1d]">já decidiu comprar.</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6 font-satoshi">
                  Dados de mercado mostram que a grande maioria das pessoas que pesquisam um serviço local visitam o estabelecimento em até 24 horas. Quem procura por um serviço no Google Maps não está apenas curioso, está buscando uma solução imediata para um problema real.
                  <br /><br />
                  O nosso trabalho vai muito além de criar um cadastro. Nós estruturamos a sua ficha de ponta a ponta para dominar os critérios técnicos de rankeamento do Google. O objetivo é posicionar sua empresa como a resposta mais confiável e óbvia da sua cidade.
                </p>
                <ul className="flex flex-col gap-3">
                  {["Domínio absoluto das buscas regionais no Google Maps", "Captação de clientes em momento de compra ativo", "Vendas diretas sem que o cliente precise acessar o site"].map((bullet, i) => (
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
                  src="/mockup_seo_v2.jpg" 
                  alt="Mockup do Google Maps mostrando Top 1" 
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
                    { step: "02", title: "Levantamento de Dados", desc: "Você recebe um link direto no seu e-mail para nos fornecer os dados essenciais da sua operação. Pode ser por texto ou áudio." },
                    { step: "03", title: "Alinhamento Estratégico", desc: "Um especialista da nossa equipe entra em contato via WhatsApp para alinhar as expectativas e confirmar o cronograma." },
                    { step: "04", title: "Otimização Técnica", desc: "Executamos as correções estruturais na ficha, padronizamos as informações comerciais e posicionamos as palavras-chave corretas." },
                    { step: "05", title: "Entrega e Acompanhamento", desc: "Realizamos uma reunião rápida para apresentar o painel de resultados, mostrando exatamente como monitorar as métricas de chamadas e rotas." }
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
                  <span className="text-[#f84f1d] text-sm font-bold tracking-widest uppercase mb-2 block font-satoshi">Garantia Contratual</span>
                  <h3 className="text-3xl text-white font-semibold font-clash">R$ 297<span className="text-zinc-500 text-lg">/mês</span></h3>
                  <p className="text-zinc-400 mt-4 text-sm font-satoshi">
                    Se o seu negócio não apresentar avanço nas posições do mapa dentro de 7 dias úteis, nós estornamos o valor integral do seu pagamento. Transparência total e risco zero para a sua empresa.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white font-satoshi">
                    <span className="text-zinc-400">Tempo de execução</span>
                    <span className="font-medium text-right">Imediato (em até 48h)</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2 text-white font-satoshi">
                    <span className="text-zinc-400">Contrato</span>
                    <span className="font-medium text-right">Sem fidelidade</span>
                  </div>
                </div>

                <a
                  href="#checkout-cakto"
                  className="w-full block text-center font-bold py-5 px-6 bg-[#f84f1d] hover:bg-[#c93c0f] text-white rounded-sm transition-all tracking-widest uppercase text-sm mb-4 font-clash"
                >
                  Contratar Agora
                </a>
                <p className="text-center text-xs text-zinc-500 font-satoshi">
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
