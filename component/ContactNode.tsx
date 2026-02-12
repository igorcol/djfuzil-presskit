"use client";
import { Send, Smartphone, Globe, Lock, Instagram, FileText, ChevronRight } from "lucide-react";

export default function ContactNode() {
  return (
    <footer className="bg-black text-white p-6 md:p-20 font-mono border-t-2 border-red-600 relative overflow-hidden">
      
      {/* Background Decor - Coordenadas de Berlim/Global */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none text-[8px] leading-none font-mono">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {Array.from({ length: 12 }).map((_, j) => (
              <span key={j}>52.5200 N 13.4050 E // FUNK_INDUSTRIAL_SYSTEM_NODE_2026 // </span>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* SEÇÃO 01: VER MAIS (DEEP DIVE ASSETS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          <a 
            href="https://instagram.com/djfuzil" 
            target="_blank"
            className="group relative bg-[#080808] border border-white/10 p-8 flex justify-between items-center hover:border-red-600 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-20 transition-opacity">
              <Instagram size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] text-red-600 font-black tracking-[4px] uppercase mb-2 block">Visual_Feed</span>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter">Instagram_Archive</h3>
              <p className="text-[10px] opacity-40 mt-2 uppercase">Acesso ao laboratório visual e rotina de tour.</p>
            </div>
            <ChevronRight className="group-hover:translate-x-2 transition-transform text-red-600" />
          </a>

          <a 
            href="/presskit-completo.pdf" 
            target="_blank"
            className="group relative bg-[#080808] border border-white/10 p-8 flex justify-between items-center hover:border-white transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-20 transition-opacity">
              <FileText size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] text-white/50 font-black tracking-[4px] uppercase mb-2 block">Documentation</span>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter">Full_Presskit_PDF</h3>
              <p className="text-[10px] opacity-40 mt-2 uppercase">Dados técnicos, rider de palco e alta resolução.</p>
            </div>
            <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* SEÇÃO 02: CONTACT_MATRIX (EXECUÇÃO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
          
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-red-600 font-black">
                <Lock size={16} />
                <span className="text-[10px] tracking-[4px] uppercase">SECURE_CONNECTION_ESTABLISHED</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8">
                READY TO <br /> <span className="text-red-600 underline decoration-2 underline-offset-8">EXECUTE?</span>
              </h2>
              <p className="text-xs opacity-50 max-w-sm leading-relaxed uppercase font-mono">
                Para propostas de booking, collabs e operações de larga escala, utilize os protocolos de frequência abaixo. Resposta média em 24h.
              </p>
            </div>
            
            <div className="mt-12 hidden md:block">
              <span className="text-[9px] opacity-30 tracking-[6px] uppercase font-mono italic">CORE_v.01_BUILD_2026_BY_SILICON_VALLEY_UNDERGROUND</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href="https://wa.me/seunumeroaqui" 
              target="_blank"
              className="group flex items-center justify-between border border-white/10 bg-[#050505] p-6 hover:bg-white hover:text-black transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <Smartphone className="group-hover:rotate-12 transition-transform" size={24} />
                <div>
                  <span className="text-[9px] block opacity-50 font-black uppercase tracking-widest">Direct_Line</span>
                  <span className="text-xl font-black tracking-tighter uppercase italic">WhatsApp_Protocol</span>
                </div>
              </div>
              <Send size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a 
              href="mailto:artist@domain.com" 
              className="group flex items-center justify-between border border-white/10 bg-[#050505] p-6 hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <Globe className="group-hover:animate-spin-slow" size={24} />
                <div>
                  <span className="text-[9px] block opacity-50 font-black uppercase tracking-widest">Transmission</span>
                  <span className="text-xl font-black tracking-tighter uppercase italic">Official_Email</span>
                </div>
              </div>
              <Send size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Créditos de Arquitetura sutil */}
            <div className="mt-4 p-4 border border-white/5 opacity-20 hover:opacity-100 transition-opacity cursor-default">
               <span className="text-[8px] uppercase tracking-[2px] block text-center">
                 Developed as authority infrastructure for the electronic underground market.
               </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}