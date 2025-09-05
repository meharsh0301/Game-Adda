// Sample event data
const eventsData = [
    {
        id: 1,
        title: "Summer LAN Party",
        description: "Join us for our biggest LAN party of the summer! Bring your own device or use ours. Tournaments for Valorant, CS:GO, and Dota 2 with cash prizes!",
        date: "2025-06-25",
        time: "16:00 - 22:00",
        location: "Game Adda Arena, Mumbai",
        type: "lan-party",
        attendees: 24,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        featured: true,
        online: false,
        price: 500
    },
    {
        id: 2,
        title: "Game Development Workshop",
        description: "Learn the basics of game development from industry professionals. This workshop covers Unity basics, game design principles, and publishing your first game.",
        date: "2025-06-28",
        time: "18:00 - 20:00",
        location: "Online (Zoom)",
        type: "workshop",
        attendees: 12,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        featured: false,
        online: true,
        price: 0
    },
    {
        id: 3,
        title: "VR Gaming Night",
        description: "Experience the latest VR games and technology with our premium VR setups. Try out new releases and classics with our high-end VR equipment.",
        date: "2025-07-02",
        time: "17:00 - 21:00",
        location: "Game Adda VR Zone, Mumbai",
        type: "meetup",
        attendees: 18,
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        featured: false,
        online: false,
        price: 300
    },
    {
        id: 4,
        title: "Valorant Championship",
        description: "Monthly Valorant tournament with a ₹50,000 prize pool. Teams of 5 compete in this double-elimination bracket tournament.",
        date: "2025-07-10",
        time: "12:00 - 20:00",
        location: "Game Adda Esports Arena",
        type: "tournament",
        attendees: 32,
        image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        featured: true,
        online: false,
        price: 1000
    },
    {
        id: 5,
        title: "Indie Game Showcase",
        description: "Local indie developers showcase their latest games. Play demos, meet the creators, and provide feedback on upcoming titles.",
        date: "2025-07-15",
        time: "14:00 - 18:00",
        location: "Game Adda Lounge",
        type: "meetup",
        attendees: 8,
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        featured: false,
        online: false,
        price: 0
    },
    {
        id: 6,
        title: "Speedrunning Marathon",
        description: "Watch top speedrunners attempt world records in classic games. All donations go to charity. Submit your own runs to be featured!",
        date: "2025-07-20",
        time: "10:00 - 22:00",
        location: "Twitch.tv/GameAdda",
        type: "other",
        attendees: 45,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        featured: true,
        online: true,
        price: 0
    }
];

// DOM elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const contactBtn = document.getElementById('contact-btn');
const modal = document.getElementById('create-event-modal');
const closeBtn = document.querySelector('.close');
const createEventBtn = document.getElementById('create-event-btn');
const eventForm = document.getElementById('event-form');
const eventsGrid = document.getElementById('events-grid');
const noEventsMsg = document.getElementById('no-events');
const filterBtns = document.querySelectorAll('.filter-btn');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const eventSearch = document.getElementById('event-search');
const searchBtn = document.getElementById('search-btn');
const pagination = document.getElementById('pagination');

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
});

// Modal functionality
createEventBtn.addEventListener('click', () => {
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
});

// Generate event cards
function generateEventCards(events) {
    eventsGrid.innerHTML = '';
    
    if (events.length === 0) {
        noEventsMsg.style.display = 'block';
        return;
    }
    
    noEventsMsg.style.display = 'none';
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        const eventDate = new Date(event.date);
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const formattedDate = `${monthNames[eventDate.getMonth()]} ${eventDate.getDate()}`;
        
        eventCard.innerHTML = `
            <div style="position: relative;">
                <img src="${event.image}" alt="${event.title}" class="event-image">
                <span class="event-date">${formattedDate}</span>
                ${event.featured ? '<span class="featured-badge">Featured</span>' : ''}
            </div>
            <div class="event-info">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <i class="fas fa-${event.online ? 'globe' : 'map-marker-alt'}"></i> ${event.location}
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-${event.price > 0 ? 'rupee-sign' : 'tag'}"></i> ${event.price > 0 ? `₹${event.price}` : 'Free'}
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-users"></i> ${event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>
                </div>
                <p class="event-desc">${event.description}</p>
                <div class="event-actions">
                    <div class="event-attendees">
                        <i class="fas fa-users"></i> ${event.attendees} attending
                    </div>
                    <button class="attend-btn" data-event-id="${event.id}">Attend</button>
                </div>
            </div>
        `;
        eventsGrid.appendChild(eventCard);
    });
    
    // Add event listeners to attend buttons
    document.querySelectorAll('.attend-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.getAttribute('data-event-id'));
            const attendeesElement = this.parentElement.querySelector('.event-attendees');
            const currentAttendees = parseInt(attendeesElement.textContent.match(/\d+/)[0]);
            
            if (this.textContent === 'Attend') {
                this.textContent = 'Attending';
                this.classList.add('attending');
                attendeesElement.textContent = attendeesElement.textContent.replace(/\d+/, currentAttendees + 1);
                // In a real app, you would send this to your backend
                console.log(`User attending event ${eventId}`);
            } else {
                this.textContent = 'Attend';
                this.classList.remove('attending');
                attendeesElement.textContent = attendeesElement.textContent.replace(/\d+/, currentAttendees - 1);
                // In a real app, you would send this to your backend
                console.log(`User no longer attending event ${eventId}`);
            }
        });
    });
}

// Filter events
function filterEvents() {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const searchTerm = eventSearch.value.toLowerCase();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let filteredEvents = eventsData.filter(event => {
        const eventDate = new Date(event.date);
        const matchesSearch = event.title.toLowerCase().includes(searchTerm) || 
                             event.description.toLowerCase().includes(searchTerm) ||
                             event.location.toLowerCase().includes(searchTerm);
        
        if (!matchesSearch) return false;
        
        switch (activeFilter) {
            case 'week':
                const nextWeek = new Date(today);
                nextWeek.setDate(today.getDate() + 7);
                return eventDate >= today && eventDate <= nextWeek;
            case 'month':
                const nextMonth = new Date(today);
                nextMonth.setMonth(today.getMonth() + 1);
                return eventDate >= today && eventDate <= nextMonth;
            case 'online':
                return event.online;
            case 'in-person':
                return !event.online;
            case 'featured':
                return event.featured;
            case 'free':
                return event.price === 0;
            default:
                return true;
        }
    });
    
    generateEventCards(filteredEvents);
    generatePagination(filteredEvents.length);
}

// Generate pagination
function generatePagination(totalEvents) {
    pagination.innerHTML = '';
    const eventsPerPage = 6;
    const pageCount = Math.ceil(totalEvents / eventsPerPage);
    
    if (pageCount <= 1) return;
    
    for (let i = 1; i <= pageCount; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn';
        pageBtn.textContent = i;
        if (i === 1) pageBtn.classList.add('active');
        
        pageBtn.addEventListener('click', function() {
            document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // In a real app, you would load the appropriate page of events
            console.log(`Loading page ${i}`);
        });
        
        pagination.appendChild(pageBtn);
    }
}

// Form submission
eventForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById('event-title').value;
    const description = document.getElementById('event-description').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value;
    const type = document.getElementById('event-type').value;
    const image = document.getElementById('event-image').value || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
    const featured = document.getElementById('featured-event').checked;
    
    // Create new event object
    const newEvent = {
        id: eventsData.length + 1,
        title,
        description,
        date,
        time,
        location,
        type,
        attendees: 0,
        image,
        featured,
        online: location.toLowerCase().includes('online') || location.toLowerCase().includes('http'),
        price: 0 // You could add a price field to the form
    };
    
    // Add to events array (in a real app, you would send to a backend)
    eventsData.unshift(newEvent);
    
    // Reset form and close modal
    this.reset();
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Refresh events display
    filterEvents();
    
    // Show success message
    alert('Event created successfully!');
});

// Filter button click handler
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterEvents();
    });
});

// Reset filters
resetFiltersBtn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    eventSearch.value = '';
    filterEvents();
});

// Search functionality
searchBtn.addEventListener('click', filterEvents);
eventSearch.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') filterEvents();
});

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    generateEventCards(eventsData);
    generatePagination(eventsData.length);
});