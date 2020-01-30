window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    document.querySelector(".container").style.display = "none";
    Game.init("myCanvas");
  };
};