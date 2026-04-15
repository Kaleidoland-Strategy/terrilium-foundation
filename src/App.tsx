import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ChevronDown, Globe, Mail, X, ArrowRight } from 'lucide-react';

const translations: any = {
  fr: {
    "skip-link": "Aller au contenu principal",
    "nav-manifesto": "Le Manifeste", "nav-actions": "Actions", "nav-support": "Soutenir",
    "hero-eyebrow": "Engagement. Transmission. Innovation.",
    "hero-title": "L'héritage est une <br/><span class='gold-text'>énergie cinétique.</span>",
    "hero-lead": "Terrilium catalyse les mémoires industrielles et les transitions technologiques pour bâtir les paysages de demain avec toutes les parties prenantes.",
    "tag-01": "01. L'Objet Social", 
    "manifeste-mega": "Nous ne regardons pas le passé avec nostalgie, mais avec ambition. Nos terrils sont des bibliothèques biologiques.",
    "manifeste-body": "Terrilium – Cultures & Patrimoines est une plateforme de convergence inclusive. Nous archivons l'histoire par le numérique et protégeons les futurs par l'écologie radicale.",
    "cta-join": "Rejoindre la démarche", 
    "tag-02": "02. Piliers d'Actions",
    "pilier-1-h3": "Arts & Résidences", "pilier-1-p": "Inviter la création contemporaine sur les sites miniers pour réenchanter le territoire.",
    "pilier-2-h3": "Biodiversités", "pilier-2-p": "Sanctuariser les faunes et flores endémiques des terrils pour une écologie globale.",
    "pilier-3-h3": "Numérique Social", "pilier-3-p": "Démocratiser l'accès aux archives et propulser la mémoire dans le futur technologique.",
    "tag-03": "03. Co-Construction", 
    "soutien-lead": "La pérennité de nos actions repose sur une communauté de membres engagé·e·s.",
    "card-don-h3": "Mécénat Libre", "card-don-p": "Soutien ponctuel aux projets de l'association. Déduction fiscale de 66% pour les particuliers.",
    "btn-don": "FAIRE UN DON", 
    "card-adh-h3": "Adhésion Membre", "card-adh-p": "Devenir acteur·rice de la gouvernance et participer aux chantiers de l'innovation.",
    "btn-adh": "S'ENGAGER", 
    "footer-values": "Équité. Transmission. Innovation.", 
    "footer-legal": "Mentions Légales", "footer-privacy": "Politique de Confidentialité", "footer-contact": "Contact",
    "modal-close": "FERMER [X]", 
    "cookie-title": "Gestion des cookies",
    "cookie-desc": "Nous utilisons des cookies fonctionnels et des services tiers (comme HelloAsso) pour assurer le bon fonctionnement du site et faciliter vos démarches de soutien.",
    "cookie-accept": "Accepter", "cookie-decline": "Refuser l'essentiel"
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
    "cookie-title": "Cookie Management", "cookie-desc": "We use functional cookies and third-party services to ensure the proper functioning of the site.",
    "cookie-accept": "Accept", "cookie-decline": "Decline"
  },
  de: {
    "skip-link": "Zum Hauptinhalt springen",
    "nav-manifesto": "Das Manifest", "nav-actions": "Aktionen", "nav-support": "Unterstützen",
    "hero-eyebrow": "Engagement. Übertragung. Innovation.",
    "hero-title": "Das Erbe ist <br/><span class='gold-text'>kinetische Energie.</span>",
    "hero-lead": "Terrilium katalysiert industrielle Erinnerungen und technologische Übergänge.",
    "tag-01": "01. Gesellschaftszweck", "manifeste-mega": "Wir blicken nicht mit Nostalgie auf die Vergangenheit, sondern mit Ehrgeiz.",
    "manifeste-body": "Terrilium ist eine inklusive Konvergenzplattform.",
    "cta-join": "Der Bewegung anschließen", "tag-02": "02. Aktionssäulen",
    "pilier-1-h3": "Kunst & Residenzen", "pilier-1-p": "Zeitgenössische Kunst auf Bergbaustandorte einladen.",
    "pilier-2-h3": "Biodiversität", "pilier-2-p": "Endemische Flora und Fauna schützen.",
    "pilier-3-h3": "Soziales Digital", "pilier-3-p": "Den Zugang zu Archiven demokratisieren.",
    "tag-03": "03. Co-Konstruktion", "soutien-lead": "Die Nachhaltigkeit unserer Aktionen beruht auf einer Gemeinschaft.",
    "card-don-h3": "Mäzenatentum", "card-don-p": "Einmalige Unterstützung für Projekte.",
    "btn-don": "Spenden", "card-adh-h3": "Mitgliedschaft", "card-adh-p": "Sich aktiv beteiligen.",
    "btn-adh": "Mitmachen", "footer-values": "Gerechtigkeit. Übertragung. Innovation.",
    "footer-legal": "Impressum", "footer-privacy": "Datenschutz", "footer-contact": "Kontakt",
    "modal-close": "Schließen [X]", "cookie-title": "Cookie-Verwaltung",
    "cookie-desc": "Wir verwenden funktionale Cookies.", "cookie-accept": "Akzeptieren", "cookie-decline": "Ablehnen"
  },
  nl: {
    "skip-link": "Naar de hoofdinhoud springen",
    "nav-manifesto": "Het Manifest", "nav-actions": "Acties", "nav-support": "Steunen",
    "hero-eyebrow": "Betrokkenheid. Overdracht. Innovatie.",
    "hero-title": "Erfgoed is <br/><span class='gold-text'>kinetische energie.</span>",
    "hero-lead": "Terrilium katalyseert industriële herinneringen en technologische transities.",
    "tag-01": "01. Maatschappelijk Doel", "manifeste-mega": "We kijken niet met nostalgie naar het verleden, maar met ambitie.",
    "manifeste-body": "Terrilium is een inclusief convergentieplatform.",
    "cta-join": "Sluit je aan", "tag-02": "02. Actiepijlers",
    "pilier-1-h3": "Kunst & Residenties", "pilier-1-p": "Hedendaagse creatie uitnodigen op mijnsites.",
    "pilier-2-h3": "Biodiversiteit", "pilier-2-p": "Endemische flora en fauna beschermen.",
    "pilier-3-h3": "Sociaal Digitaal", "pilier-3-p": "De toegang tot archieven demokratiseren.",
    "tag-03": "03. Co-Constructie", "soutien-lead": "De duurzaamheid van onze acties berust op een gemeenschap.",
    "card-don-h3": "Mecenaat", "card-don-p": "Eenmalige steun voor projecten.",
    "btn-don": "Doneren", "card-adh-h3": "Lidmaatschap", "card-adh-p": "Neem actief deel.",
    "btn-adh": "Meedoen", "footer-values": "Gelijkheid. Overdracht. Innovatie.",
    "footer-legal": "Juridische info", "footer-privacy": "Privacybeleid", "footer-contact": "Contact",
    "modal-close": "Sluiten [X]", "cookie-title": "Cookiebeheer",
    "cookie-desc": "Wij gebruiken functionele cookies.", "cookie-accept": "Accepteren", "cookie-decline": "Weigeren"
  },
  it: { "nav-manifesto": "Manifesto", "nav-actions": "Azioni", "nav-support": "Sostenere", "hero-eyebrow": "Innovazione.", "hero-title": "L'eredità è <span class='gold-text'>energia.</span>", "hero-lead": "Terrilium catalizza le memorie.", "tag-01": "01. Scopo", "manifeste-mega": "Ambizione.", "cta-join": "Unisciti", "tag-02": "02. Pilastri", "btn-don": "Dona", "btn-adh": "Aderisci" },
  es: { "nav-manifesto": "Manifiesto", "nav-actions": "Acciones", "nav-support": "Apoyar", "hero-eyebrow": "Innovación.", "hero-title": "El legado es <span class='gold-text'>energía.</span>", "hero-lead": "Terrilium cataliza las memorias.", "tag-01": "01. Objeto", "manifeste-mega": "Ambición.", "cta-join": "Unirse", "tag-02": "02. Pilares", "btn-don": "Donar", "btn-adh": "Participar" },
  pt: { "nav-manifesto": "Manifesto", "nav-actions": "Ações", "nav-support": "Apoiar", "hero-eyebrow": "Inovação.", "hero-title": "O legado é <span class='gold-text'>energia.</span>", "hero-lead": "Terrilium catalisa as memórias.", "tag-01": "01. Objeto", "manifeste-mega": "Ambición.", "cta-join": "Juntar-se", "tag-02": "02. Pilares", "btn-don": "Doar", "btn-adh": "Comprometer-se" },
  zh: { "nav-manifesto": "宣言", "nav-actions": "行动", "nav-support": "支持", "hero-eyebrow": "承诺. 创新.", "hero-title": "遗产是 <span class='gold-text'>动能.</span>", "hero-lead": "催化工业记忆。", "tag-01": "01. 宗旨", "manifeste-mega": "雄心勃勃。", "cta-join": "加入我们", "tag-02": "02. 支柱", "btn-don": "捐款", "btn-adh": "加入" },
  ja: { "nav-manifesto": "マニフェスト", "nav-actions": "活動", "nav-support": "支援", "hero-eyebrow": "革新.", "hero-title": "遺産は <span class='gold-text'>運動エネルギー.</span>", "hero-lead": "産業の記憶を未来へ。", "tag-01": "01. 目的", "manifeste-mega": "野心を持って。", "cta-join": "参加する", "tag-02": "02. 柱", "btn-don": "寄付する", "btn-adh": "入会する" },
  ar: { "nav-manifesto": "البيان", "nav-actions": "الأعمال", "nav-support": "الدعم", "hero-eyebrow": "الابتكار.", "hero-title": "التراث هو <span class='gold-text'>طاقة حركية.</span>", "hero-lead": "تحفيز الذكريات الصناعية.", "tag-01": "01. الغرض", "manifeste-mega": "طموح.", "cta-join": "انضم إلينا", "tag-02": "02. الركائز", "btn-don": "تبرع", "btn-adh": "انضم" }
};

type Language = 'fr' | 'en' | 'de' | 'nl' | 'it' | 'es' | 'pt' | 'zh' | 'ja' | 'ar';

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

  const t = (key: string) => translations[lang][key] || translations['fr'][key];

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
    <div className={`vanta-edition min-h-screen bg-[#0a0a0a] text-white font-['Plus_Jakarta_Sans',sans-serif] ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="grain-overlay fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Terrilium" className="h-8 w-auto transition-transform group-hover:scale-110" />
            <span className="text-lg font-black tracking-tighter text-white group-hover:text-[#D4AF37] transition-colors uppercase">TERRILIUM</span>
          </a>
          
          <div className="flex items-center gap-4 md:gap-6">
            <ul className="hidden md:flex items-center gap-6 text-[9px] font-bold tracking-[0.2em] uppercase text-white/50">
              <li><a href="#manifeste" className="hover:text-[#D4AF37] transition-colors">{t('nav-manifesto')}</a></li>
              <li><a href="#actions" className="hover:text-[#D4AF37] transition-colors">{t('nav-actions')}</a></li>
              <li><button onClick={() => openModal('don')} className="bg-[#D4AF37] text-black px-4 py-1.5 rounded-sm font-black hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] uppercase">{t('nav-support')}</button></li>
            </ul>

            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/terrilium.heritage/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#D4AF37] transition-all hover:scale-110" title="Instagram">
                <Instagram size={14} />
              </a>

              <div className="relative">
                <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-2 text-[9px] font-bold border border-white/10 px-2 py-1 rounded-sm uppercase tracking-widest hover:border-[#D4AF37]/50 transition-colors">
                  <Globe size={12} className="text-[#D4AF37]" /> {lang} <ChevronDown size={10} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute right-0 mt-2 bg-[#111] border border-white/10 rounded-sm overflow-hidden grid grid-cols-2 min-w-[180px] shadow-2xl z-[60]">
                      {Object.keys(translations).map((l) => (
                        <button key={l} onClick={() => { setLang(l as Language); setIsLangMenuOpen(false); }} className={`px-3 py-2 text-left hover:bg-white/5 text-[9px] font-bold tracking-widest uppercase ${lang === l ? 'text-[#D4AF37]' : 'text-white/60'}`}>
                          {l}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="min-h-[80vh] flex items-center px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-[#D4AF37] uppercase tracking-[0.4em] text-[9px] font-black mb-6">{t('hero-eyebrow')}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter uppercase" dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: t('hero-lead') }} />
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 1 }} className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-16" />
          </div>
        </section>

        {/* Manifeste */}
        <section id="manifeste" className="py-32 px-6 bg-white/[0.01] relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <h2 className="text-[#D4AF37] font-black text-[9px] tracking-[0.4em] uppercase mb-12 flex items-center gap-4">
                <span className="w-6 h-px bg-[#D4AF37]" /> {t('tag-01')}
              </h2>
              <p className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tighter" dangerouslySetInnerHTML={{ __html: t('manifeste-mega') }} />
            </div>
            <div className="flex flex-col border-l border-white/5 pl-12">
              <p className="text-lg text-white/50 mb-12 leading-relaxed font-light">{t('manifeste-body')}</p>
              <a href="#soutenir" className="group text-[#D4AF37] font-black uppercase tracking-[0.3em] text-[9px] flex items-center gap-4">
                {t('cta-join')} 
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <ArrowRight size={16} />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Actions */}
        <section id="actions" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-24">
              <h2 className="text-[#D4AF37] font-black text-[9px] tracking-[0.4em] uppercase">{t('tag-02')}</h2>
              <div className="text-[8px] font-bold text-white/20 tracking-[0.2em] uppercase">Stratégie Territoriale</div>
            </div>
            <div className="grid md:grid-cols-3 gap-1">
              {[1, 2, 3].map((num) => (
                <div key={num} className="group p-12 border border-white/5 hover:bg-[#D4AF37]/[0.02] hover:border-[#D4AF37]/20 transition-all relative">
                  <span className="text-6xl font-black text-white/[0.02] group-hover:text-[#D4AF37]/5 mb-12 block tracking-tighter transition-colors">0{num}</span>
                  <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-white/90">{t(`pilier-${num}-h3`)}</h3>
                  <p className="text-white/40 leading-relaxed font-light text-base">{t(`pilier-${num}-p`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soutenir */}
        <section id="soutenir" className="py-32 px-6 relative overflow-hidden bg-[#D4AF37]/[0.02]">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-[#D4AF37] font-black text-[9px] tracking-[0.4em] uppercase mb-12">{t('tag-03')}</h2>
            <p className="text-3xl md:text-5xl font-black mb-24 tracking-tighter leading-[1.1]" dangerouslySetInnerHTML={{ __html: t('soutien-lead') }} />
            
            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <div className="p-12 bg-[#0d0d0d] border border-white/5 text-left group hover:border-[#D4AF37]/40 transition-all shadow-2xl">
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-[#D4AF37]">{t('card-don-h3')}</h3>
                <p className="text-white/40 text-base mb-10 font-light leading-relaxed">{t('card-don-p')}</p>
                <button onClick={() => openModal('don')} className="w-full py-5 bg-[#D4AF37] text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all shadow-[0_8px_20px_rgba(212,175,55,0.15)]">{t('btn-don')}</button>
              </div>
              <div className="p-12 bg-[#0d0d0d] border border-white/5 text-left group hover:border-[#D4AF37]/40 transition-all shadow-2xl">
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-[#D4AF37]">{t('card-adh-h3')}</h3>
                <p className="text-white/40 text-base mb-10 font-light leading-relaxed">{t('card-adh-p')}</p>
                <a href="#adhesion-area" className="block w-full py-5 border border-[#D4AF37] text-[#D4AF37] text-center font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#D4AF37] hover:text-black transition-all">{t('btn-adh')}</a>
              </div>
            </div>

            <div id="adhesion-area" className="w-full aspect-video bg-white rounded-sm overflow-hidden shadow-2xl border border-white/10">
              <iframe title="HelloAsso" src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/adhesions/terrilium-2026-devenez-batisseur-se-du-renouveau-territorial/widget" className="w-full h-full border-0"></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 px-6 border-t border-white/5 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-start">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 group">
              <img src="/logo.png" alt="" className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all" />
              <span className="font-black tracking-tighter text-xl uppercase">TERRILIUM</span>
            </div>
            <p className="text-white/30 text-sm font-light leading-relaxed">Bassin Minier Global</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/terrilium.heritage/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"><Instagram size={18} /></a>
              <a href="mailto:clement@terrilium.org" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"><Mail size={18} /></a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-[9px] font-black tracking-[0.4em] uppercase text-[#D4AF37]">Navigation</h4>
            <div className="flex flex-col gap-3">
              <button onClick={() => openModal('legal')} className="text-left text-sm text-white/40 hover:text-white transition-colors font-light uppercase">{t('footer-legal')}</button>
              <button onClick={() => openModal('privacy')} className="text-left text-sm text-white/40 hover:text-white transition-colors font-light uppercase">{t('footer-privacy')}</button>
              <a href="mailto:clement@terrilium.org" className="text-sm text-white/40 hover:text-white transition-colors font-light uppercase">{t('footer-contact')}</a>
            </div>
          </div>
          <div className="md:text-right flex flex-col gap-6">
            <div className="p-6 border border-[#D4AF37]/10 rounded-sm inline-block md:ml-auto">
              <p className="text-[9px] text-[#D4AF37] font-black uppercase tracking-[0.4em] mb-3">{t('footer-values')}</p>
              <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">© 2026. Terrilium — Cultures & Patrimoines.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col">
            <div className="h-16 px-6 flex items-center justify-between border-b border-white/5">
              <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-[0.4em]">{activeModal === 'don' ? 'SECURE GATEWAY // HELLOASSO' : activeModal}</span>
              <button onClick={closeModal} className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors uppercase text-[9px] font-bold">{t('modal-close')}</button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {activeModal === 'don' ? (
                <iframe title="Don" src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/formulaires/1/widget?view=overlay" className="w-full h-full border-0"></iframe>
              ) : activeModal === 'legal' ? (
                <div className="max-w-4xl mx-auto py-24 px-6">
                  <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase">Mentions Légales</h2>
                  <div className="space-y-12 text-white/60 font-light leading-relaxed text-lg">
                    <section>
                      <h3 className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest mb-4">Éditeur du site</h3>
                      <p>Le présent site est édité par l'association <strong>TERRILIUM – Cultures & Patrimoines</strong>, association déclarée régie par la loi du 1er juillet 1901 et le décret du 16 août 1901.</p>
                      <p><strong>Siège social :</strong> Lille - Justice</p>
                      <p><strong>Contact :</strong> <a href="mailto:clement@terrilium.org" className="text-[#D4AF37] underline">Nous écrire par e-mail</a></p>
                    </section>
                    <section>
                      <h3 className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest mb-4">Directeur de la publication</h3>
                      <p>Clément LEGRAND, en qualité de Président de l'association TERRILIUM.</p>
                    </section>
                    <section>
                      <h3 className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest mb-4">Développement et Hébergement</h3>
                      <p>L'architecture technique de cette plateforme est développée sur <strong>GitHub</strong> et propulsée par l'infrastructure <strong>Vercel</strong>.</p>
                      <p>Le site est hébergé par <strong>Squarespace</strong>.</p>
                    </section>
                    <section>
                      <h3 className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest mb-4">Propriété intellectuelle</h3>
                      <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
                    </section>
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto py-24 px-6">
                  <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase">Politique de Confidentialité</h2>
                  <div className="space-y-12 text-white/60 font-light leading-relaxed text-lg">
                    <section>
                      <h3 className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest mb-4">Collecte des données personnelles</h3>
                      <p>L'association TERRILIUM s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site terrilium.org, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.</p>
                      <p>Les données personnelles recueillies sur le site résultent de la communication volontaire lors de vos dons et adhésions. Ces transactions sont sécurisées et gérées par notre partenaire <strong>HelloAsso</strong>.</p>
                    </section>
                    <section>
                      <h3 className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest mb-4">Utilisation des cookies</h3>
                      <p>Le site utilise des cookies techniques strictement nécessaires à son fonctionnement. Des cookies tiers liés à l'intégration des formulaires HelloAsso peuvent être déposés.</p>
                    </section>
                    <section>
                      <h3 className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest mb-4">Vos droits</h3>
                      <p>Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, vous pouvez nous joindre via notre formulaire de contact par e-mail.</p>
                    </section>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-6 right-6 md:w-[400px] z-[200] bg-[#111] border border-[#D4AF37]/10 p-8 rounded-sm shadow-2xl">
            <strong className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">{t('cookie-title')}</strong>
            <p className="text-sm text-white/50 mb-8 leading-relaxed font-light">{t('cookie-desc')}</p>
            <div className="flex gap-4">
              <button onClick={() => handleCookieAction(true)} className="flex-1 py-3.5 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-sm hover:bg-[#D4AF37] transition-all">{t('cookie-accept')}</button>
              <button onClick={() => handleCookieAction(false)} className="px-6 py-3.5 border border-white/10 text-[9px] font-black uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all">{t('cookie-decline')}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
