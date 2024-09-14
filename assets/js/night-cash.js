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

    // Función para inicializar el carrusel
    function initializeCarousel(carouselId, intervalTime = 3000) {
        const carouselContainer = document.querySelector(`#${carouselId} .carousel-container`);
        if (!carouselContainer) return; // Verificación para evitar errores si el carrusel no existe

        const prevButton = document.querySelector(`#${carouselId} .prev`);
        const nextButton = document.querySelector(`#${carouselId} .next`);
        const dots = document.querySelectorAll(`#${carouselId} .dot`);

        let currentIndex = 0;
        const items = carouselContainer.querySelectorAll('.carousel-item');
        let interval;

        function showSlide(index) {
            const totalItems = items.length;
            currentIndex = (index + totalItems) % totalItems; // Asegurar que el índice esté en el rango
            const offset = -currentIndex * 100; // Mueve el carrusel en porcentaje
            carouselContainer.style.transform = `translateX(${offset}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function startAutoSlide() {
            return setInterval(() => {
                nextSlide();
            }, intervalTime);
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        // Iniciar el carrusel
        showSlide(currentIndex);

        // Eventos para los botones de control
        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                prevSlide();
                stopAutoSlide();
                interval = startAutoSlide();
            });

            nextButton.addEventListener('click', () => {
                nextSlide();
                stopAutoSlide();
                interval = startAutoSlide();
            });
        }

        // Eventos para los puntos de navegación
        if (dots) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                    stopAutoSlide();
                    interval = startAutoSlide();
                });
            });
        }

        // Iniciar el cambio automático
        interval = startAutoSlide();
    }

    // Inicializar los carruseles con diferentes IDs
    initializeCarousel('carousel1', 5000);
    initializeCarousel('carousel2', 5000);
});

let slideActual = 0;

function mostrarSlide(indiceSlide) {
    const carrusel = document.querySelector('.carrusel');
    const totalSlides = document.querySelectorAll('.elemento-carrusel').length;

    if (indiceSlide >= totalSlides) {
        slideActual = 0;
    } else if (indiceSlide < 0) {
        slideActual = totalSlides - 1;
    } else {
        slideActual = indiceSlide;
    }

    const desplazamiento = -slideActual * 100;
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
}

function moverCarrusel(n) {
    mostrarSlide(slideActual + n);
}

