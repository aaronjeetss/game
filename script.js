document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = 0, targetY = 0; // Target positions initialized
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2; // Start at screen center or any desired starting point
    let spaceshipWidth = 50; // Match this with your CSS or dynamically calculate if needed

    // Function to update spaceship's position and rotation smoothly
    const updatePositionAndRotation = () => {
        // Gradually move the spaceship towards the target position
        currentX += (targetX - currentX) * 0.05; // Slow movement towards target X
        currentY += (targetY - currentY) * 0.05; // Slow movement towards target Y

        // Calculate angle to rotate spaceship towards cursor
        const angleRad = Math.atan2(targetY - currentY, targetX - (currentX + spaceshipWidth / 2));
        const angleDeg = angleRad * 180 / Math.PI;

        // Adjust position to keep the top right corner aligned with cursor
        // Subtract spaceship width to align its right side to the cursor
        const adjustedX = currentX - spaceshipWidth;

        // Apply updated position and rotation
        spaceship.style.left = `${adjustedX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg)`;

        requestAnimationFrame(updatePositionAndRotation);
    };

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    updatePositionAndRotation(); // Start the animation loop
});
