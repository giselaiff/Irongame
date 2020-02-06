class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.img = new Image();
    this.img.src = "img/cyberpunk-street.png";
    this.h = h
    this.w = w
    this.x = 0;
    this.y = 0;
    this.dx = 5; //vel fondo
  }
	// dx coord x del canvas destino que se coloca en esq.sup.izq de a img origen

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    ); //printa primera imagen de fono
    this.ctx.drawImage(
      this.img,
      this.x + this.w,
      this.y,
      this.w,
      this.h
    );//printa segunda imagen de fono
  }

  move() {
    this.x -= this.dx;

    if (this.x < -this.w) this.x = 0;
  } //al juntar imagener hace efecto movimiento
}