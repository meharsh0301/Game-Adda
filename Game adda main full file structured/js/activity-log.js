// Sample activity data
const activities = [
    {
        id: 1,
        type: "gaming",
        title: "Played Valorant for 2 hours",
        icon: "gamepad",
        iconColor: "#4cc9f0",
        time: "2 hours ago",
        location: "Station #12",
        points: 20,
        team: ""
    },
    {
        id: 2,
        type: "tournaments",
        title: "Participated in CS:GO Tournament",
        icon: "trophy",
        iconColor: "#f72585",
        time: "1 day ago",
        location: "",
        points: 500,
        team: "Team: Phoenix"
    },
    {
        id: 3,
        type: "rewards",
        title: "Redeemed 1 Hour Free Gaming",
        icon: "gift",
        iconColor: "#7209b7",
        time: "2 days ago",
        location: "",
        points: -500,
        team: ""
    },
    {
        id: 4,
        type: "gaming",
        title: "Played Fortnite for 1.5 hours",
        icon: "gamepad",
        iconColor: "#4cc9f0",
        time: "3 days ago",
        location: "Station #8",
        points: 15,
        team: ""
    },
    {
        id: 5,
        type: "social",
        title: "Referred a friend",
        icon: "user-plus",
        iconColor: "#f72585",
        time: "1 week ago",
        location: "",
        points: 200,
        team: "Alex Johnson"
    },
    {
        id: 6,
        type: "gaming",
        title: "Played Dota 2 for 3 hours",
        icon: "gamepad",
        iconColor: "#4cc9f0",
        time: "1 week ago",
        location: "Station #5",
        points: 30,
        team: ""
    },
    {
        id: 7,
        type: "tournaments",
        title: "Won BGMI Weekly Challenge",
        icon: "trophy",
        iconColor: "#f72585",
        time: "2 weeks ago",
        location: "",
        points: 1000,
        team: "Squad: Night Owls"
    },
    {
        id: 8,
        type: "rewards",
        title: "Claimed Monthly Bonus",
        icon: "coins",
        iconColor: "#7209b7",
        time: "3 weeks ago",
        location: "",
        points: 100,
        team: ""
    }
];

// DOM elements
const activityList = document.getElementById('activity-list');
const loadMoreBtn = document.getElementById('load-more');
const filters = document.querySelectorAll('.activity-filter');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const contactBtn = document.getElementById('contact-btn');

// Current filter and visible activities
let currentFilter = 'all';
let visibleActivities = 5;

// Initialize the page
function init() {
    renderActivities();
    setupEventListeners();
}

// Render activities based on current filter
function renderActivities() {
    activityList.innerHTML = '';
    
    const filteredActivities = activities.filter(activity => {
        return currentFilter === 'all' || activity.type === currentFilter;
    }).slice(0, visibleActivities);
    
    if (filteredActivities.length === 0) {
        activityList.innerHTML = `
            <div class="no-activity">
                <i class="fas fa-inbox"></i>
                <h3>No activities found</h3>
                <p>Try changing your filters or check back later</p>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }
    
    filteredActivities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        let metaItems = `<span><i class="far fa-clock"></i> ${activity.time}</span>`;
        
        if (activity.location) {
            metaItems += `<span><i class="fas fa-map-marker-alt"></i> ${activity.location}</span>`;
        }
        
        if (activity.team) {
            metaItems += `<span><i class="fas fa-users"></i> ${activity.team}</span>`;
        }
        
        if (activity.points < 0) {
            metaItems += `<span><i class="fas fa-coins"></i> ${Math.abs(activity.points)} pts</span>`;
        }
        
        activityItem.innerHTML = `
            <div class="activity-icon" style="background-color: ${activity.iconColor}">
                <i class="fas fa-${activity.icon}"></i>
            </div>
            <div class="activity-details">
                <h3 class="activity-title">${activity.title}</h3>
                <div class="activity-meta">
                    ${metaItems}
                </div>
            </div>
            ${activity.points > 0 ? `<div class="activity-points">+${activity.points} pts</div>` : ''}
        `;
        
        activityList.appendChild(activityItem);
    });
    
    // Show/hide load more button
    loadMoreBtn.style.display = visibleActivities >= activities.length ? 'none' : 'block';
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            currentFilter = filter.dataset.filter;
            visibleActivities = 5;
            renderActivities();
        });
    });
    
    // Load more button
    loadMoreBtn.addEventListener('click', () => {
        visibleActivities += 5;
        renderActivities();
        
        // Scroll to the newly loaded items
        setTimeout(() => {
            const items = document.querySelectorAll('.activity-item');
            if (items.length > 5) {
                items[items.length - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 100);
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
}

// Initialize the page
document.addEventListener('DOMContentLoaded', init);