var Game = {
	canvas: undefined,
	ctx: undefined,
	fps: 60,
	pause: false,
	scoreBoard: undefined,
	keys: {
	  SPACE: 32,
	  
	},
	init(canvasId) {
	  this.canvas = document.getElementById(canvasId);
	  this.ctx = this.canvas.getContext("2d");
	  this.w = window.innerWidth;
	  this.h = window.innerHeight;
	  this.w2 = this.w / 2;
	  this.h2 = this.h / 2;
	  this.canvas.setAttribute("width", `${this.w}px`);
	  this.canvas.setAttribute("height", `${this.h}px`);
  
	  ScoreBoard.init(this.ctx);
  
	  this.start();
	},
  
	start() {
	  this.fps = 60;
	  this.reset();
  
	  this.interval = setInterval(() => {
		this.clear();
		this.drawAll();
		this.score += 1;
  
		this.framesCounter++;
  
		if (this.framesCounter > 300) {
		  this.framesCounter = 0;
		}

  
		 if (this.score > 10000) {
		  this.moveAll(this.score);
		}
	
  
		this.score += 1;
  
		this.moveAll();
		this.drawAll();
  
  
	  }, 1000 / this.fps);
	},
   
   
	reset() {
	  this.background = new Background(this.canvas.width, this.canvas.height, this.ctx);
	  this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys);
	  this.scoreBoard = ScoreBoard;
	  this.framesCounter = 0;
	  this.score = 0;
	},
  
	
  
	clear() {
	  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
  
	drawAll() {
	  
	  this.background.draw();
	  this.player.draw(this.framesCounter);
	  this.drawTimer();
	},
  
	moveAll() {
	  this.background.move();
	  this.player.move();//salta  
	},
  
	drawTimer() {
	  this.scoreBoard.update(this.score); //movimiento player
	}
  };
