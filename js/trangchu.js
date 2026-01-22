document.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelectorAll(".wrap-hero");
const prevBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
const totalSlide = slides.length;

function showSlide(index){
    if(index >= totalSlide){
        currentIndex = 0;
    } else if(index < 0) {
        currentIndex = totalSlide - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[currentIndex].classList.add("active");
}

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
});