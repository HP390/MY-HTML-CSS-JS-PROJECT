// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.backgroundColor = '#fff';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add animation to course cards on scroll
const courseCards = document.querySelectorAll('.course-card');
const featureItems = document.querySelectorAll('.feature-item');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    courseCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });

    featureItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
}

// Initial styles for animation
courseCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

featureItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', checkScroll);
checkScroll(); // Check on initial load
