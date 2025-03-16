document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.querySelector('.login-box');
    const registerBox = document.querySelector('.register-box');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Toggle between login and register forms
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginBox.classList.remove('active');
        registerBox.classList.add('active');
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerBox.classList.remove('active');
        loginBox.classList.add('active');
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Basic validation
        if (email && password) {
            // Simulated login (replace with actual authentication)
            if (email === 'user@example.com' && password === 'password123') {
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid email or password');
            }
        } else {
            alert('Please fill in all fields');
        }
    });

    // Register form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const bloodGroup = document.getElementById('bloodGroup').value;

        // Validation
        if (name && email && password && confirmPassword && bloodGroup) {
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }

            // Simulated registration (replace with actual backend registration)
            alert('Registration Successful! Please login.');
            
            // Switch back to login form
            registerBox.classList.remove('active');
            loginBox.classList.add('active');
        } else {
            alert('Please fill in all fields');
        }
    });
});
