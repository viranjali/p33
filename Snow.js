class Snow{
    constructor(x, y) {
        var options = {

            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, 60, 60, options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}