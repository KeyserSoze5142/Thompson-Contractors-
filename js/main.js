/* Thompson Contractors — site scripts */
(function () {
  "use strict";

  // Sticky header shadow
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  var overlay = document.querySelector(".nav-overlay");
  function closeNav() {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
  }
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("open", !open);
      if (overlay) overlay.classList.toggle("show", !open);
    });
    if (overlay) overlay.addEventListener("click", closeNav);
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  // Reveal on scroll
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // Lightbox for galleries
  var galleryLinks = Array.prototype.slice.call(
    document.querySelectorAll(".gallery a")
  );
  if (galleryLinks.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-label", "Image viewer");
    lb.innerHTML =
      '<button class="lightbox-close" aria-label="Close">&times;</button>' +
      '<button class="lightbox-prev" aria-label="Previous image">&#8249;</button>' +
      '<img src="" alt="Project photo — Thompson Contractors">' +
      '<button class="lightbox-next" aria-label="Next image">&#8250;</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img");
    var current = 0;

    function show(i) {
      current = (i + galleryLinks.length) % galleryLinks.length;
      lbImg.src = galleryLinks[current].getAttribute("href");
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function hide() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    }

    galleryLinks.forEach(function (a, i) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        show(i);
      });
    });
    lb.querySelector(".lightbox-close").addEventListener("click", hide);
    lb.querySelector(".lightbox-prev").addEventListener("click", function () {
      show(current - 1);
    });
    lb.querySelector(".lightbox-next").addEventListener("click", function () {
      show(current + 1);
    });
    lb.addEventListener("click", function (e) {
      if (e.target === lb) hide();
    });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") hide();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }

  // Footer year
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
