// public/js/main.js

// Function to fetch HTML content and insert it into a specified element
function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load sections
loadHTML('src/components/hero/hero.html', 'hero-section');
loadHTML('src/components/services/services.html', 'services-section');