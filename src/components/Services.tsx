"use client";

import { motion } from "framer-motion";

const WA = "5511962236635";

const services = [
  {
    id: "gmb",
    tag: "Google Meu Negócio",
    headline: "O perfil que faz você aparecer quando o cliente te procura. Entrega em horas.",
    plans: [
      {
        name: "Build",
        price: "R$397",
        period: "pagamento único",
        highlight: false,
        bullets: [
          "Perfil criado ou recuperado",
          "Categoria, atributos e serviços certos",
          "Fotos de capa e principais",
          "Descrição otimizada pra busca",
          "Horários certos (inclusive feriados)",
        ],
        waText: "Quero%20o%20Build%20do%20Google%20Meu%20Neg%C3%B3cio%20(R%24397%2C%20pagamento%20%C3%BAnico)",
      },
      {
        name: "Advanced",
        price: "R$697",
        period: "pagamento único",
        highlight: true,
        bullets: [
          "Tudo do Build",
          "SEO local (bairro + cidade)",
          "Plano de avaliações 5 estrelas",
          "Respostas prontas pras avaliações",
          "2 posts por mês no perfil",
        ],
        waText: "Quero%20o%20Advanced%20do%20Google%20Meu%20Neg%C3%B3cio%20(R%24697%2C%20pagamento%20%C3%BAnico)",
      },
      {
        name: "Champion",
        price: "R$997",
        period: "ativação + 1º mês, depois R$199/mês",
        highlight: false,
        bullets: [
          "Tudo do Advanced",
          "Gestão contínua do perfil",
          "4 posts por mês",
          "Monitoramento de perguntas",
          "Relatório mensal",
          "Cancelamento livre a qualquer momento",
        ],
        waText: "Quero%20o%20Champion%20do%20Google%20Meu%20Neg%C3%B3cio%20(R%24997%20ativa%C3%A7%C3%A3o%20%2B%201%C2%BA%20m%C3%AAs%2C%20depois%20R%24199%2Fm%C3%AAs%20cancel%C3%A1vel)",
      },
    ],
  },
  {
    id: "robo",
    tag: "Robô de Vendas",
    headline: "Seu WhatsApp responde na hora, mesmo fora do horário.",
    plans: [
      {
        name: "Build",
        price: "R$397",
        period: "pagamento único",
        highlight: false,
        bullets: [
          "Fluxo de boas-vindas",
          "Resposta fora do horário",
          "Resposta imediata na primeira mensagem",
          "Teste no número principal",
        ],
        waText: "Quero%20o%20Rob%C3%B4%20Build%20(R%24397%2C%20pagamento%20%C3%BAnico)",
      },
      {
        name: "Advanced",
        price: "R$697",
        period: "pagamento único",
        highlight: true,
        bullets: [
          "Tudo do Build",
          "Filtro de atendimento (coleta nome e WhatsApp do cliente)",
          "Encaminha pra fechar no momento certo",
          "Perguntas frequentes automatizadas",
        ],
        waText: "Quero%20o%20Rob%C3%B4%20Advanced%20(R%24697%2C%20pagamento%20%C3%BAnico)",
      },
      {
        name: "Champion",
        price: "R$997",
        period: "pagamento único",
        highlight: false,
        bullets: [
          "Tudo do Advanced",
          "WhatsApp + Instagram no mesmo fluxo",
          "Envio automático de contatos para sua planilha ou sistema",
          "Qualificação por etapa + relançamento",
          "Painel de conversas",
        ],
        waText: "Quero%20o%20Rob%C3%B4%20Champion%20(R%24997%2C%20pagamento%20%C3%BAnico)",
      },
    ],
  },
  {
    id: "site",
    tag: "Site Profissional",
    headline: "Quem te achou passa a te contratar.",
    plans: [
      {
        name: "Build",
        price: "R$397",
        period: "pagamento único",
        highlight: false,
        bullets: [
          "Página única, direta e pra celular",
          "Formulário de contato",
          "Botão de WhatsApp",
          "Entrega em dias",
        ],
        waText: "Quero%20o%20Site%20Build%20(R%24397%2C%20pagamento%20%C3%BAnico)",
      },
      {
        name: "Advanced",
        price: "R$697",
        period: "pagamento único",
        highlight: true,
        bullets: [
          "Tudo do Build",
          "Textos persuasivos focados em vendas",
          "Integração com WhatsApp + formulário",
          "Integração de rastreamento no Facebook e Instagram",
        ],
        waText: "Quero%20o%20Site%20Advanced%20(R%24697%2C%20pagamento%20%C3%BAnico)",
      },
      {
        name: "Champion",
        price: "R$997",
        period: "pagamento único",
        highlight: false,
        bullets: [
          "Tudo do Advanced",
          "Site multi-página (início + serviços + contato)",
          "Captação automática de clientes",
          "Código de rastreamento de anúncios instalado",
          "Estrutura pronta para anúncios no Google e Meta",
        ],
        waText: "Quero%20o%20Site%20Champion%20(R%24997%2C%20pagamento%20%C3%BAnico)",
      },
    ],
  },
];

const combos = [
  {
    name: "Combo Build",
    original: "R$1.191",
    price: "R$997",
    economy: "R$194",
    waText: "Quero%20o%20Combo%20Build%20(R%24997%2C%20economia%20de%20R%24194)",
  },
  {
    name: "Combo Advanced",
    original: "R$2.091",
    price: "R$1.797",
    economy: "R$294",
    waText: "Quero%20o%20Combo%20Advanced%20(R%241.797%2C%20economia%20de%20R%24294)",
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
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
            <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
              Soluções
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-white leading-[1.05] font-clash">
              Escolha o plano.<br />
              <span style={{ fontFamily: 'var(--font-melodrama)', fontStyle: 'italic', fontWeight: 400, color: '#71717a' }}>
                A entrega é garantida.
              </span>
            </h2>
            <p className="text-zinc-400 max-w-sm leading-relaxed text-base font-satoshi">
              Três serviços, três níveis cada. Você paga pelo que precisa agora e evolui quando quiser.
            </p>
          </div>

          {/* Proof bar */}
          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-[#1a1a1a]">
            {["Entrega em 48 a 72 horas por contrato", "Garantia de execução: 7 dias", "A partir de R$397"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
                <span className="text-zinc-400 text-sm font-satoshi">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <div className="flex flex-col gap-24">
          {services.map((service, si) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {/* Service header */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm bg-[#c8a84b]/15 text-[#c8a84b] font-satoshi">
                  {service.tag}
                </span>
                <p className="text-zinc-300 text-lg mt-3 font-satoshi">{service.headline}</p>
              </div>

              {/* Plans grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.plans.map((plan, pi) => (
                  <motion.div
                    key={pi}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: pi * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className={`relative flex flex-col p-8 rounded-sm border transition-all duration-300 ${
                      plan.highlight
                        ? "bg-[#111111] border-[#c8a84b]/40 shadow-[0_0_60px_rgba(248,79,29,0.12)]"
                        : "bg-[#0f0f0f] border-[#1f1f1f] hover:border-zinc-700"
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-3 left-8">
                        <span className="bg-[#c8a84b] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm font-clash">
                          Mais Procurado
                        </span>
                      </div>
                    )}

                    {/* Plan name */}
                    <p className={`text-xs font-bold uppercase tracking-widest mb-6 font-satoshi ${plan.highlight ? "text-[#c8a84b]" : "text-zinc-500"}`}>
                      {plan.name}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white font-clash">{plan.price}</span>
                      <p className="text-zinc-500 text-xs mt-1 font-satoshi">{plan.period}</p>
                    </div>

                    {/* Bullets */}
                    <div className="flex flex-col gap-3 mb-8 flex-1">
                      {plan.bullets.map((bullet, bi) => (
                        <div key={bi} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b] mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-zinc-300 font-satoshi">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/${WA}?text=${plan.waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full text-center font-bold py-4 px-6 text-sm rounded-sm transition-all duration-300 uppercase tracking-widest font-clash ${
                        plan.highlight
                          ? "bg-[#c8a84b] hover:bg-[#7a621a] text-white"
                          : "bg-white hover:bg-zinc-200 text-zinc-950"
                      }`}
                    >
                      Solicitar {plan.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Combo section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-24 pt-16 border-t border-[#1a1a1a]"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
            <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
              Combo dos 3
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white font-clash mb-2">
            Aparece, responde e vende com desconto.
          </h3>
          <p className="text-zinc-400 font-satoshi mb-10">
            Os 3 serviços juntos por um preço menor. Solução completa de presença digital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {combos.map((combo, ci) => (
              <div
                key={ci}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-[#111111] border border-[#1f1f1f] rounded-sm hover:border-zinc-700 transition-all duration-300"
              >
                <div>
                  <p className="text-white font-bold text-xl font-clash">{combo.name}</p>
                  <p className="text-zinc-500 text-sm font-satoshi mt-1">
                    De <span className="line-through">{combo.original}</span> por{" "}
                    <span className="text-white font-bold">{combo.price}</span>
                  </p>
                  <p className="text-[#c8a84b] text-xs mt-1 font-satoshi">✓ Economia de {combo.economy}</p>
                </div>
                <a
                  href={`https://wa.me/${WA}?text=${combo.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap bg-white hover:bg-zinc-200 text-zinc-950 font-bold py-4 px-8 text-sm rounded-sm transition-all duration-300 uppercase tracking-widest font-clash text-center"
                >
                  Solicitar {combo.name}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee + Payment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col gap-3 p-8 bg-[#c8a84b]/5 border border-[#c8a84b]/20 rounded-sm">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L10.5 5.5L15.5 6.5L11.75 10.25L12.5 15.5L8 13L3.5 15.5L4.25 10.25L0.5 6.5L5.5 5.5L8 1Z" fill="#c8a84b"/>
              </svg>
              <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest font-satoshi">Garantia de 7 dias</span>
            </div>
            <p className="text-zinc-300 text-sm font-satoshi leading-relaxed">
              Garantia objetiva com prazo definido. Se em 7 dias o que está no plano não for entregue, devolvemos 100%. Você só paga se a gente entregar o combinado. Sem letra miúda, sem risco pro seu lado.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-8 bg-[#111111] border border-[#1f1f1f] rounded-sm">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="#71717a" strokeWidth="1.5"/>
                <path d="M1 7h14" stroke="#71717a" strokeWidth="1.5"/>
              </svg>
              <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest font-satoshi">Pagamento</span>
            </div>
            <p className="text-zinc-400 text-sm font-satoshi leading-relaxed">
              Pix à vista ou cartão em até <strong className="text-white">4x sem juros</strong>. Cartão processado com segurança via Cakto; Pix direto com comprovante enviado no WhatsApp. <strong className="text-white">Contrato antes do pagamento</strong>, você sabe exatamente o que vai ser entregue.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
