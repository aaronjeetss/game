document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let mouseX = 0, mouseY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let velocityX = 0, velocityY = 0;
    let angle = 0;
    const safeDistance = 100; // Safe distance to maintain from the cursor
    const damping = 0.05; // Damping factor for smooth transitions

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateSpaceship() {
        let dx = mouseX - currentX;
        let dy = mouseY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const direction = Math.atan2(dy, dx);

        if (distance < safeDistance) {
            // Apply a force to move the spaceship away from the cursor
            dx -= Math.cos(direction) * safeDistance;
            dy -= Math.sin(direction) * safeDistance;
        }

        // Calculate velocity for smooth movement
        velocityX += (dx - velocityX) * damping;
        velocityY += (dy - velocityY) * damping;

        // Update position based on velocity
        currentX += velocityX * damping;
        currentY += velocityY * damping;

        // Smoothly update the angle for rotation
        angle = direction * (180 / Math.PI);

        // Apply updated position and rotation
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});

    updateSpaceship();
});
