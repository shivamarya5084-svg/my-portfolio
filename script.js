
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Mobile menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Dark / Light theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    themeToggle.textContent = isLight ? "🌙" : "☀️";

    localStorage.setItem("portfolioTheme", isLight ? "light" : "dark");
});

// Load saved theme
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "🌙";
}

// Contact form validation
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    formStatus.textContent =
        "Thank you, " + name + "! Your form is valid.";

    contactForm.reset();
});

// Dynamic year
document.getElementById("year").textContent =
    new Date().getFullYear();
