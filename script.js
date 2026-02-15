document.addEventListener('DOMContentLoaded', () => {
    // ===== REVEAL ANIMATIONS =====
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));

    // ===== UI ELEMENTS =====
    const summonBtn = document.getElementById('summonBtn');
    const initBtn = document.getElementById('initBtn');
    const terminalOverlay = document.getElementById('terminalOverlay');
    const closeTerminal = document.getElementById('closeTerminal');
    const terminalBody = document.getElementById('terminalBody');
    const terminalInput = document.getElementById('terminalInput');
    const payBtn = document.getElementById('payBtn');

    let isBooting = false;

    // ===== NAVIGATION & SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    if (initBtn) {
        initBtn.addEventListener('click', () => {
            const pricing = document.getElementById('pricing');
            if (pricing) pricing.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ===== GATING LOGIC =====
    function isPaid() {
        return localStorage.getItem('antigravity_paid') === 'true';
    }

    function checkGate(onPaid) {
        if (isPaid()) {
            onPaid();
        } else {
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
            const card = document.querySelector('.pricing-card');
            if (card) {
                card.style.borderColor = 'var(--accent-purple)';
                card.style.boxShadow = '0 0 40px rgba(168, 85, 247, 0.4)';
                setTimeout(() => {
                    card.style.borderColor = '';
                    card.style.boxShadow = '';
                }, 2000);
            }
        }
    }

    // ===== BOOT SEQUENCE =====
    function getBootLog() {
        const t = TRANSLATIONS[currentLang];
        return [
            { t: t.bootInit, d: 400 },
            { t: t.bootNeural, d: 300 },
            { t: t.bootMatrix, d: 500 },
            { t: t.bootTunnel, d: 400 },
            { t: t.bootKernel, d: 200 },
            { t: '> SHELL_CDP_BRIDGE: ACTIVE', d: 200 },
            { t: ' ', d: 100 },
            { t: '<span class="highlight">✓ IDENTITY VERIFIED: ELITE OPERATOR</span>', d: 600 },
            { t: ' ', d: 100 },
            { t: `<span class="gradient-text" style="font-weight:800;">${t.bootWelcome}</span>`, d: 0 }
        ];
    }

    async function runBoot() {
        if (isBooting) return;
        isBooting = true;
        terminalBody.innerHTML = '';
        const log = getBootLog();
        for (const step of log) {
            await new Promise(r => setTimeout(r, step.d));
            const line = document.createElement('div');
            line.style.marginBottom = '8px';
            line.innerHTML = step.t;
            terminalBody.appendChild(line);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
        terminalInput.focus();
        isBooting = false;
    }

    // ===== TERMINAL CONTROLS =====
    function openTerminal() {
        checkGate(() => {
            terminalOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            runBoot();
        });
    }

    function hideTerminal() {
        terminalOverlay.style.display = 'none';
        document.body.style.overflow = '';
        isBooting = false;
    }

    if (summonBtn) summonBtn.addEventListener('click', openTerminal);
    if (closeTerminal) closeTerminal.addEventListener('click', hideTerminal);

    // Escape to close terminal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideTerminal();
    });

    // Simulate Pay Event
    if (payBtn) {
        payBtn.addEventListener('click', () => {
            localStorage.setItem('antigravity_paid', 'true');
            payBtn.textContent = '✓ Access Granted';
            payBtn.style.background = 'var(--accent-purple)';
            setTimeout(() => {
                openTerminal();
            }, 1000);
        });
    }

    // Terminal Input Logic
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && terminalInput.value.trim()) {
            const cmd = terminalInput.value;
            const line = document.createElement('div');
            line.style.marginBottom = '4px';
            line.innerHTML = `<span style="color:var(--accent-purple)">❯ ${cmd}</span>`;
            terminalBody.appendChild(line);

            const response = document.createElement('div');
            response.style.color = 'rgba(255,255,255,0.6)';
            response.style.marginTop = '4px';
            response.style.marginBottom = '12px';
            response.textContent = '> Processing command in Antigravity cluster... Action queued.';
            terminalBody.appendChild(response);

            terminalInput.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });

    // ===== i18n HOOK =====
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            // Already handled by i18n.js, but we can add logic here if needed
        });
    }
});
