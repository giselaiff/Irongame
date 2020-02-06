let ScoreBoard = {
  ctx: undefined,
  
  init (ctx) {
    this.ctx = ctx;
  },
  update (score) {
    this.ctx.fillText(Math.floor(score), 1750, 80);
  }
};