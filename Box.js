class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 8){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(rgb(255, 100, 100));
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world, this.body);
      }
    }
}