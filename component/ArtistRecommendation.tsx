"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Radio, Zap, Target, Activity } from "lucide-react";
import Image from "next/image";

export default function ArtistRecommendation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-black py-24 px-6 border-t border-white/10 relative overflow-hidden">
      {/* Background Tech Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-12">

          {/* Header de Seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 text-[10px] font-black italic uppercase tracking-[0.2em]">
                <Zap size={12} /> RECOMENDAÇÃO DO ARTISTA
              </div>
              <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter text-white">
                &quot;VAIJOGA&quot; <br />
                <span className="text-red-600">vaijogajoga</span>
              </h2>
            </div>
            <p className="max-w-sm text-[10px] md:text-xs font-mono text-white/40 uppercase leading-relaxed text-right">
              Análise de tração orgânica e métricas de engajamento global.
              Sinal de impacto detectado em múltiplos territórios.
            </p>
          </div>

          {/* Grid de Performance Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Bloco 01: A Capa (O Objeto de Arte) */}
            <div className="lg:col-span-5 relative group bg-[#0a0a0a] border border-white/10 p-2 overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/songs/VAIJOGA-CAPA.jpg"
                  alt="Track Cover"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                  width={800}
                  height={800}
                />
                {/* Overlay de Play Profissional */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="bg-white text-black w-20 h-20 rounded-none flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                    {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
                  </div>
                </button>
              </div>

              <audio
                ref={audioRef}
                src="/songs/VAIJOGA-CROPPED.mp3"
                onEnded={() => setIsPlaying(false)}
              />

              <div className="p-4 flex justify-between items-center bg-[#050505] h-12 overflow-hidden border-t border-white/5">
                <span className="text-[10px] font-mono text-red-600 font-black uppercase tracking-widest">
                  Signal: {isPlaying ? 'Streaming' : 'Standby'}
                </span>

                {/* Container com altura travada para não empurrar o layout */}
                <div className="flex items-end gap-1 h-5 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 4 }}
                      animate={isPlaying ? { height: [4, 20, 8, 16, 4] } : { height: 4 }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "easeInOut"
                      }}
                      className="w-0.5 bg-red-600/50"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bloco 02: O Dashboard de Stats (A Autoridade) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Stat Principal: Impressions */}
              <div className="bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-between group hover:border-red-600 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="bg-red-600/10 p-3 text-red-600">
                    <Target size={24} />
                  </div>
                  <span className="text-[10px] font-mono opacity-30">001_IMP</span>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono opacity-50 uppercase mb-2 tracking-widest">Total Impressions</h4>
                  <div className="text-6xl md:text-7xl font-black italic text-white tracking-tighter">5.2M+</div>
                </div>
              </div>

              {/* Stat Secundário: Engagement */}
              <div className="bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-between group hover:border-white transition-colors">
                <div className="flex justify-between items-start">
                  <div className="bg-white/5 p-3 text-white">
                    <Activity size={24} />
                  </div>
                  <span className="text-[10px] font-mono opacity-30">002_ENG</span>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono opacity-50 uppercase mb-2 tracking-widest">Engagement Rate</h4>
                  <div className="text-6xl md:text-7xl font-black italic text-white tracking-tighter">94%</div>
                </div>
              </div>

              {/* Botão de Ação Massivo */}
              <div className="md:col-span-2">
                <a
                  href="https://open.spotify.com/intl-pt/track/3q82F7w2ZUp7s4Pc5BxTif?si=70c2ef86ba254249"
                  target="_blank"
                  className="w-full h-full bg-white text-black p-8 flex items-center justify-between group hover:bg-red-600 hover:text-white transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <Radio size={40} className="animate-pulse" />
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] block mb-1">External_Node</span>
                      <h4 className="text-3xl font-black italic uppercase tracking-tighter">Open_In_Spotify</h4>
                    </div>
                  </div>
                  <div className="border-2 border-current p-2 group-hover:translate-x-2 transition-transform">
                    <Target size={24} />
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}