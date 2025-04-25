document.addEventListener("DOMContentLoaded", function() {
    // Highlight active nav link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });

    // Smooth scroll for .animated-btn
    document.querySelectorAll('.animated-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({behavior: 'smooth'});
            }
        });
    });
});