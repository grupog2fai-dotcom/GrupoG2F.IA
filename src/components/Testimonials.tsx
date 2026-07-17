"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-yellow-500 py-32 md:py-48 text-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col gap-12"
        >
          <div className="flex items-center gap-4 border-b border-zinc-950/20 pb-8">
            <h3 className="text-xl font-mono tracking-widest uppercase font-bold">
              O que o mercado diz
            </h3>
          </div>

          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight">
            "Nós operávamos no escuro. A G2F não entregou um site, <span className="italic font-light text-zinc-800">eles instalaram uma diretoria de vendas digital </span> que não dorme."
          </h2>

          <div className="mt-8 flex flex-col md:flex-row gap-6 md:items-center">
            <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center text-yellow-500 font-bold text-xl">
              C
            </div>
            <div>
              <p className="font-bold text-2xl">Cliente Confidencial</p>
              <p className="font-mono uppercase text-sm mt-1 border-t border-zinc-950/20 pt-2 inline-block">
                Indústria B2B // Aumento de 314% em Leads Qualificados
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
