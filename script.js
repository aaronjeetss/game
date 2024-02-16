document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = 0, targetY = 0; // Target positions initialized to 0
    let currentX = 0, currentY = 0; // Current positions initialized to 0
    let dx = 0, dy = 0; // Differences in positions

    // Update the target position on mouse move
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function moveSpaceship() {
        // Calculate the difference between the target and current positions
        dx = (targetX - currentX) * 0.01; // Adjust the 0.01 to control the speed
        dy = (targetY - currentY) * 0.01; // Smaller values for slower movement

        // Update current positions
        currentX += dx;
        currentY += dy;

        // Apply the updated positions to the spaceship
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;

        // Continue the animation
        requestAnimationFrame(moveSpaceship);
    }

    // Start the movement
    moveSpaceship();
});
