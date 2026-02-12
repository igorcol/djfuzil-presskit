export default function ArtistRecommendation() {
  return (
    <section className="bg-[#050505] py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Lado Esquerdo: A Narrativa */}
        <div className="space-y-6">
          <div className="inline-block bg-red-600 text-white px-2 py-1 text-[10px] font-black italic uppercase">
            Featured_Track_Legacy
          </div>
          <h2 className="text-5xl font-black italic uppercase leading-none tracking-tighter text-white">
            &quot;SISMICO_INDUSTRIAL&quot; <br /> 
            <span className="text-red-600">IMPACTO_GLOBAL</span>
          </h2>
          <div className="space-y-4 text-xs md:text-sm font-mono text-white/60 leading-relaxed uppercase">
            <p>
              &quot;Essa track foi o divisor de águas. Criada em um porão em Berlim, mas com o DNA do Funk periférico. 
               O objetivo era criar uma arma sonora que unisse o peso do Techno Industrial com o swing do baile.&quot;
            </p>
            <p className="border-l-2 border-red-600 pl-4 italic">
              &quot;Foi tocada pelo Mochakk no Mainstage, gerando mais de 5 milhões de impressões orgânicas. 
               Não vendemos apenas música; vendemos cultura de pertencimento [cite: 2025-06-25].&quot;
            </p>
          </div>
        </div>

        {/* Lado Direito: O Vídeo de Prova */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative aspect-video bg-black border border-white/20 overflow-hidden">
             <video src="/mochakk-support.mp4" controls className="w-full h-full object-cover" />
             <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-3 py-1 text-[9px] font-mono border border-white/10 text-white">
               STREAM_DATA: 5.2M+ VIEWS
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}