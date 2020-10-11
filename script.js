

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    Body = Matter.Body,
    Vector = Matter.Vector,
<<<<<<< Updated upstream
    Mouse = Matter.Mouse,
    Events = Matter.Events,
    Pair = Matter.Pair,
    Detector = Matter.Detector;
=======
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    Pair = Matter.Pair,
    SAT = Matter.SAT,
    Detector = Matter.Detector,
    MouseConstraint = Matter.MouseConstraint;
>>>>>>> Stashed changes

// create an engine
var engine = Engine.create();
var Joueurs = [];

<<<<<<< Updated upstream
var engine;
var world;
var cubes = [];
var sol;
var plafond;
var bordDroit;
var bordGauche;
var plateforms = [];
var canMovep1 = true;
var canMovep2 = true;
var delay = 200;
var bordures = [];
var velocityX = 8;
var velocityY = 10;
var p1Velocity;
var p2Velocity;

=======
// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        showShadows: true,
        wireframes: false,
        background: 'transparent',
    },

});
>>>>>>> Stashed changes

    //Setup Moteur Physics + création des objets 
    function setup() {
        createCanvas(window.innerWidth, window.innerHeight);
        engine = Engine.create();

        world = engine.world;
        Engine.run(engine);

const canvas = document.getElementsByTagName('canvas');
console.log(canvas[0].getContext("2d"));


<<<<<<< Updated upstream
        var options = {
            isStatic: true
        }

        plafond = Bodies.rectangle(0, 0, width * 2, 70, options);
        sol = Bodies.rectangle(width / 2, height, width, 25, options);
        bordDroit = Bodies.rectangle(0, 0, 25, height * 2, options);
        bordGauche = Bodies.rectangle(window.innerWidth, 0, 25, height * 2, options);
=======

render.canvas.height = window.innerHeight;
render.canvas.width = window.innerWidth;


let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, { mouse: mouse });
World.add(engine.world, mouseConstraint);
render.mouse = mouse;

World.add(engine.world, mouse);


>>>>>>> Stashed changes

        bordures.push(plafond, sol, bordDroit, bordGauche);

<<<<<<< Updated upstream
        //bordures Physique
        bordures.forEach(bord => {
            World.add(world, bord);
        });
    }



    /*****************/
    /*Moteur de Rendu*/
    /*****************/
    function draw() {

        Engine.update(engine);


        Events.on(engine, 'collisionStart', function (event) { // event de collision

            let collisions = Detector.collisions(event.source.broadphase.pairsList, engine);  // detection collision des joueurs

            var i, pair,
                length = event.pairs.length;
            for (i = 0; i < length; i++) {
                pair = event.pairs[i];

                if ((pair.bodyA.id != 2 && pair.bodyA.id != 3 && pair.bodyA.id != 4)) {
                    if ((pair.bodyA.id === 5 || pair.bodyB.id === 6)) {
                        // Collision entre deux cubes
                        p1Velocity = pair.bodyA.velocity;
                        p2Velocity = pair.bodyB.velocity;

                        if (Vector.magnitude(p1Velocity) > Vector.magnitude(p2Velocity)) {
                            console.log("player1 wins");
                        } else {
                            console.log("player2 wins");
                        }

                        continue;
                    }
                }
            }
=======
let sol = new Rectangle(0, render.canvas.height, render.canvas.width * 2, 100, {
    isStatic: true, render: {
        fillStyle: 'lightgrey',
    }
});
let plafond = new Rectangle(0, 0, render.canvas.width * 2, 100, {
    isStatic: true, isStatic: true, render: {
        fillStyle: 'lightgrey',
    }
});

let droit = new Rectangle(0, 0, 100, render.canvas.height * 2, {
    isStatic: true, isStatic: true, render: {
        fillStyle: 'lightgrey',
    }
});
let gauche = new Rectangle(render.canvas.width, 0, 100, render.canvas.height * 2, {
    isStatic: true, isStatic: true, render: {
        fillStyle: 'lightgrey',
    }
});



for (var i = 1; i <= 2; i++) {

    Joueurs[i] = new Joueur('Joueur' + i, new Rectangle(getRandomInt(window.innerWidth), getRandomInt(window.innerHeight / 8), 40, 40, {
        restitution: 1.6,
        friction: 1,
        render: {
            fillStyle: 'lightgreen',
            strokeStyle: 'transparent',
            lineWidth: 0,
        }
    }))

};

Events.on(engine, "collisionStart", function (event) {
>>>>>>> Stashed changes

    var joueur2 = engine.world.bodies[5];
    var joueur1 = engine.world.bodies[4];

<<<<<<< Updated upstream

        });

        
        background(51);

        cubes.forEach(cube => {
            cube.show();
        });
        
        fill(177);
        rectMode(CENTER);
        noStroke();
=======
    if (Detector.canCollide(joueur1.collisionFilter, joueur2.collisionFilter)) {

        let collision = SAT.collides(joueur1, joueur2, event);

        if (collision.collided == true) {

            if (joueur1.speed < joueur2.speed) {
                if (joueur2.speed > 9) {
                    console.log(Joueurs[1]);
                    new Particule(Joueurs[1].rectangle).blink();
                    Joueurs[1].rectangle.smash();
                    console.log(engine.world.bodies)
                }
            }
            else {
                if (joueur1.speed > 9) {
                    new Particule(Joueurs[2].rectangle).blink();
                    Joueurs[2].rectangle.smash();
                }
            }
        }
    }
>>>>>>> Stashed changes

    Joueurs.forEach(joueur => {
        if (joueur.rectangle.vie == 0) {
            //winner
        }
    });

<<<<<<< Updated upstream
        rect(sol.position.x, sol.position.y, width, 25);
        rect(bordGauche.position.x, height, 25, height * 2);
        rect(0, bordDroit.position.y, 25, height * 4);
        rect(plafond.position.x, plafond.position.y, width * 2, 25)
=======
>>>>>>> Stashed changes


        // Commandes joueur1
        if (keyIsDown(90) && canMovep1) {
            movement(1, "up");
        }

<<<<<<< Updated upstream
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
=======
});


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
>>>>>>> Stashed changes

        if (keyIsDown(RIGHT_ARROW) && canMovep2) {
            movement(2, "right");
        }

<<<<<<< Updated upstream
        if (keyIsDown(LEFT_ARROW) && canMovep2) {
            movement(2, "left");
        }
=======
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
>>>>>>> Stashed changes

        if (keyIsDown(DOWN_ARROW) && canMovep2) {
            movement(2, "down");
        }
    }


<<<<<<< Updated upstream
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
=======
/*************/
/***CONTROL***/
/*************/
>>>>>>> Stashed changes

document.addEventListener('keydown', logKey);


<<<<<<< Updated upstream
    function keyPressed() {

        if (keyCode === 32) {
            if (cubes.length < 2) {
                let joueur1 = new Cube(2, 100, 30, 30);
                cubes.push(joueur1);
=======
function logKey(key) {
    let bd = engine.world.bodies[5];

    switch (key.code) {
        case "ArrowUp":
            Body.setVelocity(bd, Vector.create(bd.velocity.x, bd.velocity.y - 5));
            break;
        case "ArrowRight":
            Body.setVelocity(bd, Vector.create(bd.velocity.x + 5, bd.velocity.y + 0));
            break;
        case "ArrowLeft":
            Body.setVelocity(bd, Vector.create(bd.velocity.x - 5, bd.velocity.y + 0));
            break;
        case "ArrowDown":
            Body.setVelocity(bd, Vector.create(bd.velocity.x, bd.velocity.y + 5));
            break;
    }
}
>>>>>>> Stashed changes

                let joueur2 = new Cube(width, 100, 30, 30);
                cubes.push(joueur2);
            }
        }
    }
