class Foodie{
    constructor(){
        var foodStock=this.foodStock;
        var lastFed = this.lastFed;
        this.image= loadImage("Milk.png");
    }
    getFoodStock(){

    }
    updatefoodStock(){

    }
    deductFood(){

    }
    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,22070,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
            image(this.image,x,y50,50);
            x=x+30;
            }
        }       

    }
}