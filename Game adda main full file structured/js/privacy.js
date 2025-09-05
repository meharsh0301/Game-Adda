// DOM elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const contactBtn = document.getElementById('contact-btn');
const backToTopBtn = document.getElementById('backToTop');
const loader = document.getElementById('loader');

// Show loader when page loads
window.addEventListener('DOMContentLoaded', () => {
    showLoader();
    setTimeout(hideLoader, 1000); // Simulate loading time
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
});

// Back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide loading animation
function showLoader() {
    loader.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideLoader() {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Print button functionality
const printPage = () => {
    window.print();
};

// Add print button dynamically
const printBtn = document.createElement('button');
printBtn.className = 'btn';
printBtn.innerHTML = '<i class="fas fa-print"></i> Print Policy';
printBtn.style.margin = '20px auto';
printBtn.style.display = 'block';
printBtn.addEventListener('click', printPage);
document.querySelector('.privacy-container').appendChild(printBtn);

// Contact form modal functionality
contactBtn.addEventListener('click', () => {
    // In a real implementation, this would open a contact modal
    alert('Contact form would open here. In a full implementation, this would trigger a modal dialog.');
});