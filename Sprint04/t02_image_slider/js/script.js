let slideIndex = 1;
let timer = 0;
showSlides(slideIndex);

function nextSlider() {
    showSlides(slideIndex += 1);
}

function prevSlider() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    clearInterval(timer)
    timer = setInterval(nextSlider, 3000);
}
