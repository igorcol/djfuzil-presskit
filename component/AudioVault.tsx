"use client";
import { useState, useRef } from "react";
import { motion, } from "framer-motion";
import { Play, Pause, BarChart3, ArrowUpRight, Activity, Zap } from "lucide-react";
import Image from "next/image";

const tracks = [
  { 
    id: "01", 
    title: "DESTAQUE 1", 
    file: "/songs/TCHAU_PRA_NOS_ROMANTICOS.mp3", 
    plays: "50k",
    bpm: "180", 
    key: "Gm",
    genre: "PORRADA",
    cover: "/songs/VAIJOGA-CAPA.jpg"
  },
  { 
    id: "02", 
    title: "DESTAQUE 2", 
    file: "/songs/SUB_GRAVE.mp3",
    plays: "15k",
    bpm: "138", 
    key: "C#m",
    genre: "AQUELAS COISA NÉ",
    cover: "/songs/VAIJOGA-CAPA.jpg"
  },
];

export default function AudioVault() {
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleTrack = (trackId: string, file: string) => {
    if (currentPlaying === trackId) {
      audioRef.current?.pause();
      setCurrentPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = file;
        audioRef.current.play();
        setCurrentPlaying(trackId);
      }
    }
  };

  return (
    <section className="bg-black py-24 px-6 border-t border-white/10 relative overflow-hidden">
      <audio ref={audioRef} onEnded={() => setCurrentPlaying(null)} />
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex justify-between items-end border-l-2 border-red-600 pl-6">
          <div>
            <h2 className="text-2xl font-black italic tracking-tighter text-white uppercase">[SONIC_WEAPONS_VAULT]</h2>
            <p className="text-[10px] text-red-600 font-mono uppercase tracking-[4px] mt-1">Arquitetura de Grave e Performance de Dados</p>
          </div>
          <div className="hidden md:flex items-center gap-4 opacity-20 font-mono text-[9px] uppercase tracking-widest">
            <span>Buffer_Status: Optimal</span>
            <Activity size={12} className="animate-pulse" />
          </div>
        </div>

        {/* Grid de Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div 
              key={track.id} 
              className="group relative bg-[#080808] border border-white/5 p-6 transition-all duration-500 hover:border-red-600/40 hover:bg-[#0c0c0c]"
            >
              <div className="flex flex-col gap-6">
                
                {/* Top Section: Cover + Title */}
                <div className="flex gap-6 items-start">
                  <div className="relative w-24 h-24 shrink-0 bg-neutral-900 overflow-hidden border border-white/10 group-hover:border-red-600/50 transition-colors">
                    <Image 
                      src={track.cover} 
                      className={`w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 ${currentPlaying === track.id ? 'scale-110 grayscale-0' : 'scale-100 opacity-40'}`} 
                      alt={track.title} 
                      height={800}
                      width={800}
                    />
                    <button 
                      onClick={() => toggleTrack(track.id, track.file)}
                      className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {currentPlaying === track.id ? <Pause size={24} className="text-red-600 fill-red-600" /> : <Play size={24} className="text-white fill-white" />}
                    </button>
                    {currentPlaying === track.id && (
                      <div className="absolute top-1 right-1">
                        <Zap size={10} className="text-red-600 fill-red-600 animate-pulse" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">MOD_ID: {track.id}</span>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/40">
                        <BarChart3 size={12} className="text-red-600" />
                        {track.plays}
                      </div>
                    </div>
                    <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                      {track.title}
                    </h3>
                    <div className="flex gap-3 pt-2">
                      <span className="text-[8px] bg-white/5 px-2 py-0.5 rounded-none border border-white/10 text-white/50 font-bold uppercase">{track.genre}</span>
                      <span className="text-[8px] bg-red-600/10 px-2 py-0.5 rounded-none border border-red-600/20 text-red-600 font-bold uppercase">{track.bpm} BPM</span>
                      <span className="text-[8px] bg-white/5 px-2 py-0.5 rounded-none border border-white/10 text-white/50 font-bold uppercase">KEY: {track.key}</span>
                    </div>
                  </div>
                </div>

                {/* Waveform Section */}
                <div className="relative h-16 w-full flex items-center gap-1 px-2 bg-black/40 border border-white/5 group-hover:border-red-600/20 transition-all">
                  {[...Array(50)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={currentPlaying === track.id ? { 
                        height: [`${Math.random() * 30 + 20}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 40 + 20}%`] 
                      } : { height: "10%" }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.02 }}
                      className={`w-full max-w-1 rounded-full transition-all duration-500 ${currentPlaying === track.id ? 'bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.4)]' : 'bg-white/10 group-hover:bg-white/20'}`}
                    />
                  ))}
                  <div className="absolute bottom-1 right-2 text-[7px] font-mono opacity-20 uppercase">Realtime_Spectrum_Analysis</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GLOBAL_ACCESS_NODES */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="https://open.spotify.com/artist/..." 
            target="_blank"
            className="group flex items-center justify-between border border-white/5 p-8 bg-[#0a0a0a] hover:bg-white hover:text-black transition-all duration-500"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[4px] text-red-600 group-hover:text-red-600">Global_Streaming</span>
              <span className="text-xl font-black italic uppercase tracking-tighter">SPOTIFY_FULL_CATALOG</span>
            </div>
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-black/20">
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

          <a 
            href="https://soundcloud.com/..." 
            target="_blank"
            className="group flex items-center justify-between border border-white/5 p-8 bg-[#0a0a0a] hover:bg-red-600 transition-all duration-500"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[4px] opacity-50 text-white">Underground_Archive</span>
              <span className="text-xl font-black italic uppercase tracking-tighter text-white">SOUNDCLOUD_REPOSITORY</span>
            </div>
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
              <ArrowUpRight size={20} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}