document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const followCursor = () => {
        // Calculate the difference between current position and target (mouse) position
        const rect = spaceship.getBoundingClientRect();
        const currentX = rect.left + rect.width / 2;
        const currentY = rect.top + rect.height / 2;
        
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;

        // Update spaceship position to follow cursor, adjust '0.05' to control the speed
        const targetX = currentX + dx * 0.05;
        const targetY = currentY + dy * 0.05;

        // Apply the position, adjusting for the centering transform
        spaceship.style.transform = `translate(-50%, -50%) translate(${targetX}px, ${targetY}px)`;

        requestAnimationFrame(followCursor);
    };

    followCursor(); // Start the following behavior
});
