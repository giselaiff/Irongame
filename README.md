# Irongame

In this game, you are an ironhacker who must collect a number of beers and face TA's.

The game screen is a road with floating beers and obstacles.

The player is represented by a person that flies along the road and avoid obstacles. The player uses the Space key to move up and down.

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
Game.generateTa();
Game.generateBeers();
Game.gameOver();
Game.init();
````
class Game {
    constructor(ctx, ta, player, width, height, beers){
      this.ctx = ctx;
      this.ta = ta;
      this.player = player;
      this.width = width;
      this.height = height;
      this.beers = beers;
    }
}

class Player {
    constructor({position = x,y}, direction, gravity){
        this.position = position;
        this ctx = ctx;
        this.size = width, height;
    }
}

class Ta{
    constructor({position = x,y}, width, height,size){
        this position = position;
        this.width = width;
        this.height = height;
        this.size = size;
    }
  
class Beers{
  constructor({position = x,y}, width, height,size){
        this position = position;
        this.width = width;
        this.height = height;
        this.size = size;
}
}

__Player.js__
````
function Player(){
  this.width;
  this.height;
  this.color;
};
Player.move();
````

function Player(){
  this.width;
  this.height;

};
Player.fly();

__Obstacle.js__
````
function Ta(){
  this.width;
  this.height;
};
moveForward();
````
function Ta(){
  this.width;
  this.height;
};
moveForward();

## Links
[Irongame](https://trello.com/b/4aoqjWMk/irongame)
[Github](https://giselaiff.github.io/Irongame/)
[Slides](https://docs.google.com/presentation/d/1gpjxhZOQVrXoIh6x9tTp2Wfo5maXZyrJSJbR43r7KEI/edit#slide=id.p)