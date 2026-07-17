"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-[#f84f1d] rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-xs font-clash">G2F</span>
        </div>
        <span className="text-white font-semibold text-sm tracking-tight font-clash">
          GrupoG2F<span className="text-[#f84f1d]">.IA</span>
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-zinc-400 hover:text-white transition-colors font-satoshi"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#servicos"
        className="flex items-center gap-2 bg-[#f84f1d] hover:bg-[#c93c0f] text-white text-sm font-semibold px-5 py-2.5 transition-colors rounded-sm font-clash"
      >
        Contratar agora
      </a>
    </motion.nav>
  );
}
