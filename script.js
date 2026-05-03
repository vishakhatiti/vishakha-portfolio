// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Optional: highlight navbar on scroll (basic)
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.boxShadow = window.scrollY > 50 
    ? "0 2px 10px rgba(0,0,0,0.5)" 
    : "none";
});