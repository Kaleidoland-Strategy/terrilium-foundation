import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ChevronDown, Globe, Mail, X, ArrowRight } from 'lucide-react';

const translations: any = {
  fr: { "nav-manifesto": "Le Manifeste", "nav-actions": "Actions", "nav-support": "Soutenir", "hero-eyebrow": "Engagement. Transmission. Innovation.", "hero-title": "L'héritage est une <br/><span class='gold-text'>énergie cinétique.</span>", "hero-lead": "Terrilium catalyse les mémoires industrielles pour bâtir les paysages de demain.", "tag-01": "01. L'Objet Social", "manifeste-mega": "Nous regardons le passé avec <span class='gold-text'>ambition</span>.", "manifeste-body": "Plateforme de convergence inclusive par le numérique et l'écologie.", "cta-join": "Rejoindre", "tag-02": "02. Piliers", "pilier-1-h3": "Arts", "pilier-1-p": "Résidences.", "pilier-2-h3": "Bio", "pilier-2-p": "Protection.", "pilier-3-h3": "Digital", "pilier-3-p": "Archives.", "tag-03": "03. Soutien", "soutien-lead": "Bâtissons ensemble.", "card-don-h3": "Don", "card-don-p": "Mécénat.", "btn-don": "Donner", "card-adh-h3": "Adhésion", "card-adh-p": "S'engager.", "btn-adh": "Adhérer", "footer-legal": "Légal", "footer-privacy": "Confidentialité", "footer-contact": "Contact", "cookie-desc": "Cookies fonctionnels.", "cookie-accept": "Accepter" },
  en: { "nav-manifesto": "Manifesto", "nav-actions": "Actions", "nav-support": "Support", "hero-eyebrow": "Commitment. Transmission. Innovation.", "hero-title": "Heritage is <br/><span class='gold-text'>kinetic energy.</span>", "hero-lead": "Terrilium catalyzes industrial memories to build tomorrow's landscapes.", "tag-01": "01. Purpose", "manifeste-mega": "We look at the past with <span class='gold-text'>ambition</span>.", "manifeste-body": "Inclusive convergence platform through digital and ecology.", "cta-join": "Join Us", "tag-02": "02. Pillars", "pilier-1-h3": "Arts", "pilier-1-p": "Residencies.", "pilier-2-h3": "Bio", "pilier-2-p": "Protection.", "pilier-3-h3": "Digital", "pilier-3-p": "Archives.", "tag-03": "03. Support", "soutien-lead": "Building together.", "card-don-h3": "Donate", "card-don-p": "Patronage.", "btn-don": "Donate", "card-adh-h3": "Member", "card-adh-p": "Join in.", "btn-adh": "Join", "footer-legal": "Legal", "footer-privacy": "Privacy", "footer-contact": "Contact", "cookie-desc": "Functional cookies.", "cookie-accept": "Accept" },
  de: { "nav-manifesto": "Manifest", "nav-actions": "Aktionen", "nav-support": "Unterstützen", "hero-eyebrow": "Engagement. Innovation.", "hero-title": "Erbe ist <span class='gold-text'>Energie.</span>", "hero-lead": "Industrielles Gedächtnis für die Zukunft.", "tag-01": "01. Zweck", "manifeste-mega": "Mit Ehrgeiz voran.", "cta-join": "Beitreten", "tag-02": "02. Säulen", "btn-don": "Spenden", "btn-adh": "Mitmachen" },
  es: { "nav-manifesto": "Manifiesto", "nav-actions": "Acciones", "nav-support": "Apoyar", "hero-eyebrow": "Compromiso. Innovación.", "hero-title": "El legado es <span class='gold-text'>energía.</span>", "hero-lead": "Memorias industriales para el mañana.", "tag-01": "01. Objeto", "manifeste-mega": "Miramos con ambición.", "cta-join": "Unirse", "tag-02": "02. Pilares", "btn-don": "Donar", "btn-adh": "Participar" },
  it: { "nav-manifesto": "Manifesto", "nav-actions": "Azioni", "nav-support": "Sostenere", "hero-eyebrow": "Impegno. Innovazione.", "hero-title": "L'eredità è <span class='gold-text'>energia.</span>", "hero-lead": "Memorie industriali per il futuro.", "tag-01": "01. Scopo", "manifeste-mega": "Guardiamo con ambizione.", "cta-join": "Unisciti", "tag-02": "02. Pilastri", "btn-don": "Dona", "btn-adh": "Aderisci" },
  pt: { "nav-manifesto": "Manifesto", "nav-actions": "Ações", "nav-support": "Apoiar", "hero-eyebrow": "Compromisso. Inovação.", "hero-title": "O legado é <span class='gold-text'>energia.</span>", "hero-lead": "Memórias industriais para o amanhã.", "tag-01": "01. Objeto", "manifeste-mega": "Olhamos com ambição.", "cta-join": "Juntar-se", "tag-02": "02. Pilares", "btn-don": "Doar", "btn-adh": "Aderir" },
  nl: { "nav-manifesto": "Manifest", "nav-actions": "Acties", "nav-support": "Steunen", "hero-eyebrow": "Betrokkenheid. Innovatie.", "hero-title": "Erfgoed is <span class='gold-text'>energie.</span>", "hero-lead": "Industriële herinneringen voor morgen.", "tag-01": "01. Doel", "manifeste-mega": "Met ambitie vooruit.", "cta-join": "Meedoen", "tag-02": "02. Pijlers", "btn-don": "Doneren", "btn-adh": "Lid worden" },
  zh: { "nav-manifesto": "宣言", "nav-actions": "行动", "nav-support": "支持", "hero-eyebrow": "承诺. 创新.", "hero-title": "遗产是 <span class='gold-text'>动能.</span>", "hero-lead": "催化工业记忆，建设未来景观。", "tag-01": "01. 宗旨", "manifeste-mega": "雄心勃勃地展望未来。", "cta-join": "加入我们", "tag-02": "02. 支柱", "btn-don": "捐款", "btn-adh": "加入" },
  ja: { "nav-manifesto": "マニフェスト", "nav-actions": "活動", "nav-support": "支援", "hero-eyebrow": "コミットメント. 革新.", "hero-title": "遺産は <span class='gold-text'>運動エネルギー.</span>", "hero-lead": "産業の記憶を未来へ。", "tag-01": "01. 目的", "manifeste-mega": "野心を持って過去を見る。", "cta-join": "参加する", "tag-02": "02. 柱", "btn-don": "寄付する", "btn-adh": "入会する" },
  ar: { "nav-manifesto": "البيان", "nav-actions": "الأعمال", "nav-support": "الدعم", "hero-eyebrow": "الالتزام. الابتكار.", "hero-title": "التراث هو <span class='gold-text'>طاقة حركية.</span>", "hero-lead": "تحفيز الذكريات الصناعية لبناء المستقبل.", "tag-01": "01. الغرض", "manifeste-mega": "ننظر إلى الماضي بطموح.", "cta-join": "انضم إلينا", "tag-02": "02. الركائز", "btn-don": "تبرع", "btn-adh": "انضم" }
};

export default function App() {
  const [lang, setLang] = useState('fr');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const t = (key: string) => translations[lang][key] || translations['fr'][key];

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-white font-['Plus_Jakarta_Sans',sans-serif] ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="T" className="h-8 w-auto" />
            <span className="text-lg font-black tracking-tighter uppercase">TERRILIUM</span>
          </a>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-6 text-[9px] font-bold tracking-widest uppercase text-white/60">
              <li><a href="#manifeste" className="hover:text-[#D4AF37] transition-colors">{t('nav-manifesto')}</a></li>
              <li><a href="#actions" className="hover:text-[#D4AF37] transition-colors">{t('nav-actions')}</a></li>
              <li><button onClick={() => setActiveModal('don')} className="bg-[#D4AF37] text-black px-4 py-1.5 rounded-sm hover:bg-white transition-all">{t('nav-support')}</button></li>
            </ul>
            <div className="relative">
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-2 text-[9px] font-bold border border-white/10 px-2 py-1 rounded-sm uppercase">
                <Globe size={12} className="text-[#D4AF37]" /> {lang}
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute right-0 mt-2 bg-[#111] border border-white/10 rounded-sm grid grid-cols-2 min-w-[200px] shadow-2xl overflow-hidden">
                    {Object.keys(translations).map((l) => (
                      <button key={l} onClick={() => { setLang(l); setIsLangMenuOpen(false); }} className="px-4 py-2 text-left hover:bg-white/5 text-[9px] font-bold uppercase">{l}</button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section className="min-h-[70vh] flex items-center px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[9px] font-black mb-6">{t('hero-eyebrow')}</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter uppercase" dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
            <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-light">{t('hero-lead')}</p>
          </div>
        </section>

        <section id="manifeste" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[#D4AF37] font-bold text-[9px] tracking-[0.3em] uppercase mb-12">{t('tag-01')}</h2>
              <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter" dangerouslySetInnerHTML={{ __html: t('manifeste-mega') }} />
            </div>
            <div className="flex flex-col border-l border-white/5 pl-12">
              <p className="text-lg text-white/50 mb-10 leading-relaxed font-light">{t('manifeste-body')}</p>
              <a href="#soutenir" className="text-[#D4AF37] font-black uppercase tracking-widest text-[9px] flex items-center gap-4 group">
                {t('cta-join')} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <section id="actions" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[#D4AF37] font-bold text-[9px] tracking-[0.3em] uppercase mb-20">{t('tag-02')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="p-10 border border-white/5 bg-white/[0.01] hover:border-[#D4AF37]/20 transition-all">
                  <span className="text-4xl font-black text-white/5 mb-8 block">0{num}</span>
                  <h3 className="text-lg font-black mb-4 uppercase">{t(`pilier-${num}-h3`)}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{t(`pilier-${num}-p`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 text-center bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-6 w-auto grayscale" />
            <span className="font-black tracking-tighter text-base uppercase">TERRILIUM</span>
          </div>
          <div className="flex gap-6 text-[9px] text-white/30 uppercase tracking-widest">
            <button onClick={() => setActiveModal('legal')}>{t('footer-legal')}</button>
            <a href="mailto:clement@terrilium.org">{t('footer-contact')}</a>
            <a href="https://www.instagram.com/terrilium.heritage/" target="_blank" rel="noopener noreferrer"><Instagram size={12} /></a>
          </div>
          <p className="text-[8px] text-white/10 uppercase tracking-[0.2em]">© 2026. Terrilium — Cultures & Patrimoines.</p>
        </div>
      </footer>

      <AnimatePresence>
        {activeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col">
            <div className="h-16 px-6 flex items-center justify-between border-b border-white/5">
              <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">{activeModal}</span>
              <button onClick={() => setActiveModal(null)}><X size={20} /></button>
            </div>
            <div className="flex-1">
              {activeModal === 'don' ? (
                <iframe title="Don" src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/formulaires/1/widget?view=overlay" className="w-full h-full border-0"></iframe>
              ) : (
                <div className="max-w-2xl mx-auto py-20 px-6 text-white/60 text-sm font-light">
                  <h2 className="text-2xl font-black text-white mb-8 uppercase">Légal</h2>
                  <p>Association TERRILIUM, Lille. Loi 1901.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
