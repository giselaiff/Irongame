class Player {
    constructor() {
        this.x = 250;
        this.y = 350;
        this.width = 70;
        this.height = 148;
        this.color = "pink";
    }

    gravity (){
        if (this.y >= 350) {
            this.y = 350
        } else {
            this.y = this.y + 2;
        }
     }
   
    jump() {
        this.y = this.y - 180;
    } 
}

// if (this.y < 350)