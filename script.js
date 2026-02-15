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

    // ===== GATING LOGIC =====
    const summonBtn = document.getElementById('summonBtn');
    const terminalOverlay = document.getElementById('terminalOverlay');
    const closeTerminal = document.getElementById('closeTerminal');
    const terminalBody = document.getElementById('terminalBody');
    const terminalInput = document.getElementById('terminalInput');
    const payBtn = document.getElementById('payBtn');

    function isPaid() {
        return localStorage.getItem('antigravity_paid') === 'true';
    }

    function checkGate(onPaid) {
        if (isPaid()) {
            onPaid();
        } else {
            const pricingSection = document.getElementById('pricing');
            pricingSection.scrollIntoView({ behavior: 'smooth' });
            const card = document.querySelector('.pricing-card');
            if (card) {
                card.style.borderColor = 'var(--accent-gold)';
                card.style.boxShadow = '0 0 40px rgba(245, 158, 11, 0.4)';
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
    }

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

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
    }

    if (summonBtn) summonBtn.addEventListener('click', openTerminal);
    if (closeTerminal) closeTerminal.addEventListener('click', hideTerminal);

    // Simulate Pay Event
    if (payBtn) {
        payBtn.addEventListener('click', () => {
            localStorage.setItem('antigravity_paid', 'true');
            // Show success and open terminal
            payBtn.textContent = '✓ Access Granted';
            payBtn.style.background = 'var(--accent-cyan)';
            setTimeout(() => {
                openTerminal();
            }, 1000);
        });
    }

    // Terminal Input Dummy Response
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && terminalInput.value.trim()) {
            const cmd = terminalInput.value;
            const line = document.createElement('div');
            line.innerHTML = `<span style="color:var(--accent-cyan)">❯ ${cmd}</span>`;
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
});
