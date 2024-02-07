document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.navbar-container').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the content of the navbar.html file
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Inject the fetched HTML content into the container
            document.querySelector('#navbarContent').innerHTML = data;
        });

    // Add an event listener to the button for scrolling to the bottom
    document.getElementById('scrollToBottom').addEventListener('click', function() {
        // Scroll to the element with the ID "bottom" in the loaded HTML content
        const bottomElement = document.querySelector('#bottom');
        if (bottomElement) {
            bottomElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
