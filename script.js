document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let currentX = window.innerWidth / 2, currentY = window.innerHeight / 2; // Initial spaceship position
    
    // Assuming spaceship dimensions for offset calculation
    const spaceshipWidth = 50; // Adjust based on your spaceship's actual width
    const spaceshipHeight = 50; // Adjust based on your spaceship's actual height
    
    document.addEventListener('mousemove', (e) => {
        // Calculate target position with offset to simulate top-right corner following
        const targetX = e.clientX - spaceshipWidth;
        const targetY = e.clientY - spaceshipHeight;

        // Smooth movement towards the cursor
        const move = () => {
            // Linear interpolation for smooth movement
            currentX += (targetX - currentX) * 0.05;
            currentY += (targetY - currentY) * 0.05;

            // Apply the updated position
            spaceship.style.left = `${currentX}px`;
            spaceship.style.top = `${currentY}px`;

            // Optional: Basic rotation towards cursor
            // Calculate angle between spaceship center and cursor for rotation
            const angleRad = Math.atan2(e.clientY - (currentY + spaceshipHeight / 2), e.clientX - (currentX + spaceshipWidth / 2));
            const angleDeg = angleRad * 180 / Math.PI;
            spaceship.style.transform = `rotate(${angleDeg}deg)`;

            requestAnimationFrame(move);
        };
        
        move();
    });
});
