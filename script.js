document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = 0, targetY = 0; // Target positions initialized
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2; // Start at the center or any desired starting point
    let lastAngle = 0; // Keep track of the last angle to avoid flipping

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function updateSpaceship() {
        // Gradually move the spaceship towards the target position
        currentX += (targetX - currentX) * 0.05; // Adjust the multiplier to control speed
        currentY += (targetY - currentY) * 0.05;

        // Calculate the angle from the spaceship to the cursor
        const angleRad = Math.atan2(targetY - currentY, targetX - currentX);
        const angleDeg = angleRad * 180 / Math.PI;

        // Prevent flipping by restricting rotation updates when the cursor is directly behind the spaceship
        if (Math.abs(angleDeg - lastAngle) < 90) {
            spaceship.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${angleDeg}deg)`;
            lastAngle = angleDeg;
        } else {
            spaceship.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});

