document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
    let currentX = targetX, currentY = targetY;
    let angle = 0;
    const avoidanceRadius = 100; // Distance within which the spaceship tries to avoid the cursor

    document.addEventListener('mousemove', (e) => {
        const dx = e.clientX - currentX;
        const dy = e.clientY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the cursor is within the avoidance radius, set the target to move in the opposite direction
        if (distance < avoidanceRadius) {
            const escapeAngle = Math.atan2(dy, dx);
            // Calculate the target position to move away from the cursor
            targetX = currentX - Math.cos(escapeAngle) * avoidanceRadius;
            targetY = currentY - Math.sin(escapeAngle) * avoidanceRadius;
        } else {
            // Move normally towards the cursor if outside the avoidance radius
            targetX = e.clientX;
            targetY = e.clientY;
        }
    });

    function updateSpaceship() {
        let dx = targetX - currentX;
        let dy = targetY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
            // Apply easing for smoother movement
            currentX += dx * 0.1;
            currentY += dy * 0.1;
        }

        // Calculate and update the angle regardless of the distance
        angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Apply updated position and rotation
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});
