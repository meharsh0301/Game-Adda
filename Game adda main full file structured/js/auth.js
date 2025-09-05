document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const authTitle = document.getElementById('auth-title');
    const authSubtitle = document.getElementById('auth-subtitle');
    const authFooterText = document.getElementById('auth-footer-text');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const twoFactorModal = document.getElementById('two-factor-modal');
    const successModal = document.getElementById('success-modal');
    const closeModalButtons = document.querySelectorAll('.close');
    const loader = document.getElementById('loader');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const verify2faBtn = document.getElementById('verify-2fa-btn');
    const successBtn = document.getElementById('success-btn');

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#4cc9f0" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#4cc9f0", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Password toggle functionality
    function setupPasswordToggle(toggleId, inputId) {
        const toggleBtn = document.getElementById(toggleId);
        const passwordInput = document.getElementById(inputId);
        
        toggleBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
            this.classList.toggle('fa-eye');
        });
    }
    
    // Initialize password toggles
    setupPasswordToggle('toggle-login-password', 'login-password');
    setupPasswordToggle('toggle-signup-password', 'signup-password');
    setupPasswordToggle('toggle-signup-confirm-password', 'signup-confirm-password');
    
    // Switch between login and signup forms
    function showLoginForm() {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        authTitle.textContent = 'Welcome Back!';
        authSubtitle.textContent = 'Login to your account to continue your gaming journey';
        authFooterText.innerHTML = 'Don\'t have an account? <a href="#" id="switch-to-signup">Sign up</a>';
        
        // Update event listener for the new link
        document.getElementById('switch-to-signup').addEventListener('click', (e) => {
            e.preventDefault();
            showSignupForm();
        });
    }
    
    function showSignupForm() {
        loginTab.classList.remove('active');
        signupTab.classList.add('active');
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        authTitle.textContent = 'Create Account';
        authSubtitle.textContent = 'Join our gaming community today';
        authFooterText.innerHTML = 'Already have an account? <a href="#" id="switch-to-login">Login</a>';
        
        // Update event listener for the new link
        document.getElementById('switch-to-login').addEventListener('click', (e) => {
            e.preventDefault();
            showLoginForm();
        });
    }
    
    // Tab click events
    loginTab.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });
    
    signupTab.addEventListener('click', (e) => {
        e.preventDefault();
        showSignupForm();
    });
    
    // Forgot password modal
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(forgotPasswordModal);
    });
    
    // Modal functions
    function showModal(modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    function hideModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Close modals when clicking the X button
    closeModalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                hideModal(modal);
            });
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            hideModal(e.target);
        }
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
    
    // Form validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    function validatePassword(password) {
        // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    }
    
    // Password strength meter
    function checkPasswordStrength(password) {
        let strength = 0;
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[@$!%*?&]/.test(password)
        };
        
        // Update requirements list
        Object.keys(requirements).forEach(key => {
            const element = document.querySelector(`[data-requirement="${key}"]`);
            if (requirements[key]) {
                element.classList.add('valid');
                strength++;
            } else {
                element.classList.remove('valid');
            }
        });
        
        // Update strength meter
        const strengthMeter = document.getElementById('strength-meter');
        const strengthText = document.getElementById('strength-text');
        
        strengthMeter.setAttribute('data-strength', strength);
        
        switch(strength) {
            case 0:
            case 1:
                strengthText.textContent = 'Password strength: Very Weak';
                strengthText.style.color = 'var(--danger)';
                break;
            case 2:
                strengthText.textContent = 'Password strength: Weak';
                strengthText.style.color = 'var(--danger)';
                break;
            case 3:
                strengthText.textContent = 'Password strength: Good';
                strengthText.style.color = 'var(--warning)';
                break;
            case 4:
                strengthText.textContent = 'Password strength: Strong';
                strengthText.style.color = 'var(--success)';
                break;
            case 5:
                strengthText.textContent = 'Password strength: Very Strong';
                strengthText.style.color = 'var(--success)';
                break;
        }
        
        return strength;
    }
    
    // Gamer ID availability check (simulated)
    function checkGamerIdAvailability(gamerId) {
        // Simulate API call with timeout
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate some taken IDs
                const takenIds = ['progamer', 'ninja', 'legend', 'shadow', 'epic'];
                const isAvailable = !takenIds.includes(gamerId.toLowerCase()) && gamerId.length >= 4;
                resolve(isAvailable);
            }, 500);
        });
    }
    
    // Debounce function for input events
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }
    
    // Login form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoader();
        
        // Reset errors
        document.getElementById('login-email-error').style.display = 'none';
        document.getElementById('login-password-error').style.display = 'none';
        
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        
        let isValid = true;
        
        if (!email) {
            document.getElementById('login-email-error').textContent = 'Email or Gamer ID is required';
            document.getElementById('login-email-error').style.display = 'block';
            isValid = false;
        }
        
        if (!password) {
            document.getElementById('login-password-error').textContent = 'Password is required';
            document.getElementById('login-password-error').style.display = 'block';
            isValid = false;
        } else if (password.length < 8) {
            document.getElementById('login-password-error').textContent = 'Password must be at least 8 characters';
            document.getElementById('login-password-error').style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            // Simulate API call
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // In a real app, you would handle the API response here
                // For demo, we'll just show success
                document.getElementById('success-title').textContent = 'Login Successful!';
                document.getElementById('success-message').textContent = 'Welcome back to Game Adda.';
                successBtn.textContent = 'Continue to Dashboard';
                successBtn.onclick = () => {
                    window.location.href = 'dashboard.html';
                };
                
                hideLoader();
                showModal(successModal);
                
                // Store user session if "Remember me" is checked
                if (rememberMe) {
                    localStorage.setItem('gameAddaUser', JSON.stringify({
                        email,
                        name: 'Demo User',
                        gamerId: email.includes('@') ? 'demo_gamer' : email
                    }));
                }
            } catch (error) {
                hideLoader();
                document.getElementById('login-password-error').textContent = 'Invalid credentials. Please try again.';
                document.getElementById('login-password-error').style.display = 'block';
            }
        } else {
            hideLoader();
        }
    });
    
    // Signup form submission
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoader();
        
        // Reset errors
        document.getElementById('signup-name-error').style.display = 'none';
        document.getElementById('signup-gamerid-error').style.display = 'none';
        document.getElementById('signup-email-error').style.display = 'none';
        document.getElementById('signup-password-error').style.display = 'none';
        document.getElementById('signup-confirm-password-error').style.display = 'none';
        document.getElementById('terms-error').style.display = 'none';
        
        const name = document.getElementById('signup-name').value.trim();
        const gamerId = document.getElementById('signup-gamerid').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const acceptTerms = document.getElementById('accept-terms').checked;
        const enable2FA = document.getElementById('enable-2fa').checked;
        
        let isValid = true;
        
        if (!name) {
            document.getElementById('signup-name-error').textContent = 'Full name is required';
            document.getElementById('signup-name-error').style.display = 'block';
            isValid = false;
        }
        
        if (!gamerId) {
            document.getElementById('signup-gamerid-error').textContent = 'Gamer ID is required';
            document.getElementById('signup-gamerid-error').style.display = 'block';
            isValid = false;
        } else if (gamerId.length < 4) {
            document.getElementById('signup-gamerid-error').textContent = 'Gamer ID must be at least 4 characters';
            document.getElementById('signup-gamerid-error').style.display = 'block';
            isValid = false;
        }
        
        if (!email) {
            document.getElementById('signup-email-error').textContent = 'Email is required';
            document.getElementById('signup-email-error').style.display = 'block';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('signup-email-error').textContent = 'Please enter a valid email';
            document.getElementById('signup-email-error').style.display = 'block';
            isValid = false;
        }
        
        if (!password) {
            document.getElementById('signup-password-error').textContent = 'Password is required';
            document.getElementById('signup-password-error').style.display = 'block';
            isValid = false;
        } else if (password.length < 8) {
            document.getElementById('signup-password-error').textContent = 'Password must be at least 8 characters';
            document.getElementById('signup-password-error').style.display = 'block';
            isValid = false;
        } else if (!validatePassword(password)) {
            document.getElementById('signup-password-error').textContent = 'Password must contain uppercase, lowercase, number and special character';
            document.getElementById('signup-password-error').style.display = 'block';
            isValid = false;
        }
        
        if (!confirmPassword) {
            document.getElementById('signup-confirm-password-error').textContent = 'Please confirm your password';
            document.getElementById('signup-confirm-password-error').style.display = 'block';
            isValid = false;
        } else if (password !== confirmPassword) {
            document.getElementById('signup-confirm-password-error').textContent = 'Passwords do not match';
            document.getElementById('signup-confirm-password-error').style.display = 'block';
            isValid = false;
        }
        
        if (!acceptTerms) {
            document.getElementById('terms-error').textContent = 'You must accept the terms and conditions';
            document.getElementById('terms-error').style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show 2FA setup if enabled
                if (enable2FA) {
                    hideLoader();
                    
                    // Generate QR code for 2FA
                    document.getElementById('qrcode').innerHTML = '';
                    new QRCode(document.getElementById('qrcode'), {
                        text: 'otpauth://totp/GameAdda:' + email + '?secret=JBSWY3DPEHPK3PXP&issuer=GameAdda',
                        width: 150,
                        height: 150,
                        colorDark : "#000000",
                        colorLight : "#ffffff",
                        correctLevel : QRCode.CorrectLevel.H
                    });
                    
                    showModal(twoFactorModal);
                } else {
                    showSuccessModal();
                }
                
                // Store user data
                localStorage.setItem('gameAddaUser', JSON.stringify({
                    name,
                    email,
                    gamerId,
                    has2FA: enable2FA
                }));
            } catch (error) {
                hideLoader();
                alert('An error occurred during registration. Please try again.');
            }
        } else {
            hideLoader();
        }
    });
    
    function showSuccessModal() {
        document.getElementById('success-title').textContent = 'Account Created!';
        document.getElementById('success-message').textContent = 'Welcome to Game Adda. Start your gaming journey now!';
        successBtn.textContent = 'Continue to Dashboard';
        successBtn.onclick = () => {
            window.location.href = 'dashboard.html';
        };
        
        hideModal(twoFactorModal);
        showModal(successModal);
    }
    
    // 2FA verification
    verify2faBtn.addEventListener('click', () => {
        const code = document.getElementById('2fa-code').value;
        if (code && code.length === 6) {
            showSuccessModal();
        } else {
            document.getElementById('2fa-error').textContent = 'Please enter a valid 6-digit code';
            document.getElementById('2fa-error').style.display = 'block';
        }
    });
    
    // Forgot password form submission
    document.getElementById('forgot-password-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoader();
        
        const email = document.getElementById('reset-email').value.trim();
        const errorElement = document.getElementById('reset-email-error');
        
        errorElement.style.display = 'none';
        
        if (!email) {
            errorElement.textContent = 'Email is required';
            errorElement.style.display = 'block';
            hideLoader();
            return;
        }
        
        if (!validateEmail(email)) {
            errorElement.textContent = 'Please enter a valid email';
            errorElement.style.display = 'block';
            hideLoader();
            return;
        }
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            hideLoader();
            hideModal(forgotPasswordModal);
            
            document.getElementById('success-title').textContent = 'Check Your Email!';
            document.getElementById('success-message').textContent = 'We\'ve sent a password reset link to your email address.';
            successBtn.textContent = 'Back to Login';
            successBtn.onclick = () => {
                hideModal(successModal);
                showLoginForm();
            };
            
            showModal(successModal);
        } catch (error) {
            hideLoader();
            errorElement.textContent = 'Failed to send reset link. Please try again.';
            errorElement.style.display = 'block';
        }
    });
    
    // Real-time password strength check
    document.getElementById('signup-password').addEventListener('input', debounce(function() {
        const password = this.value;
        checkPasswordStrength(password);
    }, 300));
    
    // Real-time gamer ID availability check
    document.getElementById('signup-gamerid').addEventListener('input', debounce(async function() {
        const gamerId = this.value.trim();
        const availabilityElement = document.getElementById('gamerid-availability');
        
        if (gamerId.length < 4) {
            availabilityElement.style.display = 'none';
            return;
        }
        
        const isAvailable = await checkGamerIdAvailability(gamerId);
        
        if (isAvailable) {
            availabilityElement.textContent = 'Gamer ID is available!';
            availabilityElement.className = 'gamerid-availability available';
        } else {
            availabilityElement.textContent = 'Gamer ID is already taken';
            availabilityElement.className = 'gamerid-availability taken';
        }
    }, 500));
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            document.documentElement.style.setProperty('--darker', '#f5f5f5');
            document.documentElement.style.setProperty('--dark', '#ffffff');
            document.documentElement.style.setProperty('--light', '#333333');
            document.documentElement.style.setProperty('--gray', '#666666');
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            document.documentElement.style.setProperty('--darker', '#0f0f1a');
            document.documentElement.style.setProperty('--dark', '#1a1a2e');
            document.documentElement.style.setProperty('--light', '#ffffff');
            document.documentElement.style.setProperty('--gray', '#cccccc');
        }
    });
    
    // Initialize the page with login form
    showLoginForm();
    
    // Check for redirect from other pages
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'signup') {
        showSignupForm();
    }
});