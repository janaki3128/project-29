class Slingshot{
    constructor(body1,body2){
        var options={
            pointA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10,
        }
     this.slingshot = Constraint.create(options);
     this.pointA = body1;
     this.image1 = loadImage("sprites/sling1.png");
     this.image2 = loadImage("sprites/sling2.png");
     this.image3 = loadImage("sprites/sling3.png");

     World.add(world,this.slingshot);
    }
    display(){
        strokeWeight(7);
        
        if(this.slingshot.bodyB != null){
            if(this.pointA.x < 220){
                fill(82,38,15);
                line(this.pointA.x+20,this.pointA.y,this.slingshot.bodyB.position.x-30,this.slingshot.bodyB.position.y);
                line(this.pointA.x-20,this.pointA.y,this.slingshot.bodyB.position.x-30,this.slingshot.bodyB.position.y);
                image(this.image3,this.slingshot.bodyB.position.x-30,this.slingshot.bodyB.position.y,15,30);
                }
            else{
                line(this.pointA.x+20,this.pointA.y,this.slingshot.bodyB.position.x-30,this.slingshot.bodyB.position.y);
                line(this.pointA.x-20,this.pointA.y,this.slingshot.bodyB.position.x-30,this.slingshot.bodyB.position.y);
                image(this.image3,this.slingshot.bodyB.position.x+25,this.slingshot.bodyB.position.y,15,30);
            }
            }
            

       
        
        image(this.image1,220,30);
        image(this.image2,190,30);
        
    }

    fly(){
       this.slingshot.bodyB = null; 
    }

    attach(body){
        this.slingshot.bodyB = body;
    }
}
