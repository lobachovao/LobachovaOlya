document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    const toggleBtn = faq.querySelector(".faq-toggle");
    const answer = faq.querySelector(".faq-answer");

    toggleBtn.addEventListener("click", function () {
      const isOpen = answer.classList.contains("open");

      // Закриваємо всі перед відкриттям нового
      faqs.forEach((item) => {
        item.querySelector(".faq-answer").classList.remove("open");
        item.querySelector(".faq-toggle").textContent = "+";
      });

      // Якщо вже відкрите, закриваємо. Якщо ні – відкриваємо.
      if (!isOpen) {
        answer.classList.add("open");
        toggleBtn.textContent = "−";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const navList = document.querySelector(".nav-list");

  burger.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 1024) {
    // Працює тільки на десктопі
    const sections = document.querySelectorAll(".container > *"); // Всі секції в .container

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = `opacity 1s ease-out ${index * 0.3}s, transform 1s ease-out ${index * 0.3}s`; // Плавніше і з більшою затримкою
            observer.unobserve(entry.target); // Прибираємо спостереження після появи
          }
        });
      },
      {
        threshold: 0.3, // Трохи глибше в полі зору (30%) перед появою
      }
    );

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)"; // Більший початковий зсув
      observer.observe(section);
    });
  }
});
