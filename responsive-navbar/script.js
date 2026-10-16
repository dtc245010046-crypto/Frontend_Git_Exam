const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const mobileBreakpoint = window.matchMedia("(max-width: 768px)");

function setMenuOpen(isOpen) {
    navLinks.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
    menuButton.querySelector(".menu-icon").textContent = isOpen ? "×" : "☰";
}

menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        menuButton.focus();
    }
});

mobileBreakpoint.addEventListener("change", (event) => {
    if (!event.matches) setMenuOpen(false);
});
