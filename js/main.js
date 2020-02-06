window.onload = function () {
  let startScreen = document.getElementById("start-screen");
  let myCanvas = document.getElementById("myCanvas");
  let overScreen = document.getElementById("over-screen");
  let pauseScreen = document.getElementById("pause");
  let startButton = document.getElementById("start-button");
  let overButton = document.getElementById("over-button");


  function destroyStartscreen() {
    startScreen.style = "display: none";
    myCanvas.style = "display: block";
  }

  function createGameover() {
    myCanvas.style = "display: block";
    overScreen.style = "display: none";
  }

  function createPause() {
    myCanvas.style = "display: none";
    pauseScreen.style = "display: block";
  }

  startButton.addEventListener('click', function(){
    destroyStartscreen();
    const game = new Game('myCanvas');
    game.init('myCanvas');
  })

  overButton.addEventListener('click', function(){
    createGameover();

  })

    
};
