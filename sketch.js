const Engine = Matter.Engine
const World = Matter.World
const Bodies=Matter.Bodies


var en, wo, b2
var b=[]
var ballg
var score=0
var gs="start"
function setup() {
  createCanvas(800,400);
  en=Engine.create()
  wo=en.world


  ballg=new Group()

}

function draw() {
  background("black"); 
  Engine.update(en)
  
//   if(frameCount%2===0){
// b.push(new Ball(random(20,780),0, random(0,20)))
//   }

//   for(var i=0; i<b.length; i++){
//     b[i].display()
//   }

//   if(b2!=null){
//     b2.display()
//   }
 
textSize(20)
fill(255)
text("Score:"+score,700,50)

if(gs==="start"){
  if (frameCount % 50 === 0) {
    balls = createSprite(random(100, 1000), 0, 20, 20);
    balls.velocityY = 6;
    ballg.add(balls);
    
  }


  if(score===10){
    gs="new"
  }
}

if(gs==="new"){
  if (frameCount % 20 === 0) {
    balls = createSprite(random(100, 1000), 0, 20, 20);
    balls.velocityY = 6;
    ballg.add(balls);
  }

  if(score===20){
    gs="end"
  }
}


if(gs==="end"){
  balls.destroyEach()
  textSize(25)
  fill("yellow")
  stroke("blue")
  strokeWeight(8)
  text("You won!", 400,200)
  b=createButton("You won")
b.position(100,100)

}

for (var i = 0; i < ballg.length; i++) {
  if (mouseIsPressed) {
      ballg.get(i).destroy();
     score=score+5
  }
  
}



  drawSprites();
}

// function mouseDragged(){
  
//  // for(var i=0; i< b.length; i++){
//     b2= new Ball(mouseX, mouseY, random(10,29))
//  // }
// }  
