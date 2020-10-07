

// Modules alias
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Vector = Matter.Vector,
    Mouse = Matter.Mouse,
    Events = Matter.Events,
    Pair = Matter.Pair,
    Detector = Matter.Detector;


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


    //Setup Moteur Physics + création des objets 
    function setup() {
        createCanvas(window.innerWidth, window.innerHeight);
        engine = Engine.create();

        world = engine.world;
        Engine.run(engine);



        var options = {
            isStatic: true
        }

        plafond = Bodies.rectangle(0, 0, width * 2, 70, options);
        sol = Bodies.rectangle(width / 2, height, width, 25, options);
        bordDroit = Bodies.rectangle(0, 0, 25, height * 2, options);
        bordGauche = Bodies.rectangle(window.innerWidth, 0, 25, height * 2, options);

        bordures.push(plafond, sol, bordDroit, bordGauche);

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



        });

        
        background(51);

        cubes.forEach(cube => {
            cube.show();
        });
        
        fill(177);
        rectMode(CENTER);
        noStroke();


        rect(sol.position.x, sol.position.y, width, 25);
        rect(bordGauche.position.x, height, 25, height * 2);
        rect(0, bordDroit.position.y, 25, height * 4);
        rect(plafond.position.x, plafond.position.y, width * 2, 25)


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



    function keyPressed() {

        if (keyCode === 32) {
            if (cubes.length < 2) {
                let joueur1 = new Cube(2, 100, 30, 30);
                cubes.push(joueur1);

                let joueur2 = new Cube(width, 100, 30, 30);
                cubes.push(joueur2);
            }
        }
    }
