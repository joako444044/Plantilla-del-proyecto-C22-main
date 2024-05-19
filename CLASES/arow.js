var aper = false;
class Arrow {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        var options = {
            isStatic: true
        };
        this.projectile = Bodies.rectangle(this.x, this.y, 60, 19, options);
        World.add(world, this.projectile);
        this.arrow = loadImage("./assets/arrow.png");
    }

    shoot() {
        
        var new_angle = (arm.angle - 275) * (3.14 / 180);
        var vector1 = p5.Vector.fromAngle(new_angle);
        vector1.mult(0.5);
        Matter.Body.setStatic(this.projectile, false);
        Matter.Body.setVelocity(this.projectile, { x: vector1.x * (180 / 3.14), y: vector1.y * (180 / 3.14) });
        // variable usada para comprobar el disparo y que aparesca la flecha
        aper = true;
    }
    texture() {
       
        var tmpAngle;
    if (this.projectile.velocity.y <= 3) {
      
        tmpAngle = arm.angle + PI / 2 + 90;
        
        
    }else {
        tmpAngle = Math.atan(this.projectile.velocity.y / this.projectile.velocity.x) + 90;
  
    }
      Matter.Body.setAngle(this.projectile, tmpAngle);
  
      var position = this.projectile.position;
      var angle = this.projectile.angle;
  

        push();
        imageMode(CENTER);
        translate(position.x, position.y)
        rotate(angle);
        image(this.arrow, 0, 0, 60, 21);

        pop();
    }
}