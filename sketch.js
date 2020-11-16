var player, special, make, create, PLAY, END, load, over, img1, img2, blockGroup,lv2;
PLAY=1;
END=0;
var chance=100;
var score = 0;
var gameState = PLAY;
let song;

function preload() {
        song = loadSound("TheFatRat & JJD - Prelude (VIP Edit) (128 kbps).mp3");
        make = loadImage("Sponge2.png");
        create = loadImage("Matrix.jpeg");
        load = loadImage("gameOver.png");
        over = loadImage("restart.png");
        lv2 = loadImage("missle.png");
}

function setup() {
        createCanvas(1220, 600);
        player = createSprite(100, 300, 10, 10);
        player.addImage("Sponge2.png", make);
        player.scale = 0.32;
        img1 = createSprite(500, 200, 10, 10);
        img1.addImage("gameOver.png", load);
        img1.scale = 2.0;

        img2 = createSprite(500, 300, 10, 10);
        img2.addImage("restart.png", over);
        img2.scale = 1.0;

        blockGroup = new Group()
        img1.visible = false;
        img2.visible = false;
        song.loop();
}

function draw() {
        background(create);
        drawSprites();
        textSize(30);
        text("Score: " + score, 1000, 100);
        text("Chance " + chance,300,100);
        if (gameState === PLAY) {
                //console.log("Into")
                //player.velocityX=(6+3*score/100);
                score = score + Math.round(getFrameRate() / 60);
                if (keyDown("Up_Arrow") && player.y >= 159) {
                        player.velocityY = -14;
                }
                player.velocityY = player.velocityY + 0.8
                spawnObstacles();
                bottomObstacles();
                soloObstacles();
                topObstacles();
                if(score>=420){
                level2();
                fill("green")
                textSize(20);
                 text("level 2",200,100);
                }
                if(score>=520){
                        fill("blue")
                        textSize(20);
                         text("level 3",200,150);
                        }
                if (player.y > 600) {
                        gameOver();
                        gameState=END
                        //console.log("over")     
                }
                if (blockGroup.isTouching(player)){
                    chance=chance-1    
                }
                if(chance<=0){
                   gameOver(); 
                   gameState=END
                   song.pause();
                   //console.log("over")     
                }

        }
}
function gameOver() {
        song.pause();
        console.log("present")
        player.velocityY = 0
        blockGroup.setvelocityEach(0)
        score=0;
        img1.visible = true
        img2.visible = true
        console.log("here")
}
function gameOver() {
        song.pause();
        console.log("present")
        player.velocityY = 0
        blockGroup.setLifetimeEach(-1)
        img1.visible = true
        img2.visible = true
        console.log("here")
}

function bottomObstacles() {
        if (frameCount % 100 === 0) {
                var bmix = Math.round(random(200, 275))
                var bblend = Math.round(random(50, 80))
                var bobstacle = createSprite(1100, 600, bblend, bmix);
                bobstacle.shapeColor = "red"
                //obstacle.scale=0.2
                bobstacle.velocityX = -(6 + 3 * score / 100);
                //generate random obstacles
                //var rand = Math.round(random(1,6));
                bobstacle.lifetime = 200;
                blockGroup.add(bobstacle);
        }
}
function soloObstacles() {
        if (frameCount % 140 === 0) {
                var cmix = Math.round(random(200, 375))
                var cblend = Math.round(random(50, 100))
                var cobstacle = createSprite(1100, 600, cblend, cmix);
                cobstacle.shapeColor = "red"
                //obstacle.scale=0.2
                cobstacle.velocityX = -(6 + 3 * score / 100);
                //generate random obstacles
                //var rand = Math.round(random(1,6));
                cobstacle.lifetime = 200;
                blockGroup.add(cobstacle);
        }
}
function topObstacles() {
        if (frameCount % 167 === 0) {
                var dmix = Math.round(random(200, 375))
                var dblend = Math.round(random(50, 70))
                var dobstacle = createSprite(1100, 100, dblend, dmix);
                dobstacle.shapeColor = "red"
                //obstacle.scale=0.2
                dobstacle.velocityX = -(6 + 3 * score / 100);
                //generate random obstacles
                //var rand = Math.round(random(1,6));
                dobstacle.lifetime = 200;
                blockGroup.add(dobstacle);
        }
}
function level2() {       
 if(frameCount % 120==0){        
var missle=createSprite(1100,player.y-20,150,30)
missle.addImage("missle.png",lv2);
missle.scale = 0.22;
missle.velocityX=-20;
missle.lifetime=200;
//missle.shapeColor="orange"
blockGroup.add(missle);
 }
}

function spawnObstacles() {
        if (frameCount % 100 === 0) {
                var mix = Math.round(random(100, 265))
                var blend = Math.round(random(50, 70))
                var obstacle = createSprite(1100, 100, blend, mix);
                obstacle.shapeColor = "red"
                //obstacle.scale=0.2
                obstacle.velocityX = -(6 + 3 * score / 100);
                //generate random obstacles
                // var rand = Math.round(random(1,6));
                /*switch(rand) {
                  case 1: obstacle.y=1100
                  obstacle.velocityX = -(6+3*score/100);
                          break;
                  case 2: obstacle.y=1100
                  obstacle.velocityX = -(6+3*score/100);
                          break;
                  case 3: obstacle.y=1100
                  obstacle.velocityX = -(6+3*score/100);
                          break;
                  case 4: obstacle.x=10
                  obstacle.velocityX = -(6+3*score/100);
                          break;
                  case 5: obstacle.x=10
                  obstacle.velocityX = -(6+3*score/100);
                          break;
                  case 6: obstacle.x=10
                  obstacle.velocityX = -(6+3*score/100);
                          break;
                  default: break;
                }
                */
                obstacle.lifetime = 200;
                blockGroup.add(obstacle);
        }
}
