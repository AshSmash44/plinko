class Plinko{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            isStatic: true
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        //this.body = Bodies.circle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}