/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const photos = [
  { id: "IMG_001", type: "PRESS_SHOT", size: "4.2MB", url: "/press-1.jpg" },
  { id: "IMG_002", type: "LIVE_ACTION", size: "8.1MB", url: "/press-2.jpg" },
  { id: "IMG_003", type: "TOMA_ESTA", size: "3.5MB", url: "/press-3.jpg" },
  { id: "IMG_004", type: "RECEBA", size: "5.9MB", url: "/press-4.jpg" },
];

export default function VisualArchive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Ciclo automático de destaque (Scanner) [cite: 2025-06-25]
  useEffect(() => {
    if (isHovering) return; // Pausa o auto-scan se o mouse estiver em cima

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 2000); // Troca a cada 2 segundos

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="bg-black text-white p-6 md:p-10 font-mono border-t border-white/10 overflow-hidden">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-black italic tracking-tighter uppercase">[VISUAL_ASSETS_ARCHIVE]</h2>
          <p className="text-[10px] text-red-600 font-mono uppercase tracking-[3px]">Capturas, momentos e documentação estética</p>
        </div>
        {/* <button className="text-[10px] border border-white/20 px-4 py-2 hover:bg-red-600 hover:border-red-600 transition-all font-black uppercase tracking-widest">
          DOWNLOAD_ALL_ZIP
        </button> */}
      </div>

      <div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {photos.map((photo, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div 
              key={photo.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative aspect-3/4 overflow-hidden border transition-all duration-700 ${
                isActive ? 'border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.2)]' : 'border-white/5'
              }`}
            >
              {/* Imagem com Filtro Dinâmico */}
              <div className={`absolute inset-0 transition-all duration-700 ${
                isActive ? 'grayscale-0 brightness-110 scale-105' : 'grayscale opacity-70 brightness-50 scale-100'
              }`}>
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${photo.url})` }} 
                />
              </div>

              {/* Scanline Overlay (Ativo no destaque) */}
              {isActive && (
                <div className="absolute inset-0 pointer-events-none z-10 opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
              )}

              {/* HUD de Dados Individual */}
              <div className={`absolute bottom-0 left-0 right-0 p-3 bg-black/80 backdrop-blur-sm border-t border-white/10 transition-transform duration-500 z-20 ${
                isActive ? 'translate-y-0' : 'translate-y-full'
              }`}>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-black text-red-600 uppercase tracking-tighter">
                    {photo.id} // {photo.type} 
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] opacity-70 font-mono italic uppercase">Weight: {photo.size}</span>
                  </div>
                </div>
              </div>

              {/* Corner Markers (Aparecem no destaque) */}
              <div className={`absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-600 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              <div className={`absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red-600 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-between items-center opacity-20 font-mono text-[7px] uppercase tracking-[4px]">
        <span>Visual_Buffer_Loaded</span>
        <div className="h-px flex-1 mx-4 bg-white/20" />
        <span>Signal_Sync_Active</span>
      </div>
    </section>
  );
}