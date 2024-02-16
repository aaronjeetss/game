document.addEventListener('keydown', function(event) {
    const spaceship = document.getElementById('spaceship');
    let left = spaceship.offsetLeft;
    let top = spaceship.offsetTop;
    
    switch(event.keyCode) {
        case 37: // Left arrow
            left -= 10;
            spaceship.style.backgroundImage = "url('spaceship-boosters.png')"; // Moving left
            break;
        case 38: // Up arrow
            top -= 10;
            spaceship.style.backgroundImage = "url('spaceship-boosters.png')"; // Moving up
            break;
        case 39: // Right arrow
            left += 10;
            spaceship.style.backgroundImage = "url('spaceship-boosters.png')"; // Moving right
            break;
        case 40: // Down arrow
            top += 10;
            spaceship.style.backgroundImage = "url('spaceship-boosters.png')"; // Moving down
            break;
    }

    spaceship.style.left = `${left}px`;
    spaceship.style.top = `${top}px`;
});

document.addEventListener('keyup', function() {
    // Change back to the spaceship image without boosters when keys are released
    const spaceship = document.getElementById('spaceship');
    spaceship.style.backgroundImage = "url('spaceship.png')";
});
