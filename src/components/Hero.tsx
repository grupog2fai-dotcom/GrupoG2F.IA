"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a] pt-20">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 70% 30%, #f84f1d 0%, transparent 60%)' }}
      />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 30% 70%, #f84f1d 0%, transparent 60%)' }}
      />

      {/* Main layout: text left, image right */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-8 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end w-full min-h-[calc(100vh-5rem)]">
          
          {/* Left Column — Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center gap-8 pb-16 lg:pb-24 pt-12"
          >
            {/* Tag */}
            <motion.div variants={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f84f1d]" />
              <span className="text-xs font-semibold text-zinc-400 tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-satoshi)' }}>
                Tecnologia de ponta. Resultado em dias.
              </span>
            </motion.div>

            {/* H1 — Fluxora-style mixed typography */}
            <motion.h1
              variants={item}
              className="text-[clamp(3rem,7vw,5.5rem)] leading-[0.93] font-semibold text-white"
              style={{ fontFamily: 'var(--font-clash)' }}
            >
              Seus clientes buscam<br />
              por você.{" "}
              <span
                className="font-melodrama-italic"
                style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400, color: '#a1a1aa' }}
              >
                Seu concorrente
              </span>
              <br />
              <span style={{ color: '#f84f1d' }}>está aparecendo.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg"
              style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 400 }}
            >
              A G2F instala o sistema completo para sua empresa{" "}
              <strong className="text-white font-medium">aparecer primeiro</strong>,{" "}
              <strong className="text-white font-medium">atender automaticamente</strong> e{" "}
              <strong className="text-white font-medium">converter mais</strong> — sem precisar contratar mais ninguém.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#servicos"
                className="group flex items-center justify-center gap-3 bg-[#f84f1d] hover:bg-[#c93c0f] text-white font-bold px-8 py-4 transition-all duration-300 rounded-sm text-sm uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-clash)' }}
              >
                <span>Escolher meu serviço</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white font-semibold px-8 py-4 transition-all duration-300 rounded-sm text-sm"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                Falar com especialista
              </a>
            </motion.div>

            {/* Floating Stats — Fluxora-style cards */}
            <motion.div variants={item} className="flex gap-4 mt-4">
              <div className="flex flex-col gap-1 bg-[#111111] border border-[#1f1f1f] px-5 py-4 rounded-sm">
                <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-clash)' }}>47+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Clientes ativos</span>
              </div>
              <div className="flex flex-col gap-1 bg-[#111111] border border-[#1f1f1f] px-5 py-4 rounded-sm">
                <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-clash)' }}>97%</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Satisfação</span>
              </div>
              <div className="flex flex-col gap-1 bg-[#f84f1d]/10 border border-[#f84f1d]/30 px-5 py-4 rounded-sm">
                <span className="text-2xl font-bold text-[#f84f1d]" style={{ fontFamily: 'var(--font-clash)' }}>7d</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">1º resultado</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Hero Image (full bleed to bottom) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-6 xl:col-span-7 items-end justify-center relative h-full min-h-[600px]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/hero-portrait.jpg"
                alt="GrupoG2F.IA — Tecnologia de ponta para o seu negócio"
                fill
                className="object-cover object-top"
                priority
                style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 30%)' }}
              />
              {/* Orange glow at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #0a0a0a, transparent)' }}
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #0a0a0a 0%, transparent 30%)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Partners bar */}
      <div className="relative z-10 border-t border-[#1f1f1f] bg-[#0a0a0a] py-5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center gap-6">
          <span className="text-zinc-600 text-xs uppercase tracking-widest whitespace-nowrap"
            style={{ fontFamily: 'var(--font-satoshi)' }}>
            Nossas Ferramentas
          </span>
          <div className="overflow-hidden flex-1 relative">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
            <div className="flex gap-10 logos-track">
              {["OpenAI", "Google Ads", "Meta Ads", "Supabase", "WhatsApp API", "Next.js", "Make", "Cakto", "OpenAI", "Google Ads", "Meta Ads", "Supabase", "WhatsApp API", "Next.js", "Make", "Cakto"].map((t, i) => (
                <span key={i} className="whitespace-nowrap text-zinc-500 text-sm font-medium"
                  style={{ fontFamily: 'var(--font-satoshi)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
