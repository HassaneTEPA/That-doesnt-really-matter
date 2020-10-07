// Commandes joueur1
if (keyIsDown(90) && canMovep1) {
    movement(1, "up");
}

if (keyIsDown(68) && canMovep1) {
    movement(1, "right");
}

if (keyIsDown(81) && canMovep1) {
    movement(1, "left");
}

if (keyIsDown(83) && canMovep1) {
    movement(1, "down");
}

// Commandes joueur2
if (keyIsDown(UP_ARROW) && canMovep2) {
    movement(2, "up");
}

if (keyIsDown(RIGHT_ARROW) && canMovep2) {
    movement(2, "right");
}

if (keyIsDown(LEFT_ARROW) && canMovep2) {
    movement(2, "left");
}

if (keyIsDown(DOWN_ARROW) && canMovep2) {
    movement(2, "down");
}



function movement(player, key) {
    // Bouger la fonction mouvement
    switch (player) {
        case 1:
            switch (key) {
                case "up":
                    Body.setVelocity(cubes[0].body, Vector.create(cubes[0].body.velocity.x, cubes[0].body.velocity.y - velocityY));
                    break;
                case "right":
                    Body.setVelocity(cubes[0].body, Vector.create(cubes[0].body.velocity.x + velocityX, cubes[0].body.velocity.y + 0));
                    break;
                case "left":
                    Body.setVelocity(cubes[0].body, Vector.create(cubes[0].body.velocity.x - velocityX, cubes[0].body.velocity.y + 0));
                    break;
                case "down":
                    Body.setVelocity(cubes[0].body, Vector.create(cubes[0].body.velocity.x, cubes[0].body.velocity.y + velocityY));
                    break;
            }
            canMovep1 = false;
            if (!canMovep1) {
                setTimeout(function () {
                    canMovep1 = true;
                }, delay);
            }
            break;
        case 2:
            switch (key) {
                case "up":
                    Body.setVelocity(cubes[1].body, Vector.create(cubes[1].body.velocity.x, cubes[1].body.velocity.y - velocityY));
                    break;
                case "right":
                    Body.setVelocity(cubes[1].body, Vector.create(cubes[1].body.velocity.x + velocityX, cubes[0].body.velocity.y + 0));
                    break;
                case "left":
                    Body.setVelocity(cubes[1].body, Vector.create(cubes[1].body.velocity.x - velocityX, cubes[1].body.velocity.y + 0));
                    break;
                case "down":
                    Body.setVelocity(cubes[1].body, Vector.create(cubes[1].body.velocity.x, cubes[1].body.velocity.y + velocityY));
                    break;
            }
            canMovep2 = false;
            if (!canMovep2) {
                setTimeout(function () {
                    canMovep2 = true;
                }, delay);
            }
    }
}