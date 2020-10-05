function Cube(x, y, width, height) {

    var options = {
        friction: 0.6,
        restitution: 0.3
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.body.friction = 1;
    this.width = width;
    this.height = height;
    World.add(world, this.body);


    this.show = function () {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        rectMode(CENTER); //permet de placer le point de physique au centre de l'objet

        strokeWeight(1);
        stroke(255);
        fill(127);


        rect(0, 0, this.width, this.height);


        pop();
    }
}