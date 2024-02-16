document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('gameContainer');
    const spaceship = document.getElementById('spaceship');

    gameContainer.addEventListener('mousemove', (e) => {
        const rect = gameContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        spaceship.style.left = `${mouseX - spaceship.offsetWidth / 2}px`;
        spaceship.style.top = `${mouseY - spaceship.offsetHeight / 2}px`;
    });
});

