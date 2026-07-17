import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contrate Agora | SEO Local, Agente de IA e Landing Page — GrupoG2F.IA",
  description:
    "Pare de perder clientes para a concorrência. Contrate online: SEO Local (R$ 297), Agente de IA para WhatsApp e Landing Page + Tráfego. Resultado garantido ou reembolso.",
  keywords: "SEO local, agente de IA whatsapp, landing page tráfego pago, automação atendimento, GrupoG2F",
  openGraph: {
    title: "Contrate Agora | SEO Local, Agente de IA e Landing Page — GrupoG2F.IA",
    description:
      "Pare de perder clientes para a concorrência. Contrate online: SEO Local (R$ 297), Agente de IA para WhatsApp e Landing Page + Tráfego. Resultado garantido ou reembolso.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased dark" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-50 selection:bg-orange-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
