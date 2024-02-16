document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = 0, targetY = 0; // Cursor target position
    let currentX = 0, currentY = 0; // Current spaceship position

    // Correctly set the initial position of the spaceship
    spaceship.style.transformOrigin = 'top right'; // Adjust rotation origin to top right

    document.addEventListener('mousemove', (e) => {
        // Update target to mouse position
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function updateSpaceship() {
        // Calculate distance to move
        const dx = (targetX - currentX);
        const dy = (targetY - currentY);

        // Update position more smoothly
        currentX += dx * 0.05; // Adjust speed as needed
        currentY += dy * 0.05;

        // Calculate angle of rotation towards cursor
        const angle = Math.atan2(dy - 50, dx - 50) * (180 / Math.PI); // Offset by spaceship dimensions

        // Apply rotation and position
        spaceship.style.transform = `translate(${currentX - 50}px, ${currentY - 50}px) rotate(${angle}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});

