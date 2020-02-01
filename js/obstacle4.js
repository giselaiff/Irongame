class Obstacle4 {
    constructor(w, playerY, playerH, ctx) {
      this.ctx = ctx;
      this.w = 40;
      this.h = 75;
      this.dx = 8;
      this.x = w;
      this.y = playerY + playerH - this.h;
    this.img = new Image();
    this.img.src = "img/TaThor.png";
    this.img.frames = 3;
    this.img.frameIndex = 0;
    }
    
    
    draw(framesCounter) {//canvasrenderingcontext2D 
    
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
    if (framesCounter % 5 === 0) {
    this.img.frameIndex += 1;
    
    // if (this.img.frameIndex > 2) this.img.frameIndex = 0; //cuando llega ultimo frame vuelve al primero
    } 
    }
    
    move() {
    this.x -= this.dx;
    }
    
    }