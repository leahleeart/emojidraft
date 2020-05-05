var textchange;



function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  background(255);
  textchange = createElement ("hi", "❤️")
  textchange .mouseOver (newText);
  textchange .mouseover (oldText);
}

function newText(){
  textchange.html ("1000 times!", 300,300)
}

function oldText(){
  textchange.html ("C!",200,200)
}
