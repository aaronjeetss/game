document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    const spaceshipRect = spaceship.getBoundingClientRect();
    const offsetX = spaceshipRect.width / 2; // Half the spaceship's width
    const offsetY = -spaceshipRect.height / 2; // Half the spaceship's height, negative to go up
    let targetX = 0, targetY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function updateSpaceship() {
        const dx = targetX - offsetX - currentX;
        const dy = targetY + offsetY - currentY;

        // Simple linear interpolation for movement
        currentX += dx * 0.05;
        currentY += dy * 0.05;

        // Update position
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;

        // Calculate and apply rotation towards the cursor
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        spaceship.style.transform = `rotate(${angle}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});

