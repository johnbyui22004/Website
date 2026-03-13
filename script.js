document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Toggle menu open/close
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Adjust for sticky header height
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Simple Form Validation & Handling ---
    const leadForm = document.getElementById('lead-form');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload

            // Gather values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;

            // Map select values to readable service names for user-friendly messaging
            const serviceMap = {
                chip: 'Rock Chip Repair',
                replacement: 'Windshield Replacement',
                mobile: 'Mobile Service',
                tint: 'Window Tinting',
                calibration: 'ADAS Calibration',
                other: 'Other / Not Sure'
            };
            const readableService = serviceMap[service] || service;

            // Basic Validation Check (HTML5 required attribute handles most of it)
            if (name && phone && service) {
                // Simulate sending data
                alert(`Thanks, ${name}! Your request for ${readableService} has been received. We will call you at ${phone} shortly to confirm your quote.`);
                leadForm.reset();
            } else {
                alert('Please fill out all fields so we can provide an accurate quote.');
            }
        });
    }
});