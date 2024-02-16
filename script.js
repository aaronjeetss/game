document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    // Initial spaceship position
    let posX = window.innerWidth / 2, posY = window.innerHeight / 2;
    // Move spaceship to the initial position
    spaceship.style.left = `${posX}px`;
    spaceship.style.top = `${posY}px`;

    document.addEventListener('mousemove', (e) => {
        // Target mouse position
        const targetX = e.clientX;
        const targetY = e.clientY;

        // Function to move spaceship towards the mouse position
        const moveSpaceship = () => {
            // Calculate difference between current and target positions
            const dx = targetX - posX;
            const dy = targetY - posY;

            // Update current position
            posX += dx * 0.01; // Adjust the multiplier to change speed
            posY += dy * 0.01;

            // Apply updated position
            spaceship.style.left = `${posX}px`;
            spaceship.style.top = `${posY}px`;

            requestAnimationFrame(moveSpaceship);
        };

        moveSpaceship();
    });
});
