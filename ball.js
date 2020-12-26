class Ball{
    constructor(x,y,r){

        var o={
            restitution:0.8,
            friction:0.2,
            density:0.2
        }
            this.body=Bodies.circle(x,y,r,o)
        World.add(wo,this.body)
        this.r=r
    }

    display(){
      
    
    if(this.body.speed<12){
        ellipseMode(RADIUS)
        fill(random(0,255),random(0,255),random(0,255))
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }

    else{
        World.remove(wo,this.body)
    }
    
    }
}