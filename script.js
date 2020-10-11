

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    Body = Matter.Body,
    Vector = Matter.Vector,
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    Pair = Matter.Pair,
    SAT = Matter.SAT,
    Detector = Matter.Detector,
    MouseConstraint = Matter.MouseConstraint;

// create an engine
var engine = Engine.create();
var Joueurs = [];

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



const canvas = document.getElementsByTagName('canvas');
console.log(canvas[0].getContext("2d"));



render.canvas.height = window.innerHeight;
render.canvas.width = window.innerWidth;


let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, { mouse: mouse });
World.add(engine.world, mouseConstraint);
render.mouse = mouse;

World.add(engine.world, mouse);




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

    var joueur2 = engine.world.bodies[5];
    var joueur1 = engine.world.bodies[4];

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

    Joueurs.forEach(joueur => {
        if (joueur.rectangle.vie == 0) {
            //winner
        }
    });




});


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



/*************/
/***CONTROL***/
/*************/

document.addEventListener('keydown', logKey);


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

