class Rectangle {
    constructor(x, y, width, height, options, vie = 3) {
        this.x = x;
        this.y = y;
        this.vie = vie;
        this.width = width;
        this.height = height;
        this.options = options;

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
        World.add(engine.world, this.body);

        this.smash = function () {
            this.vie--;
            this.updateLife();
        }


        this.updateLife = function () {
            switch (this.vie) {
                case 3:
                    this.body.render.fillStyle = 'lightgreen';
                    break;
                case 2:
                    this.body.render.fillStyle = 'orange';
                    break;
                case 1:
                    this.body.render.fillStyle = 'red';
                    break;
            }
        }
    }



}