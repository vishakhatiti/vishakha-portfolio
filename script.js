// MENU
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// FORM
const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.textContent = "Message sent successfully!";
  form.reset();
});