class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            restitution:0.8,
            friction:0.9,
            density:0.7
        }
        this.boxObject = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.boxObject);
      }
      display(){
        
        push();
        strokeWeight(1.5);
        strokeWeight(1);
        rectMode(CENTER);
        rect(this.boxObject.position.x,this.boxObject.position.y, this.width, this.height);
        pop();
      }
}