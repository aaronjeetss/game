document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    document.addEventListener('mousemove', function(e) {
        // Set the target position to the mouse position
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function moveSpaceship() {
        // Calculate the difference between current and target positions
        const dx = (targetX - currentX) * 0.1; // Movement speed
        const dy = (targetY - currentY) * 0.1; // Movement speed

        // Update current positions
        currentX += dx;
        currentY += dy;

        // Apply the position to the spaceship with some boundaries
        spaceship.style.left = currentX + 'px';
        spaceship.style.top = currentY + 'px';

        requestAnimationFrame(moveSpaceship);
    }

    moveSpaceship();
});
