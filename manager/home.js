// Get the container and buttons
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Get the form containers
const signUpContainer = document.querySelector('.form-container.sign-up');
const signInContainer = document.querySelector('.form-container.sign-in');

// Get the inputs for sign-up and login forms
const signUpEmail = document.querySelector('.form-container.sign-up input[type="email"]');
const signUpPassword = document.querySelector('.form-container.sign-up input[type="password"]');
const signInEmail = document.querySelector('.form-container.sign-in input[type="email"]');
const signInPassword = document.querySelector('.form-container.sign-in input[type="password"]');

// Get the form elements
const signUpForm = document.querySelector('.form-container.sign-up form');
const signInForm = document.querySelector('.form-container.sign-in form');

// Event listener for the "Sign Up" button (register)
registerBtn.addEventListener('click', function() {
    container.classList.add("active"); // Adds active class to toggle the form container
    signUpContainer.style.display = 'block'; // Show sign-up form
    signInContainer.style.display = 'none';  // Hide sign-in form
});

// Event listener for the "Login" button (sign in)
loginBtn.addEventListener('click', function() {
    container.classList.remove("active"); // Removes active class to toggle the form container
    signUpContainer.style.display = 'none'; // Hide sign-up form
    signInContainer.style.display = 'block'; // Show sign-in form
});

// Handle form submission for Sign-Up (register)
signUpForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from reloading the page

    const email = signUpEmail.value;
    const password = signUpPassword.value;

    // Store credentials in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Sign-up successful! You can now log in.');

    // Clear the fields after signup
    signUpEmail.value = '';
    signUpPassword.value = '';
});

// Handle form submission for Sign-In (login)
signInForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from reloading the page

    const email = signInEmail.value;
    const password = signInPassword.value;

    // Retrieve stored credentials from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if the credentials match
    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        window.location.assign('../manager.html'); 
    } else {
        alert('Invalid email or password!');
    }

    // Clear the fields after login
    signInEmail.value = '';
    signInPassword.value = '';
});
