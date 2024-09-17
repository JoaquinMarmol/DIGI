document.addEventListener('DOMContentLoaded', function() {
    // Lógica del menú hamburguesa
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('open');
    });

    // Cambiar el color del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animaciones de entrada de secciones
    const sections = document.querySelectorAll('.animate__fromRight');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animaciones de características
    const features = document.querySelectorAll('.feat');
    const featureObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(features).indexOf(entry.target);
                if (index < 3) {
                    entry.target.classList.add('feature-slide-left');
                } else {
                    entry.target.classList.add('feature-slide-right');
                }
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    features.forEach(feature => {
        featureObserver.observe(feature);
    });
});



