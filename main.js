// A simple script for a static webpage

// Function to display a greeting message
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Hello, welcome to my static webpage!';
}

// Attach event listener to button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('greetButton');
    button.addEventListener('click', displayGreeting);
});