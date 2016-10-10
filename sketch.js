var colorGreen;
var colorPink;
var colorGrey;
var colorBlack;

var alien, angel, balloon, beer, brokenHeart;
var champagne, cheers, cool, crying, cutlery;
var devil, exclamation, fire;
var happy, hardWork, heart, heartEyes, help;
var joy, kiss, knife, lucky, money, moneybag;
var noSign, okHand, onehundred, partyPopper, peace, prayingHand;
var sad, sick, sideEye, skull, sleep, snowflake, stoneFace;
var thumbsUp, weary, xSign;

var imageArray = [];

var button;

var checkbox, chkboxText; 
var checkboxArray = [];
var feelings = ["afraid", "amazed", "angry", "annoyed", "anxious", "bitter", "cold", "confused", "congratulatory", "dead", "festive", "fly", "happy", "helpless", "hurt", "indifferent", "interested", "loving", "lucky", "mischievous", "nice", "rich", "sad", "sick", "surprised", "tense"];

function preload() {
	alien = loadImage("assets/alien.png");
	angel = loadImage("assets/angel.png");
	balloon = loadImage("assets/baloon.png");
	beer = loadImage("assets/beer.png");
	brokenHeart = loadImage("assets/brokenHeart.png");
	champagne = loadImage("assets/champagne.png");
	cheers = loadImage("assets/cheers.png");
	cool = loadImage("assets/cool.png");
	crying = loadImage("assets/crying.png");
	cutlery = loadImage("assets/cutlery.png");
	devil = loadImage("assets/devil.png");
	exclamation = loadImage("assets/!.png");
	happy = loadImage("assets/happy.png");
	hardWork = loadImage("assets/hardWork.png");
	heart = loadImage("assets/heart.png");
	heartEyes = loadImage("assets/heartEyes.png");
	help = loadImage("assets/help.png");
	joy = loadImage("assets/joy.png");
	kiss = loadImage("assets/kiss.png");
	knife = loadImage("assets/knife.png");
	lucky = loadImage("assets/lucky.png");
	money = loadImage("assets/money.png");
	moneybag = loadImage("assets/moneyBag.png");
	noSign = loadImage("assets/noSign.png");
	okHand = loadImage("assets/okHand.png");
	oneHundred = loadImage("assets/100.png");
	partyPopper = loadImage("assets/partyPopper.png");
	peace = loadImage("assets/peace.png");
	prayingHand = loadImage("assets/prayingHand.png");
	sad = loadImage("assets/sad.png");
	sick = loadImage("assets/sick.png");
	sideEye = loadImage("assets/sideEye.png");
	skull = loadImage("assets/skull.png");
	sleep = loadImage("assets/sleep.png");
	snowflake = loadImage("assets/snowflake.png");
	stoneFace = loadImage("assets/stoneFace.png");
	thumbsUp = loadImage("assets/thumbsUp.png");
	weary = loadImage("assets/weary.png");
	xSign = loadImage("assets/x.png");
}

function setup() {
	colorGreen = color('#b0af99');
	colorPink = color('#F18FBB');
	colorGrey = color('#DFDFDF');
	colorBlack = color('#2D3233');
	createCanvas(windowWidth, windowHeight);
	homePage();
}

function draw() {

}

function homePage() {
	background(colorGrey);
	textAlign(CENTER);
	textSize(150);
	fill(colorPink);
	text("emoji test", windowWidth*0.5, windowHeight*0.3);

	textSize(20);
	fill(colorBlack);
	text("get the emoji combination for what you're feeling", windowWidth*0.5, windowHeight*0.4);

	button = createButton('GO');
	button.position(windowWidth*0.5 - 150 , windowHeight*0.5);
	button.style('background', colorPink);
	button.style('width', '300px');
	button.style('height', '100px');
	button.style('border-style', 'none');
	button.style('border-radius', '5px');
	button.style('color', colorGrey);
	button.style('font-size','50px');
	button.mousePressed(emojiTest);
}


function emojiTest() {
	background(colorGrey);

	var moveTextDown = 0;
	for (var i = 0; i < feelings.length; i ++){
		chkboxText = createP(feelings[i]);
		chkboxText.position(windowWidth*0.25,windowHeight*0.08 + moveTextDown);
    	
    	checkbox =  createInput(0,i,0);
    	checkbox.attribute("type","checkbox"); 
    	checkbox.position(windowWidth*0.20, windowHeight*0.10 + moveTextDown);

    	moveTextDown += 20;

    	checkbox.value(i).name = feelings[i]; //set names for each box
    	checkboxArray.push(checkbox.value(i)); //put into array

    	if (checkbox.value(i).elt.checked) {
        	this.checkbox.value("on");
    	} else {
    		checkbox.value("off");
    	}
	}

    
    console.log(checkboxArray);


    button.style('background', colorPink);
	button.position(windowWidth*0.5 - 30, windowHeight*0.95);
	button.style('width', '60px');
	button.style('height', '20px');
	button.style('border-style', 'none');
	button.style('border-radius', '3px');
	button.style('color', '#DFDFDF');
	button.style('font-size','10px');
	button.mousePressed(processResult);
}

function processResult(){
	background(colorGrey);


	for (var i = 0; i < feelings.length; i++){
		if (checkbox.value("on")) {
			if (checkbox.value.name = "afraid"){
				image(xSign, windowWidth*0.5, windowHeight*0.25);
			} else {
				
			}
			if (checkbox.value.name = "amazed"){
				image(exclamation, windowWidth*0.5, windowHeight*0.25);
			}
		}
		console.log(checkbox.elt.checked);
	}


	textAlign(CENTER);
	textSize(20);
	fill(colorBlack);
	text("to try again press GO", windowWidth*0.5, windowHeight*0.75);

	button.position(windowWidth*0.5 - 150 , windowHeight*0.8);
	button.style('background', colorPink);
	button.style('width', '300px');
	button.style('height', '100px');
	button.style('border-style', 'none');
	button.style('border-radius', '5px');
	button.style('color', colorGrey);
	button.style('font-size','50px');
}



function imageToEmotion() {
	
	
}