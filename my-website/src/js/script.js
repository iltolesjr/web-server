// This file contains the JavaScript code for the website. It handles interactivity and dynamic content on the web pages.

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here
    console.log('Document is ready!');

    // Example: Add an event listener to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});