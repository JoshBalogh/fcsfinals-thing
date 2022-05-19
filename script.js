// *goal is 10 objects that are animated*

const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');

//a=min, b=max
function roll(a, b) {
  return Math.floor(Math.random() * (b - a)) - 1 + a
}

//all classes go here
class Cloud {
  constructor(x, y, w, c) {
    this.x = x
    this.y = y
    this.w = w
    this.maxY = myCanvas.width
    const r = roll(200, 250)
    this.c = `rgb(${r},${r},${r})`
  }
  update() {
    if (this.x > myCanvas.height) {
      this.x = 0
    } else {
      this.x += .3
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
        this.w = 60
        this.h = 60

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
//fix
class Lightning {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = '#ADD8E6'
  }
  //make it random to strike and random area
  update(){
  // Lightning = false
  //    if roll(1,50){
  //    lighting = true
   }
  draw(ctx){
    ctx.fillStyle = this.c
    ctx.fillRect(this.x, this.y, this.w, this.h, this.c)
  }
}

class Floor {
  constructor() {
    this.x = 0
    this.y = 800
    this.w = myCanvas.width
    this.h = 100
    this.c = 'green'
  }
  update(){
    
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.c
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(800, 600)
    ctx.lineTo(800, 550)
    ctx.lineTo(0, 550)
    ctx.lineTo(0, 600)
    ctx.fill()
    ctx.closePath()
  }
}

class Backdrop {
  constructor() {
    this.x = 0
    this.y = 800
    this.w = myCanvas.width
    this.h = 100
    this.c = 'blue'
  }
  update(){
    
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.c
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(800, 600)
    ctx.lineTo(800, 600)
    ctx.lineTo(800, 600)
    ctx.lineTo(800, 600)
    ctx.fill()
    ctx.closePath()
  }
}
//fix bird; how to have 
class Bird {
  constructor(x,y,c){
    this.startX = x
    this.startY = y
    this.width = 30
    this.height = 10
    this.color = 'blue'
  }
  draw(ctx){
      ctx.fillStyle = this.color
      ctx.fillRect(this.startX, this.startY, this.width, this.height) 
      ctx.fillRect(this.startX + 5, this.startY, 20, 15)
      ctx.fillStyle = 'yellow'
      ctx.fillRect(this.startX + 30, this.startY + 5, 5, 5)
      ctx.fillStyle = 'white'
      ctx.fillRect(this.startX + 26, this.startY + 2, 3, 3)
  }
  update(){
    if(this.startX > myCanvas.width){
       this.startX = 0
    }else{
      this.startX +=1
    }
  }
}

class Grass{
  constructor(x,y,a,l){
   this.startX = x
   this.startY = y
   this.angle = a
   this.length = l
   this.width = 2
   this.calculateEndPoint()
 }
  calculateEndPoint(){
   const radians = this.angle * (Math.PI/180)
   this.endX = this.startX + (this.length * Math.cos(radians))
   this.endY = this.startY - (this.length * Math.sin(radians))
 }
  draw(ctx){
    ctx.strokeStyle = 'green'
    ctx.beginPath()
    ctx.lineWidth = this.width;
    ctx.moveTo(this.startX,this.startY)
    ctx.lineTo(this.endX,this.endY)
    ctx.stroke()
    ctx.closePath()
  }
}


//create objects here
let scene = []
 scene.push(new Background)
 scene.push(new Floor)
 //scene.push(new Lighting(300,100,20,600,))
 scene.push(new Sun(100, 100, 2, 5, ''))
 //for (let i = 0; i < 100; i++) {
 //  scene.push(new Cloud(roll(10, 800), roll(10, 150), roll(50, 70), ''))
// }
       // had to hard color the bird
 //scene.push(new Bird(300,100,5,5,'blue'))
  for (let i = 0; i< myCanvas.width; i+=2){
    if(roll(1,100)<80){
    const blade = new Grass(i, myCanvas.height, roll(80,100), roll(50,100))
    grass.push(blade)
  }
    scene.push()
}





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

//also learn how to do loops in basic things
