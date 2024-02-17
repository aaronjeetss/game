document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let mouseX = 0, mouseY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0, targetAngle = 0;
    const safeDistance = 100; // Safe distance to maintain from the cursor
    const lerpFactor = 0.1; // Adjust for smoother movement
    const rotationLerpFactor = 0.2; // Increased for faster rotation adjustment
    const movementThreshold = 0.5; // Threshold for movement update
    const rotationThreshold = 0.1; // Threshold for rotation update in degrees

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

        if (distance > movementThreshold) {
            // Update position if the distance is above the threshold
            currentX += dx * lerpFactor;
            currentY += dy * lerpFactor;
        }

        // Calculate the direction to the cursor
        targetAngle = Math.atan2(dy, dx);
        let currentAngleRadians = toRadians(angle);
        
        // Calculate the shortest way to rotate towards the target angle
        let rotationStep = shortestAngleDist(currentAngleRadians, targetAngle);
        let rotationDelta = toDegrees(rotationStep) * rotationLerpFactor;

        if (Math.abs(rotationDelta) > rotationThreshold || distance > movementThreshold) {
            angle += rotationDelta;
        }

        // Apply updated position and rotation if there's significant movement or rotation
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});
