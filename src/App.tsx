import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ChevronDown, Globe, Mail } from 'lucide-react';

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
    "cookie-title": "Gestion des cookies", "cookie-desc": "Nous utilisons des cookies fonctionnels et des services tiers (comme HelloAsso) pour assurer le bon fonctionnement du site.",
    "cookie-accept": "Accepter", "cookie-decline": "Refuser",
    "instagram-follow": "Suivez-nous sur Instagram"
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
    "cookie-title": "Cookie Management", "cookie-desc": "We use functional cookies and third-party services (like HelloAsso) to ensure the proper functioning of the site.",
    "cookie-accept": "Accept", "cookie-decline": "Decline",
    "instagram-follow": "Follow us on Instagram"
  },
  de: {
    "skip-link": "Zum Hauptinhalt springen",
    "nav-manifesto": "Manifest", "nav-actions": "Aktionen", "nav-support": "Unterstützen",
    "hero-eyebrow": "Engagement. Übertragung. Innovation.",
    "hero-title": "Das Erbe ist eine <br/><span class='gold-text'>kinetische Energie.</span>",
    "hero-lead": "Terrilium katalysiert <span class='text-gold'>industrielle Erinnerungen</span> und technologische Übergänge, um die Landschaften von morgen zu gestalten.",
    "tag-01": "01. Gesellschaftszweck", "manifeste-mega": "Wir blicken nicht mit Nostalgie zurück, sondern mit <span class='text-gold'>Ehrgeiz</span>.",
    "manifeste-body": "Terrilium ist eine integrative <span class='text-gold'>Konvergenzplattform</span>. Wir archivieren Geschichte durch digitale Werkzeuge und schützen die Zukunft durch radikale Ökologie.",
    "cta-join": "Der Initiative beitreten", "tag-02": "02. Aktionssäulen",
    "pilier-1-h3": "Kunst & Residenzen", "pilier-1-p": "Zeitgenössisches Schaffen an Bergbaustandorte einladen.",
    "pilier-2-h3": "Biodiversität", "pilier-2-p": "Schutz der endemischen Flora und Fauna der Halden.",
    "pilier-3-h3": "Soziales Digitales", "pilier-3-p": "Demokratisierung des Zugangs zu territorialen Archiven.",
    "tag-03": "03. Co-Konstruktion", "soutien-lead": "Die Nachhaltigkeit unseres Handelns beruht auf einer <span class='text-gold'>Gemeinschaft von Erbauern</span>.",
    "card-don-h3": "Freies Mäzenatentum", "card-don-p": "Punktuelle Unterstützung für Projekte. Steuerabzug möglich.",
    "btn-don": "Spenden", "card-adh-h3": "Mitgliedschaft", "card-adh-p": "Aktiv an Innovationsprojekten teilnehmen.",
    "btn-adh": "Mitmachen", "footer-values": "Gerechtigkeit. Übertragung. Innovation.",
    "footer-legal": "Impressum", "footer-privacy": "Datenschutz", "footer-contact": "Kontakt",
    "modal-close": "Schließen [X]",
    "cookie-title": "Cookie-Verwaltung", "cookie-desc": "Wir verwenden funktionale Cookies und Dienste von Drittanbietern (wie HelloAsso), um das ordnungsgemäße Funktionieren der Website zu gewährleisten.",
    "cookie-accept": "Akzeptieren", "cookie-decline": "Ablehnen",
    "instagram-follow": "Folgen Sie uns auf Instagram"
  },
  nl: {
    "skip-link": "Ga naar de hoofdinhoud",
    "nav-manifesto": "Manifest", "nav-actions": "Acties", "nav-support": "Steunen",
    "hero-eyebrow": "Engagement. Overdracht. Innovatie.",
    "hero-title": "Erfgoed is <br/><span class='gold-text'>kinetische energie.</span>",
    "hero-lead": "Terrilium katalyseert <span class='text-gold'>industriële herinneringen</span> en technologische transities om de landschappen van morgen te bouwen.",
    "tag-01": "01. Maatschappelijk Doel", "manifeste-mega": "We kijken niet met nostalgie terug, maar met <span class='text-gold'>ambitie</span>.",
    "manifeste-body": "Terrilium is een inclusief <span class='text-gold'>convergentieplatform</span>. We archiveren geschiedenis via digitale tools en beschermen de toekomst via radicale ecologie.",
    "cta-join": "Sluit je aan bij het initiatief", "tag-02": "02. Actiepijlers",
    "pilier-1-h3": "Kunst & Residenties", "pilier-1-p": "Hedendaagse creatie uitnodigen op mijnsites.",
    "pilier-2-h3": "Biodiversiteit", "pilier-2-p": "Bescherming van endemische flora and fauna van de mijnterrils.",
    "pilier-3-h3": "Sociaal Digitaal", "pilier-3-p": "Democratisering van de toegang tot territoriale archieven.",
    "tag-03": "03. Co-constructie", "soutien-lead": "De duurzaamheid van onze acties rust op een <span class='text-gold'>gemeenschap van bouwers</span>.",
    "card-don-h3": "Vrij Mecenaat", "card-don-p": "Eenmalige steun voor projecten. Belastingaftrek mogelijk.",
    "btn-don": "Doneren", "card-adh-h3": "Lidmaatschap", "card-adh-p": "Actief deelnemen aan innovatieprojecten.",
    "btn-adh": "Meedoen", "footer-values": "Rechtvaardigheid. Overdracht. Innovatie.",
    "footer-legal": "Juridische Informatie", "footer-privacy": "Privacybeleid", "footer-contact": "Contact",
    "modal-close": "Sluiten [X]",
    "cookie-title": "Cookiebeheer", "cookie-desc": "We gebruiken functionele cookies and diensten van derden (zoals HelloAsso) para garantir o funcionamento correto do site.",
    "cookie-accept": "Accepteren", "cookie-decline": "Weigeren",
    "instagram-follow": "Volg ons op Instagram"
  },
  it: {
    "skip-link": "Vai al contenuto principale",
    "nav-manifesto": "Il Manifesto", "nav-actions": "Azioni", "nav-support": "Sostenere",
    "hero-eyebrow": "Impegno. Trasmissione. Innovazione.",
    "hero-title": "L'eredità è un' <br/><span class='gold-text'>energia cinetica.</span>",
    "hero-lead": "Terrilium catalizza le <span class='text-gold'>memorie industriali</span> e le transizioni tecnologiche per costruire i paesaggi di domani.",
    "tag-01": "01. Scopo Sociale", "manifeste-mega": "Non guardiamo al passato con nostalgia, ma con <span class='text-gold'>ambizione</span>.",
    "manifeste-body": "Terrilium è una piattaforma di <span class='text-gold'>convergenza inclusiva</span>. Archiviamo la storia attraverso strumenti digitali e proteggiamo il futuro attraverso l'ecologia radicale.",
    "cta-join": "Unisciti all'iniziativa", "tag-02": "02. Pilastri d'Azione",
    "pilier-1-h3": "Arti & Residenze", "pilier-1-p": "Invitare la création contemporaine nei siti minerari.",
    "pilier-2-h3": "Biodiversità", "pilier-2-p": "Proteggere la flora e la fauna endemiche dei cumuli di scorie.",
    "pilier-3-h3": "Digitale Sociale", "pilier-3-p": "Democratizzare l'accesso agli archivi territoriali.",
    "tag-03": "03. Co-Costruzione", "soutien-lead": "La sostenibilità delle nostre azioni si basa su una <span class='text-gold'>comunità di costruttori</span>.",
    "card-don-h3": "Mecenatismo Libero", "card-don-p": "Supporto puntuale ai progetti. Detrazione fiscale applicabile.",
    "btn-don": "Fai una donazione", "card-adh-h3": "Adesione Membro", "card-adh-p": "Partecipare attivamente ai progetti di innovazione.",
    "btn-adh": "Impegnarsi", "footer-values": "Equità. Trasmissione. Innovazione.",
    "footer-legal": "Note Legali", "footer-privacy": "Informativa sulla Privacy", "footer-contact": "Contatto",
    "modal-close": "Chiudi [X]",
    "cookie-title": "Gestione dei cookie", "cookie-desc": "Utilizziamo cookie funzionali e servizi di terze parti (come HelloAsso) per garantire il corretto funzionamento del sito.",
    "cookie-accept": "Accetta", "cookie-decline": "Rifiuta",
    "instagram-follow": "Seguici su Instagram"
  },
  es: {
    "skip-link": "Ir al contenido principal",
    "nav-manifesto": "El Manifiesto", "nav-actions": "Acciones", "nav-support": "Apoyar",
    "hero-eyebrow": "Compromiso. Transmisión. Innovación.",
    "hero-title": "El legado es una <br/><span class='gold-text'>energía cinética.</span>",
    "hero-lead": "Terrilium cataliza las <span class='text-gold'>memorias industriales</span> y las transiciones tecnológicas para construir los paisajes del mañana.",
    "tag-01": "01. Objeto Social", "manifeste-mega": "No miramos al pasado con nostalgia, sino con <span class='text-gold'>ambición</span>.",
    "manifeste-body": "Terrilium es una plataforma de <span class='text-gold'>convergencia inclusiva</span>. Archivamos la historia a través de herramientas digitales y protegemos el futuro mediante la ecología radical.",
    "cta-join": "Unirse a la iniciativa", "tag-02": "02. Pilares de Acción",
    "pilier-1-h3": "Artes & Residencias", "pilier-1-p": "Invitar a la creación contemporánea a los sitios mineros.",
    "pilier-2-h3": "Biodiversidad", "pilier-2-p": "Proteger la flora y fauna endémicas de las escombreras.",
    "pilier-3-h3": "Digital Social", "pilier-3-p": "Democratizar el acceso a los archivos territoriales.",
    "tag-03": "03. Co-Construcción", "soutien-lead": "La sostenibilidad de nuestras acciones se basa en una <span class='text-gold'>comunidad de constructores</span>.",
    "card-don-h3": "Mecenazgo Libre", "card-don-p": "Apoyo puntual a proyectos. Deducción fiscal aplicable.",
    "btn-don": "Donar", "card-adh-h3": "Membresía", "card-adh-p": "Participar activamente en proyectos de innovación.",
    "btn-adh": "Comprometerse", "footer-values": "Equidad. Transmisión. Innovación.",
    "footer-legal": "Aviso Legal", "footer-privacy": "Política de Privacidad", "footer-contact": "Contacto",
    "modal-close": "Cerrar [X]",
    "cookie-title": "Gestión de cookies", "cookie-desc": "Utilizamos cookies funcionales y servicios de terceros (como HelloAsso) para garantizar el correcto funcionamiento del sitio.",
    "cookie-accept": "Aceptar", "cookie-decline": "Rechazar",
    "instagram-follow": "Síguenos en Instagram"
  },
  pt: {
    "skip-link": "Ir para o conteúdo principal",
    "nav-manifesto": "O Manifesto", "nav-actions": "Ações", "nav-support": "Apoiar",
    "hero-eyebrow": "Compromisso. Transmissão. Inovação.",
    "hero-title": "O legado é uma <br/><span class='gold-text'>energia cinética.</span>",
    "hero-lead": "Terrilium catalisa as <span class='text-gold'>memórias industriais</span> e as transições tecnológicas para construir as paisagens de amanhã.",
    "tag-01": "01. Objeto Social", "manifeste-mega": "Não olhamos para o passado with nostalgia, mas com <span class='text-gold'>ambição</span>.",
    "manifeste-body": "Terrilium é uma plataforma de <span class='text-gold'>convergência inclusiva</span>. Arquivamos a história através de ferramentas digitais e protegemos o futuro através da ecologia radical.",
    "cta-join": "Juntar-se à iniciativa", "tag-02": "02. Pilares de Ação",
    "pilier-1-h3": "Artes & Residências", "pilier-1-p": "Convidar a criação contemporânea para os locais mineiros.",
    "pilier-2-h3": "Biodiversidade", "pilier-2-p": "Proteger a flora e fauna endémicas das escombreiras.",
    "pilier-3-h3": "Digital Social", "pilier-3-p": "Democratizar o acesso aos arquivos territoriais.",
    "tag-03": "03. Co-Construção", "soutien-lead": "A sustentabilidade das nossas ações baseia-se numa <span class='text-gold'>comunidade de construtores</span>.",
    "card-don-h3": "Mecenato Libre", "card-don-p": "Apoio pontual a projetos. Dedução fiscal aplicable.",
    "btn-don": "Doar", "card-adh-h3": "Adesão de Membro", "card-adh-p": "Participar ativamente em projetos de inovação.",
    "btn-adh": "Comprometer-se", "footer-values": "Equidade. Transmissão. Inovação.",
    "footer-legal": "Aviso Legal", "footer-privacy": "Política de Privacidade", "footer-contact": "Contacto",
    "modal-close": "Fechar [X]",
    "cookie-title": "Gestão de cookies", "cookie-desc": "Utilizamos cookies funcionales e serviços de terceiros (como HelloAsso) para garantir o correto funcionamento do site.",
    "cookie-accept": "Aceitar", "cookie-decline": "Recusar",
    "instagram-follow": "Siga-nos no Instagram"
  }
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
    <div className="vanta-edition min-h-screen">
      <header className="top-nav" role="banner">
        <nav className="nav-wrapper">
          <a href="/" className="brand-identity">
            <img src="/src/logo sang et or Terrilium.png" alt="Logo" className="h-12 w-auto" />
            <span className="logo-text">TERRILIUM</span>
          </a>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#manifeste">{t('nav-manifesto')}</a></li>
              <li><a href="#actions">{t('nav-actions')}</a></li>
              <li><button onClick={() => openModal('don')} className="cta-header">{t('nav-support')}</button></li>
            </ul>
            <div className="lang-selector">
              <button className="lang-current" onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
                <Globe size={14} /> {lang.toUpperCase()}
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="lang-dropdown !flex">
                    {(['fr', 'en', 'de', 'nl', 'it', 'es', 'pt'] as Language[]).map((l) => (
                      <button key={l} onClick={() => { setLang(l); setIsLangMenuOpen(false); }}>{l.toUpperCase()}</button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="container-custom">
            <p className="hero-eyebrow">{t('hero-eyebrow')}</p>
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
            <p className="hero-lead">{t('hero-lead')}</p>
          </div>
        </section>
        <section id="manifeste" className="section-block">
          <div className="container-custom">
            <h2 className="section-tag">{t('tag-01')}</h2>
            <p className="mega-text" dangerouslySetInnerHTML={{ __html: t('manifeste-mega') }} />
            <p className="body-text" dangerouslySetInnerHTML={{ __html: t('manifeste-body') }} />
          </div>
        </section>
      </main>

      <footer className="footer-custom">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4">
            <img src="/src/logo sang et or Terrilium.png" alt="" className="h-10 w-auto" />
            <span className="f-logo">TERRILIUM</span>
          </div>
          <p>© 2026. Terrilium — Cultures & Patrimoines.</p>
        </div>
      </footer>

      <AnimatePresence>
        {activeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-system-custom !block">
            <div className="modal-header-custom">
              <span>{activeModal.toUpperCase()}</span>
              <button onClick={closeModal}>{t('modal-close')}</button>
            </div>
            <div className="modal-body-custom">
              {activeModal === 'don' ? <iframe src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/formulaires/1/widget?view=overlay" /> : <p>Contenu légal...</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCookieBanner && (
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="cookie-banner-custom show">
            <p>{t('cookie-desc')}</p>
            <button onClick={() => handleCookieAction(true)}>{t('cookie-accept')}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
