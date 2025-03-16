document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const donationForms = document.querySelectorAll('.donation-form');
    const eligibilityForm = document.getElementById('eligibilityForm');
    const scheduleForm = document.getElementById('scheduleForm');
    const locationForm = document.getElementById('locationForm');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const nextButtons = document.querySelectorAll('.btn-next');

    // Step navigation
    function showStep(stepNumber) {
        // Update steps
        steps.forEach(step => {
            step.classList.remove('active');
            if (step.dataset.step === stepNumber.toString()) {
                step.classList.add('active');
            }
        });

        // Update forms
        donationForms.forEach(form => {
            form.classList.remove('active');
            if (form.id === `step${stepNumber}`) {
                form.classList.add('active');
            }
        });
    }

    // Eligibility Form Submission
    eligibilityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ageCheck = document.querySelector('input[name="age"]:checked');
        const weightCheck = document.querySelector('input[name="weight"]:checked');
        const recentDonationCheck = document.querySelector('input[name="recent-donation"]:checked');

        if (ageCheck && weightCheck && recentDonationCheck) {
            // Basic eligibility check
            if (ageCheck.value === 'yes' && 
                weightCheck.value === 'yes' && 
                recentDonationCheck.value === 'no') {
                showStep(2);
            } else {
                alert('Unfortunately, you do not meet the current eligibility criteria for blood donation.');
            }
        } else {
            alert('Please answer all questions');
        }
    });

    // Schedule Form Submission
    scheduleForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const donationDate = document.getElementById('donation-date').value;
        const donationTime = document.getElementById('donation-time').value;

        if (donationDate && donationTime) {
            showStep(3);
        } else {
            alert('Please select a date and time');
        }
    });

    // Location Form Submission
    locationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const locationSelected = document.querySelector('input[name="location"]:checked');

        if (locationSelected) {
            const locationName = locationSelected.closest('.location-card').querySelector('h3').textContent;
            alert(`Donation Registration Complete!\n\nLocation: ${locationName}\nThank you for saving lives!`);
            
            // Redirect to dashboard or show confirmation
            window.location.href = 'dashboard.html';
        } else {
            alert('Please select a donation location');
        }
    });

    // Previous button functionality
    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentForm = button.closest('.donation-form');
            const currentStep = parseInt(currentForm.id.replace('step', ''));
            showStep(currentStep - 1);
        });
    });
});
