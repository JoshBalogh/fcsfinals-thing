// *goal is 10 objects that are animated*
//setup
//a=min, b=max
function roll(a, b) {
  return Math.floor(Math.random() * (b - a)) - 1 + a
}


const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');

//all classes go here
// class Cloud {
//   constructor(x, y, w, c) {
//     this.x = x
//     this.y = y
//     this.w = w
//     this.maxY = myCanvas.width
//     const r = roll(200, 250)
//     this.c = `rgb(${r},${r},${r})`
//   }
//   update() {
//     if (this.x > myCanvas.height) {
//       this.x = 0
//     } else {
//       this.x += 1
//     }
//   }
//   draw(ctx) {
//     ctx.fillStyle = this.c
//     ctx.beginPath()
//     ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI)
//     ctx.fill()
//     ctx.closePath()

//   }
// }

class Sun {
  constructor(x, y, w, c) {
    this.x = x
    this.y = y
    this.w = w
    this.c = '#FFBF00'
  }
  update() {
    /*if(this.w < this.maxW) this.w += 1
    if(this.h < this.maxH) this.h += 1*/
    if (this.x > myCanvas.height) {
      this.x = 0
    } else {
      this.x += .05
      if (this.y > myCanvas.height) {
        this.y += 0
      } else {
        this.y += .05
      }
      if (this.w < 60) this.w += 1
      if (this.h < 60) this.h += 1

    }
  }
  draw(ctx) {
     ctx.fillStyle = this.c
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  }
}

class Lighting {
  constructor(x, y, w, h, c) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = '#ADD8E6'
  }
  //when i undo the comments out the whole thing messes up. 
  update(){
    if(roll(1,2)) {}
  }
  draw(ctx){
    ctx.fillStyle = this.c
    ctx.fillRect(this.x, this.y, this.w, this.h, this.c)
  }
}

//when pushed, it doesn't run
class Floor {
  constructor(x, y, w, h, c) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = c
  }
  update(){
    
  }
  draw(ctx) {
    ctx.fillStyle = this.c
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }
}

// //fix bird
// class Bird {
//   constructor(x,y,c){
//     this.startX = x
//     this.startY = y
//     this.width = 15
//     this.height = 10
//     this.color = 'blue'
//   }
//   draw(ctx){
//       ctx.fillStyle = this.color
//       ctx.fillRect(this.startX, this.startY, this.width, this.height) 
//       ctx.fillRect(this.startX + 5, this.startY, 20, 15)
//   }
//   update(){
//     if(this.startX > myCanvas.width){
//        this.startX = 0
//     }else{
//       this.startX +=1
//     }
//   }
// }

//create objects here
let scene = []
scene.push(new Floor(200, 200, 20, 20, 'green'))
//scene.push(new Sun(100, 100, 2, 5, ''))
//for (let i = 0; i < 100; i++) {
 //scene.push(new Cloud(roll(10, 800), roll(10, 150), roll(50, 70), ''))
//}
//had to hard color the bird
//scene.push(new Bird(300,100,5,5,'blue'))




// game loop
let lastTime
requestAnimationFrame(loop)

function loop(timeStamp) {
  const deltaTime = timeStamp - lastTime
  lastTime = timeStamp
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
  scene.forEach(s => {
    s.update()
    s.draw(ctx)
  })


  //NOTHING goes under here
  requestAnimationFrame(loop)
}

//also learn how to do loops in basic things;lighting??
