class Game {
  constructor(ctx, player, obstacle, coin) {
    this.ctx = ctx;
    this.player = player;
    this.obstacle = obstacle;
    this.coin = coin;
    this.interval = undefined;
  } 

  update() {
    this.cleanBoard();
    this.drawPath();
    this.drawPlayer();
    this.player.gravity();
    this.drawObstacle();
    this.drawCoin();
    this.obstacle.move();
    this.coin.move();
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this.update.bind(this));
    }
  }

  drawPlayer() {
    this.ctx.fillStyle = this.player.color;
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  }

  drawPath() {
    this.ctx.beginPath();
    this.ctx.moveTo(0,500);
    this.ctx.lineTo(1400,500);
    this.ctx.stroke();
  }

  assignControlsToKeys() {
    document.addEventListener('keyup', e => {
      switch (e.keyCode) {
        case 32:
          this.player.jump();
          this.cleanBoard();
          this.drawPath();
          this.drawObstacle();
          this.drawCoin();
          break;

      }
    })
  }

  cleanBoard() {
    this.ctx.clearRect(0, 0, 1400, 700);
  }

  drawObstacle() {
    this.ctx.fillStyle = this.obstacle.color;
    this.ctx.fillRect(this.obstacle.x, this.obstacle.y, this.obstacle.width, this.obstacle.height);
  }

  drawCoin() {
    this.ctx.fillStyle = this.coin.color;
    this.ctx.fillRect(this.coin.x, this.coin.y, this.coin.width, this.coin.height);
  }

  //generateObstacle() 
      
    
  //generateCoin() 


  //collision() {
    
  
  start() {
    this.drawPlayer();
    this.drawPath();
    this.assignControlsToKeys();
    this.drawObstacle();
    this.drawCoin();
    //this.generateObstacle();
    //this.generateCoin();

    this.interval = window.requestAnimationFrame(this.update.bind(this));
  }


}