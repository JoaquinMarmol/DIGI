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
});
