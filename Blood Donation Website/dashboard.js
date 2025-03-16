document.addEventListener('DOMContentLoaded', () => {
    // Navigation menu active state
    const navMenu = document.querySelector('.nav-menu');
    navMenu.addEventListener('click', (e) => {
        const clickedItem = e.target.closest('li');
        if (clickedItem) {
            // Remove active class from all items
            navMenu.querySelectorAll('li').forEach(item => {
                item.classList.remove('active');
            });
            // Add active class to clicked item
            clickedItem.classList.add('active');
        }
    });

    // Quick actions interactivity
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        card.addEventListener('click', () => {
            const actionText = card.querySelector('span').textContent;
            switch(actionText) {
                case 'Schedule Donation':
                    alert('Navigate to donation scheduling page');
                    break;
                case 'Medical History':
                    alert('Open medical history records');
                    break;
                case 'Donor Rewards':
                    alert('View donor rewards and achievements');
                    break;
                case 'Help & Support':
                    alert('Open help and support center');
                    break;
            }
        });
    });

    // Drive registration buttons
    const registerButtons = document.querySelectorAll('.btn-register');
    registerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const driveDetails = button.closest('.drive-card').querySelector('.drive-details h3').textContent;
            alert(`You've registered for: ${driveDetails}`);
            // In a real application, this would trigger a backend registration process
        });
    });

    // Search functionality (basic implementation)
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', performSearch);
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = searchBar.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In a real application, this would trigger a backend search
        }
    }

    // Optional: Dynamic greeting based on time of day
    function updateGreeting() {
        const userNameElement = document.querySelector('.user-info h2');
        const hour = new Date().getHours();
        let greeting = 'Hello';

        if (hour < 12) greeting = 'Good Morning';
        else if (hour < 18) greeting = 'Good Afternoon';
        else greeting = 'Good Evening';

        userNameElement.textContent = `${greeting}, John Doe`;
    }
    updateGreeting();

    // Health Tracker Interactions
    const healthUpdateButtons = document.querySelectorAll('.btn-update');
    healthUpdateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const healthCard = button.closest('.health-card');
            const healthType = healthCard.querySelector('.health-details h3').textContent;
            
            switch(healthType) {
                case 'Weight':
                    const newWeight = prompt('Enter your current weight (kg):', '75');
                    if (newWeight) {
                        healthCard.querySelector('.health-details p').textContent = `${newWeight} kg`;
                    }
                    break;
                case 'Heart Rate':
                    const newHeartRate = prompt('Enter your current heart rate (bpm):', '72');
                    if (newHeartRate) {
                        healthCard.querySelector('.health-details p').textContent = `${newHeartRate} bpm`;
                    }
                    break;
                case 'Last Check-up':
                    const newCheckupDate = prompt('Enter date of last check-up (e.g., 6 Months Ago):', '6 Months Ago');
                    if (newCheckupDate) {
                        healthCard.querySelector('.health-details p').textContent = newCheckupDate;
                    }
                    break;
            }
        });
    });

    // Educational Resources Interactions
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('click', () => {
            const resourceTitle = card.querySelector('.resource-details h3').textContent;
            
            switch(resourceTitle) {
                case 'Donation Guidelines':
                    alert('Displaying Donation Guidelines:\n\n1. Be in good health\n2. Weigh at least 50 kg\n3. Be between 18-65 years old\n4. Have not donated blood in the last 3 months');
                    break;
                case 'Health Requirements':
                    alert('Health Requirements for Blood Donation:\n\n1. No chronic diseases\n2. No recent surgeries\n3. No infectious diseases\n4. Normal blood pressure\n5. Hemoglobin level above 12.5 g/dL');
                    break;
            }
        });
    });

    // Donation History Interaction
    const donationHistoryTable = document.querySelector('.donation-table');
    donationHistoryTable.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        if (row && row.querySelector('td')) {
            const donationDate = row.querySelector('td:first-child').textContent;
            const donationLocation = row.querySelector('td:nth-child(2)').textContent;
            
            alert(`Donation Details:\nDate: ${donationDate}\nLocation: ${donationLocation}\n\nThank you for your life-saving contribution!`);
        }
    });
});
