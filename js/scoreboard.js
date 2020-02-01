let ScoreBoard = {
  ctx: undefined,
  
  init (ctx) {
    ctx.font = "55px sans-serif";
    this.ctx = ctx;
  },
  update (score) {
    this.ctx.fillStyle = "brown";
    this.ctx.fillText(Math.floor(score), 1750, 80);
  }
};