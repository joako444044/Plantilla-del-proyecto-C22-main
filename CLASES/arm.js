class Arm {
   constructor(x, y, angle, widh, height) {
      this.x = x;
      this.y = y;
      this.angle = angle;
      this.width = widh;
      this.height = height;
      this.arch_image = loadImage("./assets/playerArcher.png")
   }
   build() {
      if (keyIsDown(UP_ARROW) && this.angle > 235) {
         this.angle--
         console.log(this.angle)
      }
      if (keyIsDown(DOWN_ARROW) && this.angle < 295) {
         this.angle++
         console.log(this.angle)
      }
      push();
      translate(this.x, this.y);
      imageMode(CENTER);
      rotate(this.angle)
      image(this.arch_image, 37, 37, this.width, this.width);
      pop();
   }
}