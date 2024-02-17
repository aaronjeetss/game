document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    const hoop = document.getElementById('hoop');
    let mouseX = 0, mouseY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0, targetAngle = 0;
    const safeDistance = 100;
    const lerpFactor = 0.1;
    const rotationLerpFactor = 0.2;
    const movementThreshold = 0.5;
    const rotationThreshold = 0.1;
    const hoopCenterX = hoop.offsetLeft + hoop.offsetWidth / 2;
    const hoopCenterY = hoop.offsetTop + hoop.offsetHeight / 2;
    const hoopRadius = 50; // Adjust based on the visual center area of the hoop
    const collisionBuffer = 5; // Narrower passable area for increased difficulty

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Existing helper functions (lerp, shortestAngleDist, toRadians, toDegrees)

    function checkCollisionWithHoop(x, y) {
        const dx = x - hoopCenterX;
        const dy = y - hoopCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
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
            // Smoother bounce effect with damping
            const bounceFactor = 0.05; // Reduce for a softer bounce
            dx *= -bounceFactor;
            dy *= -bounceFactor;
            currentX += dx;
            currentY += dy;
        }

        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});
