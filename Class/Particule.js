class Particule {
    constructor(rect) {

        this.rect = rect;

        let positionMax = this.rect.body.position;
        let positionMin = this.rect.body.positionPrev;

        this.blink = function blink() {
            for (let i = 0; i < 50; i++) {
                new Rectangle(getRandomFloat(positionMax.x, positionMin.x), getRandomFloat(positionMin.y, positionMax.y), 5, 5, {
                    render: {
                        fillStyle: 'red'
                    },
                    collisionFilter: {
                        'group': 10,
                        'category': 2,
                        'mask': 20,
                    }
                });
            }
            for (let j = 6; j < engine.world.bodies.length; j++) {
                Matter.World.remove(engine.world, engine.world.bodies[j]);
            }
        }

    }


}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}