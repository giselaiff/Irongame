window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    document.querySelector(".container").style.display = "none"; 
    const game = new Game('myCanvas');
    game.init('myCanvas')

  };
};
