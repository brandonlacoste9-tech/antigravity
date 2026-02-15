const TRANSLATIONS = {
    en: {
        navVision: 'Vision',
        navCapabilities: 'Capabilities',
        navPricing: 'Pricing',
        heroBadge: 'Agentic Excellence',
        heroTitle: 'The Future of <span class="gradient-text">Autonomous</span> Engineering',
        heroSubtitle: 'Antigravity is not just an AI. It\'s a specialized agent that builds, debugs, and deploys entire infrastructures while you sleep. Code at a galactic scale.',
        heroSummon: '👑 Summon Antigravity',
        subLabel: 'The Gateway',
        subTitle: 'Lifetime <span class="highlight">Intelligence</span>',
        subDesc: 'The Antigravity beta is exclusive. Unlock the gateway with a one-time fee and join the elite colony of engineers.',
        subBtn: 'Unlock Antigravity Gateway',
        subNote: 'Secure payment powered by Stripe. No monthly fees.',
        bootInit: '> INITIALIZING ANTIGRAVITY GATEWAY...',
        bootNeural: '> MOUNTING NEURAL FABRIC... [DONE]',
        bootMatrix: '> LOADING AGENTIC REASONING MATRIX...',
        bootTunnel: '> ESTABLISHING SECURE SSH TUNNEL: AG-NET-01',
        bootKernel: '> KERNEL_LEVEL_ACCESS: ENABLED',
        bootWelcome: 'WELCOME TO THE VOID, COMMANDER.'
    },
    fr: {
        navVision: 'Vision',
        navCapabilities: 'Capacités',
        navPricing: 'Tarifs',
        heroBadge: 'Excellence Agente',
        heroTitle: 'L\'avenir de l\'ingénierie <span class="gradient-text">autonome</span>',
        heroSubtitle: 'Antigravity n\'est pas seulement une IA. C\'est un agent spécialisé qui construit, débogue et déploie des infrastructures entières pendant que vous dormez.',
        heroSummon: '👑 Invoquer Antigravity',
        subLabel: 'La Passerelle',
        subTitle: 'Intelligence <span class="highlight">à Vie</span>',
        subDesc: 'La bêta d\'Antigravity est exclusive. Déverrouillez la passerelle avec un frais unique et rejoignez l\'élite.',
        subBtn: 'Déverrouiller Antigravity',
        subNote: 'Paiement sécurisé via Stripe. Aucun frais mensuel.',
        bootInit: '> INITIALISATION DE LA PASSERELLE ANTIGRAVITY...',
        bootNeural: '> MONTAGE DU TISSU NEURONAL... [OK]',
        bootMatrix: '> CHARGEMENT DE LA MATRICE DE RAISONNEMENT...',
        bootTunnel: '> ÉTABLISSEMENT DU TUNNEL SSH : AG-NET-01',
        bootKernel: '> ACCÈS NIVEAU NOYAU : ACTIVÉ',
        bootWelcome: 'BIENVENUE DANS LE VIDE, COMMANDANT.'
    },
    es: {
        navVision: 'Visión',
        navCapabilities: 'Capacidades',
        navPricing: 'Precios',
        heroBadge: 'Excelencia Agente',
        heroTitle: 'El futuro de la ingeniería <span class="gradient-text">autónoma</span>',
        heroSubtitle: 'Antigravity no es solo una IA. Es un agente especializado que construye, depura y despliega infraestructuras completas mientras duermes.',
        heroSummon: '👑 Invocar Antigravity',
        subLabel: 'La Puerta',
        subTitle: 'Inteligencia <span class="highlight">de por Vida</span>',
        subDesc: 'La beta de Antigravity es exclusiva. Desbloquea la puerta con un pago único y únete a la élite.',
        subBtn: 'Desbloquear Antigravity',
        subNote: 'Pago seguro mediante Stripe. Sin cuotas mensuales.',
        bootInit: '> INICIALIZANDO PUERTA ANTIGRAVITY...',
        bootNeural: '> MONTANDO TEJIDO NEURONAL... [OK]',
        bootMatrix: '> CARGANDO MATRIZ DE RAZONAMIENTO...',
        bootTunnel: '> ESTABLECIENDO TÚNEL SSH: AG-NET-01',
        bootKernel: '> ACCESO NIVEL KERNEL: ACTIVADO',
        bootWelcome: 'BIENVENIDO AL VACÍO, COMANDANTE.'
    },
    pt: {
        navVision: 'Visão',
        navCapabilities: 'Capacidades',
        navPricing: 'Preços',
        heroBadge: 'Excelência Agente',
        heroTitle: 'O futuro da engenharia <span class="gradient-text">autônoma</span>',
        heroSubtitle: 'Antigravity não é apenas uma IA. É um agente especializado que constrói, depura e implanta infraestruturas inteiras enquanto você dorme.',
        heroSummon: '👑 Invocar Antigravity',
        subLabel: 'O Portal',
        subTitle: 'Inteligência <span class="highlight">Vitalícia</span>',
        subDesc: 'O beta do Antigravity é exclusivo. Desbloqueie o portal com uma taxa única e junte-se à elite.',
        subBtn: 'Desbloquear Antigravity',
        subNote: 'Pagamento seguro via Stripe. Sem taxas mensais.',
        bootInit: '> INICIALIZANDO PORTAL ANTIGRAVITY...',
        bootNeural: '> MONTANDO TECIDO NEURAL... [OK]',
        bootMatrix: '> CARREGANDO MATRIZ DE RACIOCÍNIO...',
        bootTunnel: '> ESTABELECENDO TÚNEL SSH: AG-NET-01',
        bootKernel: '> ACESSO NÍVEL KERNEL: ATIVADO',
        bootWelcome: 'BEM-VINDO AO VAZIO, COMANDANTE.'
    },
    ar: {
        navVision: 'Visión',
        navCapabilities: 'Capacidades',
        navPricing: 'Precios',
        heroBadge: 'Excelencia Agente',
        heroTitle: 'El futuro de la ingeniería <span class="gradient-text">autónoma</span>',
        heroSubtitle: 'Antigravity no es solo una IA. Es un agente especializado que construye, depura y despliega infraestructuras completas mientras duermes.',
        heroSummon: '👑 Invocar Antigravity',
        subLabel: 'La Puerta',
        subTitle: 'Inteligencia <span class="highlight">de por Vida</span>',
        subDesc: 'La beta de Antigravity es exclusiva. Desbloquea la puerta con un pago único y únete a la élite.',
        subBtn: 'Desbloquear Antigravity',
        subNote: 'Pago seguro mediante Stripe. Sin cuotas mensuales.',
        bootInit: '> INICIALIZANDO PUERTA ANTIGRAVITY...',
        bootNeural: '> MONTANDO TEJIDO NEURONAL... [OK]',
        bootMatrix: '> CARGANDO MATRIZ DE RAZONAMIENTO...',
        bootTunnel: '> ESTABLECIENDO TÚNEL SSH: AG-NET-01',
        bootKernel: '> ACCESO NIVEL KERNEL: ACTIVADO',
        bootWelcome: 'BIENVENIDO AL VACÍO, COMANDANTE.'
    }
};

let currentLang = 'en';

function applyTranslations() {
    const t = TRANSLATIONS[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
}

function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
        currentLang = lang;
        applyTranslations();
        localStorage.setItem('antigravity_lang', lang);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('antigravity_lang');
    if (savedLang) setLanguage(savedLang);
    else applyTranslations();
});
