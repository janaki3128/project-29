class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 0;
   }
   display(){
    
     console.log(this.body.speed);
     if(this.body.speed >3){
       World.remove(world,this.body);
       push();
       this.visibility = this.visibility+10 ;
       tint(0,this.visibility);
       image(this.image,this.body.position.x,this.body.position.x,50,50);
       pop();
     }else{
       super.display();
     }
   }


};