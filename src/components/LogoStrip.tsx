"use client";

import Image from "next/image";

const partners = [
  { name: "RD Station", src: "/assets/logo.png" },
  { name: "ActiveCampaign", src: "/assets/logo.png" },
  { name: "Stripe", src: "/assets/logo.png" },
  { name: "Pipedrive", src: "/assets/logo.png" },
  { name: "Make", src: "/assets/logo.png" },
  { name: "Zapier", src: "/assets/logo.png" },
];

export default function LogoStrip() {
  // Duplicating for infinite scroll effect
  const logos = [...partners, ...partners];

  return (
    <section className="py-24 border-y border-white/5 bg-[var(--color-bg-surface)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-[var(--color-text-muted)] text-sm font-semibold tracking-widest uppercase">
          Integrado às ferramentas que movem o mercado
        </p>
      </div>

      <div className="relative w-full flex">
        {/* Left/Right Fades */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg-surface)] to-transparent z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg-surface)] to-transparent z-10" />

        {/* CSS Scrolling Track */}
        <div className="flex items-center gap-16 md:gap-32 w-max logos-track">
          {logos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={50}
                className="object-contain h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
