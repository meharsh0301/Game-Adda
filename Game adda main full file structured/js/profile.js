// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const avatarEditBtn = document.getElementById('avatar-edit-btn');
const profileAvatar = document.getElementById('profile-avatar');
const avatarModal = document.getElementById('avatar-modal');
const modalClose = document.getElementById('modal-close');
const avatarOptions = document.querySelectorAll('.avatar-option');
const avatarUpload = document.getElementById('avatar-upload');
const saveAvatarBtn = document.getElementById('save-avatar-btn');
const editProfileBtn = document.getElementById('edit-profile-btn');
const shareProfileBtn = document.getElementById('share-profile-btn');
const cancelSettingsBtn = document.getElementById('cancel-settings-btn');
const saveSettingsBtn = document.getElementById('save-settings-btn');
const profileSettingsForm = document.getElementById('profile-settings-form');
const activityFilter = document.getElementById('activity-filter');
const achievementFilter = document.getElementById('achievement-filter');
const gameFilter = document.getElementById('game-filter');
const friendFilter = document.getElementById('friend-filter');
const activityFeed = document.getElementById('activity-feed');
const achievementsGrid = document.getElementById('achievements-grid');
const friendsGrid = document.getElementById('friends-grid');
const profileName = document.getElementById('profile-name');

// Sample Data
const activities = [
    {
        type: 'game',
        icon: 'fa-gamepad',
        title: 'Played Valorant',
        description: 'Completed a competitive match with 25 kills and 5 deaths',
        time: '2 hours ago',
        game: 'Valorant'
    },
    {
        type: 'achievement',
        icon: 'fa-trophy',
        title: 'Unlocked "First Win"',
        description: 'Won your first competitive match in BGMI',
        time: '5 hours ago',
        game: 'BGMI'
    },
    {
        type: 'friend',
        icon: 'fa-user-plus',
        title: 'Added new friend',
        description: 'You are now friends with JaneSmith',
        time: '1 day ago'
    },
    {
        type: 'game',
        icon: 'fa-gamepad',
        title: 'Played GTA V',
        description: 'Completed the "Pacific Standard" heist with your crew',
        time: '2 days ago',
        game: 'GTA V'
    },
    {
        type: 'achievement',
        icon: 'fa-medal',
        title: 'Unlocked "10 Hours Played"',
        description: 'Played for more than 10 hours in Apex Legends',
        time: '3 days ago',
        game: 'Apex Legends'
    }
];

const achievements = [
    {
        id: 1,
        title: 'First Win',
        description: 'Win your first competitive match',
        icon: 'fa-trophy',
        date: 'Jan 15, 2024',
        unlocked: true,
        rare: false
    },
    {
        id: 2,
        title: '10 Hours Played',
        description: 'Play for more than 10 hours',
        icon: 'fa-medal',
        date: 'Feb 2, 2024',
        unlocked: true,
        rare: false
    },
    {
        id: 3,
        title: 'Tournament Champion',
        description: 'Win a tournament with at least 16 participants',
        icon: 'fa-crown',
        date: 'Mar 8, 2024',
        unlocked: true,
        rare: true
    },
    {
        id: 4,
        title: 'Perfect Score',
        description: 'Win a match without dying',
        icon: 'fa-star',
        date: 'Apr 12, 2024',
        unlocked: true,
        rare: false
    },
    {
        id: 5,
        title: 'Veteran Player',
        description: 'Play for more than 100 hours',
        icon: 'fa-hourglass',
        date: null,
        unlocked: false,
        rare: false,
        progress: 56
    },
    {
        id: 6,
        title: 'Friend Collector',
        description: 'Have at least 20 friends',
        icon: 'fa-users',
        date: null,
        unlocked: false,
        rare: false,
        progress: 12
    },
    {
        id: 7,
        title: 'All-Star',
        description: 'Win matches in 5 different game categories',
        icon: 'fa-award',
        date: null,
        unlocked: false,
        rare: true,
        progress: 3
    },
    {
        id: 8,
        title: 'Night Owl',
        description: 'Play between midnight and 5am',
        icon: 'fa-moon',
        date: null,
        unlocked: false,
        rare: false
    }
];

const friends = [
    {
        id: 1,
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        status: 'online',
        game: null
    },
    {
        id: 2,
        name: 'Mike Johnson',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        status: 'ingame',
        game: 'Valorant'
    },
    {
        id: 3,
        name: 'Sarah Williams',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        status: 'online',
        game: null
    },
    {
        id: 4,
        name: 'David Brown',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        status: 'offline',
        game: null
    },
    {
        id: 5,
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
        status: 'ingame',
        game: 'Apex Legends'
    },
    {
        id: 6,
        name: 'Robert Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
        status: 'offline',
        game: null
    }
];

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Tab Switching
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        
        // Load content if needed
        if (tabId === 'overview') loadActivities();
        if (tabId === 'achievements') loadAchievements();
        if (tabId === 'friends') loadFriends();
    });
});

// Avatar Edit Modal
avatarEditBtn.addEventListener('click', () => {
    avatarModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', () => {
    avatarModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === avatarModal) {
        avatarModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Avatar Selection
avatarOptions.forEach(option => {
    option.addEventListener('click', () => {
        avatarOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

// Avatar Upload
avatarUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const newAvatar = event.target.result;
            // Update the selected avatar preview
            avatarOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Create a new selected avatar (in a real app, you might want to preview it)
            profileAvatar.src = newAvatar;
        };
        reader.readAsDataURL(file);
    }
});

// Save Avatar
saveAvatarBtn.addEventListener('click', () => {
    const selectedAvatar = document.querySelector('.avatar-option.selected');
    if (selectedAvatar) {
        const newAvatar = selectedAvatar.getAttribute('data-avatar');
        profileAvatar.src = newAvatar;
    }
    avatarModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Show success message
    showToast('Profile picture updated successfully!');
});

// Edit Profile Button
editProfileBtn.addEventListener('click', () => {
    // Switch to settings tab
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    document.querySelector('[data-tab="settings"]').classList.add('active');
    document.getElementById('settings').classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Share Profile Button
shareProfileBtn.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Game Adda Profile',
            text: 'Check out my Game Adda profile!',
            url: window.location.href
        }).catch(err => {
            console.log('Error sharing:', err);
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        alert('Share this URL: ' + window.location.href);
    }
});

// Settings Form
profileSettingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    const location = document.getElementById('location').value;
    
    // Update profile
    profileName.innerHTML = `
        ${firstName} ${lastName}
        <span class="profile-badge">
            <i class="fas fa-crown"></i> Premium
        </span>
    `;
    
    // Show success message
    showToast('Profile updated successfully!');
});

cancelSettingsBtn.addEventListener('click', () => {
    // Reset form to original values
    document.getElementById('first-name').value = 'John';
    document.getElementById('last-name').value = 'Doe';
    document.getElementById('username').value = 'johndoe';
    document.getElementById('email').value = 'john.doe@example.com';
    document.getElementById('bio').value = 'Competitive gamer specializing in FPS and Battle Royale games. Always looking for new challenges!';
    document.getElementById('location').value = 'Mumbai, India';
});

// Filter Functions
activityFilter.addEventListener('change', loadActivities);
achievementFilter.addEventListener('change', loadAchievements);
friendFilter.addEventListener('change', loadFriends);

function loadActivities() {
    const filter = activityFilter.value;
    let filteredActivities = activities;
    
    if (filter !== 'all') {
        filteredActivities = activities.filter(activity => activity.type === filter);
    }
    
    activityFeed.innerHTML = '';
    
    if (filteredActivities.length === 0) {
        activityFeed.innerHTML = '<div class="no-results">No activities found matching your filter.</div>';
        return;
    }
    
    filteredActivities.forEach(activity => {
        const activityCard = document.createElement('div');
        activityCard.className = 'activity-card';
        
        let gameInfo = '';
        if (activity.game) {
            gameInfo = `<span class="activity-meta-item"><i class="fas fa-gamepad"></i> ${activity.game}</span>`;
        }
        
        activityCard.innerHTML = `
            <div class="activity-icon">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <h3 class="activity-title">${activity.title}</h3>
                <p class="activity-desc">${activity.description}</p>
                <div class="activity-meta">
                    <span class="activity-meta-item"><i class="fas fa-clock"></i> ${activity.time}</span>
                    ${gameInfo}
                </div>
            </div>
        `;
        
        activityFeed.appendChild(activityCard);
    });
}

function loadAchievements() {
    const filter = achievementFilter.value;
    let filteredAchievements = achievements;
    
    if (filter === 'unlocked') {
        filteredAchievements = achievements.filter(ach => ach.unlocked);
    } else if (filter === 'locked') {
        filteredAchievements = achievements.filter(ach => !ach.unlocked);
    } else if (filter === 'rare') {
        filteredAchievements = achievements.filter(ach => ach.rare);
    }
    
    achievementsGrid.innerHTML = '';
    
    if (filteredAchievements.length === 0) {
        achievementsGrid.innerHTML = '<div class="no-results">No achievements found matching your filter.</div>';
        return;
    }
    
    filteredAchievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = `achievement-card ${achievement.unlocked ? '' : 'locked'}`;
        
        let progressBar = '';
        if (!achievement.unlocked && achievement.progress) {
            progressBar = `
                <div class="achievement-progress">
                    <div class="progress-bar" style="width: ${achievement.progress}%"></div>
                </div>
            `;
        }
        
        let lockIcon = '';
        if (!achievement.unlocked) {
            lockIcon = '<i class="fas fa-lock"></i>';
        }
        
        achievementCard.innerHTML = `
            <div class="achievement-icon">
                <i class="fas ${achievement.icon}"></i>
                ${lockIcon}
            </div>
            <h3 class="achievement-title">${achievement.title}</h3>
            <p class="achievement-desc">${achievement.description}</p>
            ${achievement.date ? `<p class="achievement-date">Unlocked: ${achievement.date}</p>` : ''}
            ${progressBar}
        `;
        
        achievementsGrid.appendChild(achievementCard);
    });
}

function loadFriends() {
    const filter = friendFilter.value;
    let filteredFriends = friends;
    
    if (filter === 'online') {
        filteredFriends = friends.filter(friend => friend.status === 'online');
    } else if (filter === 'ingame') {
        filteredFriends = friends.filter(friend => friend.status === 'ingame');
    } else if (filter === 'offline') {
        filteredFriends = friends.filter(friend => friend.status === 'offline');
    }
    
    friendsGrid.innerHTML = '';
    
    if (filteredFriends.length === 0) {
        friendsGrid.innerHTML = '<div class="no-results">No friends found matching your filter.</div>';
        return;
    }
    
    filteredFriends.forEach(friend => {
        const friendCard = document.createElement('div');
        friendCard.className = 'friend-card';
        
        let statusText = '';
        let statusClass = '';
        
        if (friend.status === 'online') {
            statusText = 'Online';
            statusClass = 'status-online';
        } else if (friend.status === 'ingame') {
            statusText = `In-Game: ${friend.game}`;
            statusClass = 'status-ingame';
        } else {
            statusText = 'Offline';
            statusClass = 'status-offline';
        }
        
        friendCard.innerHTML = `
            <img src="${friend.avatar}" alt="${friend.name}" class="friend-avatar">
            <div class="friend-info">
                <h3 class="friend-name">${friend.name}</h3>
                <p class="friend-status ${statusClass}">
                    <i class="fas fa-circle"></i> ${statusText}
                </p>
            </div>
            <div class="friend-actions">
                <button class="friend-btn" title="Message" data-friend-id="${friend.id}" data-action="message">
                    <i class="fas fa-comment"></i>
                </button>
                <button class="friend-btn" title="More options" data-friend-id="${friend.id}" data-action="more">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </div>
        `;
        
        friendsGrid.appendChild(friendCard);
    });
}

// Friend Actions
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.friend-btn');
    if (btn) {
        const friendId = btn.getAttribute('data-friend-id');
        const action = btn.getAttribute('data-action');
        const friend = friends.find(f => f.id == friendId);
        
        if (action === 'message') {
            showToast(`Messaging ${friend.name}`);
        } else if (action === 'more') {
            showToast(`Showing options for ${friend.name}`);
        }
    }
});

// Show Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Add toast styles dynamically
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast-notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #4cc9f0;
        color: #1a1a2e;
        padding: 12px 24px;
        border-radius: 5px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .toast-notification.show {
        opacity: 1;
    }
`;
document.head.appendChild(toastStyles);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load initial content
    loadActivities();
});