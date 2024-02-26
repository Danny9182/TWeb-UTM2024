window.addEventListener("load", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.navbar-container').innerHTML = data;

            // Now that the navbar HTML has been loaded, we can attach the event listener
            document.querySelector('#scrollBottom').addEventListener('click', function() {
                const bottomElement = document.querySelector('#bottom');
                if (bottomElement) {
                    bottomElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
});

window.addEventListener("load", function() {
    fetch('info.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.info-container').innerHTML = data;
        });
});