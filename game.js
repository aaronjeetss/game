document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('gameContainer');
    const spaceship = document.getElementById('spaceship');

    gameContainer.addEventListener('mousemove', (e) => {
        // Get the mouse position relative to the gameContainer
        const rect = gameContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Position the spaceship to follow the mouse cursor
        // The spaceship's center aligns with the cursor
        const spaceshipWidth = spaceship.offsetWidth;
        const spaceshipHeight = spaceship.offsetHeight;
        spaceship.style.left = `${mouseX - spaceshipWidth / 2}px`;
        spaceship.style.top = `${mouseY - spaceshipHeight / 2}px`;
    });
});

