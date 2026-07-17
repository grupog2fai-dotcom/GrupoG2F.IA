import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <LeadForm />

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#f84f1d] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-[10px]" style={{ fontFamily: 'var(--font-clash)' }}>G2F</span>
            </div>
            <span className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-clash)' }}>
              GrupoG2F<span className="text-[#f84f1d]">.IA</span>
            </span>
          </div>
          <p className="text-zinc-600 text-sm text-center" style={{ fontFamily: 'var(--font-satoshi)' }}>
            © {new Date().getFullYear()} GrupoG2F.IA — Assessoria de Aceleração Empresarial. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors" style={{ fontFamily: 'var(--font-satoshi)' }}>
              Política de Privacidade
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors" style={{ fontFamily: 'var(--font-satoshi)' }}>
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
