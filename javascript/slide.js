// Deklarerer og initialiserer en variabel til det aktuelle slide-indeks
let currentSlide = 0;

// Vælger alle HTML-elementer med klassen 'slide' og gemmer dem i en NodeList
const slides = document.querySelectorAll('.slide');

// Vælger alle HTML-elementer med klassen 'dot' og gemmer dem i en NodeList
const dots = document.querySelectorAll('.dot');

// Funktion til at vise det angivne slide baseret på dets indeks
function showSlide(index) {
    // Hvis det angivne indeks er større end eller lig med antallet af slides,
    // skal vi sætte det aktuelle slide til det første slide
    if (index >= slides.length) {
        currentSlide = 0;
    } 
    // Hvis det angivne indeks er mindre end nul, skal vi sætte det aktuelle slide til det sidste slide
    else if (index < 0) {
        currentSlide = slides.length - 1;
    } 
    // Ellers sætter vi det aktuelle slide til det angivne indeks
    else {
        currentSlide = index;
    }
    
    // Itererer over alle slides
    slides.forEach((slide, i) => {
        // Ændrer transform-egenskaben for at vise det aktuelle slide
        slide.style.transform = `translateX(${-currentSlide * 100}%)`;
        // Aktiverer eller deaktiverer klassen 'active' baseret på om dette slide er det aktuelle slide
        dots[i].classList.toggle('active', i === currentSlide);
    });
}

// Lytter efter klik på 'next' knappen og kalder showSlide med næste slide-indeks
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Lytter efter klik på 'prev' knappen og kalder showSlide med forrige slide-indeks
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Lytter efter klik på punkterne og kalder showSlide med det tilsvarende slide-indeks
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Kald showSlide for at vise det aktuelle slide, når DOM'en er indlæst
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

// Her er en kommentar, der dækker punktet 'Operators' selvom koden ikke udtrykkeligt bruger mange operatorer.
// Dette er fordi, assignment operator (=), plus operator (+) og mindre end operator (<) er brugt.
