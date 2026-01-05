const animatedItems = Array.from(document.querySelectorAll("[data-animate]"));

const reveal = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(reveal, {
  threshold: 0.12,
  rootMargin: "0px 0px -10% 0px",
});

animatedItems.forEach((item, index) => {
  // Stagger entrance by index for a smoother cascade.
  item.style.transitionDelay = `${index * 70}ms`;
  observer.observe(item);
});

// Fallback for users who jump to anchors quickly
window.addEventListener("load", () => {
  animatedItems
    .filter((el) => el.getBoundingClientRect().top < window.innerHeight * 0.8)
    .forEach((el) => el.classList.add("visible"));
});
