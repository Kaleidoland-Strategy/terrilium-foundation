import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Linkedin, Facebook, Youtube, ChevronDown, Globe, Mail, X, ArrowRight } from 'lucide-react';

const translations: any = {
  fr: {
    "skip-link": "Aller au contenu principal",
    "nav-manifesto": "Le Manifeste", "nav-actions": "Actions", "nav-support": "Soutenir",
    "navigation": "Navigation",
    "hero-eyebrow": "Engagement. Transmission. Innovation.",
    "hero-title": "L'héritage est une <br/><span class='gold-text'>énergie cinétique.</span>",
    "hero-lead": "Terrilium catalyse les <span class='gold-text'>mémoires industrielles</span> et les transitions technologiques pour bâtir les paysages de demain avec toutes les parties prenantes.",
    "tag-01": "01. L'Objet Social", 
    "manifeste-mega": "Nous ne regardons pas le passé avec nostalgie, mais avec <span class='gold-text'>ambition</span>. Nos terrils sont des <span class='gold-text'>sanctuaires de culture et de lien social.</span>",
    "manifeste-body": "Terrilium – Cultures & Patrimoines est une plateforme de convergence inclusive. Nous archivons l'histoire par le numérique et projetons la mémoire au cœur de la cohésion sociale.",
    "cta-join": "Rejoindre la démarche", 
    "tag-02": "02. Piliers d'Actions",
    "pilier-1-h3": "Arts & Résidences", "pilier-1-p": "Inviter la création contemporaine sur les sites miniers pour réenchanter le territoire.",
    "pilier-2-h3": "Biodiversités", "pilier-2-p": "Sanctuariser les faunes et flores endémiques des terrils pour une écologie globale.",
    "pilier-3-h3": "Numérique Social", "pilier-3-p": "Démocratiser l'accès aux archives et propulser la mémoire dans le futur technologique.",
    "tag-03": "03. Co-Construction", 
    "soutien-lead": "La pérennité de nos actions repose sur une <span class='gold-text'>communauté de membres engagé·e·s.</span>",
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
    "navigation": "Navigation",
    "hero-eyebrow": "Commitment. Transmission. Innovation.",
    "hero-title": "Heritage is <br/><span class='gold-text'>kinetic energy.</span>",
    "hero-lead": "Terrilium catalyzes <span class='gold-text'>industrial memories</span> and technological transitions to build tomorrow's landscapes with all stakeholders.",
    "tag-01": "01. Purpose", 
    "manifeste-mega": "We do not look back with nostalgia, but with <span class='gold-text'>ambition</span>. Our slag heaps are <span class='gold-text'>sanctuaries of culture and social connection.</span>",
    "manifeste-body": "Terrilium – Cultures & Patrimoines is an inclusive convergence platform. We archive history through digital tools and project memory into the heart of social cohesion.",
    "cta-join": "Join the movement", 
    "tag-02": "02. Action Pillars",
    "pilier-1-h3": "Arts & Residencies", "pilier-1-p": "Inviting contemporary creation to mining sites to re-enchant the territory.",
    "pilier-2-h3": "Biodiversity", "pilier-2-p": "Protecting endemic flora and fauna of slag heaps for a global ecology.",
    "pilier-3-h3": "Social Digital", "pilier-3-p": "Democratizing access to archives and propelling memory into the technological future.",
    "tag-03": "03. Co-Construction", 
    "soutien-lead": "The sustainability of our actions relies on a <span class='gold-text'>community of committed members.</span>",
    "card-don-h3": "Patronage", "card-don-p": "One-off support for the association's projects. Tax benefits applicable.",
    "btn-don": "Donate Now", 
    "card-adh-h3": "Membership", "card-adh-p": "Become a governance actor and participate in innovation projects.",
    "btn-adh": "Join Us", 
    "footer-values": "Equity. Transmission. Innovation.",
    "footer-legal": "Legal Notice", "footer-privacy": "Privacy Policy", "footer-contact": "Contact",
    "modal-close": "Close [X]", 
    "cookie-title": "Cookie Management",
    "cookie-desc": "We use functional cookies and third-party services (like HelloAsso) to ensure the proper functioning of the site.",
    "cookie-accept": "Accept", "cookie-decline": "Decline"
  },
  de: {
    "skip-link": "Zum Hauptinhalt springen",
    "nav-manifesto": "Das Manifest", "nav-actions": "Aktionen", "nav-support": "Unterstützen",
    "navigation": "Navigation",
    "hero-eyebrow": "Engagement. Übertragung. Innovation.",
    "hero-title": "Das Erbe ist <br/><span class='gold-text'>kinetische Energie.</span>",
    "hero-lead": "Terrilium katalysiert industrielle Erinnerungen und technologische Übergänge.",
    "tag-01": "01. Gesellschaftszweck", "manifeste-mega": "Wir blicken nicht mit Nostalgie zurück, sondern mit <span class='gold-text'>Ehrgeiz</span>. Unsere Halden sind <span class='gold-text'>Heiligtümer der Kultur und der sozialen Bindung.</span>",
    "manifeste-body": "Terrilium ist eine inklusive Plattform. Wir bewahren die Geschichte digital und verankern das Gedächtnis im Herzen des sozialen Zusammenhalts.",
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
    "navigation": "Navigatie",
    "hero-eyebrow": "Betrokkenheid. Overdracht. Innovatie.",
    "hero-title": "Erfgoed is <br/><span class='gold-text'>kinetische energie.</span>",
    "hero-lead": "Terrilium katalyseert industriële herinneringen en technologische transities.",
    "tag-01": "01. Maatschappelijk Doel", "manifeste-mega": "We kijken niet met nostalgie naar het verleden, maar met <span class='gold-text'>ambitie</span>. Onze terrils zijn <span class='gold-text'>heiligdommen van cultuur en sociale verbinding.</span>",
    "manifeste-body": "Terrilium is een inclusief convergentieplatform. Wij archiveren geschiedenis digitaal en plaatsen het geheugen in het hart van de sociale cohesie.",
    "cta-join": "Sluit je aan", "tag-02": "02. Actiepijlers",
    "pilier-1-h3": "Kunst & Residenties", "pilier-1-p": "Hedendaagse creatie uitnodigen op mijnsites.",
    "pilier-2-h3": "Biodiversiteit", "pilier-2-p": "Endemische flora en fauna van de terrils beschermen.",
    "pilier-3-h3": "Sociaal Digitaal", "pilier-3-p": "De toegang tot territoriale archieven demokratiseren.",
    "tag-03": "03. Co-Constructie", "soutien-lead": "De duurzaamheid van onze acties berust op een gemeenschap.",
    "card-don-h3": "Mecenaat", "card-don-p": "Eenmalige steun voor projecten.",
    "btn-don": "Doneren", "card-adh-h3": "Lidmaatschap", "card-adh-p": "Neem actief deel.",
    "btn-adh": "Meedoen", "footer-values": "Gelijkheid. Overdracht. Innovatie.",
    "footer-legal": "Juridische info", "footer-privacy": "Privacybeleid", "footer-contact": "Contact",
    "modal-close": "Sluiten [X]", "cookie-title": "Cookiebeheer",
    "cookie-desc": "Wij gebruiken functionele cookies.", "cookie-accept": "Accepteren", "cookie-decline": "Weigeren"
  },
  it: {
    "skip-link": "Vai al contenuto principale",
    "nav-manifesto": "Il Manifesto", "nav-actions": "Azioni", "nav-support": "Sostenere",
    "navigation": "Navigazione",
    "hero-eyebrow": "Impegno. Trasmissione. Innovazione.",
    "hero-title": "L'eredità è <br/><span class='gold-text'>energia cinetica.</span>",
    "hero-lead": "Terrilium catalizza le <span class='gold-text'>memorie industriali</span> e le transizioni tecnologiche per costruire i paesaggi di domani.",
    "tag-01": "01. Scopo Sociale", 
    "manifeste-mega": "Non guardiamo al passato con nostalgia, ma con <span class='gold-text'>ambizione</span>. I nostri cumuli sono <span class='gold-text'>santuari di cultura e legame sociale.</span>",
    "manifeste-body": "Terrilium – Culture & Patrimoni è una piattaforma di convergenza inclusiva. Archiviamo la storia attraverso il digitale e proiettiamo la memoria nel cuore della coesione sociale.",
    "cta-join": "Unisciti al movimento", 
    "tag-02": "02. Pilastri d'Azione",
    "pilier-1-h3": "Arti & Residenze", "pilier-1-p": "Invitare la creazione contemporanea nei siti minerari per reincantare il territorio.",
    "pilier-2-h3": "Biodiversità", "pilier-2-p": "Proteggere la flora e la fauna endemiche dei cumuli per un'ecologia globale.",
    "pilier-3-h3": "Digitale Sociale", "pilier-3-p": "Democratizzare l'accesso agli archivi e proiettare la memoria nel futuro.",
    "tag-03": "03. Co-Costruzione", 
    "soutien-lead": "La sostenibilità delle nostre azioni si basa su una <span class='gold-text'>comunità di membri impegnati.</span>",
    "card-don-h3": "Mecenatismo", "card-don-p": "Sostegno puntuale ai progetti dell'associazione. Benefici fiscali applicabili.",
    "btn-don": "DONA ORA", 
    "card-adh-h3": "Associazione", "card-adh-p": "Diventa attore della governance e partecipa ai progetti di innovazione.",
    "btn-adh": "ADERISCI", 
    "footer-values": "Equità. Trasmissione. Innovazione.",
    "footer-legal": "Note Legali", "footer-privacy": "Privacy Policy", "footer-contact": "Contatti",
    "modal-close": "CHIUDI [X]", 
    "cookie-title": "Gestione dei cookie",
    "cookie-desc": "Utilizziamo cookie funzionali e servizi di terze parti per garantire il corretto funzionamento del sito.",
    "cookie-accept": "Accetta", "cookie-decline": "Rifiuta"
  },
  es: {
    "skip-link": "Saltar al contenido principal",
    "nav-manifesto": "El Manifiesto", "nav-actions": "Acciones", "nav-support": "Apoyar",
    "navigation": "Navegación",
    "hero-eyebrow": "Compromiso. Transmisión. Innovación.",
    "hero-title": "El legado es <br/><span class='gold-text'>energía cinética.</span>",
    "hero-lead": "Terrilium cataliza las <span class='gold-text'>memorias industriales</span> y las transiciones tecnológicas para construir los paisajes del mañana.",
    "tag-01": "01. Objeto Social", 
    "manifeste-mega": "No miramos al pasado con nostalgia, sino con <span class='gold-text'>ambición</span>. Nuestras escombreras son <span class='gold-text'>santuarios de cultura y vínculo social.</span>",
    "manifeste-body": "Terrilium – Culturas y Patrimonios es una plataforma de convergencia inclusiva. Archivamos la historia digitalmente y proyectamos la memoria al corazón de la cohesión social.",
    "cta-join": "Únete al movimiento", 
    "tag-02": "02. Pilares de Acción",
    "pilier-1-h3": "Artes y Residencias", "pilier-1-p": "Invitar la creación contemporánea a los sitios mineros para reencantar el territorio.",
    "pilier-2-h3": "Biodiversidad", "pilier-2-p": "Proteger la flora y fauna endémicas de las escombreras para una ecología global.",
    "pilier-3-h3": "Digital Social", "pilier-3-p": "Democratizar el acceso a los archivos y proyectar la memoria hacia il futuro.",
    "tag-03": "03. Co-Construcción", 
    "soutien-lead": "La sostenibilidad de nuestras acciones se basa en una <span class='gold-text'>comunidad de miembros comprometidos.</span>",
    "card-don-h3": "Mecenazgo", "card-don-p": "Apoyo puntual a los proyectos de la asociación. Deducciones fiscales aplicables.",
    "btn-don": "DONAR AHORA", 
    "card-adh-h3": "Membresía", "card-adh-p": "Conviértete en actor de la gobernanza y participa en proyectos de innovación.",
    "btn-adh": "PARTICIPAR", 
    "footer-values": "Equidad. Transmisión. Innovación.",
    "footer-legal": "Aviso Legal", "footer-privacy": "Política de Privacidad", "footer-contact": "Contacto",
    "modal-close": "CERRAR [X]", 
    "cookie-title": "Gestión de cookies",
    "cookie-desc": "Utilizamos cookies funcionales y servicios de terceros para asegurar el buen funcionamiento del sitio.",
    "cookie-accept": "Aceptar", "cookie-decline": "Rechazar"
  },
  pt: {
    "skip-link": "Pular para o conteúdo principal",
    "nav-manifesto": "O Manifesto", "nav-actions": "Ações", "nav-support": "Apoiadores",
    "navigation": "Navegação",
    "hero-eyebrow": "Compromisso. Transmissão. Inovação.",
    "hero-title": "O legado é <br/><span class='gold-text'>energia cinética.</span>",
    "hero-lead": "Terrilium catalisa as <span class='gold-text'>memórias industriais</span> e as transições tecnológicas para construir as paisagens do amanhã.",
    "tag-01": "01. Objeto Social", 
    "manifeste-mega": "Não olhamos para o passado com nostalgia, mas com <span class='gold-text'>ambição</span>. Nossas escombreiras são <span class='gold-text'>santuários de cultura e vínculo social.</span>",
    "manifeste-body": "Terrilium – Culturas e Patrimônios é uma plataforma de convergência inclusiva. Arquivamos a história digitalmente e projetamos a memória no coração da coesão social.",
    "cta-join": "Junte-se ao movimento", 
    "tag-02": "02. Pilares de Ação",
    "pilier-1-h3": "Artes e Residências", "pilier-1-p": "Convidar a criação contemporânea para sítios mineiros para reencantar o território.",
    "pilier-2-h3": "Biodiversidade", "pilier-2-p": "Proteger a flora e fauna endémicas para uma ecologia global.",
    "pilier-3-h3": "Digital Social", "pilier-3-p": "Democratizar o acesso aos arquivos e projetar a memória no futuro.",
    "tag-03": "03. Co-Construção", 
    "soutien-lead": "A sustentabilidade de nossas ações baseia-se em uma <span class='gold-text'>comunidade de membros engajados.</span>",
    "card-don-h3": "Mecenato", "card-don-p": "Apoio pontual aos projetos da associação. Deduções fiscais aplicáveis.",
    "btn-don": "DOAR AGORA", 
    "card-adh-h3": "Filiação", "card-adh-p": "Torne-se um ator na governança e participe de projetos de inovação.",
    "btn-adh": "ADERIR", 
    "footer-values": "Equidade. Transmissão. Inovação.",
    "footer-legal": "Avisos Legais", "footer-privacy": "Política de Privacidade", "footer-contact": "Contacto",
    "modal-close": "FECHAR [X]", 
    "cookie-title": "Gestão de cookies",
    "cookie-desc": "Utilizamos cookies funcionais e serviços de terceiros para garantir o bom funcionamento do site.",
    "cookie-accept": "Aceitar", "cookie-decline": "Recusar"
  },
  zh: {
    "skip-link": "跳过至主要内容",
    "nav-manifesto": "宣言", "nav-actions": "行动", "nav-support": "支持",
    "navigation": "导航",
    "hero-eyebrow": "承诺. 传承. 创新.",
    "hero-title": "遗产是 <br/><span class='gold-text'>动能.</span>",
    "hero-lead": "Terrilium 催化<span class='gold-text'>工业记忆</span>与技术转型, 与所有利益相关者共同构建未来的景观。",
    "tag-01": "01. 社会宗旨", 
    "manifeste-mega": "我们不带乡愁回首过去, 而是带着<span class='gold-text'>雄心</span>。 我们的煤矸石堆是<span class='gold-text'>文化与社会纽带的圣地。</span>",
    "manifeste-body": "Terrilium 是一个包容的融合平台。 我们通过数字工具存档历史, 并将记忆置于社会凝聚力的核心。",
    "cta-join": "加入运动", 
    "tag-02": "02. 行动支柱",
    "pilier-1-h3": "艺术与驻场", "pilier-1-p": "邀请当代创作进入矿区, 以重塑领土的魅力。",
    "pilier-2-h3": "生物多样性", "pilier-2-p": "保护煤矸石堆特有的动植物, 实现全球生态平衡。",
    "pilier-3-h3": "社会数字化", "pilier-3-p": "使档案访问民主化, 并将记忆推向技术未来。",
    "tag-03": "03. 共同建设", 
    "soutien-lead": "我们行动的可持续性依赖于一个<span class='gold-text'>积极参与的成员社区。</span>",
    "card-don-h3": "自由赞助", "card-don-p": "对协会项目的临时支持。 个人可享受 66% 的税收减免。",
    "btn-don": "立即捐款", 
    "card-adh-h3": "会员加入", "card-adh-p": "成为治理的参与者并参与创新项目。",
    "btn-adh": "加入", 
    "footer-values": "公平. 传承. 创新.",
    "footer-legal": "法律声明", "footer-privacy": "隐私政策", "footer-contact": "联系我们",
    "modal-close": "关闭 [X]", 
    "cookie-title": "Cookie 管理",
    "cookie-desc": "我们使用功能性 Cookie 和第三方服务以确保网站的正常运行。",
    "cookie-accept": "接受", "cookie-decline": "拒绝"
  },
  ja: {
    "skip-link": "メインコンテンツへ移動",
    "nav-manifesto": "マニフェスト", "nav-actions": "活動", "nav-support": "支援",
    "navigation": "ナビゲーション",
    "hero-eyebrow": "コミットメント。継承。革新。",
    "hero-title": "遺産は <br/><span class='gold-text'>運動エネルギーです。</span>",
    "hero-lead": "Terriliumは、すべての利害関係者と共に明日の景観を築くために、<span class='gold-text'>産業の記憶</span>と技術の転換を促進します。",
    "tag-01": "01. 設立の目的", 
    "manifeste-mega": "私たちはノスタルジーを持って過去を振り返るのではなく、<span class='gold-text'>野心</span>を持って振り返ります。私たちのボタ山は<span class='gold-text'>文化と社会的な繋がりの聖域</span>です。",
    "manifeste-body": "Terriliumは、包括的な融合プラットフォームです。デジタルを通じて歴史をアーカイブし、記憶を社会の結束の中心に据えます。",
    "cta-join": "運動に参加する", 
    "tag-02": "02. 活動の柱",
    "pilier-1-h3": "芸術とレジデンス", "pilier-1-p": "現代の創作を鉱山跡地に招き、地域の魅力を再構築します。",
    "pilier-2-h3": "生物多样性", "pilier-2-p": "絶滅の危機にある動植物を保護し、グローバルな生態系を維持します。",
    "pilier-3-h3": "ソーシャル・デジタル", "pilier-3-p": "アーカイブへのアクセスを民主化し、記憶を未来へ繋ぎます。",
    "tag-03": "03. 共同構築", 
    "soutien-lead": "私たちの活動の持続可能性は、<span class='gold-text'>熱意ある会員コミュニティ</span>にかかっています。",
    "card-don-h3": "自由寄付", "card-don-p": "協会プロジェクトへの単発的な支援。税制上の優遇措置が適用されます。",
    "btn-don": "今すぐ寄付する", 
    "card-adh-h3": "会員入会", "card-adh-p": "ガバナンスの主体となり、イノベーション・プロジェクトに参加します。",
    "btn-adh": "入会する", 
    "footer-values": "公平。継承。革新。",
    "footer-legal": "法的通知", "footer-privacy": "プライバシーポリシー", "footer-contact": "お問い合わせ",
    "modal-close": "閉じる [X]", 
    "cookie-title": "クッキー管理",
    "cookie-desc": "本サイトの適切な運用のために、機能的なクッキーとサードパーティサービスを使用しています。",
    "cookie-accept": "同意する", "cookie-decline": "拒否する"
  },
  ar: {
    "skip-link": "الانتقال إلى المحتوى الرئيسي",
    "nav-manifesto": "البيان", "nav-actions": "الأعمال", "nav-support": "الدعم",
    "navigation": "تنقل",
    "hero-eyebrow": "التزام. نقل. ابتكار.",
    "hero-title": "التراث هو <br/><span class='gold-text'>طاقة حركية.</span>",
    "hero-lead": "تعمل تيريليوم على تحفيز <span class='gold-text'>الذكريات الصناعية</span> والتحولات التكنولوجية لبناء مناظر الغد.",
    "tag-01": "01. الغرض الاجتماعي", 
    "manifeste-mega": "نحن لا ننظر إلى الماضي بحنين، بل بـ <span class='gold-text'>طموح</span>. مناجمنا هي <span class='gold-text'>ملاذات للثقافة والترابط الاجتماعي.</span>",
    "manifeste-body": "تيريليوم هي منصة تقارب شاملة. نقوم بأرشفة التاريخ من خلال الأدوات الرقمية ونسقط الذاكرة في قلب التماسك الاجتماعي.",
    "cta-join": "انضم إلى الحركة", 
    "tag-02": "02. ركائز العمل",
    "pilier-1-h3": "الفنون والإقامات", "pilier-1-p": "دعوة الإبداع المعاصر إلى المواقع المنجمية لإعادة سحر المنطقة.",
    "pilier-2-h3": "التنوع البيولوجي", "pilier-2-p": "حماية النباتات والحيوانات المتوطنة من أجل بيئة عالمية.",
    "pilier-3-h3": "الرقمية الاجتماعية", "pilier-3-p": "إضفاء الطابع الديمقراطي على الوصول إلى الأرشيف ودفع الذاكرة نحو المستقبل.",
    "tag-03": "03. البناء المشترك", 
    "soutien-lead": "تعتمد استدامة أعمالنا على <span class='gold-text'>مجتمع من الأعضاء الملتزمين.</span>",
    "card-don-h3": "رعاية حرة", "card-don-p": "دعم في الوقت المناسب لمشاريع الجمعية. خصم ضريبي مطبق.",
    "btn-don": "تبرع الآن", 
    "card-adh-h3": "انضمام الأعضاء", "card-adh-p": "كن فاعلاً في الحوكمة وشارك في مشاريع الابتكار.",
    "btn-adh": "انضم", 
    "footer-values": "إنصاف. نقل. ابتكار.",
    "footer-legal": "الإشعارات القانونية", "footer-privacy": "سياسة الخصوصية", "footer-contact": "اتصل بنا",
    "modal-close": "إغلاق [X]", 
    "cookie-title": "إدارة ملفات تعريف الارتباط",
    "cookie-desc": "نحن نستخدم ملفات تعريف الارتباط الوظيفية وخدمات الطرف الثالث لضمان التشغيل السليم للموقع.",
    "cookie-accept": "قبول", "cookie-decline": "رفض"
  }
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
    <div className={`vanta-edition min-h-screen bg-[#020202] text-[#FFFFF0] font-['Plus_Jakarta_Sans',sans-serif] ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="grain-overlay fixed inset-0 pointer-events-none z-[9999]" />

      <header className="fixed top-0 w-full z-50 bg-[#020202]/80 backdrop-blur-xl transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Terrilium" 
                className="h-8 sm:h-10 w-auto transition-transform duration-500 lg:group-hover:scale-105 relative z-10 glow-gold will-change-transform" 
              />
            </div>
            <span className="text-sm sm:text-lg font-black tracking-[0.2em] text-[#FFFFF0] lg:group-hover:text-[#D4AF37] transition-colors uppercase whitespace-nowrap">TERRILIUM</span>
          </a>
          
          <div className="flex items-center gap-3 sm:gap-8">
            <ul className="hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.25em] uppercase text-[#FFFFF0]/80">
              <li><a href="#manifeste" className="hover:text-[#D4AF37] transition-all hover:text-glow-gold">{t('nav-manifesto')}</a></li>
              <li><a href="#actions" className="hover:text-[#D4AF37] transition-all hover:text-glow-gold">{t('nav-actions')}</a></li>
            </ul>

            <div className="flex items-center gap-3 sm:gap-5">
              <div className="hidden md:flex items-center gap-4 border-r border-subtle pr-5 border-opacity-30">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/terrilium.heritage/", label: "Instagram" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/terrilium", label: "LinkedIn" },
                  { icon: Facebook, href: "https://www.facebook.com/terrilium.heritage/", label: "Facebook" },
                  { icon: Youtube, href: "https://www.youtube.com/@Terrilium", label: "YouTube" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#FFFFF0]/40 hover:text-[#D4AF37] hover:scale-110 transition-all glow-gold" 
                    title={social.label}
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>

              <button 
                onClick={() => openModal('don')} 
                className="bg-[#8B0000] text-[#FFFFF0] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black tracking-widest hover:bg-[#D4AF37] hover:text-[#020202] active:scale-95 transition-all duration-300 shadow-lg shadow-[#8B0000]/20 border border-[#D4AF37]/20 whitespace-nowrap"
              >
                {t('nav-support')}
              </button>

              <div className="relative">
                <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-black border border-subtle px-2 sm:px-3 py-1.5 rounded-full uppercase tracking-widest hover:border-[#D4AF37] active:scale-95 transition-all text-[#FFFFF0]/60 bg-white/5">
                  <Globe size={11} className="sm:w-[12px]" /> {lang} <ChevronDown size={10} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute right-0 mt-2 bg-[#0a0a0a] border border-subtle rounded-google overflow-hidden grid grid-cols-2 min-w-[220px] shadow-[0_0_50px_rgba(0,0,0,0.9)] z-[60]">
                      {Object.keys(translations).map((l) => (
                        <button key={l} onClick={() => { setLang(l as Language); setIsLangMenuOpen(false); }} className={`px-4 py-3 text-left hover:bg-[#8B0000]/30 text-[10px] font-black tracking-widest uppercase ${lang === l ? 'text-[#D4AF37] bg-[#8B0000]/20' : 'text-[#FFFFF0]/70'}`}>
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
        <section className="min-h-screen flex items-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#020202]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#8B0000]/5 blur-[200px] rounded-full pointer-events-none animate-pulse-subtle" />
          
          <div className="max-w-6xl mx-auto text-center relative z-10 w-full pt-20 sm:pt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-subtle bg-white/5 backdrop-blur-md mb-8 sm:mb-12">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[8px] sm:text-[10px] font-bold">{t('hero-eyebrow')}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black leading-[1.0] sm:leading-[0.9] mb-8 sm:mb-12 tracking-tight uppercase text-[#FFFFF0] text-glow-gold" dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base sm:text-xl md:text-2xl lg:text-3xl text-[#FFFFF0]/70 max-w-4xl mx-auto leading-relaxed font-light mb-12 sm:mb-16 px-4" dangerouslySetInnerHTML={{ __html: t('hero-lead') }} />
            {/* Coulée Verticale Rouge Sang */}
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }} 
              animate={{ opacity: 1, scaleY: 1 }} 
              transition={{ delay: 1, duration: 1.5 }} 
              className="w-[1px] md:w-[2px] h-12 md:h-16 bg-gradient-to-b from-transparent via-[#8B0000] to-transparent opacity-60 mx-auto mt-12" 
            />
          </div>
        </section>

        {/* Manifeste */}
        <section id="manifeste" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative bg-gradient-to-b from-transparent via-[#8B0000]/5 to-transparent">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
            <div className="relative">
              <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-12">
                <div className="w-6 sm:w-12 h-[2px] bg-[#8B0000]" />
                <h2 className="text-[#D4AF37] font-black text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase">{t('tag-01')}</h2>
                <div className="w-6 sm:w-12 h-[2px] bg-[#8B0000]" />
              </div>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black leading-[1.2] lg:leading-[1.1] tracking-tight text-[#FFFFF0] uppercase text-center px-2" dangerouslySetInnerHTML={{ __html: t('manifeste-mega') }} />
            </div>
            <div className="flex flex-col items-center space-y-6 sm:space-y-12 text-center">
              <p className="text-sm sm:text-lg lg:text-xl text-[#FFFFF0]/60 leading-relaxed font-light max-w-3xl mx-auto px-4">{t('manifeste-body')}</p>
              <div>
                <a href="#soutenir" className="group inline-flex items-center gap-4 md:gap-6 text-[#D4AF37] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] hover:translate-x-2 transition-transform duration-500">
                  <span className="border-b border-[#D4AF37]/30 pb-1 group-hover:border-[#D4AF37] transition-colors">{t('cta-join')}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Coulée Verticale Rouge Sang */}
        <div className="w-[1px] md:w-[2px] h-12 md:h-20 bg-gradient-to-b from-transparent via-[#8B0000] to-transparent opacity-40 mx-auto" />

        {/* Actions */}
        <section id="actions" className="py-16 md:py-24 px-6 bg-[#030303]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-8 mb-32 text-center">
              <div className="space-y-4 flex flex-col items-center">
                <h2 className="text-[#D4AF37] font-black text-[10px] tracking-[0.6em] uppercase text-glow-gold">{t('tag-02')}</h2>
                <div className="h-1 w-24 bg-[#8B0000]" />
              </div>
              <div className="text-[10px] font-bold text-[#FFFFF0]/30 tracking-[0.4em] uppercase">Architecture du Futur</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="group p-8 sm:p-10 lg:p-12 rounded-google border border-subtle bg-[#080808]/50 hover:bg-[#8B0000]/5 transition-all duration-500 relative overflow-hidden backdrop-blur-sm flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity" />
                  <span className="text-5xl sm:text-7xl font-black text-[#FFFFF0]/5 lg:group-hover:text-[#D4AF37]/5 mb-6 sm:mb-10 block tracking-tighter transition-colors">0{num}</span>
                  <h3 className="text-lg sm:text-xl font-black mb-4 sm:mb-6 uppercase tracking-wide text-[#D4AF37]">{t(`pilier-${num}-h3`)}</h3>
                  <p className="text-[#FFFFF0]/50 leading-relaxed font-light text-sm sm:text-base lg:group-hover:text-[#FFFFF0]/80 transition-colors flex-1">{t(`pilier-${num}-p`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coulée Verticale Rouge Sang */}
        <div className="w-[1px] md:w-[2px] h-12 md:h-20 bg-gradient-to-b from-transparent via-[#8B0000] to-transparent opacity-40 mx-auto" />

        {/* Soutenir */}
        <section id="soutenir" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-[#020202]">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-[#D4AF37] font-black text-[8px] sm:text-[10px] tracking-[0.6em] sm:tracking-[0.8em] uppercase mb-10 sm:mb-16">{t('tag-03')}</h2>
            <p className="text-2xl sm:text-4xl md:text-6xl font-black mb-16 sm:mb-32 tracking-tight leading-[1.2] sm:leading-[1.1] text-[#FFFFF0] px-2" dangerouslySetInnerHTML={{ __html: t('soutien-lead') }} />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 mb-16 sm:mb-32">
              <div className="md:col-span-7 flex flex-col p-8 sm:p-12 lg:p-14 rounded-google border border-subtle bg-[#050505] text-left group hover:scale-[1.01] transition-all duration-500 shadow-2xl shadow-black/50">
                <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 uppercase tracking-tight text-[#D4AF37]">{t('card-don-h3')}</h3>
                <p className="text-[#FFFFF0]/40 text-sm sm:text-base mb-8 sm:mb-10 font-light leading-relaxed">{t('card-don-p')}</p>
                <div className="mt-auto">
                  <button 
                    onClick={() => openModal('don')} 
                    className="w-full py-4 sm:py-5 bg-[#8B0000] text-[#FFFFF0] rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#D4AF37] hover:text-[#020202] active:scale-95 transition-all duration-300 shadow-xl shadow-[#8B0000]/20 border border-[#D4AF37]/20"
                  >
                    {t('btn-don')}
                  </button>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col p-8 sm:p-12 lg:p-14 rounded-google border border-[#D4AF37]/30 bg-[#050505] text-left group hover:scale-[1.01] transition-all duration-500 shadow-2xl shadow-black/50">
                <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 uppercase tracking-tight text-[#D4AF37]">{t('card-adh-h3')}</h3>
                <p className="text-[#FFFFF0]/40 text-sm sm:text-base mb-8 sm:mb-10 font-light leading-relaxed">{t('card-adh-p')}</p>
                <div className="mt-auto">
                  <a 
                    href="#adhesion-area" 
                    className="block w-full py-4 sm:py-5 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full text-center font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#D4AF37] hover:text-[#020202] active:scale-95 transition-all"
                  >
                    {t('btn-adh')}
                  </a>
                </div>
              </div>
            </div>

            <div id="adhesion-area" className="w-full aspect-[16/10] bg-[#FFFFF0] rounded-google overflow-hidden shadow-2xl border border-subtle">
              <iframe title="HelloAsso" src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/adhesions/terrilium-2026-devenez-batisseur-se-du-renouveau-territorial/widget" className="w-full h-full border-0"></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 sm:py-24 md:py-40 px-4 sm:px-6 bg-[#010101] relative z-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-24 lg:gap-32 items-start">
          <div className="space-y-8 sm:space-y-12">
            <div className="flex items-center justify-center md:justify-start gap-4 group">
              <img src="/logo.png" alt="" className="h-8 sm:h-10 w-auto opacity-70 lg:group-hover:opacity-100 transition-opacity glow-gold" />
              <span className="font-black tracking-[0.2em] text-lg sm:text-xl uppercase text-[#FFFFF0]">TERRILIUM</span>
            </div>
            <p className="text-[#FFFFF0]/40 text-sm sm:text-base font-light leading-relaxed max-w-sm mx-auto md:mx-0">Bassin Minier Global — Plateforme de Réhabilitation Culturelle & Territoriale.</p>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/terrilium.heritage/", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/terrilium", label: "LinkedIn" },
                { icon: Facebook, href: "https://www.facebook.com/terrilium.heritage/", label: "Facebook" },
                { icon: Youtube, href: "https://www.youtube.com/@Terrilium", label: "YouTube" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 sm:w-12 sm:h-12 border border-subtle rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#020202] active:scale-95 transition-all text-[#FFFFF0]/30 hover:border-[#D4AF37]"
                >
                  <social.icon size={18} />
                </a>
              ))}
              <a href="mailto:clement@kaleidoland.fr" className="w-10 h-10 sm:w-12 sm:h-12 border border-subtle rounded-full flex items-center justify-center hover:bg-[#8B0000] hover:text-[#FFFFF0] active:scale-95 transition-all text-[#8B0000] shadow-lg shadow-black/50 hover:border-[#D4AF37]"><Mail size={18} /></a>
            </div>
          </div>
          <div className="space-y-10 sm:space-y-12">
            <h4 className="text-[10px] font-black tracking-[0.5em] uppercase text-[#D4AF37]">{t('navigation')}</h4>
            <div className="flex flex-col gap-4 sm:gap-5">
              <button onClick={() => openModal('legal')} className="text-center md:text-left text-base text-[#FFFFF0]/60 hover:text-[#D4AF37] transition-colors font-bold uppercase tracking-widest">{t('footer-legal')}</button>
              <button onClick={() => openModal('privacy')} className="text-center md:text-left text-base text-[#FFFFF0]/60 hover:text-[#D4AF37] transition-colors font-bold uppercase tracking-widest">{t('footer-privacy')}</button>
              <a href="mailto:clement@kaleidoland.fr" className="text-base text-[#FFFFF0]/60 hover:text-[#8B0000] transition-colors font-bold uppercase tracking-widest">{t('footer-contact')}</a>
            </div>
          </div>
          <div className="md:text-right space-y-10 sm:space-y-12">
            <div className="p-8 sm:p-10 border border-subtle rounded-google inline-block md:ml-auto bg-[#080808]/50 backdrop-blur-md">
              <p className="text-[10px] text-[#D4AF37] font-black uppercase tracking-[0.4em] mb-4">{t('footer-values')}</p>
              <p className="text-[10px] text-[#FFFFF0]/20 uppercase tracking-[0.3em]">© 2026. Terrilium — Cultures & Patrimoines.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#050505] flex flex-col">
            <div className="h-20 px-8 flex items-center justify-between border-b border-[#D4AF37]/20 bg-[#0a0a0a]">
              <span className="text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.5em] glow-gold">{activeModal === 'don' ? 'SECURE GATEWAY // HELLOASSO' : activeModal}</span>
              <button onClick={closeModal} className="px-6 py-2 border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-[#FFFFF0] transition-all rounded-sm text-[11px] font-black tracking-widest uppercase">{t('modal-close')}</button>
            </div>
            <div className="flex-1 overflow-y-auto bg-[#050505]">
              {activeModal === 'don' ? (
                <iframe title="Don" src="https://www.helloasso.com/associations/terrilium-cultures-patrimoines/formulaires/1/widget?view=overlay" className="w-full h-full border-0"></iframe>
              ) : activeModal === 'legal' ? (
                <div className="max-w-4xl mx-auto py-32 px-8">
                  <h2 className="text-5xl font-black mb-20 tracking-tighter uppercase text-[#FFFFF0] glow-gold">Mentions Légales</h2>
                  <div className="space-y-20 text-[#FFFFF0]/90 font-light leading-relaxed text-xl">
                    <section className="border-l-4 border-[#8B0000] pl-12">
                      <h3 className="text-[#D4AF37] uppercase text-sm font-black tracking-[0.4em] mb-8 glow-gold">Éditeur du site</h3>
                      <p>Le présent site est édité par l'association <strong className="text-[#D4AF37]">TERRILIUM – Cultures & Patrimoines</strong>, association déclarée régie par la loi du 1er juillet 1901 et le décret du 16 août 1901.</p>
                      <p className="mt-4"><strong>Siège social :</strong> Lille - Justice, France</p>
                      <p className="mt-4"><strong>Directeur de la publication :</strong> Clément LEGRAND</p>
                      <p className="mt-4"><strong>Contact :</strong> <a href="mailto:clement@kaleidoland.fr" className="text-[#8B0000] underline font-black">Nous écrire par e-mail</a></p>
                    </section>
                    <section className="border-l-4 border-[#D4AF37] pl-12">
                      <h3 className="text-[#D4AF37] uppercase text-sm font-black tracking-[0.4em] mb-8 glow-gold">Développement et Hébergement</h3>
                      <p>L'architecture technique de cette plateforme est développée sur <strong className="text-[#FFFFF0]">GitHub</strong> et propulsée par l'infrastructure <strong className="text-[#FFFFF0]">Vercel</strong>.</p>
                      <p className="mt-4">Le site est hébergé par <strong className="text-[#FFFFF0]">Squarespace</strong>.</p>
                    </section>
                    <section className="border-l-4 border-[#D4AF37] pl-12">
                      <h3 className="text-[#D4AF37] uppercase text-sm font-black tracking-[0.4em] mb-8 glow-gold">Propriété intellectuelle</h3>
                      <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
                    </section>
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto py-32 px-8">
                  <h2 className="text-5xl font-black mb-20 tracking-tighter uppercase text-[#FFFFF0] glow-gold">Politique de Confidentialité</h2>
                  <div className="space-y-20 text-[#FFFFF0]/90 font-light leading-relaxed text-xl">
                    <section className="border-l-4 border-[#8B0000] pl-12">
                      <h3 className="text-[#D4AF37] uppercase text-sm font-black tracking-[0.4em] mb-8 glow-gold">Collecte des données personnelles</h3>
                      <p>L'association TERRILIUM s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site terrilium.org, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.</p>
                      <p className="mt-4">Les données personnelles recueillies sur le site résultent de la communication volontaire lors de vos dons et adhésions. Ces transactions sont sécurisées et gérées par notre partenaire <strong className="text-[#D4AF37]">HelloAsso</strong>.</p>
                    </section>
                    <section className="border-l-4 border-[#D4AF37] pl-12">
                      <h3 className="text-[#D4AF37] uppercase text-sm font-black tracking-[0.4em] mb-8 glow-gold">Utilisation des cookies</h3>
                      <p>Le site utilise des cookies techniques strictement nécessaires à son fonctionnement. Des cookies tiers liés à l'intégration des formulaires HelloAsso peuvent être déposés.</p>
                    </section>
                    <section className="border-l-4 border-[#8B0000] pl-12">
                      <h3 className="text-[#D4AF37] uppercase text-sm font-black tracking-[0.4em] mb-8 glow-gold">Vos droits</h3>
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
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-6 right-6 md:w-[400px] z-[200] bg-[#0a0a0a]/90 backdrop-blur-xl border border-subtle p-8 rounded-google shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <strong className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">{t('cookie-title')}</strong>
            </div>
            <p className="text-sm text-[#FFFFF0]/60 mb-8 leading-relaxed font-light">{t('cookie-desc')}</p>
            <div className="flex gap-4">
              <button onClick={() => handleCookieAction(true)} className="flex-1 py-3 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/20">{t('cookie-accept')}</button>
              <button onClick={() => handleCookieAction(false)} className="px-6 py-3 border border-subtle text-[#FFFFF0]/40 text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#8B0000] hover:text-white transition-all">{t('cookie-decline')}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
