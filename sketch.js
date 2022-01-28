var box1,box2,box3;
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(50,50,30,30,2)
  box2=new Box(20,20,10,10,1)
  box3=new Box(80,90,50,50,3)
}

function draw() 
{
  background(220);
  box1.show()
  box1.move()
  box2.show()
  box2.move()
  box3.show()
  box3.move()

}

