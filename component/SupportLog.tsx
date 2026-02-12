/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";

const supports = [
  { 
    id: "LOG_001",
    artist: "MOCHAKK", 
    track: "SISMICO_INDUSTRIAL", 
    venue: "Mainstage @ Tomorrowland", 
    video: "/video-support-1.mp4",
    impact: "98%"
  },
  { 
    id: "LOG_002",
    artist: "VTSS", 
    track: "SUB_GRAVE_DISTORT", 
    venue: "Berghain / Panorama Bar", 
    video: "/video-support-2.mp4",
    impact: "94%"
  },
  { 
    id: "LOG_003",
    artist: "RICHIE HAWTIN", 
    track: "INDUSTRIAL_BAILE", 
    venue: "HÖR Berlin (Live)", 
    video: "/video-support-3.mp4",
    impact: "89%"
  },
];

export default function SupportLog() {
  return (
    <section className="bg-black py-20 px-6 border-t border-white/10">
      <div className="mb-12">
        <h2 className="text-xl font-black italic tracking-tighter text-white">[GLOBAL_SUPPORT_LOG]</h2>
        <p className="text-[10px] text-red-600 font-mono uppercase tracking-[3px]">Impacto em pista / Sinal capturado</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supports.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -5 }}
            className="relative bg-[#080808] border border-white/10 overflow-hidden group"
          >
            {/* Vídeo Vertical (Vibe Reel/TikTok Industrial) */}
            <div className="aspect-9/16 relative overflow-hidden bg-neutral-900">
              <video 
                src={item.video} 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay de Câmera de Vigilância */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start text-[8px] font-mono text-white/50 uppercase">
                  <span>{item.id} // CAM_STREAM</span>
                  <span className="text-red-600 animate-pulse">● LIVE_FEED</span>
                </div>
                <div className="bg-black/80 backdrop-blur-md p-3 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={10} className="text-red-600" />
                    <span className="text-[9px] font-bold text-white uppercase">{item.venue}</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.impact }}
                      className="h-full bg-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Info do Suporte */}
            <div className="p-5 space-y-3">
              <div>
                <span className="text-[10px] text-red-600 font-black italic uppercase">Supported_By</span>
                <h3 className="text-2xl font-black italic text-white leading-none tracking-tighter uppercase">
                  {item.artist}
                </h3>
              </div>
              <div className="flex justify-between items-end border-t border-white/5 pt-3">
                <span className="text-[9px] text-white/40 font-mono uppercase tracking-widest">
                  TRACK: {item.track}
                </span>
                <button className="text-white hover:text-red-600 transition-colors">
                  <Instagram size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}