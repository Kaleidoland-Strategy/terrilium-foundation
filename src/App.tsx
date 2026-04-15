import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ChevronDown, Globe, Mail, Menu, X } from 'lucide-react';

const translations = {
  fr: {
    "skip-link": "Aller au contenu principal",
    "nav-manifesto": "Le Manifeste", "nav-actions": "Actions", "nav-support": "Soutenir",
    "hero-eyebrow": "Engagement. Transmission. Innovation.",
    "hero-title": "L'héritage est une <br/><span class='gold-text'>énergie cinétique.</span>",
    "hero-lead": "Terrilium catalyse les <span class='text-gold'>mémoires industrielles</span> et les transitions technologiques pour bâtir les paysages de demain.",
    "tag-01": "01. L'Objet Social", "manifeste-mega": "Nous ne regardons pas le passé avec nostalgie, mais avec <span class='text-gold'>ambition</span>.",
    "manifeste-body": "Terrilium est une plateforme de <span class='text-gold'>convergence inclusive</span>. Nous archivons l'histoire par le numérique et protégeons les futurs par l'écologie radicale.",
    "cta-join": "Rejoindre la démarche", "tag-02": "02. Piliers d'Actions",
    "pilier-1-h3": "Arts & Résidences", "pilier-1-p": "Inviter la création contemporaine sur les sites miniers.",
    "pilier-2-h3": "Biodiversités", "pilier-2-p": "Sanctuariser les faunes et flores endémiques des terrils.",
    "pilier-3-h3": "Numérique Social", "pilier-3-p": "Démocratiser l'accès aux archives territoriales.",
    "tag-03": "03. Co-Construction", "soutien-lead": "La pérennité de nos actions repose sur une <span class='text-gold'>communauté de bâtisseurs·euses</span>.",
    "card-don-h3": "Mécénat Libre", "card-don-p": "Soutien ponctuel aux projets. Déduction fiscale de 66%.",
    "btn-don": "Faire un don", "card-adh-h3": "Adhésion Membre", "card-adh-p": "Participer activement aux chantiers de l'innovation.",
    "btn-adh": "S'engager", "footer-values": "Équité. Transmission. Innovation.", 
    "footer-legal": "Mentions Légales", "footer-privacy": "Politique de Confidentialité", "footer-contact": "Contact",
    "modal-close": "Fermer [X]",
    "cookie-title": "Gestion des cookies", "cookie-desc": "Nous utilisons des cookies fonctionnels pour assurer le bon fonctionnement du site.",
    "cookie-accept": "Accepter", "cookie-decline": "Refuser"
  },
  en: {
    "skip-link": "Skip to main content",
    "nav-manifesto": "Manifesto", "nav-actions": "Actions", "nav-support": "Support",
    "hero-eyebrow": "Commitment. Transmission. Innovation.",
    "hero-title": "Heritage is <br/><span class='gold-text'>kinetic energy.</span>",
    "hero-lead": "Terrilium catalyzes <span class='text-gold'>industrial memories</span> and technological transitions for tomorrow's landscapes.",
    "tag-01": "01. Purpose", "manifeste-mega": "We do not look back with nostalgia, but with <span class='text-gold'>ambition</span>.",
    "manifeste-body": "Terrilium is an <span class='text-gold'>inclusive convergence</span> platform. We archive history through digital tools and protect futures through radical ecology.",
    "cta-join": "Join the movement", "tag-02": "02. Action Pillars",
    "pilier-1-h3": "Arts & Residencies", "pilier-1-p": "Inviting contemporary creation to mining sites.",
    "pilier-2-h3": "Biodiversity", "pilier-2-p": "Protecting endemic flora and fauna for resilience.",
    "pilier-3-h3": "Social Digital", "pilier-3-p": "Democratizing access to territorial archives.",
    "tag-03": "03. Co-Construction", "soutien-lead": "The sustainability of our actions relies on a <span class='text-gold'>community of builders</span>.",
    "card-don-h3": "Patronage", "card-don-p": "One-off support for projects. Tax benefits applicable.",
    "btn-don": "Donate Now", "card-adh-h3": "Membership", "card-adh-p": "Actively participate in innovation projects.",
    "btn-adh": "Join Us", "footer-values": "Equity. Transmission. Innovation.",
    "footer-legal": "Legal Notice", "footer-privacy": "Privacy Policy", "footer-contact": "Contact",
    "modal-close": "Close [X]",
    "cookie-title": "Cookie Management", "cookie-desc": "We use functional cookies to ensure the proper functioning of the site.",
    "cookie-accept": "Accept", "cookie-decline": "Decline"
  }
};

type Language = 'fr' | 'en';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('terrilium_cookies_accepted');
    if (!accepted) {
      const timer = setTimeout(() => setShowCookieBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const t = (key: any) => (translations[lang] as any)[key] || (translations['fr'] as any)[key];

  const handleCookieAction = (accepted: boolean) => {
    localStorage.setItem('terrilium_cookies_accepted', accepted.toString());
    setShowCookieBanner(false);
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  const openModal = (id: string) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="vanta-edition min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Terrilium" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tighter text-white">TERRILIUM</span>
          </a>
          
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
              <li><a href="#manifeste" className="hover:text-[#D4AF37] transition-colors">{t('nav-manifesto')}</a></li>
              <li><a href="#actions" className="hover:text-[#D4AF37] transition-colors">{t('nav-actions')}</a></li>
              <li><button onClick={() => openModal('don')} className="bg-[#8B0000] px-5 py-2 rounded-full hover:bg-red-700 transition-all">{t('nav-support')}</button></li>
            </ul>

            <div className="relative">
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-2 text-xs border border-white/10 px-3 py-1 rounded-full uppercase">
                <Globe size={14} /> {lang} <ChevronDown size={12} />
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden flex flex-col min-w-[120px]">
                    <button onClick={() => { setLang('fr'); setIsLangMenuOpen(false); }} className="px-4 py-2 text-left hover:bg-white/5 text-xs">FRANÇAIS</button>
                    <button onClick={() => { setLang('en'); setIsLangMenuOpen(false); }} className="px-4 py-2 text-left hover:bg-white/5 text-xs">ENGLISH</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section className="min-h-[80vh] flex items-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-6">{t('hero-eyebrow')}</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8" dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t('hero-lead') }} />
          </div>
        </section>

        {/* Manifeste */}
        <section id="manifeste" className="py-32 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[#8B0000] font-mono text-sm mb-12">{t('tag-01')}</h2>
              <p className="text-3xl md:text-5xl font-medium leading-tight" dangerouslySetInnerHTML={{ __html: t('manifeste-mega') }} />
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-lg text-white/70 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('manifeste-body') }} />
              <a href="#soutenir" className="text-[#8B0000] font-bold uppercase tracking-widest flex items-center gap-4 hover:gap-6 transition-all">
                {t('cta-join')} <span className="text-2xl">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Actions */}
        <section id="actions" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[#8B0000] font-mono text-sm mb-20">{t('tag-02')}</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[1, 2, 3].map((num) => (
                <div key={num} className="group p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-all bg-white/[0.02]">
                  <span className="text-4xl font-serif italic text-white/10 group-hover:text-[#D4AF37]/20 transition-colors mb-8 block">0{num}</span>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{t(`pilier-${num}-h3`)}</h3>
                  <p className="text-white/50 leading-relaxed">{t(`pilier-${num}-p`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soutenir */}
        <section id="soutenir" className="py-32 px-6 bg-[#8B0000]/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#8B0000] font-mono text-sm mb-12">{t('tag-03')}</h2>
            <p className="text-3xl font-medium mb-16" dangerouslySetInnerHTML={{ __html: t('soutien-lead') }} />
            
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              <div className="p-10 bg-[#0a0a0a] border border-white/5 text-left">
                <h3 className="text-xl font-bold mb-4">{t('card-don-h3')}</h3>
                <p className="text-white/50 text-sm mb-8">{t('card-don-p')}</p>
                <button onClick={() => openModal('don')} className="w-full py-4 bg-[#8B0000] font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all">{t('btn-don')}</button>
              </div>
              <div className="p-10 bg-[#0a0a0a] border border-white/5 text-left">
                <h3 className="text-xl font-bold mb-4">{t('card-adh-h3')}</h3>
                <p className="text-white/50 text-sm mb-8">{t('card-adh-p')}</p>
                <a href="#adhesion-area" className="block w-full py-4 border border-[#8B0000] text-[#8B0000] text-center font-bold uppercase tracking-widest text-xs hover:bg-[#8B0000] hover:text-white transition-all">{t('btn-adh')}</a>
              </div>
            </div>

            <div id="adhesion-area" className="w-full aspect-[4/5] md:aspect-video bg-white rounded-lg overflow-hidden">
              <iframe title="HelloAsso" src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/adhesions/terrilium-2026-devenez-batisseur-se-du-renouveau-territorial/widget" className="w-full h-full border-0"></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="" className="h-8 w-auto" />
            <span className="font-bold tracking-tighter">TERRILIUM</span>
          </div>
          <div className="flex gap-8 text-xs text-white/40 uppercase tracking-widest">
            <button onClick={() => openModal('legal')} className="hover:text-white transition-colors">{t('footer-legal')}</button>
            <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors">{t('footer-privacy')}</button>
            <a href="mailto:clement@terrilium.org" className="hover:text-white transition-colors">{t('footer-contact')}</a>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">© 2026. Terrilium — Cultures & Patrimoines.</p>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col">
            <div className="h-20 px-6 flex items-center justify-between border-b border-white/5">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">{activeModal} gateway</span>
              <button onClick={closeModal} className="p-2 hover:bg-white/5 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {activeModal === 'don' ? (
                <iframe title="Don" src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/formulaires/1/widget?view=overlay" className="w-full h-full border-0"></iframe>
              ) : (
                <div className="max-w-2xl mx-auto py-20 prose prose-invert">
                  <h2 className="text-3xl font-bold mb-10">Mentions Légales & RGPD</h2>
                  <p className="text-white/60 leading-relaxed">Association TERRILIUM – Cultures & Patrimoines, Loi 1901. Siège social : Lille. Directeur de la publication : Clément LEGRAND.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed bottom-6 left-6 right-6 md:left-auto md:w-96 z-[200] bg-[#1a1a1a] border border-white/10 p-6 rounded-xl shadow-2xl">
            <p className="text-sm text-white/70 mb-6 leading-relaxed">{t('cookie-desc')}</p>
            <div className="flex gap-3">
              <button onClick={() => handleCookieAction(true)} className="flex-1 py-3 bg-white text-black text-xs font-bold uppercase rounded-lg hover:bg-gray-200 transition-all">{t('cookie-accept')}</button>
              <button onClick={() => handleCookieAction(false)} className="px-6 py-3 border border-white/10 text-xs font-bold uppercase rounded-lg hover:bg-white/5 transition-all">{t('cookie-decline')}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
