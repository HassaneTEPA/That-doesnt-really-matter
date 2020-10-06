var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Vector = Matter.Vector,
    Bodies = Matter.Bodies;

var engine;
var world;
var cubes = [];
var sol;
var totalCubes;

//Setup Moteur Physics + création des objets 
function setup() {
    // Création du canvas + résolutions
    createCanvas(window.innerWidth, window.innerHeight);


    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    // Options du sol
    var options = {
        isStatic: true
    }

    // Ajout du sol 
    sol = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 25, options)
    World.add(world, sol);

    generateMur(10,10,10,10);

}


/*****************/
/*Moteur de Rendu*/
/*****************/
function draw() {
    // Couleur du background
    background(51);
    // Génération des cubes

    
    cubes.forEach(cube => {
        cube.show();
    });

    

    fill(177);
    rectMode(CENTER);
    noStroke();
    rect(sol.position.x, sol.position.y, window.innerWidth, 25/2)

    if (keyIsDown(RIGHT_ARROW)) {
        cubes.forEach(cube => {
            Body.setStatic(cube.body, false);
            cube.body.restitution = 1;
            console.log(cubes[0].body.velocity.y);
        });
    }

    setInterval(function() {
        if(cubes[0].body.velocity.y > 12) {
            for (var i = 0; i < cubes.length; i++) {
                Body.rotate(cubes[i].body, 3)
            }
        }
    },1)
}

/***************/
/*****Event*****/
/***************/
/*
function mouseDragged() {
    cubes.push(new Cube(mouseX, mouseY, 20, 20));
}


function mouseClicked() {
    // cubes.push(new Cube(mouseX, mouseY, 80, 80));
    i = 0;
    while (i < 100) {
        cubes.push(new Cube(mouseX, mouseY, random(10, 50), random(10, 50)));
        i++
    }

}
*/

// Ajout du mur
function generateMur(largeur,hauteur, cubewidth, cubeheight) {
    var heightpx = cubeheight;
    var widthpx = cubewidth;
    var widthpos = window.innerWidth - window.innerWidth / 2;
    var nextpos = widthpos + cubewidth;
    totalCubes = largeur+hauteur;
    // Generation de la largeur du mur
    for (var i = 0; i < largeur; i++) {
        cubes.push(new Cube( widthpos,window.innerHeight - heightpx - 400,cubewidth,cubeheight, true));
        // Generation de la hauteur
        for (var j = 0; j < hauteur; j++) {
            cubes.push(new Cube(widthpos,window.innerHeight - heightpx - 400,cubewidth,cubeheight, true));
            heightpx += (cubeheight + 1);
        }
        widthpos += (cubewidth+1);
        heightpx = cubeheight;
    }
}