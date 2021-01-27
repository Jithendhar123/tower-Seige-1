class Box extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,width,height);
  }

  display(){
    fill(145, 230, 230);
    super.display();
  }
}