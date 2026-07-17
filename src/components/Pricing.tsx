"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export default function Pricing() {
  return (
    <section className="py-32 md:py-48 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="w-full"
        >
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-8">
            02 // O Investimento
          </span>

          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium text-white leading-[1.05] tracking-tight mb-8">
            Se você procura o orçamento <br className="hidden md:block"/>
            <span className="text-zinc-500">mais barato</span>, feche esta página.
          </h2>

          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto mb-16">
            Nós não vendemos "sites bonitos" ou "pacotes de posts". Nós construímos ativos 
            digitais que geram lucro. Se a sua empresa está pronta para escalar e você entende 
            que tecnologia de ponta exige investimento compatível com o retorno gerado, nós 
            temos <strong className="text-white font-medium">3 vagas</strong> abertas para este mês.
          </p>

          <Link
            href="#diagnostico"
            className="group inline-flex items-center justify-center gap-4 bg-yellow-500 text-zinc-950 px-10 py-6 hover:bg-yellow-400 transition-colors"
          >
            <span className="font-bold text-sm uppercase tracking-widest">Solicitar Diagnóstico Estratégico</span>
            <div className="relative overflow-hidden w-5 h-5 flex items-center justify-center">
              <ArrowRight size={20} className="absolute transition-transform duration-300 group-hover:translate-x-full" />
              <ArrowRight size={20} className="absolute -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
