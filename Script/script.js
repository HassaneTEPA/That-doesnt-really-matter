var Engine = Matter.Engine,
    Render = Matter.Render,
    Detector = Matter.Detector,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Events = Matter.Events;

// create an engine
var engine = Engine.create({
    // enableSleeping: true  //PAUSE
});

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframeBackground: 'red',
        wireframes: false

    }

});



/**************************************/
/**************************************/
/**************************************/

var bordures = [];
var Joueurs = [];

bordures.push(new Rectangle(0, render.canvas.height, render.canvas.width * 2.01, 100, { isStatic: true })); //sol
bordures.push(new Rectangle(0, 0, render.canvas.width * 2.01, 100, { isStatic: true, }));  //plafond
bordures.push(new Rectangle(render.canvas.width, 0, 100, render.canvas.height * 2.01, { isStatic: true, }));  //coté droit
bordures.push(new Rectangle(0, 0, 100, render.canvas.height * 2.01, { isStatic: true, }));  //coté gauche


// Listener
document.addEventListener('keypress', logKey);


// START GAME WITH SPACE
function logKey(event) {

    let heightRectangle = 40;
    let widthRectangle = 40;

    let currentKeyCode = event.keyCode;

    if (event.keyCode === currentKeyCode) {
        if (Joueurs.length < 2) {
            for (let i = 1; i <= 2; i++) {
                let rectangle = new Rectangle(400, 40, widthRectangle, heightRectangle, {
                    isStatic: false,
                    friction: 1,
                    restitution: 0,
                    density: 1,
                    className: "brick",
                    render: {
                        fillStyle: 'red',
                        strokeStyle: '#00000',
                        lineWidth: 3
                    }
                });

                Joueurs.push(new Joueur('Joueur' + i, rectangle));
            }
            console.log(Joueurs);
        }
    }

}

events = [];

Events.on(engine, "beforeTick", function (event) {

    if (events.length < 200) {
        events.push(event);
    }

});

//console.log(events);

World.add(engine.world, bordures);
Engine.run(engine);
Render.run(render);



