
let img;
let button;

//set up x, y position arrays for each emoji
let heart = [400, 150];
let heartFace = [280, 180];
let okHand = [500, 150];
let claphand = [200, 300];
let hearteyes = [600,180];
let firework = [680,270];
let cryface = [650, 490];
let maskface = [400,550];
let angryface = [200,400];
let womanhands = [300,300];
let stars = [400,300];
let fire = [500,300];
let womanintech = [600,300];
let flowers = [700,370];
let star = [550,550];
let thumb = [550,410];
let virus = [250,500];
let lightbulb = [425,420];
let eyes = [320,420];


function setup() {
  createCanvas(windowWidth, windowHeight);
  r = 255;
  g = 255;
  b = 255;
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  background(255);
  button = createButton('dark mode');
  button.position(40, 40);
  button.mousePressed(changeBG);
}

function draw(){
background (r,g,b);

//gray lines//gray lines//gray lines//gray lines//gray lines//gray lines
//from heart
stroke(225, 224, 225);
strokeWeight(3.5);
line(heart[0], heart[1], claphand[0], claphand[1]);
line(heart[0], heart[1], heartFace[0], heartFace[1]);
line(heart[0], heart[1], okHand[0], okHand[1]);
line(heart[0], heart[1], fire[0], fire[1]);
line(heart[0], heart[1], stars[0], stars[1]);

//from okHand
stroke(225, 224, 225);
strokeWeight(3.5);
line(okHand[0], okHand[1], thumb[0], thumb[1]);

//from heartFace
stroke(225, 224, 225);
strokeWeight(3.5);
line(heartFace[0], heartFace[1], womanintech[0], womanintech[1]);
line(heartFace[0], heartFace[1], claphand[0], claphand[1]);

//from hearteyes
stroke(225, 224, 225);
strokeWeight(3.5);
line(hearteyes[0], hearteyes[1], claphand[0], claphand[1]);
line(hearteyes[0], hearteyes[1], firework[0], firework[1]);
line(hearteyes[0], hearteyes[1], flowers[0], flowers[1]);
line(hearteyes[0], hearteyes[1], thumb[0], thumb[1]);
line(hearteyes[0], hearteyes[1], fire[0], fire[1]);

//from claphand
stroke(225, 224, 225);
strokeWeight(3.5);
line(claphand[0], claphand[1], lightbulb[0], lightbulb[1]);
line(claphand[0], claphand[1], thumb[0], thumb[1]);

//from stars
stroke(225, 224, 225);
strokeWeight(3.5);
line(stars[0], stars[1], lightbulb[0], lightbulb[1]);
line(stars[0], stars[1], thumb[0], thumb[1]);
line(stars [0],stars[1], heartFace [0], heartFace [1]);



//purple lines//purple lines//purple lines//purple lines//purple lines//
//from heart
if(mouseIsPressed && dist(mouseX, mouseY, heart[0], heart[1]) < 50){
print("Heart!");
stroke(225, 125, 236);
strokeWeight(3.5);
line(heart[0], heart[1], claphand[0], claphand[1]);
line(heart[0], heart[1], heartFace[0], heartFace[1]);
line(heart[0], heart[1], okHand[0], okHand[1]);
line(heart[0], heart[1], fire[0], fire[1]);
line(heart[0], heart[1], stars[0], stars[1]);


}

//from okHand
if(mouseIsPressed && dist(mouseX, mouseY, okHand[0], okHand[1]) < 50){
print("okHand!");
stroke(225, 125, 236);
strokeWeight(3.5);
line(okHand[0], okHand[1], heart[0], heart[1]);
line(okHand[0], okHand[1], thumb[0], thumb[1]);
}

//from heartface
if(mouseIsPressed && dist(mouseX, mouseY, heartFace[0], heartFace[1]) < 50){
print("heartFace!");
stroke(225, 125, 236);
strokeWeight(3.5);
line(heartFace[0], heartFace[1], heart[0], heart[1]);
line(heartFace[0], heartFace[1], womanintech[0], womanintech[1]);
line(heartFace[0], heartFace[1], claphand[0], claphand[1]);
}

//from hearteyes
if(mouseIsPressed && dist(mouseX, mouseY, hearteyes[0], hearteyes[1]) < 50){
print("hearteyes!");
stroke(225, 125, 236);
strokeWeight(3.5);
line(hearteyes[0], hearteyes[1], claphand[0], claphand[1]);
line(hearteyes[0], hearteyes[1], firework[0], firework[1]);
line(hearteyes[0], hearteyes[1], flowers[0], flowers[1]);
line(hearteyes[0], hearteyes[1], thumb[0], thumb[1]);
line(hearteyes[0], hearteyes[1], fire[0], fire[1]);
}

//from claphand
if(mouseIsPressed && dist(mouseX, mouseY, claphand[0], claphand[1]) < 50){
print("claphand!");
stroke(225, 125, 236);
strokeWeight(3.5);
line(claphand[0], claphand[1], lightbulb[0], lightbulb[1]);
line(claphand[0], claphand[1], thumb[0], thumb[1]);
line(claphand[0], claphand[1], heartFace[0], heartFace[1]);
line(claphand[0], claphand[1], hearteyes[0], hearteyes[1]);
line(claphand[0], claphand[1], heart[0], heart[1]);

textSize (12);
noStroke ();
text('3000 times', claphand[0]-60, claphand[1]);
}

//position//position//position//position//position//position
//draw emoji positioning it using the okHand x,y array
textSize(112);
text('❤️', heart[0], heart[1]);

textSize(16);
text('👌', okHand[0], okHand[1]);

textSize(44);
text('🥰', heartFace[0], heartFace[1]);

textSize(48);
text("👏", claphand [0], claphand [1]);

textSize(68);
text('😍', hearteyes [0], hearteyes [1]);

textSize(28);
text('🎉', firework [0], firework [1]);

textSize(52);
text('😭', 650, 490);

textSize(72);
text('😷', 400, 550);

textSize(16);
text('🤬', 200, 400);

textSize(12);
text('🤷', 300, 300);

textSize(15);
text('🙏', 300, 300);

textSize(48);
text('✨', 400, 300);

textSize(40);
text('🔥', 500, 300);

textSize(20);
text('👩‍💻', 600, 300);

textSize(44);
text('💐', 700, 370);

textSize(32);
text('⭐', 550, 550);

textSize(88);
text('👍', 550, 410);

textSize(52);
text('🦠', 250, 500);

textSize(52);
text('💡', lightbulb [0], lightbulb [1]);

textSize(28);
text('🥺', eyes [0], eyes [1]);
}

function changeBG() {
  r = (42);
  g = (40);
  b = (38);
}

function newText(){
  textchange.html ("Hey", 200,200)
}

function oldText(){
  textchange.html ("YES!",200,200)
}
