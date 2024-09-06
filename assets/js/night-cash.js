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

    // Carrusel
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    // Flechas
    document.querySelector('.prev').addEventListener('click', function() {
        const newIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(newIndex);
    });

    document.querySelector('.next').addEventListener('click', function() {
        const newIndex = (currentIndex + 1) % items.length;
        showSlide(newIndex);
    });

    // Puntos
    dots.forEach((dot, i) => {
        dot.addEventListener('click', function() {
            showSlide(i);
        });
    });

    // Funcionalidad de deslizar
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mousedown', (e) => {
        startX = e.pageX - carousel.offsetLeft;
        isDragging = true;
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento aquí
        carousel.scrollLeft -= walk;
        startX = x;
    });

    // Agregar soporte para dispositivos táctiles
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - carousel.offsetLeft;
        isDragging = true;
    });

    carousel.addEventListener('touchend', () => {
        isDragging = false;
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta la velocidad de desplazamiento aquí
        carousel.scrollLeft -= walk;
        startX = x;
    });
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

