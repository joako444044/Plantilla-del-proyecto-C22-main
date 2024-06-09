var aper = false;
class Arrow {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        var options = {
            isStatic: true,
            density:0.1
        };
        this.projectile = Bodies.rectangle(this.x, this.y, 60, 19, options);
        World.add(world, this.projectile);
        this.arrow = loadImage("./assets/arrow.png");
        this.image = loadImage("./assets/th.png");
        this.trayectory = [];
    }

    shoot() {

        var new_angle = (arm.angle - 265) * (3.14 / 180);
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
            
            
            tmpAngle = arm.angle +  90;

        
        } else if(this.projectile.velocity.x >= 3) {
            tmpAngle = Math.atan(this.projectile.velocity.y / this.projectile.velocity.x) + 45;

        }else{
            
            tmpAngle = Math.atan(this.projectile.velocity.y / this.projectile.velocity.x) + 90;
        }
        Matter.Body.setAngle(this.projectile, tmpAngle);

        var position = this.projectile.position;
        var angle = this.projectile.angle;


        push();
        imageMode(CENTER);
        translate(position.x, position.y);
        rotate(angle);
        image(this.arrow, 0, 0, 60, 21);

        pop();
        var pos = this.projectile.position;
        if (this.projectile.velocity.x > 0 && pos.x > 10)
            {
              this.trayectory.push([pos.x,pos.y]);
        
            }
            
            for (var t = 0; t < this.trayectory.length; t++){
              image(this.image, this.trayectory[t][0],this.trayectory[t][1] - 10, 10, 10);
        
            
            }
    }
     remove(index){
     Matter.World.remove(world,this.projectile);
     delete arrows[index];
    }
}