import { memo } from 'react';

const Footer = () => {
    return (
        <footer className="bg-black p-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Log de Status (Esquerda) */}
            <div className="font-mono text-[8px] opacity-30 uppercase tracking-[2px] flex flex-col gap-1">
                <span>[STATUS]: SYSTEM_OPERATIONAL_2026</span>
                <span>[ENCRYPTION]: BRUTALIST_CLEAN_V1</span>
                <span>© UNDERGROUND_ARCHITECT // DJ FUZIL</span>
            </div>

            {/* CTA Comercial (Direita) */}
            <a
                href="https://wa.me/5511999999999?text=Olá+Colombini,+vi+o+Dossiê+do+DJ+Fuzil+e+quero+iniciar+o+protocolo+para+meu+projeto."
                target="_blank"
                className="group flex flex-col items-end gap-1 font-mono no-underline"
            >
                <span className="text-[10px] text-red-600 font-black uppercase tracking-[3px] group-hover:text-white transition-colors">
                    Quer um preskkit como este? 
                </span>
                <div className="flex items-center gap-2">
                    <span className="text-[9px] text-white opacity-40 uppercase tracking-widest group-hover:opacity-100 transition-opacity">
                        Entre em contato
                    </span>
                    {/* SVG Corrigido sem a prop 'size' */}
                    <div className="h-4 w-4 bg-white text-black flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="w-3 h-3"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </a>
        </footer>
    );
};

export default memo(Footer);