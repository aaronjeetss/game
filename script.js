document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = 0, targetY = 0;
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2;
    let angle = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function updateSpaceship() {
        const dx = targetX - currentX;
        const dy = targetY - currentY;

        // Update position if there is a noticeable distance to cover
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
            currentX += dx * 0.05;
            currentY += dy * 0.05;
        }

        // Calculate rotation
        angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Apply updated position and rotation
        spaceship.style.left = `${currentX}px`;
        spaceship.style.top = `${currentY}px`;
        // Rotate around the center; adjust if your image's "nose" is not at the center
        spaceship.style.transform = `rotate(${angle + 90}deg)`;

        requestAnimationFrame(updateSpaceship);
    }

    updateSpaceship();
});
