document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = 0, targetY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0;
    let moving = false; // Flag to indicate if the mouse is moving
    const safeDistance = 100; // Safe distance from the mouse pointer

    document.addEventListener('mousemove', (e) => {
        moving = true; // Set moving to true whenever the mouse moves
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function updateSpaceship() {
        let dx = targetX - currentX;
        let dy = targetY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Update position if there is a noticeable distance to cover
        if (distance > safeDistance) {
            const ratio = (distance - safeDistance) / distance;
            dx *= ratio;
            dy *= ratio;

            currentX += dx * 0.05;
            currentY += dy * 0.05;
        }

        // Always calculate the angle if there was recent movement
        if (moving || distance > safeDistance) {
            angle = Math.atan2(dy, dx) * (180 / Math.PI);
            moving = false; // Consider the spaceship as having caught up
        }

        // Apply updated position and rotation
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});
