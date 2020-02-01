class Obstacle {
  constructor(w, playerY, playerH, ctx, speed, img) {
    this.ctx = ctx;
    this.w = 40; //ancho personaje
    this.h = 75;//altura personaje
    this.dx = speed; //velocidad
    this.x = w;
    this.y = playerY + playerH - this.h ;//no solapar altura canvas
    this.img = new Image();
    this.img.src = img;
    this.img.frames = 3;
	this.img.frameIndex = 0;
}

draw(framesCounter) {// NO SE MUEVEN COMO PLAYER :( 
  
	this.ctx.drawImage(
	  this.img,
	  this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
	  0,
	  Math.floor(this.img.width / this.img.frames),
	  this.img.height,
	  this.x,
	  this.y,
	  this.w,
	  this.h
	);

	this.animateImg(framesCounter); //animación player 3 frames, cambia frames

  }
  
  animateImg(framesCounter) {//cambia frame, mas mayor modulo - mas lento
	if (framesCounter % 1 === 0) {
	  this.img.frameIndex += 1;

	 if (this.img.frameIndex > 2) this.img.frameIndex = 0; //cuando llega ultimo frame vuelve al primero
	} 
  }

move() {
  this.x -= this.dx;
}

}
