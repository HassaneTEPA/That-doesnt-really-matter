var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var cubes = [];
var sol;

//Setup Moteur Physics + création des objets 
function setup() {
    createCanvas(1920, 1080);


    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    var options = {
        isStatic: true
    }

    sol = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 25, options)
    World.add(world, sol);
}


/*****************/
/*Moteur de Rendu*/
/*****************/
function draw() {
    background(51);

    cubes.forEach(cube => {
        cube.show();
    });
    fill(177);
    rectMode(CENTER);
    noStroke();
    rect(sol.position.x, sol.position.y, width, 25)

}



/***************/
/*****Event*****/
/***************/

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

