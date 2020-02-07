class Game {
  constructor(canvasId) {
	this.canvas = canvasId;
	this.ctx= undefined,
	this.fps= 60,
	this.pause= false,
	this.scoreBoard= undefined,
	this.keys= {
	  SPACE: 32,
	  PAUSE: 80
	}
}
	
 	init (canvasId) {
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

	}

	update() {
		this.clear();
		this.drawAll();
		this.score += 1;
		this.framesCounter++;
		this.moveAll();
		this.clearObstacles(); //limpiar obs
	
		if (this.framesCounter > 300) {
			this.framesCounter = 0;
		}
	
		if (this.framesCounter % 200 === 0) {
			this.generateObstacle(); //llama obstacles con separación
		}
	
		if (this.score > 10000) {
			this.moveAll(this.score);
		}
		
		if (this.collision()) { // si choca - GAMEOVER
			this.gameOver();
		}
		
	}

	  //inicializa bucle
	start () {
		this.fps = 60;
		this.reset();
		this.pauseRestart();
		this.interval = setInterval(this.update.bind(this), 1000 / this.fps);
		
	  }
  
  
	stop() {//parar 
		clearInterval(this.interval);
	}

	pauseRestart() {
		document.addEventListener("keydown", event => {
			switch (event.keyCode){
				case 80:
					if (this.pause) {
						this.pause = !this.pause;
						this.interval = setInterval(this.update.bind(this), 1000 / this.fps);
						document.getElementById('pause').style.display = "none"; 
						const music = document.getElementById("audio");
						music.play();
						
					} else {
						this.stop()
						this.pause = !this.pause;
						document.getElementById('pause').style.display = "block";
						const music = document.getElementById("audio");
						music.pause();
					}
				break;
			}
		})

	}

	gameOver () { // lo llama de collision y para + muestra puntuación + reinicia
		this.stop();
		const music = document.getElementById("audio");
						music.pause();

		const div = document.getElementById('score');
			div.innerHTML = `You got ${this.score - 1} points`;
		
			document.getElementById('over-screen').style.display = "block";
			document.getElementById('myCanvas').style.display = "none";

		

		this.start(); // se reinicia
		  
		}

  
  
  //se llama en start 
	reset () {
		this.background = new Background(this.canvas.width, this.canvas.height, this.ctx);
		this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys);
		this.scoreBoard = ScoreBoard;
		this.framesCounter = 0;
		this.obstacles = []; //array para push obstacles
		this.score = 0;
	  }
  
	collision () { //comprueba que el player no este en misma con cualquier obst - cond en start
	 
		  return this.obstacles.some(obstacle => {
			return (
			  this.player.x + this.player.w >= obstacle.x &&
			  this.player.x < obstacle.x + obstacle.w &&
			  this.player.y + (this.player.h - 20) >= obstacle.y
	  
			);
		  });
		}
		 
	clearObstacles () {//reinicia obs
		  this.obstacles = this.obstacles.filter(function(obstacle) {
			return obstacle.x >= 0;
		  });
		}
	
  //genera obstaculos cada x puntuación
	generateObstacle  () {
	  
		if (this.score > 200) {
			this.obstacles.push(
			new Obstacle(this.canvas.width, this.player.y0, this.player.h, this.ctx, 4, 'img/TaManu.png')
		) //genera obstacle
			}
		if (this.score > 1000) {
		  this.obstacles.push(
			new Obstacle(this.canvas.width, this.player.y0, this.player.h, this.ctx, 6, 'img/TaJorge.png')
		  )
		}
		if (this.score > 2000) {
			  this.obstacles.push(
				new Obstacle(this.canvas.width, this.player.y0, this.player.h, this.ctx, 7, 'img/TaAlex.png')
			  )
			}
		if (this.score > 3000) {
			  this.obstacles.push(
				new Obstacle(this.canvas.width, this.player.y0, this.player.h, this.ctx, 8, 'img/TaThor.png')
			  )
			}
		}
	
	clear () {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	  }
	
	  //dibuja todo
	drawAll () {
		this.background.draw();
		this.player.draw(this.framesCounter);
		this.obstacles.forEach(function(obstacle) {
		  obstacle.draw();
		});
		this.drawScore();
	  }
	//mueve todo
	moveAll () {
		this.background.move();
		this.player.move();
		this.obstacles.forEach(function(obstacle) {
		  obstacle.move();
		});
	  }
  //printa marcador 
	drawScore () {
		this.scoreBoard.update(this.score); //necesita para movimiento player
	  }
	}
	
