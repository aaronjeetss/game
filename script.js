document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', function(e) {
        // Update mouse position
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Directly move the spaceship to the mouse position
        spaceship.style.left = mouseX + 'px';
        spaceship.style.top = mouseY + 'px';
    });
});

