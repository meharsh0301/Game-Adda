document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.sidebar') && !e.target.closest('.mobile-menu-toggle')) {
                document.querySelector('.sidebar').classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });

    // Notification bell functionality
    const notificationBell = document.querySelector('.notification-bell');
    
    notificationBell.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        document.querySelector('.notification-dropdown').style.display = 
            this.classList.contains('active') ? 'block' : 'none';
        
        if (this.classList.contains('active')) {
            document.querySelector('.notification-count').style.display = 'none';
        }
    });

    // Mark all as read
    document.querySelector('.mark-all-read').addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.notification-count').style.display = 'none';
        this.textContent = 'Marked as read';
        setTimeout(() => {
            this.textContent = 'Mark all as read';
        }, 2000);
    });
    
    // Close notifications when clicking outside
    document.addEventListener('click', function() {
        const bell = document.querySelector('.notification-bell');
        if (bell.classList.contains('active')) {
            bell.classList.remove('active');
            document.querySelector('.notification-dropdown').style.display = 'none';
        }
    });

    // Add game functionality
    document.querySelector('.add-game').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'my-games.html#add-game';
    });
    
    // Tournament registration
    document.querySelectorAll('.tournament-status .badge.open').forEach(badge => {
        badge.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const tournamentItem = this.closest('.tournament-item');
            const tournamentName = tournamentItem.querySelector('h4').textContent;
            
            if (confirm(`Register for ${tournamentName}?`)) {
                this.textContent = 'Registered';
                this.classList.remove('open');
                this.classList.add('registered');
                
                // Show success message
                showSuccessMessage(`Successfully registered for ${tournamentName}`);
            }
        });
    });
    
    // Event RSVP
    document.querySelectorAll('.event-actions .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const eventItem = this.closest('.event-item');
            const eventName = eventItem.querySelector('h4').textContent;
            
            this.textContent = 'RSVP Confirmed';
            this.style.backgroundColor = '#38b000';
            this.innerHTML = '<i class="fas fa-check"></i> RSVP Confirmed';
            
            showSuccessMessage(`Successfully RSVP'd for ${eventName}`);
        });
    });
    
    // Reward redemption
    document.querySelectorAll('.reward-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const rewardName = this.querySelector('h5').textContent;
            const rewardCost = this.querySelector('p').textContent;
            
            if (confirm(`Redeem ${rewardName} for ${rewardCost}?`)) {
                showSuccessMessage(`Successfully redeemed ${rewardName}!`);
                
                // In a real app, would update points and mark as redeemed
                this.style.opacity = '0.6';
                this.style.pointerEvents = 'none';
                this.innerHTML = `
                    <div class="reward-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="reward-details">
                        <h5>${rewardName}</h5>
                        <p>Redeemed!</p>
                    </div>
                `;
            }
        });
    });
    
    // Helper function to show success messages
    function showSuccessMessage(message) {
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(successMsg);
        
        setTimeout(() => {
            successMsg.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            successMsg.classList.remove('show');
            setTimeout(() => {
                successMsg.remove();
            }, 300);
        }, 3000);
    }
    
    // Animate progress bars on scroll into view
    const animateOnScroll = () => {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});