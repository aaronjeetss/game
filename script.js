document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let mouseX = 0, mouseY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0, targetAngle = 0, rotationStep = 0;
    const safeDistance = 100; // Safe distance to maintain from the cursor
    const lerpFactor = 0.1; // Adjust for smoother movement
    const rotationLerpFactor = 0.05; // Smoother rotation adjustment

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function lerp(start, end, factor) {
        return (1 - factor) * start + factor * end;
    }

    function shortestAngleDist(a0, a1) {
        const max = Math.PI * 2;
        const da = (a1 - a0) % max;
        return 2 * da % max - da;
    }

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    function toDegrees(angle) {
        return angle * (180 / Math.PI);
    }

    function updateSpaceship() {
        let dx = mouseX - currentX;
        let dy = mouseY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate the direction to the cursor
        targetAngle = Math.atan2(dy, dx);
        let currentAngleRadians = toRadians(angle);
        
        // Calculate the shortest way to rotate towards the target angle
        rotationStep = shortestAngleDist(currentAngleRadians, targetAngle);
        angle += toDegrees(rotationStep) * rotationLerpFactor;
        
        if (distance < safeDistance) {
            // If too close, move away smoothly
            dx = -dx;
            dy = -dy;
        }

        // Update position smoothly
        currentX += dx * lerpFactor;
        currentY += dy * lerpFactor;

        // Apply updated position and rotation
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});
