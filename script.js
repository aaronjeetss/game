document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('gameContainer');
    const spaceship = document.getElementById('spaceship');

    gameContainer.addEventListener('mousemove', function(e) {
        // Calculate spaceship position relative to the container
        let offsetX = e.offsetX;
        let offsetY = e.offsetY;

        // Apply the position to the spaceship
        spaceship.style.left = offsetX + 'px';
        spaceship.style.top = offsetY + 'px';
    });
});
