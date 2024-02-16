document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.getElementById('spaceship');

    document.addEventListener('mousemove', (e) => {
        // Directly update spaceship position to follow cursor
        spaceship.style.left = e.clientX + 'px';
        spaceship.style.top = e.clientY + 'px';
    });
});

