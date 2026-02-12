"use client";
import { motion } from "framer-motion";

const supports = [
  { track: "PROTOCOLO_01", support: "VTSS", location: "Berghain (Berlin)", bpm: "145" },
  { track: "SUBÚRBIO_TECH", support: "RICHIE HAWTIN", location: "Time Warp", bpm: "138" },
  { track: "GRAVE_DISTORCIDO", support: "DJ RAMMES", location: "Baile da DZ7", bpm: "150" },
  { track: "INDUSTRIAL_BAILE", support: "HECTOR OAKS", location: "HÖR Berlin", bpm: "142" },
];

export default function SupportMatrix() {
  return (
    <section className="bg-black text-[#e0e0e0] p-4 md:p-10 font-mono border-t border-white/10">
      {/* Header da Seção */}
      <div className="mb-8 flex justify-between items-end border-b border-white/20 pb-2">
        <div>
          <h2 className="text-xl font-black italic tracking-tighter">[SUPPORT_LOG_MATRIX]</h2>
          <p className="text-[10px] opacity-50 uppercase">Global deployment and impact tracking</p>
        </div>
        <div className="text-right text-[10px] opacity-50">
          V.01 // 2026
        </div>
      </div>

      {/* Tabela Industrial */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[10px] uppercase opacity-40 border-b border-white/10">
              <th className="py-2 font-normal">#_Reference</th>
              <th className="py-2 font-normal">Track_ID</th>
              <th className="py-2 font-normal">Acknowledged_By</th>
              <th className="py-2 font-normal">Location_Impact</th>
              <th className="py-2 font-normal text-right">BPM_Sync</th>
            </tr>
          </thead>
          <tbody>
            {supports.map((item, index) => (
              <motion.tr 
                key={index}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)", color: "#fff" }}
                className="group border-b border-white/5 transition-colors cursor-crosshair"
              >
                <td className="py-4 text-[10px] opacity-30 italic">{`00${index + 1}`}</td>
                <td className="py-4 text-xs font-bold tracking-widest">{item.track}</td>
                <td className="py-4 text-xs">
                  <span className="bg-white text-black px-1 mr-2 text-[10px] font-black italic">SUPPORT</span>
                  {item.support}
                </td>
                <td className="py-4 text-xs opacity-70">{item.location}</td>
                <td className="py-4 text-xs text-right font-bold text-red-600 group-hover:animate-pulse">
                  {item.bpm}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer da Tabela com Status */}
      <div className="mt-4 flex gap-4">
        <div className="flex-1 h-px bg-white/10 self-center" />
        <div className="text-[9px] uppercase tracking-widest opacity-40">
          Data synchronized with global distribution nodes
        </div>
      </div>
    </section>
  );
}