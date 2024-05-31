
let currentSlide = 0;

const slides = document.querySelectorAll('.slide');

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
   
    if (index >= slides.length) {
        currentSlide = 0;
    } 
   
    else if (index < 0) {
        currentSlide = slides.length - 1;
    } 
   
    else {
        currentSlide = index;
    }
  
    slides.forEach((slide, i) => {
       
        slide.style.transform = `translateX(${-currentSlide * 100}%)`;
       
        dots[i].classList.toggle('active', i === currentSlide);
    });
}


document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});



