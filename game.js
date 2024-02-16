document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            spaceship.src = 'images/spaceship-boosters.png'; // Change to boosters image
            moveSpaceship();
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.code === 'Space') {
            spaceship.src = 'images/spaceship.png'; // Change back to normal image
        }
    });

    function moveSpaceship() {
        let position = parseInt(window.getComputedStyle(spaceship).bottom);
        position += 10; // Move up by 10px
        spaceship.style.bottom = `${position}px`;
    }
});

