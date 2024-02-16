document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let mouseX = 0, mouseY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0;
    const safeDistance = 100; // Safe distance to maintain from the cursor

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateSpaceship() {
        let dx = mouseX - currentX;
        let dy = mouseY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < safeDistance) {
            // If the cursor is too close, move the spaceship away from the cursor
            dx = -dx;
            dy = -dy;
        }

        // Normalize dx and dy to move the spaceship at a constant speed
        const length = Math.sqrt(dx * dx + dy * dy);
        if (length > 0) {
            dx /= length;
            dy /= length;
        }

        // Update spaceship position, moving slower for smoother animation
        currentX += dx * 2; // Adjust speed as necessary
        currentY += dy * 2; // Adjust speed as necessary

        // Calculate and update the angle for the spaceship to face towards or away from the cursor
        angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Apply updated position and rotation
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});

