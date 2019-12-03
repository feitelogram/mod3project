let img;


class Student {

    


    constructor() {
        this.y = height/2
        this.x = 64
        this.gravity = .5
        this.velocity = 0
        this.w = 32
        this.h = 32
        this.img = loadImage("imgs/android.png")
        this.score = 0
        this.brainpower = 1000

    }
  

    show = () => {
        // fill(255)
        // ellipse(this.x, this.y, this.w, this.h)
        image(this.img, this.x, this.y, this.w, this.h)
        // console.log(img)


    }

    update = () => {
        this.velocity += this.gravity
        this.y += this.velocity
        if (this.y > height) {
            this.y = height
            this.velocity = 0
        }
        if (this.y < 0) {
            this.y = 0
            this.velocity = 0
        }
    }

   up = () => {
       this.velocity -= this.gravity*20
   }

}