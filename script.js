document.addEventListener('DOMContentLoaded', () => {
    // Simple console log for now
    console.log('Toratora Syokudou loaded!');


    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuBtn.classList.toggle('active'); // Add this line for icon animation

            // Optional: Animate hamburger icon (simple text change for now or class toggle)
            const spans = menuBtn.querySelectorAll('span');
            // Logic for hamburger animation can be added here if needed
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
