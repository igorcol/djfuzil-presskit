/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

const photos = [
  { id: "IMG_001", type: "PRESS_SHOT", size: "4.2MB", url: "/press-1.jpg" },
  { id: "IMG_002", type: "LIVE_ACTION", size: "8.1MB", url: "/press-2.jpg" },
  { id: "IMG_003", type: "STUDIO_SESSION", size: "3.5MB", url: "/press-3.jpg" },
  { id: "IMG_004", type: "STREET_LOG", size: "5.9MB", url: "/press-4.jpg" },
];

export default function VisualArchive() {
  return (
    <section className="bg-black text-white p-6 md:p-10 font-mono border-t border-white/10">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-black italic tracking-tighter">[VISUAL_ASSETS_ARCHIVE]</h2>
          <p className="text-[10px] opacity-50 uppercase">Capturas de sinal e documentação estética</p>
        </div>
        <div className="flex gap-2">
          <button className="text-[10px] border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-all">
            DOWNLOAD_ALL_ZIP
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <motion.div 
            key={photo.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-3/4 bg-[#111] overflow-hidden border border-white/5"
          >
            {/* Imagem com filtro Industrial */}
            <div className="absolute inset-0 grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${photo.url})` }} />
            </div>

            {/* Scanline Overlay no Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />

            {/* Metadados Individuais */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-red-600">{photo.id} // {photo.type}</span>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] opacity-70 italic">SIZE: {photo.size}</span>
                  <div className="flex gap-2">
                    <button title="View"> <Eye size={14} className="hover:text-red-600 cursor-pointer" /> </button>
                    <button title="Download"> <Download size={14} className="hover:text-red-600 cursor-pointer" /> </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Marcadores de Canto (Crosshair) */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30" />
          </motion.div>
        ))}
      </div>

      {/* Grid Decorativo de fundo para preencher espaço se necessário */}
      <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}