document.addEventListener('DOMContentLoaded', function() {
    const backgroundDivs = document.getElementsByClassName('Background');

    for (let i = 0; i < backgroundDivs.length; i++) {
        backgroundDivs[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = 'lightgray';
        });

        backgroundDivs[i].addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
        });
    }
});