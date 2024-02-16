document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2; // Initialize targets to center
    let currentX = targetX, currentY = targetY; // Start spaceship at the screen center
    let angle = 0; // Initialize rotation angle

    function moveAndRotateSpaceship() {
        // Calculate the difference in position
        const dx = targetX - currentX;
        const dy = targetY - currentY;
        
        // Update position by a small fraction of the distance to target
        currentX += dx * 0.01; // Adjust the 0.01 as needed to control speed
        currentY += dy * 0.01; // Use the same multiplier for consistent movement

        // Apply the updated position
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;

        // Calculate and apply rotation
        angle = Math.atan2(dy, dx) * (180 / Math.PI);
        spaceship.style.transform = `translate(-50%, -50%) rotate(${angle + 90}deg)`; // Adjust for image orientation

        requestAnimationFrame(moveAndRotateSpaceship);
    }

    // Update target position on mouse movement
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    moveAndRotateSpaceship(); // Start the animation loop
});

