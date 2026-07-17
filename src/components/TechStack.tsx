"use client";

import { motion } from "framer-motion";

const techStack = [
  "Next.js", "React", "Node.js", "Python", 
  "OpenAI GPT-4", "Claude 3", "LangChain", 
  "PostgreSQL", "Supabase", "Prisma", 
  "Tailwind CSS", "Framer Motion", "Figma",
  "Make", "Zapier", "Stripe"
];

export default function TechStack() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">
              Arquitetura de Alta Performance
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Não dependemos exclusivamente de ferramentas prontas. Desenvolvemos soluções sob medida 
              com as tecnologias mais avançadas do mundo.
            </p>
          </div>

          <div className="lg:col-span-8 overflow-hidden relative">
            {/* Gradient masks for smooth edge fading */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
            
            <div className="flex gap-4 opacity-50 logos-track">
              {/* Duplicate array to create infinite scroll illusion */}
              {[...techStack, ...techStack].map((tech, i) => (
                <div 
                  key={i} 
                  className="whitespace-nowrap px-6 py-3 border border-zinc-800 rounded-full text-zinc-300 font-mono text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
