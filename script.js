document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = 0, targetY = 0; // Target positions initialized
    let currentX = 0, currentY = 0; // Current positions initialized

    // Function to update spaceship's position smoothly
    const updatePosition = () => {
        // Gradually move the spaceship towards the target position
        currentX += (targetX - currentX) * 0.05; // Slow movement towards target X
        currentY += (targetY - currentY) * 0.05; // Slow movement towards target Y

        // Adjusting so the top right of the spaceship aligns with the cursor
        // Assume spaceship width is 50px as set in CSS
        const adjustedX = currentX - 50; // Adjust X to align the spaceship's right side with the cursor

        spaceship.style.left = `${adjustedX}px`;
        spaceship.style.top = `${currentY}px`;

        requestAnimationFrame(updatePosition);
    };

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    updatePosition(); // Start the animation loop
});
