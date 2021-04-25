//Create variables here
var dog,happyDog,db,foodS,foodStock;
function preload()
{
  //load images here
  dog=loadImage("dog.png");
  happyDog=loadImage("happydog.png");

}
function readStock(data){
  foodS=data.val();
}
function setup() {
  var canvas=createCanvas(1000,1000);
  dog = createSprite(500,500);
  db=firebase.database();
  foodStock=db.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87); 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here
  function writeStock(x){
    db.ref("/").set({
        food:x
    })
}

}


