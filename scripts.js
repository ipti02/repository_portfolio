document.addEventListener("DOMContentLoaded", () => { 
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");
  const exploreBtn = document.getElementById("explore-btn");

  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    splashScreen.style.opacity = "0";

    setTimeout(() => {
      splashScreen.style.display = "none";
      mainContent.classList.remove("hidden");
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }, 500);
  });
});



  // Swiper slider
  new Swiper(".experience-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

// Splash → Main Content
document.addEventListener("DOMContentLoaded", () => { 
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");
  const exploreBtn = document.getElementById("explore-btn");

  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    splashScreen.style.opacity = "0";

    setTimeout(() => {
      splashScreen.style.display = "none";
      mainContent.classList.remove("hidden");
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }, 500);
  });
});

// Navbar (Sidebar)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

// Open sidebar
menuToggle.addEventListener("click", () => {
  navLinks.classList.add("active");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// Auto-close when a nav link is clicked
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// PDF Modal Functions
function openCertificate(pdfUrl) {
  document.getElementById("pdfViewer").src = pdfUrl;
  document.getElementById("pdfModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("pdfModal").style.display = "none";
  document.getElementById("pdfViewer").src = "";
}

// Initialize Achievements Slider (Slick or Swiper)
document.addEventListener("DOMContentLoaded", () => {
  $('.achievement-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: false,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  });
});

// Rotating dancing text - continuous loop
(function() {
  const phrases = [
    "💡 Researcher", 
    "Developer", 
    "Innovator 🚀", 
    "NLP Enthusiast", 
    "AI & ML Explorer",
    "Competitive Programmer"
  ];
  const el = document.getElementById("dancing-text");
  if (!el) return;

  let i = 0;
  const hold = 2200;   // how long each phrase stays visible (ms)
  const fadeDur = 320; // fade in/out duration (ms) — keep in sync with CSS

  // Initialize
  el.textContent = phrases[0];
  el.classList.add("fade-in");

  function nextPhrase() {
    // fade out
    el.classList.remove("fade-in");
    el.classList.add("fade-out");

    // after fade-out, change text and fade in
    setTimeout(() => {
      i = (i + 1) % phrases.length;
      el.textContent = phrases[i];

      el.classList.remove("fade-out");
      // trigger reflow to restart transition reliably
      void el.offsetWidth;
      el.classList.add("fade-in");
    }, fadeDur);

    // schedule next phrase after hold + fadeDur
    setTimeout(nextPhrase, hold + fadeDur);
  }

  // start the loop after the first hold period
  setTimeout(nextPhrase, hold);
})();
