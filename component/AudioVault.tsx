/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, BarChart3, ArrowUpRight } from "lucide-react";

const tracks = [
  { 
    id: "01", 
    title: "SISMICO_INDUSTRIAL", 
    file: "/songs/TCHAU_PRA_NOS_ROMANTICOS.mp3", 
    plays: "1.2M",
    bpm: "145", 
    genre: "HARD_FUNK"
  },
  { 
    id: "02", 
    title: "SUB_GRAVE_DISTORT", 
    file: "/songs/SUB_GRAVE.mp3",
    plays: "850K",
    bpm: "138", 
    genre: "INDUSTRIAL_TECH"
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
    <section className="bg-black py-20 px-6 border-t border-white/10">
      <audio ref={audioRef} onEnded={() => setCurrentPlaying(null)} />
      
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-xl font-black italic tracking-tighter text-white uppercase">[SONIC_WEAPONS_VAULT]</h2>
          <p className="text-[10px] text-red-600 font-mono uppercase tracking-[3px]">Arquitetura de Grave e Performance de Dados</p>
        </div>
      </div>

      {/* Grid de Tracks Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tracks.map((track) => (
          <div key={track.id} className="bg-[#050505] border border-white/10 p-6 flex flex-col gap-6 group hover:border-red-600/30 transition-all">
            <div className="flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <button 
                  onClick={() => toggleTrack(track.id, track.file)}
                  className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
                >
                  {currentPlaying === track.id ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                </button>
                <div>
                  <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest">ID: {track.id} // {track.genre}</span>
                  <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter mt-1">{track.title}</h3>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-white font-mono text-sm font-bold">
                  <BarChart3 size={14} className="text-red-600" />
                  {track.plays}
                </div>
                <span className="text-[8px] opacity-40 uppercase tracking-widest">Total_Streams</span>
              </div>
            </div>

            {/* Waveform Visualizer */}
            <div className="h-12 w-full flex items-center gap-0.5">
              {[...Array(60)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={currentPlaying === track.id ? { 
                    height: [`${Math.random() * 20 + 10}%`, `${Math.random() * 90 + 10}%`, `${Math.random() * 30 + 10}%`] 
                  } : { height: "15%" }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.01 }}
                  className={`w-full ${currentPlaying === track.id ? 'bg-red-600' : 'bg-white/10'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GLOBAL_ACCESS_NODES: Ver Mais */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <a 
          href="https://open.spotify.com/artist/..." 
          target="_blank"
          className="group flex items-center justify-between border border-white/10 p-6 bg-[#080808] hover:bg-white hover:text-black transition-all duration-300"
        >
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-[3px] opacity-50">Global_Streaming</span>
            <span className="text-lg font-black italic uppercase tracking-tighter">SPOTIFY_FULL_CATALOG</span>
          </div>
          <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <a 
          href="https://soundcloud.com/..." 
          target="_blank"
          className="group flex items-center justify-between border border-white/10 p-6 bg-[#080808] hover:bg-red-600 transition-all duration-300"
        >
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-[3px] opacity-50">Underground_Archive</span>
            <span className="text-lg font-black italic uppercase tracking-tighter">SOUNDCLOUD_REPOSITORY</span>
          </div>
          <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}