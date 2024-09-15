const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let isTransitioning = false;

function showSlide(index) {
  if (isTransitioning) return;

  isTransitioning = true;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    const caption = slide.querySelector('.caption');
    caption.classList.remove('animate-caption');
    if (i === index) {
      slide.classList.add('active');

      setTimeout(() => {
        caption.classList.add('animate-caption');
      }, 100);
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === index) {
      dot.classList.add('active');
    }
  });

  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  setTimeout(() => {
    isTransitioning = false;
  }, 800);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    if (i !== currentIndex) {
      currentIndex = i;
      showSlide(currentIndex);
    }
  });
});

showSlide(currentIndex);
