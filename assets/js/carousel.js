'use strict';

// Función para el carrusel 1
const images1 = document.querySelectorAll('.grande .img');
const dots1 = document.querySelectorAll('.puntos .punto');
let currentIndex1 = 0;

function updateCarousel1(index) {
    images1.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });

    dots1.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

dots1.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex1 = i;
        updateCarousel1(currentIndex1);
    });
});

setInterval(() => {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    updateCarousel1(currentIndex1);
}, 7000);

updateCarousel1(currentIndex1);

// Función para el carrusel 2
const images2 = document.querySelectorAll('.grande2 .img');
const dots2 = document.querySelectorAll('.puntos2 .punto2');
let currentIndex2 = 0;

function updateCarousel2(index) {
    images2.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });

    dots2.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

dots2.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex2 = i;
        updateCarousel2(currentIndex2);
    });
});

setInterval(() => {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    updateCarousel2(currentIndex2);
}, 7000);

updateCarousel2(currentIndex2);
