import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ChevronDown, Globe, Mail, X } from 'lucide-react';

const translations = {
  fr: {
    "skip-link": "Aller au contenu principal",
    "nav-manifesto": "Le Manifeste", "nav-actions": "Actions", "nav-support": "Soutenir",
    "hero-eyebrow": "Engagement. Transmission. Innovation.",
    "hero-title": "L'héritage est une <br/><span class='gold-text'>énergie cinétique.</span>",
    "hero-lead": "Terrilium catalyse les mémoires industrielles et les transitions technologiques pour bâtir les paysages de demain.",
    "tag-01": "01. L'Objet Social", "manifeste-mega": "Nous ne regardons pas le passé avec nostalgie, mais avec ambition.",
    "manifeste-body": "Terrilium est une plateforme de convergence inclusive. Nous archivons l'histoire par le numérique et protégeons les futurs par l'écologie radicale.",
    "cta-join": "Rejoindre la démarche", "tag-02": "02. Piliers d'Actions",
    "pilier-1-h3": "Arts & Résidences", "pilier-1-p": "Inviter la création contemporaine sur les sites miniers.",
    "pilier-2-h3": "Biodiversités", "pilier-2-p": "Sanctuariser les faunes et flores endémiques des terrils.",
    "pilier-3-h3": "Numérique Social", "pilier-3-p": "Démocratiser l'accès aux archives territoriales.",
    "tag-03": "03. Co-Construction", "soutien-lead": "La pérennité de nos actions repose sur une communauté de bâtisseurs·euses.",
    "card-don-h3": "Mécénat Libre", "card-don-p": "Soutien ponctuel aux projets. Déduction fiscale de 66%.",
    "btn-don": "Faire un don", "card-adh-h3": "Adhésion Membre", "card-adh-p": "Participer activement aux chantiers de l'innovation.",
    "btn-adh": "S'engager", "footer-values": "Équité. Transmission. Innovation.", 
    "footer-legal": "Mentions Légales", "footer-privacy": "Politique de Confidentialité", "footer-contact": "Contact",
    "modal-close": "Fermer [X]",
    "cookie-title": "Gestion des cookies", "cookie-desc": "Nous utilisons des cookies fonctionnels et des services tiers (comme HelloAsso) pour assurer le bon fonctionnement du site.",
    "cookie-accept": "Accepter", "cookie-decline": "Refuser",
    "instagram-follow": "Suivez-nous sur Instagram"
  },
  en: {
    "skip-link": "Skip to main content",
    "nav-manifesto": "Manifesto", "nav-actions": "Actions", "nav-support": "Support",
    "hero-eyebrow": "Commitment. Transmission. Innovation.",
    "hero-title": "Heritage is <br/><span class='gold-text'>kinetic energy.</span>",
    "hero-lead": "Terrilium catalyzes industrial memories and technological transitions for tomorrow's landscapes.",
    "tag-01": "01. Purpose", "manifeste-mega": "We do not look back with nostalgia, but with ambition.",
    "manifeste-body": "Terrilium is an inclusive convergence platform. We archive history through digital tools and protect futures through radical ecology.",
    "cta-join": "Join the movement", "tag-02": "02. Action Pillars",
    "pilier-1-h3": "Arts & Residencies", "pilier-1-p": "Inviting contemporary creation to mining sites.",
    "pilier-2-h3": "Biodiversity", "pilier-2-p": "Protecting endemic flora and fauna for resilience.",
    "pilier-3-h3": "Social Digital", "pilier-3-p": "Democratizing access to territorial archives.",
    "tag-03": "03. Co-Construction", "soutien-lead": "The sustainability of our actions relies on a community of builders.",
    "card-don-h3": "Patronage", "card-don-p": "One-off support for projects. Tax benefits applicable.",
    "btn-don": "Donate Now", "card-adh-h3": "Membership", "card-adh-p": "Actively participate in innovation projects.",
    "btn-adh": "Join Us", "footer-values": "Equity. Transmission. Innovation.",
    "footer-legal": "Legal Notice", "footer-privacy": "Privacy Policy", "footer-contact": "Contact",
    "modal-close": "Close [X]",
    "cookie-title": "Cookie Management", "cookie-desc": "We use functional cookies and third-party services (like HelloAsso) to ensure the proper functioning of the site.",
    "cookie-accept": "Accept", "cookie-decline": "Decline",
    "instagram-follow": "Follow us on Instagram"
  },
  de: { "skip-link": "Zum Hauptinhalt springen", "nav-manifesto": "Manifest", "nav-actions": "Aktionen", "nav-support": "Unterstützen", "hero-eyebrow": "Engagement. Übertragung. Innovation.", "hero-title": "Das Erbe ist eine <br/><span class='gold-text'>kinetische Energie.</span>", "hero-lead": "Terrilium katalysiert industrielle Erinnerungen und technologische Übergänge.", "tag-01": "01. Gesellschaftszweck", "manifeste-mega": "Wir blicken nicht mit Nostalgie zurück.", "manifeste-body": "Terrilium ist eine integrative Konvergenzplattform.", "cta-join": "Beitreten", "tag-02": "02. Aktionssäulen", "pilier-1-h3": "Kunst", "pilier-1-p": "Residenzen.", "pilier-2-h3": "Biodiversität", "pilier-2-p": "Schutz.", "pilier-3-h3": "Digital", "pilier-3-p": "Archiv.", "tag-03": "03. Co-Konstruktion", "soutien-lead": "Gemeinschaft von Erbauern.", "card-don-h3": "Mäzenatentum", "card-don-p": "Unterstützung.", "btn-don": "Spenden", "card-adh-h3": "Mitgliedschaft", "card-adh-p": "Mitmachen.", "btn-adh": "Mitmachen", "footer-values": "Innovation.", "footer-legal": "Impressum", "footer-privacy": "Datenschutz", "footer-contact": "Kontakt", "modal-close": "Schließen", "cookie-title": "Cookies", "cookie-desc": "Funktional.", "cookie-accept": "OK", "cookie-decline": "Nein", "instagram-follow": "Instagram" },
  nl: { "skip-link": "Skip", "nav-manifesto": "Manifest", "nav-actions": "Acties", "nav-support": "Steunen", "hero-eyebrow": "Innovatie.", "hero-title": "Erfgoed is <br/><span class='gold-text'>energie.</span>", "hero-lead": "Terrilium bouwt de landschappen van morgen.", "tag-01": "01. Doel", "manifeste-mega": "Ambitie.", "manifeste-body": "Platform.", "cta-join": "Meedoen", "tag-02": "02. Pijlers", "pilier-1-h3": "Kunst", "pilier-1-p": "Creatie.", "pilier-2-h3": "Biodiversiteit", "pilier-2-p": "Natuur.", "pilier-3-h3": "Digitaal", "pilier-3-p": "Toegang.", "tag-03": "03. Bouwen", "soutien-lead": "Gemeenschap.", "card-don-h3": "Donatie", "card-don-p": "Steun.", "btn-don": "Doneren", "card-adh-h3": "Lidmaatschap", "card-adh-p": "Actie.", "btn-adh": "Meedoen", "footer-values": "Innovatie.", "footer-legal": "Juridisch", "footer-privacy": "Privacy", "footer-contact": "Contact", "modal-close": "Sluiten", "cookie-title": "Cookies", "cookie-desc": "Functioneel.", "cookie-accept": "OK", "cookie-decline": "Nee", "instagram-follow": "Instagram" },
  it: { "skip-link": "Salta", "nav-manifesto": "Manifesto", "nav-actions": "Azioni", "nav-support": "Sostenere", "hero-eyebrow": "Innovazione.", "hero-title": "L'eredità è <br/><span class='gold-text'>energia.</span>", "hero-lead": "Terrilium catalizza le memorie industriali.", "tag-01": "01. Scopo", "manifeste-mega": "Ambizione.", "manifeste-body": "Piattaforma.", "cta-join": "Unisciti", "tag-02": "02. Pilastri", "pilier-1-h3": "Arte", "pilier-1-p": "Residenze.", "pilier-2-h3": "Biodiversità", "pilier-2-p": "Protezione.", "pilier-3-h3": "Digitale", "pilier-3-p": "Archivio.", "tag-03": "03. Costruzione", "soutien-lead": "Comunità.", "card-don-h3": "Donazione", "card-don-p": "Supporto.", "btn-don": "Dona", "card-adh-h3": "Adesione", "card-adh-p": "Partecipa.", "btn-adh": "Impegnati", "footer-values": "Innovazione.", "footer-legal": "Note legali", "footer-privacy": "Privacy", "footer-contact": "Contatto", "modal-close": "Chiudi", "cookie-title": "Cookie", "cookie-desc": "Funzionali.", "cookie-accept": "OK", "cookie-decline": "No", "instagram-follow": "Instagram" },
  es: { "skip-link": "Saltar", "nav-manifesto": "Manifiesto", "nav-actions": "Acciones", "nav-support": "Apoyar", "hero-eyebrow": "Innovación.", "hero-title": "El legado es <br/><span class='gold-text'>energía.</span>", "hero-lead": "Terrilium cataliza las memorias industriales.", "tag-01": "01. Objeto", "manifeste-mega": "Ambición.", "manifeste-body": "Plataforma.", "cta-join": "Unirse", "tag-02": "02. Pilares", "pilier-1-h3": "Arte", "pilier-1-p": "Residencias.", "pilier-2-h3": "Biodiversidad", "pilier-2-p": "Protección.", "pilier-3-h3": "Digital", "pilier-3-p": "Archivo.", "tag-03": "03. Construcción", "soutien-lead": "Comunidad.", "card-don-h3": "Donación", "card-don-p": "Apoyo.", "btn-don": "Donar", "card-adh-h3": "Membresía", "card-adh-p": "Participar.", "btn-adh": "Comprometerse", "footer-values": "Innovación.", "footer-legal": "Aviso legal", "footer-privacy": "Privacidad", "footer-contact": "Contacto", "modal-close": "Cerrar", "cookie-title": "Cookies", "cookie-desc": "Funcionales.", "cookie-accept": "OK", "cookie-decline": "No", "instagram-follow": "Instagram" },
  pt: { "skip-link": "Pular", "nav-manifesto": "Manifesto", "nav-actions": "Ações", "nav-support": "Apoiar", "hero-eyebrow": "Inovação.", "hero-title": "O legado é <br/><span class='gold-text'>energia.</span>", "hero-lead": "Terrilium catalisa as memórias industriais.", "tag-01": "01. Objeto", "manifeste-mega": "Ambição.", "manifeste-body": "Plataforma.", "cta-join": "Juntar-se", "tag-02": "02. Pilares", "pilier-1-h3": "Arte", "pilier-1-p": "Residências.", "pilier-2-h3": "Biodiversidade", "pilier-2-p": "Proteção.", "pilier-3-h3": "Digital", "pilier-3-p": "Arquivo.", "tag-03": "03. Construção", "soutien-lead": "Comunidade.", "card-don-h3": "Doação", "card-don-p": "Apoio.", "btn-don": "Doar", "card-adh-h3": "Adesão", "card-adh-p": "Participar.", "btn-adh": "Comprometer-se", "footer-values": "Innovação.", "footer-legal": "Aviso legal", "footer-privacy": "Privacidade", "footer-contact": "Contacto", "modal-close": "Fechar", "cookie-title": "Cookies", "cookie-desc": "Funcionais.", "cookie-accept": "OK", "cookie-decline": "Não", "instagram-follow": "Instagram" }
};

type Language = 'fr' | 'en' | 'de' | 'nl' | 'it' | 'es' | 'pt';

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

  const t = (key: keyof typeof translations['fr']) => translations[lang][key] || translations['fr'][key];

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
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Plus_Jakarta_Sans',sans-serif]">
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Terrilium" className="h-10 w-auto" />
            <span className="text-xl font-extrabold tracking-tighter">TERRILIUM</span>
          </a>
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-widest uppercase">
              <li><a href="#manifeste" className="hover:text-[#D4AF37] transition-colors">{t('nav-manifesto')}</a></li>
              <li><a href="#actions" className="hover:text-[#D4AF37] transition-colors">{t('nav-actions')}</a></li>
              <li><button onClick={() => openModal('don')} className="bg-[#8B0000] px-5 py-2 rounded-sm hover:bg-red-700 transition-all">{t('nav-support')}</button></li>
            </ul>
            <div className="flex items-center gap-6"><a href="https://www.instagram.com/terrilium.heritage/" target="_blank" rel="noopener noreferrer" className="text-white/10 hover:text-[#D4AF37] transition-all hover:scale-110" title="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a><div className="relative">
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-2 text-[10px] font-bold border border-white/10 px-3 py-1.5 rounded-sm uppercase">
                <Globe size={12} className="text-[#8B0000]" /> {lang} <ChevronDown size={10} />
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 bg-[#111] border border-white/10 rounded-sm overflow-hidden flex flex-col min-w-[140px] shadow-2xl">
                    {(['fr', 'en', 'de', 'nl', 'it', 'es', 'pt'] as Language[]).map((l) => (
                      <button key={l} onClick={() => { setLang(l); setIsLangMenuOpen(false); }} className="px-4 py-2.5 text-left hover:bg-white/5 text-[10px] font-bold tracking-widest uppercase">{l}</button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="min-h-[80vh] flex items-center px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-extrabold mb-8">{t('hero-eyebrow')}</p>
            <h1 className="text-5xl md:text-8xl font-extrabold leading-[1.1] mb-10 tracking-tighter" dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">{t('hero-lead')}</p>
          </div>
        </section>

        <section id="manifeste" className="py-40 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-end">
            <div>
              <h2 className="text-[#8B0000] font-bold text-[10px] tracking-[0.3em] uppercase mb-16">{t('tag-01')}</h2>
              <p className="text-3xl md:text-6xl font-bold leading-[1.1] tracking-tighter" dangerouslySetInnerHTML={{ __html: t('manifeste-mega') }} />
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-white/50 mb-12 leading-relaxed font-light">{t('manifeste-body')}</p>
              <a href="#soutenir" className="text-[#8B0000] font-black uppercase tracking-[0.2em] text-xs flex items-center gap-4 group">
                {t('cta-join')} <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="actions" className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[#8B0000] font-bold text-[10px] tracking-[0.3em] uppercase mb-24">{t('tag-02')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="group p-12 border border-white/5 hover:border-[#D4AF37]/20 transition-all bg-white/[0.01] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#8B0000] transition-all duration-500" />
                  <span className="text-6xl font-black text-white/5 mb-12 block tracking-tighter">0{num}</span>
                  <h3 className="text-xl font-extrabold mb-6 uppercase tracking-tight">{t(`pilier-${num}-h3` as any)}</h3>
                  <p className="text-white/40 leading-relaxed font-light">{t(`pilier-${num}-p` as any)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="soutenir" className="py-40 px-6 bg-[#8B0000]/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#8B0000] font-bold text-[10px] tracking-[0.3em] uppercase mb-16">{t('tag-03')}</h2>
            <p className="text-3xl md:text-5xl font-bold mb-24 tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: t('soutien-lead') }} />
            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <div className="p-12 bg-[#0a0a0a] border border-white/5 text-left group hover:border-[#D4AF37]/30 transition-colors">
                <h3 className="text-2xl font-extrabold mb-6 uppercase tracking-tighter">{t('card-don-h3')}</h3>
                <p className="text-white/40 text-sm mb-10 font-light leading-relaxed">{t('card-don-p')}</p>
                <button onClick={() => openModal('don')} className="w-full py-5 bg-[#8B0000] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-red-700 transition-all">{t('btn-don')}</button>
              </div>
              <div className="p-12 bg-[#0a0a0a] border border-white/5 text-left group hover:border-[#D4AF37]/30 transition-colors">
                <h3 className="text-2xl font-extrabold mb-6 uppercase tracking-tighter">{t('card-adh-h3')}</h3>
                <p className="text-white/40 text-sm mb-10 font-light leading-relaxed">{t('card-adh-p')}</p>
                <a href="#adhesion-area" className="block w-full py-5 border border-[#8B0000] text-[#8B0000] text-center font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#8B0000] hover:text-white transition-all">{t('btn-adh')}</a>
              </div>
            </div>
            <div id="adhesion-area" className="w-full aspect-video bg-white rounded-sm overflow-hidden shadow-2xl">
              <iframe title="HelloAsso" src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/adhesions/terrilium-2026-devenez-batisseur-se-du-renouveau-territorial/widget" className="w-full h-full border-0"></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="" className="h-8 w-auto" />
            <span className="font-black tracking-tighter text-xl">TERRILIUM</span>
          </div>
          <div className="flex gap-8 text-[10px] text-white/40 uppercase tracking-widest">
            <button onClick={() => openModal('legal')} className="hover:text-white transition-colors">{t('footer-legal')}</button>
            <button onClick={() => openModal('privacy')} className="hover:text-white transition-colors">{t('footer-privacy')}</button>
            <a href="mailto:clement@terrilium.org" className="hover:text-white transition-colors">{t('footer-contact')}</a>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">© 2026. Terrilium — Cultures & Patrimoines.</p>
        </div>
      </footer>

      <AnimatePresence>
        {activeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col">
            <div className="h-20 px-6 flex items-center justify-between border-b border-white/5">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em]">{activeModal} gateway</span>
              <button onClick={closeModal} className="p-2 hover:bg-white/5 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {activeModal === 'don' ? (
                <iframe title="Don" src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/formulaires/1/widget?view=overlay" className="w-full h-full border-0"></iframe>
              ) : (
                <div className="max-w-3xl mx-auto py-24 px-6">
                  <h2 className="text-4xl font-extrabold mb-12 tracking-tighter">{activeModal === 'legal' ? 'Mentions Légales' : 'Confidentialité'}</h2>
                  <p className="text-white/60 font-light leading-relaxed">Association TERRILIUM – Cultures & Patrimoines, Loi 1901. Siège social : Lille. Directeur de la publication : Clément LEGRAND.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCookieBanner && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-8 right-8 md:w-[400px] z-[200] bg-[#111] border border-white/10 p-8 rounded-sm shadow-2xl">
            <p className="text-sm text-white/50 mb-8 leading-relaxed font-light">{t('cookie-desc')}</p>
            <div className="flex gap-4">
              <button onClick={() => handleCookieAction(true)} className="flex-1 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-gray-200 transition-all">{t('cookie-accept')}</button>
              <button onClick={() => handleCookieAction(false)} className="px-8 py-4 border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all">{t('cookie-decline')}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
