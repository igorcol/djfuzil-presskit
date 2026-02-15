"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroGrid() {
  const initializeSystem = () => {
    // Dispara o evento global para o FloatingPlayer liberar o áudio [cite: 2025-10-12]
    window.dispatchEvent(new Event("initialize-audio"));

    // Scroll suave para a próxima seção (VisualArchive)
    const nextSection = document.getElementById("visuals");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen max-h-screen bg-black grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-1 p-1 border-b border-white/10 overflow-hidden">

      {/* Quadrante Principal: O Vídeo (Forçado a preencher sem esticar o grid) */}
      <div className="md:col-span-3 md:row-span-2 relative bg-[#050505] overflow-hidden group border border-white/5">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/main-performance.mp4" type="video/mp4" />
        </video>

        {/* Camada de Scanlines para textura de monitoramento [cite: 2025-06-25] */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px]" />

        <div className="absolute top-4 left-4 font-mono text-[10px] text-red-600 tracking-widest uppercase z-10">
          [PRIMARY_FEED // LIVE_INPUT_DETECTION]
        </div>

        {/* Título de Impacto sobre o vídeo */}
        <div className="absolute bottom-8 left-8 z-10 space-y-2">
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-white leading-[0.8]">
            DJ <br /> FUZIL
          </h2>

          <div className="flex items-center gap-3">
            <div className="bg-red-600 text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] italic">
              Produção a Mil
            </div>
            <div className="h-px w-12 bg-white/20" />
            <span className="text-[8px] font-mono opacity-40 uppercase tracking-widest">
              2026
            </span>
          </div>
        </div>
      </div>

      {/* Quadrante Lateral 01: Foto Estática com Glitch */}
      <div className="hidden md:block bg-[#080808] relative overflow-hidden border-l border-white/10 h-full">
        <Image
          src="/press-3.jpg"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity hover:scale-110 transition-transform duration-1000"
          alt="dj"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-4xl font-black italic tracking-tighter -rotate-90 opacity-20 uppercase">DJ FUZIL</h3>
        </div>
      </div>

      {/* Quadrante Lateral 02: Status e Gatilho de Sistema */}
      <div className="bg-[#0a0a0a] p-6 flex flex-col justify-between border-t border-white/10 md:border-t-0 h-full">
        <div className="space-y-4">
          <div className="flex justify-between text-[10px] uppercase font-bold text-red-600">
            <span>Status_Core</span>
            <span className="animate-pulse">Active_Signal</span>
          </div>
          <div className="h-px bg-red-600/30 w-full" />
          <p className="text-[9px] opacity-50 uppercase leading-relaxed font-mono">
            Diretamente de Sorocaos 015 esse ai vem soltando as pedrada violenta toma toma
          </p>
        </div>

        <motion.button
          onClick={initializeSystem}
          whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
          className="w-full border border-white/20 py-4 text-[10px] font-black uppercase tracking-[3px] transition-all duration-300"
        >
          INITIALIZE_PRESSKIT
        </motion.button>
      </div>
    </section>
  );
}