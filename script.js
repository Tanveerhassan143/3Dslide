let currentSlide = 0;

function rotateSlides() {
    const slides = document.querySelector('.slides');
    currentSlide = (currentSlide + 1) % 3;
    const angle = currentSlide * 120;
    slides.style.transform = `rotateY(${angle}deg)`;
}

setInterval(rotateSlides, 3000);
