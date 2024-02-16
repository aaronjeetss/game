document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = 0, targetY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0;
    let moving = false; // Flag to indicate if the mouse is moving

    document.addEventListener('mousemove', (e) => {
        moving = true; // Set moving to true whenever the mouse moves
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function updateSpaceship() {
        const dx = targetX - currentX;
        const dy = targetY - currentY;

        // Update position if there is a noticeable distance to cover
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
            currentX += dx * 0.05;
            currentY += dy * 0.05;
            moving = false; // Reset moving flag as the spaceship is catching up to the mouse position
        }

        // Always calculate the angle if there was recent movement
        if (moving || Math.abs(dx) > 1 || Math.abs(dy) > 1) {
            angle = Math.atan2(dy, dx) * (180 / Math.PI);
        }

        // Apply updated position and rotation
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});

