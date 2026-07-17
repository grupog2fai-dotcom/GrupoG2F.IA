"use client";

import { motion } from "framer-motion";

const services = [
  {
    tag: "SEO Local",
    price: "R$ 297",
    period: "/mês",
    headline: "Apareça no Top 3 do Google da sua cidade em 7 dias.",
    description: "Para dentistas, advogados, salões e qualquer negócio local que perde clientes porque não aparece na busca.",
    bullets: [
      "Perfil do Google otimizado cirurgicamente",
      "Aparece quando buscam '[seu serviço] perto de mim'",
      "Posição Top 3 garantida em 7 dias",
    ],
    guarantee: "Top 3 em 7 dias ou devolvemos",
    cta: "Contratar por R$ 297/mês",
    cta2: "Quero saber mais",
    highlight: false,
    href: "#diagnostico",
  },
  {
    tag: "Agente de IA",
    price: "R$ 997",
    period: "/implementação",
    headline: "Seu WhatsApp atende, qualifica e agenda clientes enquanto você dorme.",
    description: "Para clínicas, imobiliárias, escritórios com alto volume de mensagens repetitivas e perda de receita por demora.",
    bullets: [
      "Responde dúvidas frequentes em segundos",
      "Qualifica o lead e agenda reunião automaticamente",
      "Humanizado — treinado com a linguagem do seu negócio",
    ],
    guarantee: "50 conversas automatizadas em 15 dias",
    cta: "Contratar por R$ 997",
    cta2: "Ver demonstração",
    highlight: true,
    href: "#diagnostico",
  },
  {
    tag: "Landing Page + Tráfego",
    price: "R$ 1.497",
    period: "/implementação",
    headline: "20 clientes novos em 15 dias. Ou a gente devolve o dinheiro.",
    description: "Para personal trainers, nutricionistas, coaches e corretores que dependem de indicação e querem previsibilidade.",
    bullets: [
      "Landing page criada do zero para sua oferta",
      "Campanha de anúncios no ar em até 5 dias",
      "20 leads qualificados em 15 dias — garantido",
    ],
    guarantee: "20 leads em 15 dias ou reembolso",
    cta: "Contratar por R$ 1.497",
    cta2: "Quero saber mais",
    highlight: false,
    href: "#diagnostico",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-36 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f84f1d]" />
            <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-satoshi)' }}>
              Soluções
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-white leading-[1.05]"
              style={{ fontFamily: 'var(--font-clash)' }}>
              Três problemas reais.<br />
              <span style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400, color: '#71717a' }}>
                Três soluções cirúrgicas.
              </span>
            </h2>
            <p className="text-zinc-400 max-w-sm leading-relaxed text-base"
              style={{ fontFamily: 'var(--font-satoshi)' }}>
              Cada serviço foi criado para um problema específico. Escolha o que mais se encaixa na sua realidade atual.
            </p>
          </div>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className={`relative flex flex-col p-8 rounded-sm border transition-all duration-300 ${
                service.highlight
                  ? "bg-[#111111] border-[#f84f1d]/40 shadow-[0_0_60px_rgba(248,79,29,0.12)]"
                  : "bg-[#0f0f0f] border-[#1f1f1f] hover:border-zinc-700"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-[#f84f1d] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm"
                    style={{ fontFamily: 'var(--font-clash)' }}>
                    Mais Procurado
                  </span>
                </div>
              )}

              {/* Tag */}
              <div className="flex items-center gap-2 mb-8">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm ${
                  service.highlight 
                    ? "bg-[#f84f1d]/15 text-[#f84f1d]" 
                    : "bg-zinc-900 text-zinc-400"
                }`}
                  style={{ fontFamily: 'var(--font-satoshi)' }}>
                  {service.tag}
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-clash)' }}>
                    {service.price}
                  </span>
                  <span className="text-zinc-500 text-sm">{service.period}</span>
                </div>
                <p className="text-[#f84f1d] text-xs mt-2 font-medium"
                  style={{ fontFamily: 'var(--font-satoshi)' }}>
                  ✓ {service.guarantee}
                </p>
              </div>

              {/* Headline */}
              <h3 className="text-xl font-semibold text-white leading-[1.2] mb-4"
                style={{ fontFamily: 'var(--font-clash)' }}>
                {service.headline}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-satoshi)' }}>
                {service.description}
              </p>

              {/* Bullets */}
              <div className="flex flex-col gap-3 mb-8 flex-1">
                {service.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f84f1d] mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-zinc-300"
                      style={{ fontFamily: 'var(--font-satoshi)' }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href={service.href}
                  className={`w-full text-center font-bold py-4 px-6 text-sm rounded-sm transition-all duration-300 uppercase tracking-widest ${
                    service.highlight
                      ? "bg-[#f84f1d] hover:bg-[#c93c0f] text-white"
                      : "bg-white hover:bg-zinc-200 text-zinc-950"
                  }`}
                  style={{ fontFamily: 'var(--font-clash)' }}
                >
                  {service.cta}
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 px-6 text-sm text-zinc-500 hover:text-zinc-300 transition-colors border border-transparent hover:border-zinc-800 rounded-sm"
                  style={{ fontFamily: 'var(--font-satoshi)' }}
                >
                  {service.cta2}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parcelamento note */}
        <p className="text-center text-zinc-600 text-sm mt-8"
          style={{ fontFamily: 'var(--font-satoshi)' }}>
          Pagamento à vista ou parcelado em até 3x no cartão. Processado com segurança via Stripe.
        </p>
      </div>
    </section>
  );
}
