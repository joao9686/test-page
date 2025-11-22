// main.js

document.addEventListener("DOMContentLoaded", () => {
  // 1) REVEAL AO SCROLL
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    {
      threshold: 0.15,        // 15% visível já anima
      rootMargin: "0px 0px -40px 0px",
    }
  );

  // elementos que vão "entrar" com animação
  const revealSelectors = [
    ".hero-text",
    ".hero-card",
    ".section-services",
    ".section-solutions",
    ".section-products",
    ".section-about",
    ".section-testimonials",
    ".section-contact-home",
    ".service-card",
    ".solution-card",
    ".product-card",
    ".testimonial-card",
    ".google-reviews",
    ".about-card",
    ".contact-home-info",
    ".contact-home-map",
    ".highlight-card",
  ];

  document.querySelectorAll(revealSelectors.join(",")).forEach((el) => {
    if (!el.classList.contains("no-anim")) {
      el.classList.add("reveal");
      observer.observe(el);
    }
  });

  // 2) SCROLL SUAVE PARA ÂNCORAS DO MESMO SITE
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// ------- MOBILE HAMBURGER MENU -------
(function () {
  const hamburger = document.querySelector(".hamburger");
  if (!hamburger) return;

  // cria painel mobile dinamicamente (mantém HTML limpo)
  let mobileNav = document.querySelector(".mobile-nav");
  if (!mobileNav) {
    mobileNav = document.createElement("nav");
    mobileNav.className = "mobile-nav";
    mobileNav.setAttribute("aria-hidden", "true");

    // clona a lista de links do desktop para dentro do painel
    const desktopMenu = document.querySelector("nav.menu");
    if (desktopMenu) {
      mobileNav.innerHTML = desktopMenu.innerHTML;
    } else {
      mobileNav.innerHTML =
        '<a href="index.html">Início</a>' +
        '<a href="servicos.html">Serviços</a>' +
        '<a href="produtos.html">Produtos</a>' +
        '<a href="sobre.html">Sobre</a>' +
        '<a href="contato.html">Contato</a>';
    }
    document.body.appendChild(mobileNav);
  }

  // backdrop
  let backdrop = document.querySelector(".mobile-nav-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "mobile-nav-backdrop";
    document.body.appendChild(backdrop);
  }

  function openNav() {
    hamburger.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");

    const firstLink = mobileNav.querySelector("a");
    if (firstLink) firstLink.focus();
  }

  function closeNav() {
    hamburger.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
    hamburger.focus();
  }

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    if (expanded) closeNav();
    else openNav();
  });

  // fecha ao clicar no backdrop
  backdrop.addEventListener("click", closeNav);

  // fecha ao clicar em qualquer link do menu mobile
  mobileNav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    closeNav();
  });

  // fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      closeNav();
    }
  });

  // garante que o menu feche se voltar para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 840 && document.body.classList.contains("nav-open")) {
      closeNav();
    }
  });

  
})();



