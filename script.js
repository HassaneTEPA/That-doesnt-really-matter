

// Modules alias
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Vector = Matter.Vector,
    Mouse = Matter.Mouse;


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
var p1Veclocity = Vector.create(0,0);
var p2Veclocity = Vector.create(0,0);
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

    bordGauche = Bodies.rectangle(window.innerWidth, 0, 25, height * 2, options);


    World.add(world, sol);
    World.add(world, plafond);
    World.add(world, bordDroit);
    World.add(world, bordGauche);



    if (plateforms.length != 0) {
        plateforms.forEach(plateform => {
            World.add(world, plateform);
        });
    }

}


/*****************/
/*Moteur de Rendu*/
/*****************/
function draw() {
    background(51);

    cubes.forEach(cube => {
        cube.show();
    });

    plateforms.forEach(plateform => {
        plateform.show();
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
        movement(1,"up");
    }

    if (keyIsDown(68) && canMovep1) {
        movement(1,"right");
    }

    if (keyIsDown(81) && canMovep1) {
        movement(1,"left");
    }

    if (keyIsDown(83) && canMovep1) {
        movement(1,"down");
    }

    // Commandes joueur2
    if (keyIsDown(UP_ARROW) && canMovep2) {
        movement(2,"up");
    }

    if (keyIsDown(RIGHT_ARROW) && canMovep2) {
        movement(2,"right");
    }

    if (keyIsDown(LEFT_ARROW) && canMovep2) {
        movement(2,"left");
    }

    if (keyIsDown(DOWN_ARROW) && canMovep2) {
        movement(2,"down");
    }
}


function movement(player,key) {
    // Bouger la fonction mouvement
    switch (player) {
        case 1 :
            switch (key) {
                case "up" :
                    Body.setVelocity(cubes[0].body, Vector.create(cubes[0].body.velocity.x,cubes[0].body.velocity.y - 10));
                break;
                case "right" :
                    Body.setVelocity(cubes[0].body, Vector.create(cubes[0].body.velocity.x + 10,cubes[0].body.velocity.y + 0));
                break;
                case "left" :
                    Body.setVelocity(cubes[0].body, Vector.create(cubes[0].body.velocity.x - 10,cubes[0].body.velocity.y + 0));
                break;
                case "down" :
                    Body.setVelocity(cubes[0].body, Vector.create(cubes[0].body.velocity.x,cubes[0].body.velocity.y + 10));
                break;
            }
            canMovep1 = false;
            if (!canMovep1) {
                setTimeout(function() {
                    canMovep1 = true;
                },delay);
            }
        break;
        case 2 :
            switch (key) {
                case "up" :
                    Body.setVelocity(cubes[1].body, Vector.create(cubes[1].body.velocity.x,cubes[1].body.velocity.y - 10));
                break;
                case "right" :
                    Body.setVelocity(cubes[1].body, Vector.create(cubes[1].body.velocity.x + 10,cubes[0].body.velocity.y + 0));
                break;
                case "left" :
                    Body.setVelocity(cubes[1].body, Vector.create(cubes[1].body.velocity.x - 10,cubes[1].body.velocity.y + 0));
                break;
                case "down" :
                    Body.setVelocity(cubes[1].body, Vector.create(cubes[1].body.velocity.x,cubes[1].body.velocity.y + 10));
                break;
            }
            canMovep2 = false;
            if (!canMovep2) {
                setTimeout(function() {
                    canMovep2 = true;
                },delay);
            }
    } 
}

function keyPressed() {
    if (keyCode === 32) {
        // for (let y = 100; y < 150; y = y + 10) {
        //     for (let x = 100; x < 150; x = x + 10) {
        //         var plateform = new Cube(x, y, 100, 10, true);
        //         plateforms.push(plateform);
        //     }
        // }


        let joueur1 = new Cube(2, 100, 30, 30);

        cubes.push(joueur1);


        let joueur2 = new Cube(width, 100, 30, 30);


        cubes.push(joueur2);



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






