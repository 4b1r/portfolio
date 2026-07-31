/* ---------- nav scroll-spy ---------- */
/* Highlights the current section in the nav bar as you scroll.
   No animation involved — just toggling an "active" class based on
   scroll position; the visual transition on that class is a plain
   hover-style CSS transition, not an autoplaying effect. */
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach(function (section) {
        const top = section.offsetTop;
        if (window.scrollY >= top - 150) {
            current = section.id;
        }
    });
    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });
    const activeLink = document.querySelector('.menu a[href="#' + current + '"]');
    if (activeLink) {
        activeLink.classList.add("active");
    }
});