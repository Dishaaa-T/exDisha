document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // Set default date and time (current date/time + 1 day)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0); // Set to 9:00 AM
    
    // Format date for datetime-local input
    const dateTimeInput = document.getElementById('datetime');
    const formattedDate = tomorrow.toISOString().slice(0, 16);
    dateTimeInput.value = formattedDate;
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Form validation
    const eventForm = document.getElementById('event-form');
    const submitBtn = document.getElementById('submitBtn');
    const notification = document.getElementById('notification');
    const notificationIcon = notification.querySelector('.notification-icon');
    const notificationMessage = notification.querySelector('.notification-message');
    
    // Progress bar
    const progressBar = document.getElementById('progressBar');
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // Real-time validation
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateInput(this);
            }
        });
    });
    
    function validateInput(input) {
        const id = input.id;
        let isValid = true;
        
        // Clear previous validation
        input.classList.remove('error', 'success');
        
        // Check if empty
        if (!input.value.trim()) {
            showError(input, 'This field is required');
            return false;
        }
        
        // Specific validations
        switch(id) {
            case 'email':
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value)) {
                    showError(input, 'Please enter a valid email address');
                    isValid = false;
                }
                break;
            case 'contact':
                const phonePattern = /^\d{10,15}$/;
                if (!phonePattern.test(input.value.replace(/\D/g, ''))) {
                    showError(input, 'Please enter a valid phone number');
                    isValid = false;
                }
                break;
        }
        
        if (isValid) {
            input.classList.add('success');
        }
        
        return isValid;
    }
    
    function showError(input, message) {
        input.classList.add('error');
        const validationMessage = input.parentElement.parentElement.querySelector('.validation-message');
        if (validationMessage) {
            validationMessage.textContent = message;
        }
    }
    // Replace the existing form submission handler with:
eventForm.addEventListener('submit', async function(e) {
e.preventDefault();

// ... existing validation code ...

try {
const response = await fetch('submit.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});

const result = await response.json();

if (result.success) {
    showNotification('success', result.message);
    eventForm.reset();
    localStorage.removeItem('eventXpertFormData');
} else {
    showNotification('error', result.message);
}
} catch (error) {
// ... error handling ...
}


        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = {
            collegeName: document.getElementById('college-name').value,
            contact: document.getElementById('contact').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            eventName: document.getElementById('event-name').value,
            eventId: document.getElementById('event-id').value,
            venue: document.getElementById('venue').value,
            eventDescription: document.getElementById('event-description').value,
            dateTime: document.getElementById('datetime').value
        };
        
        // Simulate API call with fetch
        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Simulate successful API response
            const response = {
                success: true,
                message: 'Event registered successfully!'
            };
            
            // Save to localStorage for persistence
            const savedEvents = JSON.parse(localStorage.getItem('eventXpertEvents') || '[]');
            savedEvents.push({
                ...formData,
                id: Date.now(),
                createdAt: new Date().toISOString()
            });
            localStorage.setItem('eventXpertEvents', JSON.stringify(savedEvents));
            
            // Show success notification
            showNotification('success', response.message);
            
            // Reset form
            eventForm.reset();
            
            // Reset the date time to default
            dateTimeInput.value = formattedDate;
            
            // Remove success classes
            inputs.forEach(input => {
                input.classList.remove('success');
            });
            
        } catch (error) {
            // Show error notification
            showNotification('error', 'An error occurred. Please try again.');
            console.error('Error:', error);
        } finally {
            // Hide loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
    
    // Notification function
    function showNotification(type, message) {
        notification.className = 'notification';
        notification.classList.add(type);
        
        if (type === 'success') {
            notificationIcon.className = 'notification-icon fas fa-check-circle';
        } else {
            notificationIcon.className = 'notification-icon fas fa-exclamation-circle';
        }
        
        notificationMessage.textContent = message;
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Hide notification after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }
    
    // Form data persistence
    // Check if there's saved form data in localStorage
    const savedFormData = localStorage.getItem('eventXpertFormData');
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        
        // Fill form with saved data
        for (const key in formData) {
            const input = document.getElementById(key);
            if (input) {
                input.value = formData[key];
            }
        }
    }
    
    // Save form data as user types
    inputs.forEach(input => {
        input.addEventListener('input', debounce(function() {
            const formData = {};
            inputs.forEach(input => {
                formData[input.id] = input.value;
            });
            localStorage.setItem('eventXpertFormData', JSON.stringify(formData));
        }, 500));
    });
    
    // Debounce function to limit how often a function is called
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
