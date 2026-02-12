/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from "framer-motion";
import { Play, Share2, Info } from "lucide-react";
import Image from "next/image";

const tracks = [
  { 
    id: "01", 
    title: "SISMICO_INDUSTRIAL", 
    cover: "/track-cover-1.jpg", 
    bpm: "145", 
    genre: "HARD_FUNK" 
  },
  { 
    id: "02", 
    title: "SUB_GRAVE_DISTORT", 
    cover: "/track-cover-2.jpg", 
    bpm: "138", 
    genre: "INDUSTRIAL_TECH" 
  },
];

export default function AudioVault() {
  return (
    <section className="bg-black py-20 px-6 border-t border-white/10">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-xl font-black italic tracking-tighter text-white">[SONIC_WEAPONS_VAULT]</h2>
          <p className="text-[10px] text-red-600 font-mono uppercase tracking-[3px]">Arquitetura de Grave e Frequência</p>
        </div>
        <div className="hidden md:block text-[9px] opacity-30 font-mono">
          DECODING_AUDIO_SIGNAL... OK
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tracks.map((track) => (
          <motion.div 
            key={track.id}
            whileHover={{ scale: 1.02 }}
            className="group relative flex flex-col md:flex-row bg-[#050505] border border-white/10 overflow-hidden"
          >
            {/* Capa com Efeito Duotone/Glitch */}
            <div className="relative w-full md:w-48 aspect-square overflow-hidden bg-neutral-900 border-r border-white/10">
              <Image 
                src={track.cover} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 contrast-125 transition-all duration-700"
                alt="capa"
                height={1000}
                width={1000}
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <Play size={40} className="text-white fill-white" />
              </div>
            </div>

            {/* Interface de Controle */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest">ID: {track.id} // {track.genre}</span>
                    <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter mt-1">{track.title}</h3>
                  </div>
                  <button className="text-white/30 hover:text-white transition-colors">
                    <Info size={16} />
                  </button>
                </div>

                {/* Waveform Visualizer Grande */}
                <div className="h-16 w-full flex items-center gap-px">
                  {[...Array(50)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ 
                        height: [
                          `${Math.random() * 20 + 10}%`, 
                          `${Math.random() * 80 + 20}%`, 
                          `${Math.random() * 40 + 10}%`
                        ] 
                      }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity, 
                        delay: i * 0.02,
                        ease: "easeInOut" 
                      }}
                      className="bg-red-600 w-full opacity-40 group-hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5 font-mono">
                <div className="flex gap-4">
                  <span className="text-[10px] text-white/50">BPM: <span className="text-white font-bold">{track.bpm}</span></span>
                  <span className="text-[10px] text-white/50 underline decoration-red-600 cursor-pointer hover:text-white">ANALYZE_DATA</span>
                </div>
                <button className="text-[10px] flex items-center gap-2 hover:text-red-600 transition-colors font-bold uppercase tracking-widest">
                  <Share2 size={12} /> Share_Signal
                </button>
              </div>
            </div>

            {/* Decorador Técnico Lateral */}
            <div className="absolute top-0 right-0 h-full w-1 bg-linear-to-b from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}