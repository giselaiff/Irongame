class Background {
    constructor(w, h, ctx) {
      this.ctx = ctx
      this.img = new Image();
      this.img.src = "img/cyberpunk-street.png";
      this.h = h
      this.w = w
      this.x = 0;
      this.y = 0;
      this.dx = 5; //printa fondo
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      ); //printa primera imagen de fondo
      
      this.ctx.drawImage(
        this.img,
        this.x + this.w,
        this.y,
        this.w,
        this.h
      );//printa segunda imagen de fondo
    }
  
    move() {
      this.x -= this.dx;
  
      if (this.x < -this.w) this.x = 0;
    } //al juntar imagenes hace efecto movimiento
  }