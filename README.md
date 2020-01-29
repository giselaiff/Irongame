# Irongame

In this game, you are an ironhacker who must collect a number of beers and avoid TA's.

The game screen is a road with beers and enemies.

The player is represented by a person that runs along the road avoiding "obstacles" and earning "coins". The player uses the Space key to jump.

The game is over when a collition is detected between the player and an obstacle or if the player doesn't collect enough beers.

* * *
## MVP
### Technique
Html5 __Canvas__ and Vanilla __Javascript__

### Game states
* __Start Screen__
  * Title
  * Play button
* __Game Screen__
  * Canvas
* __Game Over Screen__
  * Play again button
  * Go to start screen button

## Data structure
__main.js__
````
createStartScreen(id);
createGameScreen(id);
createGameOverScreen(id);
destroyStartScreen();
destroyGameScreen();
destroyGameOverScreen();
const game = new Game({
    width: width
    height: height
    ctx: ctx,
    this.obstacles,
    this.player
    this.coins,
  });
game.start();
````
__Game.js__
````
function Game(options){};
Game.drawBoard();
Game.drawPlayer();
Game.generateObstacles();
Game.generateCoins();
Game.gameOver();
Game.init();

class Game {
 constructor(ctx, player, obstacle, coin) {
    this.ctx = ctx;
    this.player = player;
    this.obstacle = obstacle;
    this.coin = coin;
    this.interval = undefined;
    }
}

````
__Player.js__
````
class Player {
     this.x = 250;
        this.y = 350;
        this.width = 70;
        this.height = 148;
        this.color = "pink";
    }
}
````
__Obstacle.js__
````
class Obstacle{
     constructor() {
      this.x = 1400;
      this.y = 430;
      this.width = 40;
      this.height = 68;
      this.color = "blue";
  }
  }
````
__Coin.js__
````
class Coin{
   constructor() {
        this.x = 1600;
        this.y = 430;
        this.width = 30;
        this.height = 68;
        this.color = "yellow";
    }
}
````
## Links
[Irongame](https://trello.com/b/4aoqjWMk/irongame)
[Github](https://giselaiff.github.io/Irongame/)
[Slides](https://docs.google.com/presentation/d/1gpjxhZOQVrXoIh6x9tTp2Wfo5maXZyrJSJbR43r7KEI/edit#slide=id.p)