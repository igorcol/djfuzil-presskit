"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Activity } from "lucide-react";

export default function FloatingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
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

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-100 font-mono">
      <audio 
        ref={audioRef}
        src="/songs/TCHAU_PRA_NOS_ROMANTICOS.mp3" 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-black/90 backdrop-blur-xl border border-white/20 p-3 flex items-center gap-4 shadow-2xl"
      >
        {/* Visualizer Animado (Só mexe quando toca) */}
        <div className="flex items-end gap-0.5 h-8 w-8">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={isPlaying ? { height: ["20%", "100%", "40%", "80%", "20%"] } : { height: "20%" }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
              className="bg-red-600 w-full"
            />
          ))}
        </div>

        <div className="flex flex-col">
          <span className="text-[8px] text-red-600 font-black uppercase tracking-widest leading-none mb-1">
            {isPlaying ? "[TRANSMITTING_AUDIO]" : "[SIGNAL_PAUSED]"}
          </span>
          <h4 className="text-[10px] text-white font-bold uppercase tracking-tighter truncate w-32">
            TCHAU_PRA_NOS_ROMANTICOS.WAV
          </h4>
          
          {/* Barra de Progresso Minimalista */}
          <div className="w-full h-1px bg-white/10 mt-2 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-white"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button 
          onClick={togglePlay}
          className="bg-white text-black p-2 hover:bg-red-600 hover:text-white transition-colors"
        >
          {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
        </button>

        {/* Botão de Info/Volume Sutil */}
        <div className="flex flex-col gap-1 opacity-30 hover:opacity-100 transition-opacity">
          <Volume2 size={12} />
          <Activity size={12} />
        </div>
      </motion.div>

      {/* Tag de "Acesso Externo" */}
      <div className="mt-2 text-[7px] text-white/30 uppercase tracking-[3px] ml-1">
        Encrypted Audio Stream // 145 BPM
      </div>
    </div>
  );
}