document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2; // Center initially
    let currentX = targetX, currentY = targetY; // Start at the center
    let lastFrameTime = Date.now();

    // Update the target position on mouse move
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function moveSpaceship() {
        const now = Date.now();
        const elapsed = now - lastFrameTime;
        const moveSpeed = 0.05; // Control the speed, lower is slower

        if (elapsed > (1000 / 60)) { // 60 fps
            const dx = (targetX - currentX) * moveSpeed;
            const dy = (targetY - currentY) * moveSpeed;

            currentX += dx;
            currentY += dy;

            // Apply the updated positions to the spaceship
            spaceship.style.left = `${currentX}px`;
            spaceship.style.top = `${currentY}px`;

            // Rotate spaceship to face cursor
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            spaceship.style.transform = `rotate(${angle + 90}deg)`; // +90 to adjust rotation

            lastFrameTime = now;
        }

        requestAnimationFrame(moveSpaceship);
    }

    moveSpaceship();
});
