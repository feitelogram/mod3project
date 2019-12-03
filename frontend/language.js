class Language {
    constructor(langObject){
        this.langObject = langObject
        this.top= random(height/2)
        this.bottom = random(height/2)
        this.x = 600
        this.w = 50
        this.h = 30
        this.speed = 5 
        this.img = loadImage(langObject.image)
        // this.img;
    }

    show = () => {
        
        // fill(255)
        
        if (this.langObject.name === "Spaghetti") {
            image(this.img, this.x, this.top, this.w*2, this.h*2)
        }else{
            image(this.img, this.x, this.top, this.w, this.h)
        }
        // rect(this.x, this.top, this.w, this.h)
        // getrandomlanguage()


    }

    update = () => {
        this.x-=this.speed
    }

    offscreen = () => {
        if (this.x < -this.w) {
            return true
        } else {
            return false
        }
    }

    hit = (student) => {        
        if (this.top <= student.y+student.h&& this.top + this.h >= student.y) {
            if (student.x > this.x && student.x < this.x + this.w) {
                student.brainpower+= this.langObject.value
                console.log(this.langObject.value)
            return true
            }
        }else{
            return false
        }
    }

    static getAllLanguages = () => {
        fetch("http://127.0.0.1:3000/languages")
        .then(resp => resp.json())
        .then(langArray => {
            return langArray   
        })
    } 
 
}

