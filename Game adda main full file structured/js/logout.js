// DOM Elements
const logoutBtn = document.getElementById('logout-btn');
const cancelBtn = document.getElementById('cancel-btn');
const loader = document.getElementById('loader');
const logoutMessage = document.getElementById('logout-message');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const contactBtn = document.getElementById('contact-btn');

// Sample user data (would come from your auth system in real app)
const currentUser = {
    name: "PlayerOne",
    lastLogin: new Date().toLocaleString()
};

// Update logout message with user info
logoutMessage.innerHTML = `
    ${currentUser.name}, you're about to log out of your Game Adda account.<br>
    Last login: ${currentUser.lastLogin}<br><br>
    Are you sure you want to continue?
`;

// Logout functionality
logoutBtn.addEventListener('click', function() {
    // Show loader
    loader.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Simulate logout process (replace with actual logout API call)
    setTimeout(() => {
        // In a real app, this would clear session/tokens
        console.log('User logged out');
        
        // Redirect to home page after logout
        window.location.href = 'index.html';
    }, 1500);
});

// Cancel logout
cancelBtn.addEventListener('click', function() {
    // Show loader for smooth transition
    loader.style.display = 'flex';
    
    // Simulate brief delay for better UX
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 500);
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
});

// Contact button
contactBtn.addEventListener('click', () => {
    alert('Contact form would open here in a real implementation.');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    });
});