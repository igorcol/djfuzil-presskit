"use client";

import ArtistRecommendation from "@/component/ArtistRecommendation";
import AudioVault from "@/component/AudioVault";
import ContactNode from "@/component/ContactNode";
import HeroGrid from "@/component/HeroGrid";
import SupportLog from "@/component/SupportLog";
import VisualArchive from "@/component/VisualArchive";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * PROTOCOLO: THE SILICON-VALLEY UNDERGROUND ARCHITECT
 * OBJETIVO: INFRAESTRUTURA DE AUTORIDADE PARA DJ/PRODUTOR
 * HIERARQUIA: IMPACTO -> PROVA TÉCNICA -> NARRATIVA -> VALIDAÇÃO -> CONVERSÃO
 */

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-black min-h-screen selection:bg-red-600 selection:text-white">
      
      {/* 00. SYSTEM_PROGRESS_BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-101 origin-left"
        style={{ scaleX }}
      />

      {/* 01. HERO_GRID (COMMAND CENTER) 
          O primeiro impacto: Vídeo e metadados de sistema.
      */}
      <HeroGrid />

      {/* 02. VISUAL_ASSETS_ARCHIVE
          Impacto visual imediato. O artista precisa parecer uma estrela antes de ser ouvido.
      */}
      <VisualArchive />

      {/* 03. AUDIO_VAULT (SONIC WEAPONS)
          Entrega técnica. Onde o som é tratado como um ativo de alta performance.
      */}
      <AudioVault />

      {/* 04. ARTIST_RECOMMENDATION (THE SPOTLIGHT)
          Narrativa de valor. Onde conectamos a arte aos resultados exponenciais.
      */}
      <ArtistRecommendation />

      {/* 05. SUPPORT_LOG (SOCIAL INTELLIGENCE)
          A validação do caos. Vídeos verticais mostrando a track no habitat natural.
      */}
      <SupportLog />

      {/* 06. CONTACT_NODE (READY TO EXECUTE?)
          Fechamento. Linha direta para selar o contrato.
      */}
      <ContactNode />

      {/* FOOTER_TECHNICAL_LOG */}
      <footer className="bg-black p-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center font-mono text-[8px] opacity-30 uppercase tracking-[2px] gap-4 text-center">
        <span>[STATUS]: SYSTEM_OPERATIONAL_2026</span>
        <span>[ENCRYPTION]: BRUTALIST_CLEAN_V1</span>
        <span>© UNDERGROUND_ARCHITECT // [NOME_DO_ARTISTA]</span>
      </footer>

    </main>
  );
}