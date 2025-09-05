// DOM Elements
const loader = document.getElementById('loader');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');
const rewardsGrid = document.getElementById('rewards-grid');
const rewardTabs = document.querySelectorAll('.reward-tab');
const userPointsElement = document.getElementById('user-points');
const contactBtn = document.getElementById('contact-btn');

// Reward Data
const rewardsData = [
    {
        id: 1,
        title: "1 Hour Free Gaming",
        points: 500,
        description: "Redeem for 1 hour of free gaming time at any station",
        category: "gaming",
        image: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
        redeemed: false,
        exclusive: false
    },
    {
        id: 2,
        title: "Burger Combo",
        points: 750,
        description: "Get a free burger + fries + soda from our cafe",
        category: "food",
        image: "https://cdn-icons-png.flaticon.com/512/3174/3174826.png",
        redeemed: false,
        exclusive: false
    },
    {
        id: 3,
        title: "Game Adda T-Shirt",
        points: 2500,
        description: "Limited edition Game Adda branded t-shirt",
        category: "merch",
        image: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png",
        redeemed: false,
        exclusive: false
    },
    {
        id: 4,
        title: "Premium Headset (1hr)",
        points: 300,
        description: "Upgrade to premium gaming headset for 1 hour",
        category: "gaming",
        image: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
        redeemed: true,
        redeemCount: 3,
        exclusive: false
    },
    {
        id: 5,
        title: "VIP Lounge Access",
        points: 1000,
        description: "1 day access to our exclusive VIP gaming lounge",
        category: "gaming",
        image: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
        redeemed: false,
        exclusive: true
    },
    {
        id: 6,
        title: "Pizza + Drink",
        points: 800,
        description: "Large pizza with any soft drink of your choice",
        category: "food",
        image: "https://cdn-icons-png.flaticon.com/512/3595/3595458.png",
        redeemed: false,
        exclusive: false
    },
    {
        id: 7,
        title: "Custom Controller Skin",
        points: 1500,
        description: "Personalized skin for your gaming controller",
        category: "merch",
        image: "https://cdn-icons-png.flaticon.com/512/3612/3612569.png",
        redeemed: false,
        exclusive: false
    },
    {
        id: 8,
        title: "5 Hours Gaming Pack",
        points: 2000,
        description: "Get 5 hours of gaming for the price of 4",
        category: "gaming",
        image: "https://cdn-icons-png.flaticon.com/512/808/808439.png",
        redeemed: false,
        exclusive: false
    },
    {
        id: 9,
        title: "Early Access Pass",
        points: 1200,
        description: "Early access to new games and tournaments",
        category: "exclusive",
        image: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png",
        redeemed: false,
        exclusive: true
    }
];

// User Data (simulated)
let userData = {
    points: 1250,
    redeemedRewards: [4] // IDs of redeemed rewards
};

// Initialize the page
function initPage() {
    showLoader();
    
    // Simulate loading user data
    setTimeout(() => {
        updateUserPoints();
        generateRewardsCards('all');
        hideLoader();
    }, 1000);
}

// Show loading animation
function showLoader() {
    loader.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide loading animation
function hideLoader() {
    loader.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Update user points display
function updateUserPoints() {
    userPointsElement.textContent = userData.points.toLocaleString();
}

// Generate reward cards based on category
function generateRewardsCards(category) {
    rewardsGrid.innerHTML = '';
    
    let filteredRewards = rewardsData;
    
    if (category !== 'all') {
        filteredRewards = rewardsData.filter(reward => {
            if (category === 'exclusive') {
                return reward.exclusive;
            }
            return reward.category === category;
        });
    }
    
    if (filteredRewards.length === 0) {
        rewardsGrid.innerHTML = `
            <div class="no-rewards" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-trophy" style="font-size: 3rem; color: var(--accent-color); margin-bottom: 20px;"></i>
                <h3>No Rewards Available</h3>
                <p>Check back later for new rewards in this category</p>
            </div>
        `;
        return;
    }
    
    filteredRewards.forEach(reward => {
        const isRedeemed = userData.redeemedRewards.includes(reward.id);
        const canAfford = userData.points >= reward.points;
        
        const rewardCard = document.createElement('div');
        rewardCard.className = 'reward-card';
        
        if (reward.exclusive) {
            rewardCard.innerHTML += `<div class="reward-badge">Exclusive</div>`;
        }
        
        rewardCard.innerHTML += `
            <img src="${reward.image}" alt="${reward.title}" class="reward-image">
            <h3 class="reward-title">${reward.title}</h3>
            <div class="reward-points">
                <i class="fas fa-coins"></i> ${reward.points.toLocaleString()} points
            </div>
            <p class="reward-desc">${reward.description}</p>
        `;
        
        if (isRedeemed) {
            rewardCard.innerHTML += `
                <div class="redeemed-badge">
                    <i class="fas fa-check"></i> ${reward.redeemCount ? `Redeemed ${reward.redeemCount} times` : 'Already Redeemed'}
                </div>
            `;
        } else {
            rewardCard.innerHTML += `
                <button class="redeem-btn btn" 
                        data-id="${reward.id}" 
                        data-points="${reward.points}"
                        ${canAfford ? '' : 'disabled'}>
                    ${canAfford ? 'Redeem Now' : 'Not Enough Points'}
                </button>
            `;
        }
        
        rewardsGrid.appendChild(rewardCard);
    });
    
    // Add event listeners to redeem buttons
    document.querySelectorAll('.redeem-btn').forEach(btn => {
        btn.addEventListener('click', redeemReward);
    });
}

// Redeem reward function
function redeemReward(e) {
    const rewardId = parseInt(e.target.dataset.id);
    const rewardPoints = parseInt(e.target.dataset.points);
    
    if (userData.points < rewardPoints) {
        alert("You don't have enough points for this reward!");
        return;
    }
    
    showLoader();
    
    // Simulate API call
    setTimeout(() => {
        userData.points -= rewardPoints;
        userData.redeemedRewards.push(rewardId);
        
        updateUserPoints();
        generateRewardsCards(document.querySelector('.reward-tab.active').dataset.tab);
        
        hideLoader();
        
        // Show success message
        const reward = rewardsData.find(r => r.id === rewardId);
        alert(`Successfully redeemed "${reward.title}"! Enjoy your reward.`);
    }, 800);
}

// Tab switching functionality
rewardTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        rewardTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show loader
        showLoader();
        
        // Simulate loading
        setTimeout(() => {
            generateRewardsCards(tab.dataset.tab);
            hideLoader();
        }, 500);
    });
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Contact button functionality
contactBtn.addEventListener('click', () => {
    alert("Contact form would open here in a real implementation");
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            mainNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);