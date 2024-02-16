document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let mouseX = 0, mouseY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0, targetAngle = 0;
    const safeDistance = 100; // Safe distance to maintain from the cursor
    const lerpFactor = 0.1; // Adjust for smoother movement, lower is smoother

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function lerp(start, end, factor) {
        return (1 - factor) * start + factor * end;
    }

    function updateSpaceship() {
        let dx = mouseX - currentX;
        let dy = mouseY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < safeDistance) {
            // Move the spaceship away from the cursor
            const escapeAngle = Math.atan2(dy, dx);
            dx = -Math.cos(escapeAngle) * safeDistance;
            dy = -Math.sin(escapeAngle) * safeDistance;
        } else {
            // Normalize dx and dy for a consistent movement speed
            dx = dx / distance * safeDistance;
            dy = dy / distance * safeDistance;
        }

        // Smoothly update the spaceship's position
        currentX = lerp(currentX, currentX + dx, lerpFactor);
        currentY = lerp(currentY, currentY + dy, lerpFactor);

        // Calculate the target angle for smooth rotation
        targetAngle = Math.atan2(mouseY - currentY, mouseX - currentX) * (180 / Math.PI);
        angle = lerp(angle, targetAngle, lerpFactor);

        // Apply updated position and rotation
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});
