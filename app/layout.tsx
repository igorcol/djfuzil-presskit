import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// Mantemos apenas a Geist_Mono como principal para o visual técnico
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ARTISTA // [OFFICIAL_DOSSIER]",
  description: "Terminal de Ativos de Alta Performance. Acesso restrito a labels e contratantes selecionados.",
  // Isso muda a cor da barra do navegador no mobile para total black
  themeColor: "#000000", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${geistMono.variable} font-mono bg-black text-white antialiased selection:bg-red-600 selection:text-white`}
      >
        {/* Camada de Scanlines Global para textura industrial */}
        <div className="fixed inset-0 pointer-events-none z-9999 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
        
        {children}
      </body>
    </html>
  );
}