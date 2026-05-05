import React from 'react';
import { Layout } from './components/Layout';
import { Target, Globe, Layers, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black">
      {/* Background Silhouettes de Terrils */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-[-10%] w-[70%] h-[60vh] bg-[#1a1a1a]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute bottom-0 right-[-5%] w-[60%] h-[45vh] bg-[#111]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      </div>

      <Layout>
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-7xl md:text-9xl font-thin tracking-[0.2em] mb-4">TERRILIUM</h1>
          <p className="text-xs md:text-sm tracking-[0.5em] text-white/40 uppercase mb-12">Ingénierie de Rareté & Asset Management</p>
          
          <button 
            onClick={() => window.location.href='mailto:clement@terrilium.org'}
            className="group relative px-12 py-4 border border-white/20 hover:border-white transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-[10px] tracking-[0.3em] font-bold">PRENDRE CONTACT</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-32 max-w-7xl w-full border-t border-white/5">
            <div className="p-12 hover:bg-white/[0.02] transition-colors border-r border-white/5">
              <span className="text-[10px] text-white/20 font-mono">01. OPTIMISATION</span>
              <h2 className="text-lg mt-4 mb-2 tracking-widest font-light">VALEUR D'USAGE</h2>
              <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-tighter">Exploitation de la Matrix des 334 terrils via IA.</p>
            </div>
            <div className="p-12 hover:bg-white/[0.02] transition-colors border-r border-white/5">
              <span className="text-[10px] text-white/20 font-mono">02. CAPITAL</span>
              <h2 className="text-lg mt-4 mb-2 tracking-widest font-light">MÉMOIRE OUVRIÈRE</h2>
              <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-tighter">Activation du capital immatériel en levier d'acquisition.</p>
            </div>
            <div className="p-12 hover:bg-white/[0.02] transition-colors">
              <span className="text-[10px] text-white/20 font-mono">03. RÉSILIENCE</span>
              <h2 className="text-lg mt-4 mb-2 tracking-widest font-light">OROGRAPHIE FONCIÈRE</h2>
              <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-tighter">Pilotage des transitions structurelles du bassin minier.</p>
            </div>
          </div>
        </main>

        <footer className="relative z-10 py-12 text-center border-t border-white/5">
          <div className="text-[8px] text-white/20 tracking-[0.4em] space-x-8 uppercase">
            <span>SIREN : 993 257 070</span>
            <span>RNA : W595045857</span>
            <span>LILLE</span>
            <span>clement@terrilium.org</span>
          </div>
        </footer>
      </Layout>
    </div>
  );
}
