// Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".item-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// ===== ANIMAÇÕES DE SCROLL =====

// Configuração do Intersection Observer
const observerOptions = {
  threshold: 0.15, // Elemento precisa estar 15% visível
  rootMargin: "0px 0px -50px 0px", // Trigger um pouco antes
};

// Callback quando elementos ficam visíveis
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Opcional: parar de observar após animar
      // observer.unobserve(entry.target);
    }
  });
};

// Criar o observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Selecionar todos os elementos que devem animar
const animatedElements = document.querySelectorAll(`
  .about-title,
  .about-text,
  .about-image1,
  .about-image2,
  .about-amenities-title,
  .about-amenities-text,
  .amenities-list,
  .visit-title,
  .visit-description,
  .visit-form,
  .testimony-title,
  .testimony-subtitle,
  .adress > div,
  .image,
  .newsletter-title,
  .newsletter-info,
  .newsletter-form,
  .footer-links
`);

// Adicionar classe inicial e observar cada elemento
animatedElements.forEach((el, index) => {
  el.classList.add("fade-up");
  // Adicionar delay progressivo
  el.style.transitionDelay = `${index * 0.05}s`;
  observer.observe(el);
});

// Animação especial para as imagens da galeria (stagger effect)
const galleryImages = document.querySelectorAll(".images-content .image");
galleryImages.forEach((img, index) => {
  img.classList.add("fade-up");
  img.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(img);
});
