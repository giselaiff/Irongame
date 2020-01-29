let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event)=> {
  let canvas = document.getElementById('irongame');
  let startBtn = document.getElementById('start');
  
  ctx = canvas.getContext('2d');

  game = new Game(ctx, new Player(), new Obstacle(), new Coin()); 

  game.start();
})