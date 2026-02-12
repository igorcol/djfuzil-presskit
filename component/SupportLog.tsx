/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";
import { useRef } from "react";

const supports = [
  { 
    id: "LOG_001",
    artist: "MOCHAKK", 
    track: "DA FUNK (DA FONK REMIX)", 
    venue: "----", 
    video: "sups/sup-dafonk-mochakk.mp4",
    impact: "98%"
  },
  { 
    id: "LOG_002",
    artist: "MOCHAKK", 
    track: "DA FUNK (DA FONK REMIX)", 
    venue: "AME CLUB", 
    video: "sups/sup-dafonk-ame.mp4",
    impact: "94%"
  },
  { 
    id: "LOG_003",
    artist: "DJ CAIOSVNTOS", 
    track: "DA FUNK (DA FONK REMIX)", 
    venue: "District 272 Millano", 
    video: "sups/sup-dafonk-millano.mp4",
    impact: "89%"
  },
];

function VideoCard({ item }: { item: typeof supports[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute no hover
      videoRef.current.play().catch(err => {
        console.log("Interação prévia necessária para som", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true; // Mute ao sair
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#080808] border border-white/10 overflow-hidden group cursor-crosshair"
    >
      {/* Vídeo Vertical */}
      <div className="aspect-9/16 relative overflow-hidden bg-neutral-900">
        <video 
          ref={videoRef}
          src={item.video} 
          loop 
          muted // Começa mutado por padrão do navegador
          playsInline
          className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
        />
        
        {/* Overlay de Câmera de Vigilância */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between items-start text-[8px] font-mono text-white/50 uppercase">
            <span>{item.id} // CAM_STREAM</span>
            <span className="text-red-600 group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity">
              ● SIGNAL_ACTIVE
            </span>
          </div>
          
          <div className="bg-black/80 backdrop-blur-md p-3 border border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform">
            <div className="flex items-center gap-2 mb-1">
              <MapPin size={10} className="text-red-600" />
              <span className="text-[9px] font-bold text-white uppercase tracking-tighter">{item.venue}</span>
            </div>
            <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
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
      <div className="p-5 space-y-3 bg-[#080808]">
        <div>
          <span className="text-[10px] text-red-600 font-black italic uppercase tracking-widest">Supported_By</span>
          <h3 className="text-2xl font-black italic text-white leading-none tracking-tighter uppercase">
            {item.artist}
          </h3>
        </div>
        <div className="flex justify-between items-end border-t border-white/5 pt-3">
          <span className="text-[9px] text-white/40 font-mono uppercase tracking-widest leading-none">
            TRACK: {item.track}
          </span>
          <button className="text-white hover:text-red-600 transition-colors">
            <Instagram size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function SupportLog() {
  return (
    <section className="bg-black py-20 px-6 border-t border-white/10">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-xl font-black italic tracking-tighter text-white uppercase">[GLOBAL_SUPPORT_LOG]</h2>
          <p className="text-[10px] text-red-600 font-mono uppercase tracking-[3px]">Suportes</p>
        </div>
        <div className="hidden md:block text-[8px] opacity-20 font-mono uppercase">
          Hover_to_unmute_signal
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supports.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}