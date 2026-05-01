document.addEventListener("astro:page-load", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.getElementById("nav-links");
  
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
      const isExpanded = !navLinks.classList.contains("hidden");
      hamburger.setAttribute("aria-expanded", isExpanded.toString());
    });
  }
});
