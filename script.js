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


var Pairs = [];



var plafond;
var joueur1;
var bordDroit;
var bordGauche;
var bordures = [];
var canMove = true;
var delay = 200;

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
    bordGauche = Bodies.rectangle(width, 0, 25, height * 2, options);

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

        let joueur1event = event.source.broadphase.pairsList[1][0].id;                      // recup les joueurs
        let joueur2event = event.source.broadphase.pairsList[1][1].id;

        if (joueur1event == 6 && joueur2event == 5 || joueur1event == 5 && joueur2event == 6) {
            if (event.source.broadphase.pairsList[1][1].speed > event.source.broadphase.pairsList[1][0].speed) {
                let collisions = Detector.collisions(event.source.broadphase.pairsList, engine);  // detection collision des joueurs

                // console.log(collisions);

                collisions.forEach(collision => {
                    if (collision.length < 2) {
                        console.log(collision);
                    };
                });

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
    if (keyIsDown(90) && canMove) {
        canMove = false;
        Body.setVelocity(cubes[0].body, Vector.create(0, -10));
        if (!canMove) {
            setTimeout(function () {
                canMove = true;
            }, delay);
        }
    }

    if (keyIsDown(68) && canMove) {
        canMove = false;
        Body.setVelocity(cubes[0].body, Vector.create(10, 0));
        if (!canMove) {
            setTimeout(function () {
                canMove = true;
            }, delay);
        }
    }

    if (keyIsDown(81) && canMove) {
        canMove = false;
        Body.setVelocity(cubes[0].body, Vector.create(-10, 0));
        if (!canMove) {
            setTimeout(function () {
                canMove = true;
            }, delay);
        }
    }

    // Commandes joueur2
    if (keyIsDown(UP_ARROW) && canMove) {
        canMove = false;
        Body.setVelocity(cubes[1].body, Vector.create(0, -10));
        if (!canMove) {
            setTimeout(function () {
                canMove = true;
            }, delay);
        }
    }

    if (keyIsDown(RIGHT_ARROW) && canMove) {
        canMove = false;
        Body.setVelocity(cubes[1].body, Vector.create(10, 0));
        if (!canMove) {
            setTimeout(function () {
                canMove = true;
            }, delay);
        }
    }

    if (keyIsDown(LEFT_ARROW) && canMove) {
        canMove = false;
        Body.setVelocity(cubes[1].body, Vector.create(-10, 0));
        if (!canMove) {
            setTimeout(function () {
                canMove = true;
            }, delay);
        }
    }




}




function keyPressed() {
    // console.log(keyCode);
    if (keyCode === 32) {
        // for (let y = 100; y < 150; y = y + 10) {
        //     for (let x = 100; x < 150; x = x + 10) {
        //         var plateform = new Cube(x, y, 100, 10, true);
        //         plateforms.push(plateform);
        //     }
        // }


        if (cubes.length < 2) {
            let joueur1 = new Cube(2, 100, 30, 30);
            cubes.push(joueur1);


            let joueur2 = new Cube(width, 100, 30, 30);
            cubes.push(joueur2);




        }






    }

}


/***************/
/*****Event*****/
/***************/

// function mouseDragged() {
//     cubes.push(new Cube(mouseX, mouseY, 20, 20));
// }


// function mouseClicked() {
//     cubes.push(new Cube(mouseX, mouseY, 20, 20));


// }






