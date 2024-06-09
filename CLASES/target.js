class Target {
    constructor(x, y) {
        this.y1 = y;
        this.x1 = x;

        var options = {
            isStatic: true
        };

        this.objective = Bodies.rectangle(this.x1, this.y1, 50, 50, options);

        World.add(world, this.objective);
        this.img_target = loadImage("./assets/board.png");
    }

    texture(){
        var pos = this.objective.position;
        push();
        imageMode(CENTER);

        image(this.img_target, pos.x, pos.y, 60, 60);
        pop();
    };


    remove(index){
    Matter.World.remove(world,this.objective);
    delete targets[index];
   }
}