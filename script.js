// Modules alias
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse;


var engine;
var world;
var cubes = [];
var sol;
var plafond;
var bordDroit;
var bordGauche;
var plateforms = [];

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






}




function keyPressed() {
    console.log(keyCode);
    if (keyCode === 32) {
        // for (let y = 100; y < 150; y = y + 10) {
        //     for (let x = 100; x < 150; x = x + 10) {
        //         var plateform = new Cube(x, y, 100, 10, true);
        //         plateforms.push(plateform);
        //     }
        // }


        let joueur1 = new Cube(2, 100, 20, 20);

        cubes.push(joueur1);


        let joueur2 = new Cube(width, 100, 20, 20);


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






