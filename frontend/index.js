let student
let languages = []
let fontsize = 20
let bkimg;
let powerDiv = document.createElement("div")
let originalLanguages = [{
    id: 1,
    name: "CSS",
    image: "imgs/css.png",
    value: 100,
    created_at: "2019-12-03T20:05:41.302Z",
    updated_at: "2019-12-03T20:05:41.302Z"
  }]

function setup() {
    createCanvas(600, 600);
    student = new Student
    textSize(fontsize)
    bkimg = loadImage("imgs/backg.jpeg")
    // getAllLanguages()
    // languages.push(new Language)
    
  } 
  
  function draw() {
  
  background(bkimg)
  student.show()
  
text(`BRAIN POWER: ${student.brainpower}`, 10, 25)
  student.update()
  languages.forEach(language => {
      language.show()
      language.update()
      if (language.offscreen()) {
        languages.splice(0,1)
    }
    if (language.hit(student)) {
        languages.splice(0,1)
    }
  });
  if (frameCount % 100 == 0) {
      languages.push(new Language(originalLanguages[randomNumber()]))
  }
  
  }

  function keyPressed(){
    if (key == ` `) {
        student.up()
        student.brainpower-=50
        console.log(student.brainpower)
    }
}

// let getAllLanguages = () => {
    fetch("http://127.0.0.1:3000/languages")
    .then(resp => resp.json())
    .then(langArray => {
        originalLanguages = langArray
    //     // langArray.forEach(language => {
    //         // languages.push(new Language)
    //     // });
        // console.log(langArray);
    })
// } 

let randomNumber = () => {
    return Math.floor(Math.random() * 7)
}

