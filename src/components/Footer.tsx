"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-base)] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-5xl md:text-8xl font-syne font-bold tracking-tighter text-[var(--color-text-primary)] mb-8">
              G2F<span className="text-[var(--color-accent-gold)]">.IA</span>
            </h2>
            <p className="text-xl text-[var(--color-text-muted)] max-w-sm">
              Sistemas inteligentes para negócios que não podem parar de crescer.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-[var(--color-text-muted)] text-sm font-bold tracking-widest uppercase">Navegação</span>
              <Link href="#servicos" className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-gold)] transition-colors">Soluções</Link>
              <Link href="#metodologia" className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-gold)] transition-colors">Metodologia</Link>
              <Link href="#depoimentos" className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-gold)] transition-colors">Resultados</Link>
              <Link href="#planos" className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-gold)] transition-colors">Preços</Link>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-[var(--color-text-muted)] text-sm font-bold tracking-widest uppercase">Social</span>
              <a href="#" className="flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent-gold)] transition-colors group">
                LinkedIn <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="#" className="flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent-gold)] transition-colors group">
                Instagram <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="#" className="flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent-gold)] transition-colors group">
                Twitter <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-sm text-[var(--color-text-muted)]">
          <p>© {new Date().getFullYear()} GrupoG2F.IA. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Termos de Uso</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
