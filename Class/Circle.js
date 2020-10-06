
function Circle(x, y, r) {

    var options = {
        friction: 1,
        restitution: 0.3
    }

    this.body = Bodies.circle(x, y, r / 2, options);
    this.body.friction = 1;
    this.r = r;
    World.add(world, this.body);


    this.show = function () {

        var pos = this.body.position;
        // var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        // rotate(angle);

        rectMode(CENTER); //permet de placer le point de physique au centre de l'objet 

        strokeWeight(1);
        stroke(255);
        fill(127);

        circle(0, 0, r)

        pop();
    }
}