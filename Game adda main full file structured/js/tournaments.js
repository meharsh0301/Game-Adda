// DOM elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const loader = document.getElementById('loader');
const tournamentsGrid = document.getElementById('tournaments-grid');
const tournamentTabs = document.querySelectorAll('.tournament-tab');
const gameFilter = document.getElementById('game-filter');
const regionFilter = document.getElementById('region-filter');
const createTournamentBtn = document.getElementById('create-tournament-btn');
const createTournamentModal = document.getElementById('create-tournament-modal');
const modalCloseBtn = document.querySelector('.modal-close');
const cancelTournamentBtn = document.getElementById('cancel-tournament');
const tournamentForm = document.getElementById('tournament-form');

// Sample tournament data
const tournaments = [
    {
        id: 1,
        title: "Valorant Weekly Cup",
        game: "valorant",
        gameName: "Valorant",
        date: "2025-06-25T19:00",
        region: "india",
        regionName: "India",
        teams: { registered: 32, max: 64 },
        prize: 25000,
        description: "Weekly competitive tournament for Valorant players of all skill levels. Single elimination bracket.",
        status: "upcoming",
        banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 2,
        title: "CS:GO Championship",
        game: "csgo",
        gameName: "CS:GO",
        date: "2025-06-20T15:00",
        region: "eu",
        regionName: "Europe",
        teams: { registered: 16, max: 16 },
        prize: 50000,
        description: "Premier CS:GO tournament with professional teams competing for the championship title.",
        status: "live",
        banner: "https://images.unsplash.com/photo-1551103782-9ab6cad0fb88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 3,
        title: "Dota 2 Summer Showdown",
        game: "dota2",
        gameName: "Dota 2",
        date: "2025-07-10T12:00",
        region: "asia",
        regionName: "Asia",
        teams: { registered: 8, max: 16 },
        prize: 75000,
        description: "Seasonal Dota 2 tournament featuring top teams from the region.",
        status: "upcoming",
        banner: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 4,
        title: "League of Legends Clash",
        game: "lol",
        gameName: "League of Legends",
        date: "2025-06-18T18:00",
        region: "na",
        regionName: "North America",
        teams: { registered: 24, max: 32 },
        prize: 30000,
        description: "Monthly LoL tournament with team-based competition.",
        status: "upcoming",
        banner: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    },
    {
        id: 5,
        title: "Fortnite Battle Royale",
        game: "fortnite",
        gameName: "Fortnite",
        date: "2025-06-15T14:00",
        region: "india",
        regionName: "India",
        teams: { registered: 48, max: 100 },
        prize: 100000,
        description: "Massive Fortnite tournament with solo and duo options available.",
        status: "completed",
        banner: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 6,
        title: "PUBG Mobile Championship",
        game: "pubg",
        gameName: "PUBG Mobile",
        date: "2025-06-22T16:00",
        region: "asia",
        regionName: "Asia",
        teams: { registered: 20, max: 25 },
        prize: 80000,
        description: "Regional PUBG Mobile championship with qualifying rounds.",
        status: "live",
        banner: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
];

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
});

// Show loading animation
function showLoader() {
    loader.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Hide loading animation
function hideLoader() {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Format date to readable string
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Generate tournament cards
function generateTournamentCards(tournamentsToDisplay) {
    tournamentsGrid.innerHTML = '';
    
    if (tournamentsToDisplay.length === 0) {
        tournamentsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-trophy"></i>
                <h3>No Tournaments Found</h3>
                <p>Try adjusting your filters or check back later</p>
                <button class="btn" id="reset-filters">Reset Filters</button>
            </div>
        `;
        
        document.getElementById('reset-filters').addEventListener('click', resetFilters);
        return;
    }
    
    tournamentsToDisplay.forEach(tournament => {
        const tournamentCard = document.createElement('div');
        tournamentCard.className = 'tournament-card';
        
        let badge = '';
        let actionBtn = '';
        
        if (tournament.status === 'upcoming') {
            badge = '<span class="tournament-badge badge-upcoming">Upcoming</span>';
            actionBtn = '<button class="action-btn register-btn">Register Now</button>';
        } else if (tournament.status === 'live') {
            badge = '<span class="tournament-badge badge-live">Live Now</span>';
            actionBtn = '<button class="action-btn watch-btn">Watch Live</button>';
        } else {
            badge = '<span class="tournament-badge badge-completed">Completed</span>';
            actionBtn = '<button class="action-btn register-btn" disabled>Completed</button>';
        }
        
        tournamentCard.innerHTML = `
            <img src="${tournament.banner}" alt="${tournament.title}" class="tournament-banner">
            ${badge}
            <div class="tournament-content">
                <h3 class="tournament-title">${tournament.title}</h3>
                <div class="tournament-game">
                    <img src="${tournament.banner}" alt="${tournament.gameName}">
                    <span>${tournament.gameName}</span>
                </div>
                <div class="tournament-meta">
                    <div class="tournament-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(tournament.date)}</span>
                    </div>
                    <div class="tournament-meta-item">
                        <i class="fas fa-users"></i>
                        <span>${tournament.teams.registered}/${tournament.teams.max} teams</span>
                    </div>
                    <div class="tournament-meta-item">
                        <i class="fas fa-globe"></i>
                        <span>${tournament.regionName}</span>
                    </div>
                </div>
                ${tournament.prize ? `
                <div class="tournament-prize">
                    <div class="prize-amount">₹${tournament.prize.toLocaleString()}</div>
                    <div class="prize-label">Prize Pool</div>
                </div>
                ` : ''}
                <div class="tournament-actions">
                    ${actionBtn}
                    <button class="action-btn details-btn">View Details</button>
                </div>
            </div>
        `;
        
        tournamentsGrid.appendChild(tournamentCard);
    });
}

// Filter tournaments based on selected filters
function filterTournaments() {
    const selectedTab = document.querySelector('.tournament-tab.active').dataset.tab;
    const selectedGame = gameFilter.value;
    const selectedRegion = regionFilter.value;
    
    let filteredTournaments = [...tournaments];
    
    // Filter by tab
    if (selectedTab !== 'all') {
        filteredTournaments = filteredTournaments.filter(t => t.status === selectedTab);
    }
    
    // Filter by game
    if (selectedGame) {
        filteredTournaments = filteredTournaments.filter(t => t.game === selectedGame);
    }
    
    // Filter by region
    if (selectedRegion) {
        filteredTournaments = filteredTournaments.filter(t => t.region === selectedRegion);
    }
    
    // Filter by "My Tournaments" (simulated)
    if (selectedTab === 'my') {
        filteredTournaments = filteredTournaments.filter(t => [1, 3, 5].includes(t.id));
    }
    
    generateTournamentCards(filteredTournaments);
}

// Reset all filters
function resetFilters() {
    gameFilter.value = '';
    regionFilter.value = '';
    document.querySelector('.tournament-tab[data-tab="all"]').click();
    filterTournaments();
}

// Tournament tab functionality
tournamentTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tournamentTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Filter tournaments
        filterTournaments();
    });
});

// Filter change handlers
gameFilter.addEventListener('change', filterTournaments);
regionFilter.addEventListener('change', filterTournaments);

// Modal functionality
createTournamentBtn.addEventListener('click', () => {
    createTournamentModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

modalCloseBtn.addEventListener('click', () => {
    createTournamentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

cancelTournamentBtn.addEventListener('click', () => {
    createTournamentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === createTournamentModal) {
        createTournamentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Tournament form submission
tournamentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoader();
    
    // Simulate form processing
    setTimeout(() => {
        // Get form values
        const formData = {
            name: document.getElementById('tournament-name').value,
            game: document.getElementById('tournament-game').value,
            date: document.getElementById('tournament-date').value,
            region: document.getElementById('tournament-region').value,
            prize: document.getElementById('tournament-prize').value,
            teams: document.getElementById('tournament-teams').value,
            desc: document.getElementById('tournament-desc').value
        };
        
        // Reset form
        tournamentForm.reset();
        
        // Close modal
        createTournamentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Show success message
        alert('Tournament created successfully! It will be reviewed by our team.');
        
        hideLoader();
    }, 1500);
});

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    showLoader();
    
    // Simulate loading tournaments
    setTimeout(() => {
        generateTournamentCards(tournaments);
        hideLoader();
    }, 800);
});