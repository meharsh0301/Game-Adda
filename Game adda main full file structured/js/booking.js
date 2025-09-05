// Booking system functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const steps = document.querySelectorAll('.step');
    const contents = document.querySelectorAll('.booking-content');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const confirmBtn = document.querySelector('.confirm-btn');
    const successScreen = document.querySelector('.booking-success');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    // Calendar elements
    const calendarTitle = document.getElementById('calendar-title');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const timeSlotsContainer = document.getElementById('time-slots');
    
    // Booking data
    let currentStep = 0;
    let selectedStation = null;
    let selectedDate = null;
    let selectedTime = null;
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    
    // Initialize
    showStep(currentStep);
    generateCalendar(currentMonth, currentYear);
    
    // Event Listeners
    nextBtns.forEach(btn => btn.addEventListener('click', goToNextStep));
    prevBtns.forEach(btn => btn.addEventListener('click', goToPrevStep));
    confirmBtn.addEventListener('click', confirmBooking);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    prevMonthBtn.addEventListener('click', showPrevMonth);
    nextMonthBtn.addEventListener('click', showNextMonth);
    
    // Station selection
    document.querySelectorAll('.station-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.station-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedStation = {
                type: card.dataset.type,
                name: card.querySelector('.station-name').textContent,
                price: card.querySelector('.station-price').textContent,
                specs: card.querySelector('.station-specs').textContent.trim()
            };
        });
    });
    
    // Functions
    function showStep(step) {
        contents.forEach((content, index) => {
            content.classList.toggle('active', index === step);
        });
        updateSteps();
    }
    
    function updateSteps() {
        steps.forEach((step, index) => {
            if (index < currentStep) {
                step.classList.remove('active');
                step.classList.add('completed');
            } else if (index === currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
    }
    
    function goToNextStep() {
        if (validateStep(currentStep)) {
            currentStep++;
            showStep(currentStep);
            
            // If moving to step 2, generate time slots
            if (currentStep === 1) {
                generateTimeSlots();
            }
        }
    }
    
    function goToPrevStep() {
        currentStep--;
        showStep(currentStep);
    }
    
    function validateStep(step) {
        if (step === 0) {
            if (!selectedStation) {
                alert('Please select a gaming station');
                return false;
            }
            
            // Update summary with selected station
            document.getElementById('summary-station').textContent = selectedStation.name;
            document.getElementById('summary-rate').textContent = selectedStation.price;
            document.getElementById('success-station').textContent = selectedStation.name;
            return true;
        } else if (step === 1) {
            if (!selectedDate) {
                alert('Please select a date');
                return false;
            }
            
            if (!selectedTime) {
                alert('Please select an available time slot');
                return false;
            }
            
            // Update summary with selected time
            const formattedDate = selectedDate.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
            });
            
            document.getElementById('summary-date').textContent = formattedDate;
            document.getElementById('summary-time').textContent = `${selectedTime} - ${nextHour(selectedTime)}`;
            document.getElementById('summary-duration').textContent = '1 hour';
            document.getElementById('summary-total').textContent = selectedStation.price;
            
            document.getElementById('success-datetime').textContent = `${formattedDate} at ${selectedTime}`;
            document.getElementById('success-duration').textContent = '1 hour';
            return true;
        }
        return true;
    }
    
    function nextHour(time) {
        const [hour, period] = time.split(' ');
        let nextHour = parseInt(hour) + 1;
        if (nextHour === 12) {
            return `12:00 ${period === 'AM' ? 'PM' : 'AM'}`;
        } else if (nextHour > 12) {
            return `${nextHour - 12}:00 ${period}`;
        } else {
            return `${nextHour}:00 ${period}`;
        }
    }
    
    function confirmBooking(e) {
        e.preventDefault();
        
        if (!document.getElementById('terms').checked) {
            alert('Please agree to the Terms & Conditions');
            return;
        }
        
        // Generate booking data
        const bookingId = 'GA' + currentYear + '-' + Math.floor(1000 + Math.random() * 9000);
        const specialRequests = document.getElementById('special-requests').value;
        
        // Update success screen
        document.getElementById('booking-id').textContent = bookingId;
        document.getElementById('success-requests').textContent = specialRequests || 'None';
        
        // Show success screen
        contents.forEach(content => content.style.display = 'none');
        successScreen.style.display = 'block';
        
        // Reset form for next booking
        setTimeout(() => {
            resetForm();
        }, 5000);
    }
    
    function resetForm() {
        // Reset form fields
        document.querySelectorAll('.station-card').forEach(card => card.classList.remove('selected'));
        selectedStation = null;
        selectedDate = null;
        selectedTime = null;
        document.getElementById('special-requests').value = '';
        document.getElementById('terms').checked = false;
        
        // Reset to first step
        currentStep = 0;
        showStep(currentStep);
        successScreen.style.display = 'none';
    }
    
    function toggleMobileMenu() {
        nav.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    }
    
    // Calendar functions
    function generateCalendar(month, year) {
        // Clear previous calendar
        calendarGrid.innerHTML = '';
        
        // Set calendar title
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        calendarTitle.textContent = `${monthNames[month]} ${year}`;
        
        // Get first day of month and total days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Get days from previous month
        const prevMonthDays = new Date(year, month, 0).getDate();
        
        // Add day headers
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });
        
        // Add days from previous month
        for (let i = firstDay - 1; i >= 0; i--) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day disabled';
            dayElement.textContent = prevMonthDays - i;
            calendarGrid.appendChild(dayElement);
        }
        
        // Add days of current month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = i;
            
            // Mark today
            const today = new Date();
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayElement.classList.add('selected');
                selectedDate = today;
            }
            
            // Add click event
            dayElement.addEventListener('click', function() {
                if (!this.classList.contains('disabled')) {
                    document.querySelectorAll('.calendar-day').forEach(day => day.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedDate = new Date(year, month, i);
                    generateTimeSlots();
                }
            });
            
            calendarGrid.appendChild(dayElement);
        }
        
        // Add days from next month
        const totalCells = firstDay + daysInMonth;
        const remainingCells = totalCells > 35 ? 42 - totalCells : 35 - totalCells;
        
        for (let i = 1; i <= remainingCells; i++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day disabled';
            dayElement.textContent = i;
            calendarGrid.appendChild(dayElement);
        }
    }
    
    function showPrevMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    }
    
    function showNextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    }
    
    function generateTimeSlots() {
        if (!selectedDate) return;
        
        // Clear previous time slots
        timeSlotsContainer.innerHTML = '';
        
        // Generate time slots from 10 AM to 10 PM
        const startHour = 10;
        const endHour = 22;
        
        // Sample booked times (in a real app, this would come from a database)
        const sampleBookedTimes = ['2:00 PM', '6:00 PM', '8:00 PM'];
        
        for (let hour = startHour; hour < endHour; hour++) {
            const timeSlot = document.createElement('div');
            const displayHour = hour > 12 ? hour - 12 : hour;
            const period = hour >= 12 ? 'PM' : 'AM';
            const timeString = `${displayHour}:00 ${period}`;
            
            timeSlot.className = 'time-slot';
            timeSlot.textContent = timeString;
            
            // Mark as booked if in sample booked times
            if (sampleBookedTimes.includes(timeString)) {
                timeSlot.classList.add('booked');
            }
            
            // Add click event
            timeSlot.addEventListener('click', function() {
                if (!this.classList.contains('booked')) {
                    document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedTime = timeString;
                }
            });
            
            timeSlotsContainer.appendChild(timeSlot);
        }
    }
});