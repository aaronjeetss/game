document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    const hoop = document.getElementById('hoop');
    let mouseX = 0, mouseY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0, targetAngle = 0;
    const safeDistance = 100; // Safe distance to maintain from the cursor
    const lerpFactor = 0.1; // Adjust for smoother movement
    const rotationLerpFactor = 0.2; // Increased for faster rotation adjustment
    const movementThreshold = 0.5; // Threshold for movement update
    const rotationThreshold = 0.1; // Threshold for rotation update in degrees
    // Define hoop characteristics and collision detection parameters
    const hoopCenterX = hoop.offsetLeft + hoop.offsetWidth / 2;
    const hoopCenterY = hoop.offsetTop + hoop.offsetHeight / 2;
    const hoopRadius = 50; // Effective radius for the hoop's center area
    const collisionBuffer = 15; // Defines a buffer zone for the collision detection

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

    function checkCollisionWithHoop(x, y) {
        const dx = x - hoopCenterX;
        const dy = y - hoopCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        // Adjust these values based on the actual size of your hoop image and desired behavior
        if (distance < hoopRadius + collisionBuffer && distance > hoopRadius - collisionBuffer) {
            return 'bounce';
        } else if (distance <= hoopRadius - collisionBuffer) {
            return 'safe';
        }
        return 'none';
    }

    function updateSpaceship() {
        let dx = mouseX - currentX;
        let dy = mouseY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > movementThreshold) {
            currentX += dx * lerpFactor;
            currentY += dy * lerpFactor;
        }

        targetAngle = Math.atan2(dy, dx);
        let currentAngleRadians = toRadians(angle);
        let rotationStep = shortestAngleDist(currentAngleRadians, targetAngle);
        let rotationDelta = toDegrees(rotationStep) * rotationLerpFactor;

        if (Math.abs(rotationDelta) > rotationThreshold || distance > movementThreshold) {
            angle += rotationDelta;
        }

        const collision = checkCollisionWithHoop(currentX, currentY);
        if (collision === 'bounce') {
            // Implement bouncing effect by reversing direction and reducing the magnitude
            currentX -= dx * 0.2;
            currentY -= dy * 0.2;
        }

        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});
