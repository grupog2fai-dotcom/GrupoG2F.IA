"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    q: "A IA realmente consegue substituir meu atendimento humano?",
    a: "Não substitui o fator humano no fechamento de alto valor, mas substitui 100% da triagem manual, da qualificação fria e do suporte primário. Seus vendedores recebem apenas leads quentes e agendados.",
  },
  {
    q: "Quanto tempo demora para a automação rodar?",
    a: "Depende da complexidade, mas projetos de agentes de IA para WhatsApp e CRM geralmente entram em fase de testes reais em 14 a 21 dias úteis.",
  },
  {
    q: "Já tentamos rodar anúncios antes e não deu certo. Por que agora daria?",
    a: "Porque tráfego sem funil de vendas não funciona. Nós não apenas rodamos os anúncios, nós construímos o ecossistema de recebimento (Landing Page, CRM, Automação) para garantir que cada clique seja convertido ou nutrido.",
  },
  {
    q: "Vocês atendem e-commerce ou apenas serviços (B2B/B2C)?",
    a: "Atendemos negócios que precisam escalar de forma previsível, seja LTV de e-commerce de alto padrão ou serviços High-Ticket. Durante o mapeamento inicial, validamos se nossa arquitetura é a ideal para você.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-32 md:py-48 bg-[var(--color-bg-base)]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-24"
        >
          <span className="text-[var(--color-accent-gold)] text-sm font-bold tracking-[0.2em] uppercase block mb-6">
            Dúvidas Frequentes
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)]">
            Respostas Diretas.
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-b border-white/5"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
                >
                  <span className={`text-xl md:text-2xl font-syne font-bold transition-colors duration-300 pr-8 ${isOpen ? "text-[var(--color-accent-gold)]" : "text-[var(--color-text-primary)] group-hover:text-[var(--color-text-secondary)]"}`}>
                    {faq.q}
                  </span>
                  <div className="shrink-0 text-[var(--color-text-muted)] transition-colors duration-300 group-hover:text-[var(--color-accent-gold)]">
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
