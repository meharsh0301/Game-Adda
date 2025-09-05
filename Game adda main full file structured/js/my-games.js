// DOM elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const contactBtn = document.getElementById('contact-btn');
const gameSearchInput = document.getElementById('game-search');
const searchBtn = document.getElementById('search-btn');
const gameFilter = document.getElementById('game-filter');
const gamesGrid = document.getElementById('games-grid');
const loader = document.getElementById('loader');
const gameModal = document.getElementById('game-modal');
const modalCloseBtn = document.querySelector('.close');
const modalCloseBtn2 = document.getElementById('modal-close-btn');

// Game data with additional details
const myGames = [
    { 
        id: 1,
        name: "Valorant", 
        description: "Tactical shooter game with unique agent abilities and precise gunplay mechanics. Engage in 5v5 matches where teamwork and strategy are key to victory.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        hoursPlayed: 15,
        lastPlayed: "2 days ago",
        category: "fps",
        isFavorite: true,
        lastPlayedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    },
    { 
        id: 2,
        name: "Fortnite", 
        description: "Popular battle royale game with building mechanics and regular content updates. Join 100 players in a fight to be the last one standing.",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        hoursPlayed: 8,
        lastPlayed: "1 week ago",
        category: "battle-royale",
        isFavorite: false,
        lastPlayedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
    },
    { 
        id: 3,
        name: "CS:GO", 
        description: "Classic tactical first-person shooter with competitive matchmaking and esports scene. Features bomb defusal and hostage rescue game modes.",
        image: "https://images.unsplash.com/photo-1551103782-9ab6cad0fb88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        hoursPlayed: 32,
        lastPlayed: "Yesterday",
        category: "fps",
        isFavorite: true,
        lastPlayedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
    },
    { 
        id: 4,
        name: "Dota 2", 
        description: "Complex MOBA with deep strategy elements and a steep learning curve. Control powerful heroes and destroy the enemy Ancient to win.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        hoursPlayed: 45,
        lastPlayed: "3 days ago",
        category: "moba",
        isFavorite: false,
        lastPlayedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
    },
    { 
        id: 5,
        name: "League of Legends", 
        description: "Popular MOBA with diverse champions and regular updates. Work with your team to destroy the enemy Nexus across various maps and modes.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        hoursPlayed: 28,
        lastPlayed: "5 days ago",
        category: "moba",
        isFavorite: true,
        lastPlayedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
    },
    { 
        id: 6,
        name: "Apex Legends", 
        description: "Fast-paced battle royale with unique character abilities and team play. Features 60-player matches with innovative ping communication system.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        hoursPlayed: 12,
        lastPlayed: "1 day ago",
        category: "battle-royale",
        isFavorite: false,
        lastPlayedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
    },
    { 
        id: 7,
        name: "Call of Duty: Warzone", 
        description: "Free-to-play battle royale set in the Call of Duty universe. Features 150-player matches with loadout customization and buy stations.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        hoursPlayed: 18,
        lastPlayed: "2 weeks ago",
        category: "fps",
        isFavorite: false,
        lastPlayedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) // 2 weeks ago
    },
    { 
        id: 8,
        name: "Overwatch 2", 
        description: "Team-based hero shooter with diverse characters and abilities. Features 5v5 matches with objective-based game modes and regular updates.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        hoursPlayed: 22,
        lastPlayed: "4 days ago",
        category: "fps",
        isFavorite: true,
        lastPlayedDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000) // 4 days ago
    }
];

// Show/hide loading animation
function showLoader() {
    loader.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideLoader() {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Generate game cards
function generateGameCards(games = myGames) {
    gamesGrid.innerHTML = '';
    
    if (games.length === 0) {
        gamesGrid.innerHTML = `
            <div class="no-games">
                <i class="fas fa-gamepad"></i>
                <h3>No Games Found</h3>
                <p>Try different search terms or filters to find your games</p>
                <button class="btn" id="reset-filters-btn">Reset Filters</button>
            </div>
        `;
        
        document.getElementById('reset-filters-btn').addEventListener('click', () => {
            gameSearchInput.value = '';
            gameFilter.value = 'all';
            generateGameCards(myGames);
        });
        return;
    }
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.dataset.id = game.id;
        gameCard.dataset.category = game.category;
        gameCard.dataset.lastPlayed = game.lastPlayedDate.getTime();
        gameCard.dataset.isFavorite = game.isFavorite;
        
        gameCard.innerHTML = `
            <div class="game-image-container">
                <img src="${game.image}" alt="${game.name}" class="game-image">
                ${game.isFavorite ? '<i class="fas fa-star favorite-icon"></i>' : '<i class="fas fa-star favorite-icon"></i>'}
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.name}</h3>
                <span class="game-category ${game.category}">${getCategoryName(game.category)}</span>
                <div class="game-stats">
                    <span>${game.hoursPlayed} hrs played</span>
                    <span>Last played: ${game.lastPlayed}</span>
                </div>
                <p class="game-desc">${game.description}</p>
                <div class="game-actions">
                    <button class="play-btn" data-id="${game.id}">Play Now</button>
                    <button class="details-btn" data-id="${game.id}">Details</button>
                </div>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
    
    // Add event listeners to all buttons
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const gameId = parseInt(e.target.dataset.id);
            playGame(gameId);
        });
    });
    
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const gameId = parseInt(e.target.dataset.id);
            showGameDetails(gameId);
        });
    });
}

// Get category display name
function getCategoryName(category) {
    const names = {
        'fps': 'FPS',
        'battle-royale': 'Battle Royale',
        'moba': 'MOBA',
        'strategy': 'Strategy',
        'rpg': 'RPG'
    };
    return names[category] || 'Other';
}

// Play game function
function playGame(gameId) {
    showLoader();
    const game = myGames.find(g => g.id === gameId);
    
    // Simulate game loading
    setTimeout(() => {
        hideLoader();
        alert(`Launching ${game.name}...\n\nThis would normally redirect to the game or launch it.`);
        // In a real app, this would redirect to the game or launch it
        
        // Update last played time
        game.lastPlayed = "Just now";
        game.lastPlayedDate = new Date();
        filterGames();
    }, 1500);
}

// Show game details modal
function showGameDetails(gameId) {
    const game = myGames.find(g => g.id === gameId);
    
    document.getElementById('modal-game-title').textContent = game.name;
    document.getElementById('modal-game-hours').textContent = `${game.hoursPlayed} hrs played`;
    document.getElementById('modal-game-last-played').textContent = `Last played: ${game.lastPlayed}`;
    document.getElementById('modal-game-desc').textContent = game.description;
    document.getElementById('modal-game-image').src = game.image;
    document.getElementById('modal-game-image').alt = game.name;
    
    const categoryElement = document.getElementById('modal-game-category');
    categoryElement.textContent = getCategoryName(game.category);
    categoryElement.className = `game-category ${game.category}`;
    
    document.getElementById('modal-play-btn').dataset.id = game.id;
    
    gameModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    gameModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Filter games based on search and filter
function filterGames() {
    const searchTerm = gameSearchInput.value.toLowerCase();
    const filterValue = gameFilter.value;
    
    let filteredGames = myGames.filter(game => 
        game.name.toLowerCase().includes(searchTerm) || 
        game.description.toLowerCase().includes(searchTerm)
    );
    
    if (filterValue !== 'all') {
        if (filterValue === 'recent') {
            // Show games played in last 7 days
            const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
            filteredGames = filteredGames.filter(game => 
                game.lastPlayedDate > oneWeekAgo
            ).sort((a, b) => b.lastPlayedDate - a.lastPlayedDate);
        } else if (filterValue === 'favorites') {
            filteredGames = filteredGames.filter(game => game.isFavorite);
        } else {
            filteredGames = filteredGames.filter(game => game.category === filterValue);
        }
    }
    
    generateGameCards(filteredGames);
}

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    });
});

// Contact button
contactBtn.addEventListener('click', () => {
    alert('Contact form would open here. This could be a modal or redirect to a contact page.');
});

// Search and filter event listeners
gameSearchInput.addEventListener('input', filterGames);
gameFilter.addEventListener('change', filterGames);
searchBtn.addEventListener('click', filterGames);

// Modal event listeners
modalCloseBtn.addEventListener('click', closeModal);
modalCloseBtn2.addEventListener('click', closeModal);
document.getElementById('modal-play-btn').addEventListener('click', (e) => {
    const gameId = parseInt(e.target.dataset.id);
    closeModal();
    playGame(gameId);
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === gameModal) {
        closeModal();
    }
});

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    showLoader();
    
    // Simulate loading games from server
    setTimeout(() => {
        generateGameCards();
        hideLoader();
    }, 1000);
});