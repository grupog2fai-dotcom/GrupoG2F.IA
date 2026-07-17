"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-36 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-16"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#f84f1d]" />
          <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
            Por que escolher a G2F
          </span>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          
          {/* Left: Big heading + image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="lg:col-span-5"
          >
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold text-white leading-[1.05] mb-8 font-clash">
              Não somos uma agência.{" "}
              <span style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400, color: '#71717a' }}>
                Somos a operação
              </span>{" "}
              que falta na sua empresa.
            </h2>

            {/* Image — editorial */}
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-zinc-900">
              <Image
                src="/hero-portrait.jpg"
                alt="Gabriel Alexandre — Fundador GrupoG2F.IA"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 42vw"
                style={{ filter: 'sepia(0.2) saturate(0.9)' }}
              />
              {/* Orange gradient overlay */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)' }}
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm font-clash">
                  Gabriel Alexandre
                </p>
                <p className="text-zinc-400 text-xs">Fundador, GrupoG2F.IA</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats + text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="lg:col-span-7 lg:pl-20 flex flex-col gap-10 pt-4"
          >
            <p className="text-xl text-zinc-300 leading-relaxed font-satoshi">
              A G2F nasceu da observação de que a maioria das PMEs não fracassa por falta de esforço, mas por operar{" "}
              <strong className="text-white">sem processos, sem estratégia e sem tecnologia.</strong>
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed font-satoshi">
              Enquanto grandes empresas crescem usando IA e automação, milhares de empresários continuam presos a rotinas manuais e ferramentas desconectadas. Nós democratizamos esse acesso.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { num: "47+", label: "Empresas aceleradas" },
                { num: "7 dias", label: "Tempo médio p/ 1º resultado" },
                { num: "BR, PY & LATAM", label: "Brasil, Paraguai e América Latina" },
                { num: "R$35k+", label: "Economizados em salários/cliente" },
              ].map((stat, i) => (
                <div key={i} className="p-5 bg-[#111111] border border-[#1f1f1f] rounded-sm">
                  <span className="block text-3xl font-bold text-white mb-1 font-clash">
                    {stat.num}
                  </span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-satoshi">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Button — secondary style */}
            <a
              href="#diagnostico"
              className="self-start flex items-center gap-3 border border-zinc-700 hover:border-[#f84f1d] text-zinc-300 hover:text-white font-semibold px-7 py-4 transition-all duration-300 rounded-sm text-sm font-satoshi"
            >
              Agendar diagnóstico gratuito
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
