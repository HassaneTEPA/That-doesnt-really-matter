// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

console.log(render.options);

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var boxC = Bodies.rectangle(300, 50, 80, 80, {isStatic: true});
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

var box = Bodies.rectangle(100,200,80,80);

var box = () => {
    return Bodies.rectangle(Math.floor(Math.random()*render.options.width+1), 200, 80, 80);
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        World.add(engine.world, [box()]);
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
});
