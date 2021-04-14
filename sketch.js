var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var box5;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    
box1 = createSprite(100,550,150,50);
box1.shapeColor="red"

box2 = createSprite(300,550,150,50);
box2.shapeColor="green"

box3 = createSprite(500,550,150,50);
box3.shapeColor="blue"

box4 = createSprite(700,550,150,50);
box4.shapeColor="yellow"

box5 = createSprite(random(20,750),300,20,20);
box5.shapeColor="white";
box5.velocityX=3;
box5.velocityY=3;




}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    background(rgb(10,10,10))
edges=createEdgeSprites();
box5.bounceOff(edges);

    if(box5.x<0){
music.stop();
box5.velocityX=3
    }
    else if(box5>800){
music.stop();
box5.velocityX=-3
    }
    
    if(box5.isTouching(box4)){
        music.play();
        box5.shapeColor="yellow"
        box5.bounceOff(box4);
    }

if(box5.isTouching(box3)){
        music.play();
        box5.shapeColor="blue"
        box5.bounceOff(box3);
    }

if(box5.isTouching(box2)){
        music.play();
        box5.shapeColor="green"
        box5.bounceOff(box2);
     }

if(box5.isTouching(box1)){
        music.play();
        box5.shapeColor="red"
        box5.bounceOff(box1);
     }

     


    //add condition to check if box touching surface and make it box
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

}
