document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    const hoop = document.getElementById('hoop');
    let mouseX = 0, mouseY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0, targetAngle = 0;
    const lerpFactor = 0.1;
    const rotationLerpFactor = 0.2;

    const hoopCenterX = hoop.offsetLeft + hoop.offsetWidth / 2;
    const hoopCenterY = hoop.offsetTop + hoop.offsetHeight / 2;
    const hoopWidth = hoop.offsetWidth;
    const hoopHeight = hoop.offsetHeight;
    // Define the vertical safe zone as a percentage of the hoop's height
    const safeZoneHeightPercentage = 0.3; // 30% of the hoop's height is safe zone
    const safeZoneHeight = hoopHeight * safeZoneHeightPercentage;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Existing helper functions (lerp, shortestAngleDist, toRadians, toDegrees)

    function isInSafeZone(x, y) {
        // Check if within vertical bounds of the safe zone
        const isWithinVerticalBounds = y > (hoopCenterY - safeZoneHeight / 2) && y < (hoopCenterY + safeZoneHeight / 2);
        // Check if within horizontal bounds of the hoop itself
        const isWithinHorizontalBounds = x > (hoopCenterX - hoopWidth / 2) && x < (hoopCenterX + hoopWidth / 2);

        return isWithinVerticalBounds && isWithinHorizontalBounds;
    }

    function updateSpaceship() {
        let dx = mouseX - currentX;
        let dy = mouseY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Update position
        currentX += dx * lerpFactor;
        currentY += dy * lerpFactor;

        targetAngle = Math.atan2(dy, dx);
        let currentAngleRadians = toRadians(angle);
        let rotationStep = shortestAngleDist(currentAngleRadians, targetAngle);
        angle += toDegrees(rotationStep) * rotationLerpFactor;

        // Collision detection
        if (!isInSafeZone(currentX, currentY)) {
            // Implement a smoother bounce logic here
            // Reverse direction with damping to prevent glitching
            dx *= -0.1; // Damping factor for horizontal direction
            dy *= -0.1; // Damping factor for vertical direction
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
