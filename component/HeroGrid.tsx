"use client";
import Image from "next/image";

export default function HeroGrid() {
  return (
    <section className="min-h-screen bg-black grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-1 p-1 border-b border-white/10">
      {/* Quadrante Principal: O Vídeo */}
      <div className="md:col-span-3 md:row-span-2 relative bg-[#050505] overflow-hidden group">
        <video autoPlay muted loop className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700">
          <source src="/main-performance.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-4 left-4 font-mono text-[10px] text-red-600 tracking-widest uppercase">
          [PRIMARY_FEED // LIVE_INPUT]
        </div>
      </div>

      {/* Quadrante Lateral 01: Foto Estática com Glitch */}
      <div className="hidden md:block bg-[#080808] relative overflow-hidden border-l border-white/10">
        <Image src="/press-3.jpg" className="w-full h-full object-cover opacity-40 mix-blend-luminosity"  alt="dj" width={500} height={500}/>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-black italic tracking-tighter -rotate-90 opacity-20">DJ FUZIL</h1>
        </div>
      </div>

      {/* Quadrante Lateral 02: Status e Metadados */}
      <div className="bg-[#0a0a0a] p-6 flex flex-col justify-between border-t border-white/10 md:border-t-0">
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] uppercase font-bold text-red-600">
            <span>Status</span>
            <span className="animate-pulse">Active</span>
          </div>
          <div className="h-px bg-red-600/30 w-full" />
          <p className="text-[10px] opacity-50 uppercase leading-tight">
            SISTEMA DE INFRAESTRUTURA DE AUTORIDADE PARA O MERCADO DE LUXO E ENTRETENIMENTO [cite: 2025-10-12].
          </p>
        </div>
        <button className="w-full border border-white/20 py-3 text-[10px] font-black uppercase tracking-[3px] hover:bg-white hover:text-black transition-all">
          INITIALIZE_DOSSIER
        </button>
      </div>
    </section>
  );
}