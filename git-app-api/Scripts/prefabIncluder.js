window.addEventListener("load", function() {
    fetch('/Home/Navbar')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.navbar-container').innerHTML = data;
        });

    fetch('/Home/Info')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.info-container').innerHTML = data;

            // Now that the info HTML has been loaded, we can attach the event listener
            document.querySelector('#scrollBottom').addEventListener('click', function() {
                const bottomElement = document.querySelector('#bottom');
                if (bottomElement) {
                    bottomElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
});