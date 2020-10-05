// Modules alias
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;


var engine;
var world;
var cubes = [];
var sol;

//Setup Moteur Physics + création des objets 
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    var options = {
        isStatic: true
    }


    sol = Bodies.rectangle(200, height, width, 25, options)
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

// function mouseDragged() {
//     boxes.push(new Box(mouseX, mouseY, 20, 20));
// }

function mouseClicked() {
    cubes.push(new Cube(mouseX, mouseY, 20, 20));
}
