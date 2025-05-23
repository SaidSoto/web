// Selecciona el contenedor que agrupa todos los slides
const carouselInner = document.querySelector('.carousel-inner');

// Selecciona todos los elementos con clase 'slide' (cada imagen individual)
const slides = document.querySelectorAll('.slide');

// Guarda el número total de slides disponibles
const totalSlides = slides.length;

// Índice del slide actual (empezamos en el primero)
let currentIndex = 0;

// Función que muestra un slide específico según el índice recibido
function showSlide(index) {
  // Controla si el índice se sale del rango
  if (index < 0) {
    currentIndex = totalSlides - 1; // Vuelve al último slide
  } else if (index >= totalSlides) {
    currentIndex = 0; // Regresa al primero
  } else {
    currentIndex = index; // Usa el índice válido
  }

  // Calcula el desplazamiento necesario en porcentaje
  const offset = -currentIndex * 100;

  // Aplica el desplazamiento al carrusel
  carouselInner.style.transform = `translateX(${offset}%)`;

  // Añade una transición suave
  carouselInner.style.transition = 'transform 0.5s ease-in-out';
}

// Elimina la animación automática de CSS
carouselInner.style.animation = 'none';

// Selecciona las flechas
const prevBtn = document.querySelector('a[href="#prev"]');
const nextBtn = document.querySelector('a[href="#next"]');

// Evento para la flecha izquierda
prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showSlide(currentIndex - 1);
  resetAutoSlide(); // Reinicia el temporizador si se usa manualmente
});

// Evento para la flecha derecha
nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showSlide(currentIndex + 1);
  resetAutoSlide(); // Reinicia el temporizador si se usa manualmente
});

// ⏱️ Movimiento automático cada 5 segundos
let autoSlide = setInterval(() => {
  showSlide(currentIndex + 1); // Avanza al siguiente slide
}, 5000);

// Reinicia el temporizador cada vez que se hace clic en una flecha
function resetAutoSlide() {
  clearInterval(autoSlide); // Detiene el temporizador anterior
  autoSlide = setInterval(() => {
    showSlide(currentIndex + 1); // Vuelve a iniciar el ciclo
  }, 5000);
}


