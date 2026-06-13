document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer para Revelar Elementos no Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Parar de observar o elemento após a ativação para otimizar a performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 2. Lógica do Sticky CTA Mobile (Exibição Condicional após o Hero)
    const stickyCta = document.getElementById('sticky-cta');
    const heroSection = document.getElementById('hero');

    if (stickyCta && heroSection) {
        window.addEventListener('scroll', () => {
            const heroHeight = heroSection.offsetHeight;
            const scrollPosition = window.scrollY;

            // Exibe o Sticky CTA no mobile quando passar da metade do Hero
            if (scrollPosition > (heroHeight * 0.75)) {
                stickyCta.classList.remove('translate-y-full', 'opacity-0');
                stickyCta.classList.add('translate-y-0', 'opacity-100');
            } else {
                stickyCta.classList.remove('translate-y-0', 'opacity-100');
                stickyCta.classList.add('translate-y-full', 'opacity-0');
            }
        }, { passive: true });
    }

    // 3. Suavização de Âncoras (Scroll Suave)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
