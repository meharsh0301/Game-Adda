// Enhanced activity data array with 28 activities (8 original + 20 new)
const allActivities = [
    {
        id: 1,
        name: "BGMI Tournament",
        description: "Weekly BGMI tournament with exciting prizes. Solo, Duo and Squad matches available.",
        image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "tournament",
        type: "Online",
        participants: "100+ Players",
        duration: "3 Hours",
        difficulty: "Competitive",
        price: "₹200 entry fee",
        requirements: "BGMI installed, Level 20+ account",
        rules: "No hacks or cheats. Fair play only."
    },
    {
        id: 2,
        name: "Valorant Workshop",
        description: "Learn advanced Valorant strategies from professional players. Improve your aim and game sense.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "workshop",
        type: "In-person",
        participants: "20 Players",
        duration: "2 Hours",
        difficulty: "Intermediate",
        price: "Free",
        requirements: "Valorant account",
        rules: "Bring your own device"
    },
    {
        id: 3,
        name: "GTA V Casual Play",
        description: "Casual GTA V sessions with fun activities like races, heists and free roam events.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "casual",
        type: "Online",
        participants: "30 Players",
        duration: "Flexible",
        difficulty: "Casual",
        price: "Free",
        requirements: "GTA V Online account",
        rules: "No griefing, friendly play"
    },
    {
        id: 4,
        name: "Call of Duty Tournament",
        description: "Monthly Call of Duty: Warzone tournament with cash prizes for top teams.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "tournament",
        type: "Online",
        participants: "50 Teams",
        duration: "4 Hours",
        difficulty: "Competitive",
        price: "₹500 per team",
        requirements: "Warzone installed, team of 4",
        rules: "Standard tournament rules apply"
    },
    {
        id: 5,
        name: "Game Development Workshop",
        description: "Learn the basics of game development using Unity from industry experts.",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "workshop",
        type: "In-person",
        participants: "15 Students",
        duration: "3 Days",
        difficulty: "Beginner",
        price: "₹2,500",
        requirements: "Laptop with Unity installed",
        rules: "No prior experience needed"
    },
    {
        id: 6,
        name: "Fortnite Fun Night",
        description: "Casual Fortnite play session with fun custom games and challenges.",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "casual",
        type: "Online",
        participants: "40 Players",
        duration: "2 Hours",
        difficulty: "Casual",
        price: "Free",
        requirements: "Fortnite account",
        rules: "Just for fun, no try-hards"
    },
    {
        id: 7,
        name: "Tekken 7 Tournament",
        description: "Monthly Tekken 7 tournament with bracket system. All skill levels welcome.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "tournament",
        type: "In-person",
        participants: "32 Players",
        duration: "5 Hours",
        difficulty: "All Levels",
        price: "₹300 entry fee",
        requirements: "Basic knowledge of Tekken",
        rules: "Double elimination bracket"
    },
    {
        id: 8,
        name: "Streaming Basics Workshop",
        description: "Learn how to start streaming your gameplay with professional setups.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "workshop",
        type: "Hybrid",
        participants: "25 Students",
        duration: "3 Hours",
        difficulty: "Beginner",
        price: "₹1,000",
        requirements: "Laptop and gaming setup",
        rules: "Bring your own equipment"
    },
    // 20 new activities
    {
        id: 9,
        name: "FIFA 23 League",
        description: "Season-long FIFA 23 league with weekly matches and championship playoffs.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "tournament",
        type: "Online",
        participants: "64 Players",
        duration: "8 Weeks",
        difficulty: "Competitive",
        price: "₹500 season fee",
        requirements: "FIFA 23 with online access",
        rules: "Home and away matches weekly"
    },
    {
        id: 10,
        name: "Minecraft Build Contest",
        description: "Creative building competition in Minecraft with themed challenges.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c4b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "casual",
        type: "Online",
        participants: "Unlimited",
        duration: "1 Week",
        difficulty: "Casual",
        price: "Free",
        requirements: "Minecraft Java Edition",
        rules: "No mods, vanilla only"
    },
    {
        id: 11,
        name: "Apex Legends Scrims",
        description: "Competitive scrim matches for Apex Legends teams to practice.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "tournament",
        type: "Online",
        participants: "20 Teams",
        duration: "3 Hours",
        difficulty: "Advanced",
        price: "₹200 per team",
        requirements: "Full squad of 3",
        rules: "Pro league settings"
    },
    {
        id: 12,
        name: "Digital Art for Gamers",
        description: "Workshop teaching digital art techniques for game assets and characters.",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "workshop",
        type: "In-person",
        participants: "12 Students",
        duration: "2 Days",
        difficulty: "Beginner",
        price: "₹3,500",
        requirements: "Tablet with drawing software",
        rules: "No prior art experience needed"
    },
    {
        id: 13,
        name: "Among Us Game Night",
        description: "Fun social deduction game night with Among Us and custom game modes.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "casual",
        type: "Online",
        participants: "15 Players",
        duration: "2 Hours",
        difficulty: "Casual",
        price: "Free",
        requirements: "Among Us mobile/PC",
        rules: "English communication required"
    },
    {
        id: 14,
        name: "Dota 2 Bootcamp",
        description: "Intensive training program for Dota 2 players looking to improve.",
        image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "workshop",
        type: "Online",
        participants: "10 Players",
        duration: "1 Month",
        difficulty: "Advanced",
        price: "₹5,000",
        requirements: "Dota 2, 3000+ MMR",
        rules: "Daily practice required"
    },
    {
        id: 15,
        name: "CS:GO 5v5 Matches",
        description: "Organized CS:GO 5v5 matches with balanced teams and competitive rules.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "tournament",
        type: "Online",
        participants: "10 Players per match",
        duration: "1.5 Hours",
        difficulty: "Intermediate",
        price: "Free",
        requirements: "CS:GO with prime",
        rules: "Standard competitive rules"
    },
    {
        id: 16,
        name: "Speedrunning Workshop",
        description: "Learn speedrunning techniques for popular games from expert runners.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "workshop",
        type: "Hybrid",
        participants: "20 Students",
        duration: "4 Hours",
        difficulty: "Intermediate",
        price: "₹1,200",
        requirements: "Game of your choice",
        rules: "Basic game knowledge needed"
    },
    {
        id: 17,
        name: "Pokémon Go Community Day",
        description: "Local meetup for Pokémon Go players during community day event.",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "casual",
        type: "In-person",
        participants: "Unlimited",
        duration: "3 Hours",
        difficulty: "Casual",
        price: "Free",
        requirements: "Pokémon Go installed",
        rules: "Follow local laws and be safe"
    },
    {
        id: 18,
        name: "Rocket League Tournament",
        description: "3v3 Rocket League tournament with skill-based brackets.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c4b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "tournament",
        type: "Online",
        participants: "32 Teams",
        duration: "6 Hours",
        difficulty: "All Levels",
        price: "₹300 per team",
        requirements: "Rocket League installed",
        rules: "Standard competitive settings"
    },
    {
        id: 19,
        name: "VR Gaming Experience",
        description: "Try out the latest VR games and equipment at our gaming center.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "casual",
        type: "In-person",
        participants: "10 Slots/hour",
        duration: "1 Hour",
        difficulty: "Beginner",
        price: "₹500/hour",
        requirements: "None",
        rules: "Follow safety instructions"
    },
    {
        id: 20,
        name: "League of Legends Clash",
        description: "Organized League of Legends Clash tournament with team registration.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "tournament",
        type: "Online",
        participants: "16 Teams",
        duration: "1 Day",
        difficulty: "Competitive",
        price: "₹400 per team",
        requirements: "Full team of 5",
        rules: "Standard tournament rules"
    },
    {
        id: 21,
        name: "Board Game Night",
        description: "Casual board game night featuring modern tabletop games.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "casual",
        type: "In-person",
        participants: "20 Players",
        duration: "4 Hours",
        difficulty: "Casual",
        price: "₹200 entry",
        requirements: "None",
        rules: "Friendly competition"
    },
    {
        id: 22,
        name: "Overwatch 2 Scrims",
        description: "Practice matches for Overwatch 2 teams with coaching feedback.",
        image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "workshop",
        type: "Online",
        participants: "12 Players",
        duration: "2 Hours",
        difficulty: "Intermediate",
        price: "₹300 per player",
        requirements: "Overwatch 2 account",
        rules: "Constructive feedback only"
    },
    {
        id: 23,
        name: "Retro Gaming Night",
        description: "Play classic retro games on original hardware and consoles.",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "casual",
        type: "In-person",
        participants: "15 Players",
        duration: "3 Hours",
        difficulty: "Casual",
        price: "₹300 entry",
        requirements: "None",
        rules: "Handle equipment carefully"
    },
    {
        id: 24,
        name: "Rainbow Six Siege Tournament",
        description: "5v5 Rainbow Six Siege tournament with ESL rules.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "tournament",
        type: "Online",
        participants: "16 Teams",
        duration: "2 Days",
        difficulty: "Competitive",
        price: "₹500 per team",
        requirements: "Full team of 5",
        rules: "ESL tournament rules"
    },
    {
        id: 25,
        name: "Speed Chess Championship",
        description: "Fast-paced chess tournament with 5+0 time controls.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "tournament",
        type: "Online",
        participants: "32 Players",
        duration: "4 Hours",
        difficulty: "All Levels",
        price: "₹200 entry",
        requirements: "Chess.com account",
        rules: "No cheating or engines"
    },
    {
        id: 26,
        name: "Game Design Workshop",
        description: "Learn game design principles and create your first game concept.",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "workshop",
        type: "Hybrid",
        participants: "20 Students",
        duration: "6 Hours",
        difficulty: "Beginner",
        price: "₹2,000",
        requirements: "Notebook and pen",
        rules: "No prior experience needed"
    },
    {
        id: 27,
        name: "Mario Kart 8 Tournament",
        description: "Fun Mario Kart 8 tournament with item rules and custom tracks.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c4b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "tournament",
        type: "In-person",
        participants: "16 Players",
        duration: "3 Hours",
        difficulty: "Casual",
        price: "₹200 entry",
        requirements: "Basic Mario Kart skills",
        rules: "No blue shell complaints!"
    },
    {
        id: 28,
        name: "Game Testing Session",
        description: "Help test upcoming indie games and provide feedback to developers.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "workshop",
        type: "Hybrid",
        participants: "30 Testers",
        duration: "2 Hours",
        difficulty: "All Levels",
        price: "Free",
        requirements: "PC or mobile device",
        rules: "Constructive feedback only"
    }
];

// Popular games data
const popularGames = [
    { name: "BGMI", icon: "fas fa-mobile-alt" },
    { name: "Valorant", icon: "fas fa-crosshairs" },
    { name: "Call of Duty", icon: "fas fa-gun" },
    { name: "GTA V", icon: "fas fa-car" },
    { name: "Fortnite", icon: "fas fa-umbrella-beach" },
    { name: "Tekken 7", icon: "fas fa-fist-raised" },
    { name: "FIFA 23", icon: "fas fa-futbol" },
    { name: "CS:GO", icon: "fas fa-bomb" },
    { name: "Apex Legends", icon: "fas fa-running" },
    { name: "Dota 2", icon: "fas fa-swords" },
    { name: "League of Legends", icon: "fas fa-chess-rook" },
    { name: "Minecraft", icon: "fas fa-cube" }
];

// DOM elements
const activitiesGrid = document.getElementById('activities-grid');
const gamesGrid = document.getElementById('games-grid');
const activitiesSearchInput = document.getElementById('activities-search');
const searchBtn = document.getElementById('search-btn');
const clearSearchBtn = document.getElementById('clear-search');
const searchSuggestions = document.getElementById('search-suggestions');
const filterBtns = document.querySelectorAll('.filter-btn');
const loader = document.getElementById('loader');
const noResults = document.getElementById('no-results');
const resetSearchBtn = document.getElementById('reset-search-btn');
const stickySearchBar = document.getElementById('sticky-search-bar');
const stickySearchInput = document.getElementById('sticky-search');
const stickySearchBtn = document.getElementById('sticky-search-btn');
const stickyClearSearchBtn = document.getElementById('sticky-clear-search');
const activitiesSection = document.querySelector('.activities-section');
const joinActivityTitle = document.getElementById('join-activity-title');
const joinActivityDescription = document.getElementById('join-activity-description');
const successMessage = document.getElementById('success-message');
const closeSuccessMessageBtn = document.getElementById('close-success-message');

// Function to show loading animation
function showLoader() {
    loader.style.display = 'flex';
}

// Function to hide loading animation
function hideLoader() {
    loader.style.display = 'none';
}

// Function to generate activity cards
function generateActivityCards(activitiesToDisplay = allActivities, isSearchResult = false) {
    showLoader();
    
    setTimeout(() => {
        activitiesGrid.innerHTML = '';
        
        // Remove any existing results count
        const existingCount = document.querySelector('.search-results-count');
        if (existingCount) existingCount.remove();
        
        if (activitiesToDisplay.length === 0) {
            showNoResults();
            hideLoader();
            return;
        }
        
        // Only show results count if it's from a search
        if (isSearchResult) {
            const resultsCount = document.createElement('div');
            resultsCount.className = 'search-results-count';
            resultsCount.textContent = `${activitiesToDisplay.length} activity(s) found`;
            activitiesGrid.parentNode.insertBefore(resultsCount, activitiesGrid);
        }
        
        noResults.style.display = 'none';
        activitiesGrid.style.display = 'grid';
        
        activitiesToDisplay.forEach(activity => {
            const activityCard = document.createElement('div');
            activityCard.className = `activity-card ${activity.category}`;
            activityCard.dataset.id = activity.id;
            
            activityCard.innerHTML = `
                <div class="activity-img" style="background-image: url('${activity.image}')"></div>
                <div class="activity-info">
                    <h3>${activity.name}</h3>
                    <p class="activity-desc">${activity.description}</p>
                    <div class="activity-meta">
                        <span><i class="fas fa-${activity.type === 'Online' ? 'wifi' : 'users'}"></i> ${activity.type}</span>
                        <span><i class="fas fa-users"></i> ${activity.participants}</span>
                        <span><i class="fas fa-clock"></i> ${activity.duration}</span>
                        <span><i class="fas fa-chart-line"></i> ${activity.difficulty}</span>
                        ${activity.price !== 'Free' ? `<span><i class="fas fa-rupee-sign"></i> ${activity.price}</span>` : ''}
                    </div>
                    <div class="activity-actions">
                        <button class="btn join-now-btn" data-id="${activity.id}">Join Now</button>
                        <button class="btn outline-btn details-btn" data-id="${activity.id}">Details</button>
                    </div>
                </div>
            `;
            
            activitiesGrid.appendChild(activityCard);
        });
        
        // Add event listeners to the new buttons
        document.querySelectorAll('.join-now-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const activityId = parseInt(btn.dataset.id);
                showJoinModal(activityId);
            });
        });
        
        document.querySelectorAll('.details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const activityId = parseInt(btn.dataset.id);
                showActivityDetails(activityId);
            });
        });
        
        animateOnScroll();
        hideLoader();
    }, 500);
}

// Function to show activity details modal
function showActivityDetails(activityId) {
    showLoader();
    
    setTimeout(() => {
        const activity = allActivities.find(a => a.id === activityId);
        if (!activity) return;
        
        const modalContent = document.getElementById('activity-modal-content');
        
        // Get icon based on category
        let iconClass = '';
        if (activity.category === 'tournament') iconClass = 'fas fa-trophy';
        else if (activity.category === 'workshop') iconClass = 'fas fa-chalkboard-teacher';
        else iconClass = 'fas fa-gamepad';
        
        modalContent.innerHTML = `
            <div class="activity-details-header">
                <div class="activity-details-icon">
                    <i class="${iconClass}"></i>
                </div>
                <div class="activity-details-title">
                    <h2>${activity.name}</h2>
                    <div class="activity-details-meta">
                        <span><i class="fas fa-${activity.type === 'Online' ? 'wifi' : 'users'}"></i> ${activity.type}</span>
                        <span><i class="fas fa-users"></i> ${activity.participants}</span>
                        <span><i class="fas fa-clock"></i> ${activity.duration}</span>
                        ${activity.price !== 'Free' ? `<span><i class="fas fa-rupee-sign"></i> ${activity.price}</span>` : ''}
                    </div>
                </div>
            </div>
            <div class="activity-details-body">
                <div class="activity-details-image" style="background-image: url('${activity.image}')"></div>
                
                <div class="activity-details-section">
                    <h3>Description</h3>
                    <p>${activity.description}</p>
                </div>
                
                <div class="activity-details-section">
                    <h3>Requirements</h3>
                    <p>${activity.requirements}</p>
                </div>
                
                <div class="activity-details-section">
                    <h3>Rules</h3>
                    <p>${activity.rules}</p>
                </div>
                
                <button class="btn" id="join-from-details" data-id="${activity.id}" style="width: 100%; margin-top: 20px;">
                    Join This Activity
                </button>
            </div>
        `;
        
        document.getElementById('activity-modal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Add event listener to the join button in the modal
        document.getElementById('join-from-details').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('activity-modal').style.display = 'none';
            showJoinModal(activityId);
        });
        
        hideLoader();
    }, 500);
}

// Function to show join modal
function showJoinModal(activityId) {
    showLoader();
    
    setTimeout(() => {
        const activity = allActivities.find(a => a.id === activityId);
        if (!activity) return;
        
        // Set the activity name and description in the form
        joinActivityTitle.textContent = `Join ${activity.name}`;
        joinActivityDescription.textContent = activity.description;
        
        // Reset form and success message
        document.getElementById('join-form').reset();
        document.getElementById('join-form').style.display = 'block';
        successMessage.style.display = 'none';
        
        // Set the activity ID in the form
        const joinForm = document.getElementById('join-form');
        joinForm.dataset.activityId = activityId;
        
        document.getElementById('join-modal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        hideLoader();
    }, 500);
}

// Function to handle join form submission
function handleJoinFormSubmit(e) {
    e.preventDefault();
    showLoader();
    
    setTimeout(() => {
        const activityId = parseInt(e.target.dataset.activityId);
        const activity = allActivities.find(a => a.id === activityId);
        
        const name = document.getElementById('join-name').value;
        const email = document.getElementById('join-email').value;
        const phone = document.getElementById('join-phone').value;
        const gamertag = document.getElementById('join-gamertag').value;
        const team = document.getElementById('join-team').value;
        
        // In a real app, you would send this data to a server
        console.log('Registration submitted:', {
            activityId,
            activityName: activity.name,
            name,
            email,
            phone,
            gamertag,
            team
        });
        
        // Hide form and show success message
        document.getElementById('join-form').style.display = 'none';
        successMessage.style.display = 'block';
        
        hideLoader();
    }, 1000);
}

// Function to show "No Results" message and scroll to it
function showNoResults() {
    activitiesGrid.innerHTML = '';
    noResults.style.display = 'block';
    activitiesGrid.style.display = 'none';
    
    // Remove any existing results count
    const existingCount = document.querySelector('.search-results-count');
    if (existingCount) existingCount.remove();
    
    // Scroll to the no results section
    setTimeout(() => {
        noResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// Function to generate popular games
function generatePopularGames() {
    showLoader();
    
    setTimeout(() => {
        gamesGrid.innerHTML = '';
        
        popularGames.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            
            gameCard.innerHTML = `
                <div class="game-icon">
                    <i class="${game.icon}"></i>
                </div>
                <h3>${game.name}</h3>
                <p>${game.name} tournaments and casual play</p>
            `;
            
            gamesGrid.appendChild(gameCard);
        });
        
        hideLoader();
    }, 500);
}

// Function to filter activities by category
function filterByCategory(category) {
    showLoader();
    
    setTimeout(() => {
        if (category === 'all') {
            generateActivityCards(allActivities, false); // Not a search result
        } else {
            const filteredActivities = allActivities.filter(activity => activity.category === category);
            generateActivityCards(filteredActivities, false); // Not a search result
        }
        
        scrollToResults();
    }, 500);
}

// Function to scroll to results section
function scrollToResults() {
    setTimeout(() => {
        activitiesSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Function to highlight matching text
function highlightMatch(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Function to show search suggestions
function showSuggestions(matchedActivities, searchTerm) {
    if (matchedActivities.length === 0) {
        searchSuggestions.innerHTML = '<div class="suggestion-item">No activities found</div>';
        searchSuggestions.classList.add('visible');
        return;
    }
    
    searchSuggestions.innerHTML = '';
    
    matchedActivities.forEach(activity => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        
        const highlightedName = highlightMatch(activity.name, searchTerm);
        suggestionItem.innerHTML = `
            <i class="fas fa-${activity.category === 'tournament' ? 'trophy' : activity.category === 'workshop' ? 'chalkboard-teacher' : 'gamepad'}"></i>
            <div>
                <strong>${highlightedName}</strong>
                <div class="suggestion-details">
                    <small>${activity.type} • ${activity.duration}</small>
                    <p>${activity.description}</p>
                </div>
            </div>
        `;
        
        suggestionItem.addEventListener('click', () => {
            activitiesSearchInput.value = activity.name;
            stickySearchInput.value = activity.name;
            searchActivities();
            searchSuggestions.classList.remove('visible');
        });
        
        searchSuggestions.appendChild(suggestionItem);
    });
    
    searchSuggestions.classList.add('visible');
}

// Function to search activities
function searchActivities() {
    const searchTerm = activitiesSearchInput.value.toLowerCase().trim();
    const stickySearchTerm = stickySearchInput.value.toLowerCase().trim();
    const activeTerm = searchTerm || stickySearchTerm;
    
    if (activeTerm === '') {
        generateActivityCards(allActivities, false); // Not a search result
        return;
    }
    
    showLoader();
    
    setTimeout(() => {
        const matchingActivities = allActivities.filter(activity => 
            activity.name.toLowerCase().includes(activeTerm) || 
            activity.description.toLowerCase().includes(activeTerm) ||
            activity.type.toLowerCase().includes(activeTerm)
        );
        
        // Display results - now passing true to indicate it's a search result
        generateActivityCards(matchingActivities, true);
        
        // Sync search terms
        if (searchTerm && !stickySearchTerm) {
            stickySearchInput.value = searchTerm;
        } else if (stickySearchTerm && !searchTerm) {
            activitiesSearchInput.value = stickySearchTerm;
        }
        
        // Scroll to results
        scrollToResults();
    }, 800);
}

// Function to reset search
function resetSearch() {
    activitiesSearchInput.value = '';
    stickySearchInput.value = '';
    clearSearchBtn.style.display = 'none';
    stickyClearSearchBtn.style.display = 'none';
    searchSuggestions.classList.remove('visible');
    generateActivityCards(allActivities, false); // Not a search result
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    
    setTimeout(() => {
        activitiesSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Function to handle sticky search bar
function handleStickySearch() {
    const heroSection = document.querySelector('.page-hero');
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > heroHeight) {
        stickySearchBar.classList.add('active');
    } else {
        stickySearchBar.classList.remove('active');
    }
}

// Animate cards on scroll
function animateOnScroll() {
    const activityCards = document.querySelectorAll('.activity-card');
    
    activityCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.classList.add('visible');
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    showLoader();
    setTimeout(() => {
        generateActivityCards(allActivities, false); // Not a search result
        generatePopularGames();
    }, 800);
    
    window.addEventListener('scroll', handleStickySearch);
    window.addEventListener('scroll', animateOnScroll);
    
    // Add event listeners for modal close buttons
    document.getElementById('close-activity-modal').addEventListener('click', () => {
        document.getElementById('activity-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById('close-join-modal').addEventListener('click', () => {
        document.getElementById('join-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    closeSuccessMessageBtn.addEventListener('click', () => {
        document.getElementById('join-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Add event listener for join form submission
    document.getElementById('join-form').addEventListener('submit', handleJoinFormSubmit);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Modal functionality
    const contactBtn = document.getElementById('contact-btn');
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.querySelector('.close');
    
    contactBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === document.getElementById('activity-modal')) {
            document.getElementById('activity-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === document.getElementById('join-modal')) {
            document.getElementById('join-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showLoader();
        
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            e.target.reset();
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            hideLoader();
        }, 1000);
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByCategory(btn.dataset.filter);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchActivities();
        searchSuggestions.classList.remove('visible');
    });
    
    stickySearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchActivities();
        searchSuggestions.classList.remove('visible');
    });
    
    activitiesSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchActivities();
            searchSuggestions.classList.remove('visible');
        }
    });
    
    stickySearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchActivities();
            searchSuggestions.classList.remove('visible');
        }
    });
    
    activitiesSearchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        stickySearchInput.value = this.value;
        
        if (searchTerm.length === 0) {
            searchSuggestions.classList.remove('visible');
            clearSearchBtn.style.display = 'none';
            stickyClearSearchBtn.style.display = 'none';
            return;
        }
        
        clearSearchBtn.style.display = 'flex';
        stickyClearSearchBtn.style.display = 'flex';
        
        const matchedActivities = allActivities.filter(activity => 
            activity.name.toLowerCase().includes(searchTerm) || 
            activity.description.toLowerCase().includes(searchTerm) ||
            activity.type.toLowerCase().includes(searchTerm)
        );
        
        showSuggestions(matchedActivities, searchTerm);
    });
    
    stickySearchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        activitiesSearchInput.value = this.value;
        
        if (searchTerm.length === 0) {
            searchSuggestions.classList.remove('visible');
            clearSearchBtn.style.display = 'none';
            stickyClearSearchBtn.style.display = 'none';
            return;
        }
        
        clearSearchBtn.style.display = 'flex';
        stickyClearSearchBtn.style.display = 'flex';
        
        const matchedActivities = allActivities.filter(activity => 
            activity.name.toLowerCase().includes(searchTerm) || 
            activity.description.toLowerCase().includes(searchTerm) ||
            activity.type.toLowerCase().includes(searchTerm)
        );
        
        showSuggestions(matchedActivities, searchTerm);
    });
    
    clearSearchBtn.addEventListener('click', () => {
        resetSearch();
        activitiesSearchInput.focus();
    });
    
    stickyClearSearchBtn.addEventListener('click', () => {
        resetSearch();
        stickySearchInput.focus();
    });
    
    document.addEventListener('click', (e) => {
        if (!activitiesSearchInput.contains(e.target) && 
            !searchSuggestions.contains(e.target) &&
            !stickySearchInput.contains(e.target)) {
            searchSuggestions.classList.remove('visible');
        }
    });
    
    resetSearchBtn.addEventListener('click', resetSearch);
    
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
});