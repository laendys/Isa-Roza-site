document.addEventListener("DOMContentLoaded", () => {
  // Efeito Parallax suave no Glow da imagem principal
  const glow = document.querySelector(".glow-effect");

  window.addEventListener("mousemove", (e) => {
    if (glow) {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      glow.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  // Animação de entrada dos cards ao rolar a página
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transform = "all 0.6s ease-out";
    observer.observe(card);
  });
});