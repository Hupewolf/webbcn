document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll(".wrap-hero");
    const prevBtn = document.getElementById("back-btn");
    const nextBtn = document.getElementById("next-btn");
    
    let currentIndex = 0;
    const totalSlide = slides.length;
    let slideInterval; 

    function showSlide(index) {
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

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000);
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
            resetInterval(); 
        });

        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
            resetInterval(); 
        });
    }

   
    resetInterval();
});
