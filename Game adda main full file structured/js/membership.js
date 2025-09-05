document.addEventListener('DOMContentLoaded', function() {
    // Loader functionality
    const loader = document.getElementById('loader');
    
    function showLoader(text = 'Loading...') {
        loader.querySelector('.loader-text').textContent = text;
        loader.classList.add('active');
    }
    
    function hideLoader() {
        loader.classList.remove('active');
    }
    
    // Simulate initial page loading
    showLoader('Loading membership data...');
    setTimeout(() => {
        hideLoader();
    }, 1500);

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Form navigation
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const form = document.getElementById('membership-form');
    const successScreen = document.querySelector('.form-success');
    
    let currentStep = 0;
    
    // Initialize first step
    showStep(currentStep);
    
    // Next button click handler
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                showLoader('Processing your information...');
                setTimeout(() => {
                    currentStep++;
                    showStep(currentStep);
                    updateProgress();
                    hideLoader();
                }, 800);
            }
        });
    });
    
    // Previous button click handler
    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showLoader('Loading previous step...');
            setTimeout(() => {
                currentStep--;
                showStep(currentStep);
                updateProgress();
                hideLoader();
            }, 500);
        });
    });
    
    // Plan selection
    const planOptions = document.querySelectorAll('.plan-option');
    const planInput = document.getElementById('plan');
    const summaryPlan = document.getElementById('summary-plan');
    const summaryPrice = document.getElementById('summary-price');
    const successPlan = document.getElementById('success-plan');
    
    planOptions.forEach(option => {
        option.addEventListener('click', () => {
            showLoader('Updating plan selection...');
            setTimeout(() => {
                planOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                planInput.value = option.dataset.value;
                
                // Update summary
                const planName = option.querySelector('h4').textContent;
                const planPrice = option.querySelector('p').textContent;
                summaryPlan.textContent = planName;
                summaryPrice.textContent = planPrice;
                successPlan.textContent = planName;
                hideLoader();
            }, 300);
        });
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            showLoader('Processing your membership...');
            
            // Simulate form processing
            setTimeout(() => {
                // Generate random membership ID
                const membershipId = 'GA2025-' + Math.floor(1000 + Math.random() * 9000);
                document.getElementById('membership-id').textContent = membershipId;
                document.getElementById('modal-membership-id').textContent = membershipId;
                
                // Get selected plan for modal
                const selectedPlan = document.querySelector('.plan-option.selected h4').textContent;
                document.getElementById('modal-plan').textContent = selectedPlan;
                
                // Hide form and show success screen
                form.style.display = 'none';
                successScreen.style.display = 'block';
                
                // Show success modal
                showSuccessModal();
                hideLoader();
                
                // Reset form after submission
                setTimeout(() => {
                    form.reset();
                    currentStep = 0;
                    showStep(currentStep);
                    updateProgress();
                    form.style.display = 'block';
                    successScreen.style.display = 'none';
                    planOptions.forEach(opt => opt.classList.remove('selected'));
                    document.getElementById('selected-games').innerHTML = '';
                    selectedGames = [];
                }, 5000);
            }, 2000);
        }
    });
    
    // Show current step
    function showStep(step) {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle('active', index === step);
        });
    }
    
    // Update progress indicators
    function updateProgress() {
        progressSteps.forEach((step, index) => {
            if (index < currentStep + 1) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
    
    // Validate current step
    function validateStep(step) {
        let isValid = true;
        const currentFormStep = formSteps[step];
        const inputs = currentFormStep.querySelectorAll('input[required], select[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                const errorMsg = input.parentElement.querySelector('.error-message');
                errorMsg.textContent = 'This field is required';
                errorMsg.style.display = 'block';
                input.style.borderColor = '#f72585';
            } else {
                const errorMsg = input.parentElement.querySelector('.error-message');
                errorMsg.style.display = 'none';
                input.style.borderColor = '#333';
            }
        });
        
        // Additional validation for email
        const emailInput = currentFormStep.querySelector('input[type="email"]');
        if (emailInput && !isValidEmail(emailInput.value)) {
            isValid = false;
            const errorMsg = emailInput.parentElement.querySelector('.error-message');
            errorMsg.textContent = 'Please enter a valid email address';
            errorMsg.style.display = 'block';
            emailInput.style.borderColor = '#f72585';
        }
        
        // Validate terms checkbox
        if (step === 2) {
            const termsCheckbox = currentFormStep.querySelector('input[type="checkbox"]');
            if (termsCheckbox && !termsCheckbox.checked) {
                isValid = false;
                const errorMsg = termsCheckbox.parentElement.querySelector('.error-message');
                errorMsg.textContent = 'You must agree to the terms';
                errorMsg.style.display = 'block';
            }
        }
        
        return isValid;
    }
    
    // Email validation
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    // Modal functionality
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const successModal = document.getElementById('success-modal');
    const closeBtns = document.querySelectorAll('.close');
    
    contactBtn.addEventListener('click', () => {
        contactModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    function showSuccessModal() {
        successModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            contactModal.style.display = 'none';
            successModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === contactModal || e.target === successModal) {
            contactModal.style.display = 'none';
            successModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showLoader('Sending your message...');
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            e.target.reset();
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            hideLoader();
        }, 1500);
    });
    
    // Enhanced game selection functionality
    const games = [
        "Valorant", "Fortnite", "CS:GO", "Dota 2", "League of Legends",
        "PUBG", "Call of Duty", "FIFA", "Overwatch", "Apex Legends",
        "Rainbow Six Siege", "Minecraft", "Rocket League", "Genshin Impact",
        "World of Warcraft", "Destiny 2", "Hearthstone", "Team Fortress 2",
        "Counter-Strike 2", "GTA V", "Red Dead Redemption 2", "Cyberpunk 2077",
        "The Witcher 3", "Elden Ring", "Dark Souls", "Sekiro", "Stardew Valley"
    ];

    const gameSearchInput = document.getElementById('game-search');
    const gameDropdown = document.getElementById('game-dropdown');
    const favGamesInput = document.getElementById('fav-games');
    const selectedGamesContainer = document.getElementById('selected-games');
    let selectedGames = [];

    // Populate dropdown with game options
    function populateDropdown(filter = '') {
        showLoader('Searching games...');
        setTimeout(() => {
            gameDropdown.innerHTML = '';
            const filteredGames = games.filter(game => 
                game.toLowerCase().includes(filter.toLowerCase())
            );
    
            if (filteredGames.length === 0) {
                const noResults = document.createElement('div');
                noResults.className = 'game-option';
                noResults.textContent = 'No games found';
                gameDropdown.appendChild(noResults);
            } else {
                filteredGames.forEach(game => {
                    // Skip if already selected
                    if (selectedGames.includes(game)) return;
                    
                    const option = document.createElement('div');
                    option.className = 'game-option';
                    option.textContent = game;
                    option.addEventListener('click', () => {
                        selectGame(game);
                        gameSearchInput.value = '';
                        gameDropdown.classList.remove('show');
                    });
                    gameDropdown.appendChild(option);
                });
            }
            hideLoader();
        }, 300);
    }

    // Select a game
    function selectGame(game) {
        if (!selectedGames.includes(game)) {
            selectedGames.push(game);
            updateSelectedGames();
            updateHiddenInput();
        }
    }

    // Remove a selected game
    function removeGame(game) {
        selectedGames = selectedGames.filter(g => g !== game);
        updateSelectedGames();
        updateHiddenInput();
    }

    // Update the selected games display
    function updateSelectedGames() {
        selectedGamesContainer.innerHTML = '';
        selectedGames.forEach(game => {
            const tag = document.createElement('div');
            tag.className = 'selected-game';
            tag.innerHTML = `
                ${game}
                <span class="remove-game" data-game="${game}">&times;</span>
            `;
            selectedGamesContainer.appendChild(tag);
        });

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-game').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeGame(btn.dataset.game);
            });
        });
    }

    // Update the hidden input value
    function updateHiddenInput() {
        favGamesInput.value = JSON.stringify(selectedGames);
    }

    // Event listeners for game selection
    gameSearchInput.addEventListener('focus', () => {
        if (games.length > 0) {
            populateDropdown();
            gameDropdown.classList.add('show');
        }
    });

    gameSearchInput.addEventListener('input', (e) => {
        populateDropdown(e.target.value);
        gameDropdown.classList.add('show');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.game-selection-wrapper')) {
            gameDropdown.classList.remove('show');
        }
    });

    // Initialize with any existing values
    if (favGamesInput.value) {
        try {
            selectedGames = JSON.parse(favGamesInput.value);
            updateSelectedGames();
        } catch (e) {
            console.error('Error parsing favorite games:', e);
        }
    }

    // Initial population
    populateDropdown();
});