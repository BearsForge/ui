var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var charInventoryVisible = false;
var charInventoryId = -1;
var stats = false;
var statsId = -1;
var merchant = false;
var merchantId = -1;
var quests = false;
var questsId = -1;


function drawInventory(){
	ctx.fillStyle = "#FFAAAA";
	ctx.fillRect(canvas.width-530,0,530,canvas.height);
	
	drawText("Inventory",canvas.width-530 + 530/2,canvas.height/2);
}

function drawStats(){
	ctx.fillStyle = "#AAFFAA";
	var offset = 10;
	ctx.fillRect(offset,80,300,75);
	var height = 450;
	ctx.fillRect(offset,canvas.height - height - offset,300,height);
	
	drawText("Skills",offset + 300/2,80 + 75/2);
	drawText("Stats",offset + 300/2,canvas.height - height - offset + height/2);
}

function drawMerchant(){
	ctx.fillStyle = "#AAAAFF";
	ctx.fillRect(0,0,530,canvas.height);
	
	drawText("Merchant",530/2,canvas.height/2);
}

function drawQuests(){
	ctx.fillStyle = "#FFAAFF";
	var w_offset = 300;
	var h_offset = 100;
	var width = canvas.width - w_offset - w_offset
	var height = canvas.height - h_offset - h_offset
	ctx.fillRect(w_offset,h_offset,width,height);
	
	drawText("Quest",w_offset + width/2,h_offset + height/2);
}

function drawMap(){
	ctx.fillStyle = "#DDDDDD";
	var w_offset = 280;
	var h_offset = 80;
	var width = canvas.width - w_offset - w_offset
	var height = canvas.height - h_offset - h_offset
	ctx.fillRect(w_offset,h_offset,width,height);
	
	drawText("Map",w_offset + width/2,h_offset + height/2);
}

function drawText(msg, x, y){
	ctx.font="20px Georgia";
	ctx.textAlign="center"; 
	ctx.textBaseline = "middle";
	ctx.fillStyle = "#000000";
	ctx.fillText(msg,x,y);
}

var keys = new Map([]);

var inventoryKey = 'i';
var statsKey = 'p';
var merchantKey = 'Merchant';
var questsKey = 'j';
var mapKey = 'm';

var key_to_fun = new Map([
	[inventoryKey, drawInventory], 
	[statsKey, drawStats],
	[merchantKey, drawMerchant],
	[questsKey, drawQuests],
	[mapKey, drawMap]]);
	

document.addEventListener('keyup', (event) => {
	changeWindow(event.key);
	draw();
});