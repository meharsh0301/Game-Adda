// DOM elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const settingsTabs = document.querySelectorAll('.settings-tab');
const settingsContents = document.querySelectorAll('.settings-content');
const contactBtn = document.getElementById('contact-btn');
const loader = document.getElementById('loader');
const toast = document.getElementById('toast');
const uploadBtn = document.getElementById('upload-btn');
const avatarPreview = document.getElementById('avatar-preview');
const avatarUploadInput = document.getElementById('avatar-upload-input');
const logoutAllBtn = document.getElementById('logout-all-btn');
const deactivateBtn = document.getElementById('deactivate-btn');
const deleteBtn = document.getElementById('delete-btn');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordHint = document.querySelector('.password-hint');
const passwordMatch = document.querySelector('.password-match');
const connectBtns = document.querySelectorAll('.connect-btn');
const disconnectBtns = document.querySelectorAll('.disconnect-btn');
const forms = document.querySelectorAll('form');

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
});

// Settings tabs functionality
settingsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        settingsTabs.forEach(t => t.classList.remove('active'));
        settingsContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Show loader function
function showLoader() {
    loader.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Hide loader function
function hideLoader() {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show toast notification
function showToast(message, type = 'success', duration = 3000) {
    toast.textContent = message;
    toast.className = 'toast';
    toast.classList.add(type, 'show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Avatar upload functionality
uploadBtn.addEventListener('click', () => {
    avatarUploadInput.click();
});

avatarUploadInput.addEventListener('change', function(e) {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            showLoader();
            // Simulate upload delay
            setTimeout(() => {
                avatarPreview.src = e.target.result;
                hideLoader();
                showToast('Profile picture updated successfully!', 'success');
            }, 1500);
        }
        
        reader.readAsDataURL(this.files[0]);
    }
});

// Password validation
newPasswordInput.addEventListener('input', function() {
    if (this.value.length > 0) {
        passwordHint.style.display = 'block';
        
        if (this.value.length < 8) {
            this.style.borderColor = '#f72585';
            passwordHint.style.color = '#f72585';
        } else {
            this.style.borderColor = '#4cc9f0';
            passwordHint.style.color = '#4cc9f0';
        }
    } else {
        passwordHint.style.display = 'none';
        this.style.borderColor = '#333';
    }
    
    checkPasswordMatch();
});

confirmPasswordInput.addEventListener('input', checkPasswordMatch);

function checkPasswordMatch() {
    if (newPasswordInput.value && confirmPasswordInput.value) {
        passwordMatch.style.display = 'block';
        
        if (newPasswordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.style.borderColor = '#f72585';
            passwordMatch.style.color = '#f72585';
            passwordMatch.textContent = 'Passwords do not match';
        } else {
            confirmPasswordInput.style.borderColor = '#4cc9f0';
            passwordMatch.style.color = '#4cc9f0';
            passwordMatch.textContent = 'Passwords match';
        }
    } else {
        passwordMatch.style.display = 'none';
        confirmPasswordInput.style.borderColor = '#333';
    }
}

// Account connection buttons
connectBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const account = this.getAttribute('data-account');
        showLoader();
        
        // Simulate connection delay
        setTimeout(() => {
            const statusElement = this.closest('.account-item').querySelector('.account-status');
            statusElement.textContent = 'Connected';
            statusElement.classList.remove('disconnected');
            this.textContent = 'Disconnect';
            this.classList.remove('connect-btn');
            this.classList.add('disconnect-btn');
            hideLoader();
            showToast(`${account.charAt(0).toUpperCase() + account.slice(1)} account connected successfully!`, 'success');
        }, 1500);
    });
});

disconnectBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const account = this.getAttribute('data-account');
        showLoader();
        
        // Simulate disconnection delay
        setTimeout(() => {
            const statusElement = this.closest('.account-item').querySelector('.account-status');
            statusElement.textContent = 'Not Connected';
            statusElement.classList.add('disconnected');
            this.textContent = 'Connect';
            this.classList.remove('disconnect-btn');
            this.classList.add('connect-btn');
            hideLoader();
            showToast(`${account.charAt(0).toUpperCase() + account.slice(1)} account disconnected`, 'success');
        }, 1500);
    });
});

// Danger zone buttons
logoutAllBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to log out of all devices?')) {
        showLoader();
        setTimeout(() => {
            hideLoader();
            showToast('Logged out of all devices successfully', 'success');
        }, 2000);
    }
});

deactivateBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to deactivate your account? You can reactivate it later by logging in.')) {
        showLoader();
        setTimeout(() => {
            hideLoader();
            showToast('Account deactivated successfully', 'success');
            // In a real app, this would redirect to login page
        }, 2000);
    }
});

deleteBtn.addEventListener('click', function() {
    if (confirm('WARNING: This will permanently delete your account and all associated data. This action cannot be undone. Are you sure?')) {
        if (prompt('Type "DELETE" to confirm permanent account deletion:') === 'DELETE') {
            showLoader();
            setTimeout(() => {
                hideLoader();
                showToast('Account permanently deleted', 'success');
                // In a real app, this would redirect to home page
            }, 2000);
        } else {
            showToast('Account deletion cancelled', 'error');
        }
    }
});

// Form submissions
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showLoader();
        
        // Simulate form submission delay
        setTimeout(() => {
            hideLoader();
            showToast('Settings saved successfully!', 'success');
        }, 1500);
    });
});

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    // Simulate loading user data
    setTimeout(() => {
        // Any initialization code can go here
    }, 500);
});