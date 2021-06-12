var mario,marioImg,ob1,ob1Img,ob2,ob2Img,ob3,ob3Img,gameover,gameoverImg,bg,bgImg,restart,restartImg;

function preload(){
    marioImg=loadImage("sprites/mario.png");
    ob1Img=loadImage("sprites/ob1.png");
    ob2Img=loadImage("sprites/ob2.png");
    ob3Img=loadImage("sprites/ob3.png");
    gameoverImg=loadImage("sprites/gameover.png");
    bgImg=loadImage("sprites/bg.png");
    restartImg=loadImage("sprites/restart.png");
}
function setup(){
    createcanvas(1200,800);
bg=createSprite(600,400,1200,800)
bg.addImage(bgImg)


    mario=createSprite(30,760,10,10)
    mario.addImage(marioImg);
    mario.scale=0.5
    



}
function draw(){
    background(0)





drawSprites()


}