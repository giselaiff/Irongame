class Player {
	constructor(w, h, ctx, keys) {
	  this.canvasW = w;
	  this.canvasH = h;
	  this.ctx = ctx;
	  this.keys = keys;
	  this.x = this.canvasW * 0.05; //posicion
	  this.y0 = this.canvasH * 0.77;
	  this.y = this.y0;
	  this.img = new Image();
	  this.img.src = "img/playergirl.png";
	  this.img.frames = 3;
	  this.img.frameIndex = 0;
	  this.w = 50;
	  this.h = 75;
	  this.vy = 1;
	  this.setListeners();
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
  
	setListeners() {
	  document.onkeydown = function(event) {
		if (event.keyCode === this.keys.SPACE && this.y == this.y0) {
		  this.y -= 5;
		  this.vy -= 11;
		}
		
	  }.bind(this);
	} 
	
	
  
	
	animateImg(framesCounter) {//cambia frame, mas mayor modulo - mas lento
	  if (framesCounter % 5 === 0) {
		this.img.frameIndex += 1;
  
		if (this.img.frameIndex > 2) this.img.frameIndex = 0; //cuando llega ultimo frame vuelve al primero
	  } 
	}
  
	move() {
	  var gravity = 0.37;
  
	  if (this.y >= this.y0) {
		this.vy = 1;
		this.y = this.y0;
	  } else {
		this.vy += gravity;
		this.y += this.vy;
	  } //saltar y caer
	}
  }