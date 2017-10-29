/*
when left arrow clicked, reverse (1,2) -> (4,1) -> (3,4) -> (2,3) -> (1,2)
when right arrow clicked, forward (1,2) -> (2,3) -> (3,4) -> (4,1) -> (1,2)
*/
{
var activeFrame = [0,1];
var framesText = ["Extra-Small", "Small", "Medium", "Large"];
var framesImgs = ["media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png"];
$("#framesLeft").on("click", function(){
	if(activeFrame[0]==0){
		activeFrame[0]=framesImgs.length-1;
		activeFrame[1]-=1;
	}
	else if(activeFrame[1]==0){
		activeFrame[1]=framesImgs.length-1;
		activeFrame[0]-=1;
	}
	else{
		activeFrame[0]-=1;
		activeFrame[1]-=1;
	}
	displayItems();
});

$("#framesRight").on("click", function(){
	if(activeFrame[0]===framesImgs.length-1){
		activeFrame[0]=0;
		activeFrame[1]+=1;
	}
	else if(activeFrame[1]===framesImgs.length-1){
		activeFrame[1]=0;
		activeFrame[0]+=1;
	}
	else{
		activeFrame[0]+=1;
		activeFrame[1]+=1;
	}
	displayItems();
});

function displayItems(){
	document.getElementById("img1").src=framesImgs[activeFrame[0]];
	document.getElementById("img2").src=framesImgs[activeFrame[1]];
	document.getElementById("label1").innerHTML=framesText[activeFrame[0]];
	document.getElementById("label2").innerHTML=framesText[activeFrame[1]];
}
}
{
var activeWheel = [0,1];
var wheelsText = ["10 Inches", "15 Inches", "20 Inches", "25 Inches"];
var wheelsImgs = ["media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png"];
$("#wheelsLeft").on("click", function(){
	if(activeWheel[0]==0){
		activeWheel[0]=wheelsImgs.length-1;
		activeWheel[1]-=1;
	}
	else if(activeWheel[1]==0){
		activeWheel[1]=wheelsImgs.length-1;
		activeWheel[0]-=1;
	}
	else{
		activeWheel[0]-=1;
		activeWheel[1]-=1;
	}
	displayItemsWheels();
});

$("#wheelsRight").on("click", function(){
	if(activeWheel[0]===wheelsImgs.length-1){
		activeWheel[0]=0;
		activeWheel[1]+=1;
	}
	else if(activeWheel[1]===wheelsImgs.length-1){
		activeWheel[1]=0;
		activeWheel[0]+=1;
	}
	else{
		activeWheel[0]+=1;
		activeWheel[1]+=1;
	}
	displayItemsWheels();
});

function displayItemsWheels(){
	document.getElementById("img3").src=wheelsImgs[activeWheel[0]];
	document.getElementById("img4").src=wheelsImgs[activeWheel[1]];
	document.getElementById("label3").innerHTML=wheelsText[activeWheel[0]];
	document.getElementById("label4").innerHTML=wheelsText[activeWheel[1]];
}
}
{
var activeBars = [0,1];
var barsText = ["Racing", "Mountain", "Smooth"];
var barsImgs = ["media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png"];
$("#barsLeft").on("click", function(){
	if(activeBars[0]==0){
		activeBars[0]=barsImgs.length-1;
		activeBars[1]-=1;
	}
	else if(activeBars[1]==0){
		activeBars[1]=barsImgs.length-1;
		activeBars[0]-=1;
	}
	else{
		activeBars[0]-=1;
		activeBars[1]-=1;
	}
	displayItemsBars();
});

$("#barsRight").on("click", function(){
	if(activeBars[0]===barsImgs.length-1){
		activeBars[0]=0;
		activeBars[1]+=1;
	}
	else if(activeBars[1]===barsImgs.length-1){
		activeBars[1]=0;
		activeBars[0]+=1;
	}
	else{
		activeBars[0]+=1;
		activeBars[1]+=1;
	}
	displayItemsBars();
});

function displayItemsBars(){
	document.getElementById("img5").src=barsImgs[activeBars[0]];
	document.getElementById("img6").src=barsImgs[activeBars[1]];
	document.getElementById("label5").innerHTML=barsText[activeBars[0]];
	document.getElementById("label6").innerHTML=barsText[activeBars[1]];
}
}
{
var activePedals = [0,1];
var pedalsText = ["Small", "Regular", "Large"];
var pedalsImgs = ["media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png"];
$("#pedalsLeft").on("click", function(){
	if(activePedals[0]==0){
		activePedals[0]=pedalsImgs.length-1;
		activePedals[1]-=1;
	}
	else if(activePedals[1]==0){
		activePedals[1]=pedalsImgs.length-1;
		activePedals[0]-=1;
	}
	else{
		activePedals[0]-=1;
		activePedals[1]-=1;
	}
	displayItemsWheels();
});

$("#pedalsRight").on("click", function(){
	if(activePedals[0]===pedalsImgs.length-1){
		activePedals[0]=0;
		activePedals[1]+=1;
	}
	else if(activePedals[1]===pedalsImgs.length-1){
		activePedals[1]=0;
		activePedals[0]+=1;
	}
	else{
		activePedals[0]+=1;
		activePedals[1]+=1;
	}
	displayItemsWheels();
});

function displayItemsWheels(){
	document.getElementById("img7").src=pedalsImgs[activePedals[0]];
	document.getElementById("img8").src=pedalsImgs[activePedals[1]];
	document.getElementById("label7").innerHTML=pedalsText[activePedals[0]];
	document.getElementById("label8").innerHTML=pedalsText[activePedals[1]];
}
}
{
var activeGear = [0,1];
var gearText = ["1 Gear", "2 Gears","3 Gears", "4 Gears", "5 Gears", "6 Gears"];
var gearImgs = ["media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png"];
$("#gearLeft").on("click", function(){
	if(activeGear[0]==0){
		activeGear[0]=gearImgs.length-1;
		activeGear[1]-=1;
	}
	else if(activeGear[1]==0){
		activeGear[1]=gearImgs.length-1;
		activeGear[0]-=1;
	}
	else{
		activeGear[0]-=1;
		activeGear[1]-=1;
	}
	displayItemsGears();
});

$("#gearRight").on("click", function(){
	if(activeGear[0]===gearImgs.length-1){
		activeGear[0]=0;
		activeGear[1]+=1;
	}
	else if(activeGear[1]===gearImgs.length-1){
		activeGear[1]=0;
		activeGear[0]+=1;
	}
	else{
		activeGear[0]+=1;
		activeGear[1]+=1;
	}
	displayItemsGears();
});

function displayItemsGears(){
	document.getElementById("img9").src=gearImgs[activeGear[0]];
	document.getElementById("img0").src=gearImgs[activeGear[1]];
	document.getElementById("label9").innerHTML=gearText[activeGear[0]];
	document.getElementById("label0").innerHTML=gearText[activeGear[1]];
}
}
{
var activeSeat = [0,1];
var seatText = ["Narrow", "Regular","Wide", "Extra-narrow"];
var seatImgs = ["media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png","media/imgs/logo.png"];
$("#seatLeft").on("click", function(){
	if(activeSeat[0]==0){
		activeSeat[0]=seatImgs.length-1;
		activeSeat[1]-=1;
	}
	else if(activeSeat[1]==0){
		activeSeat[1]=seatImgs.length-1;
		activeSeat[0]-=1;
	}
	else{
		activeSeat[0]-=1;
		activeSeat[1]-=1;
	}
	displayItemsSeat();
});

$("#seatRight").on("click", function(){
	if(activeSeat[0]===seatImgs.length-1){
		activeSeat[0]=0;
		activeSeat[1]+=1;
	}
	else if(activeSeat[1]===seatImgs.length-1){
		activeSeat[1]=0;
		activeSeat[0]+=1;
	}
	else{
		activeSeat[0]+=1;
		activeSeat[1]+=1;
	}
	displayItemsSeat();
});

function displayItemsSeat(){
	document.getElementById("img10").src=seatImgs[activeSeat[0]];
	document.getElementById("img11").src=seatImgs[activeSeat[1]];
	document.getElementById("label10").innerHTML=seatText[activeSeat[0]];
	document.getElementById("label11").innerHTML=seatText[activeSeat[1]];
}
}

$("#frames1").on("click", function(){
	localStorage.setItem("product", document.getElementById("label1").innerText);
	localStorage.setItem("cat", "frames");
	$(window).attr("location", "product.html");
	return false;
});
$("#frames2").on("click", function(){
	localStorage.setItem("product", document.getElementById("label2").innerText);
	localStorage.setItem("cat", "frames");
	$(window).attr("location", "product.html");
	return false;
});
$("#wheels1").on("click", function(){
	localStorage.setItem("product", document.getElementById("label3").innerText);
	localStorage.setItem("cat", "wheels");
	$(window).attr("location", "product.html");
	return false;
});
$("#wheels2").on("click", function(){
	localStorage.setItem("product", document.getElementById("label4").innerText);
	localStorage.setItem("cat", "wheels");
	$(window).attr("location", "product.html");
	return false;
});
$("#bars1")  .on("click", function(){
	localStorage.setItem("product", document.getElementById("label5").innerText);
	localStorage.setItem("cat", "handlebars");
	$(window).attr("location", "product.html");
	return false;
});
$("#bars2")  .on("click", function(){
	localStorage.setItem("product", document.getElementById("label6").innerText);
	localStorage.setItem("cat", "handlebars");
	$(window).attr("location", "product.html");
	return false;
});
$("#pedals1").on("click", function(){
	localStorage.setItem("product", document.getElementById("label7").innerText);
	localStorage.setItem("cat", "pedals");
	$(window).attr("location", "product.html");
	return false;
});
$("#pedals2").on("click", function(){
	localStorage.setItem("product", document.getElementById("label8").innerText);
	localStorage.setItem("cat", "pedals");
	$(window).attr("location", "product.html");
	return false;
});
$("#gear1")  .on("click", function(){
	localStorage.setItem("product", document.getElementById("label9").innerText);
	localStorage.setItem("cat", "gears");
	$(window).attr("location", "product.html");
	return false;
});
$("#gear2")  .on("click", function(){
	localStorage.setItem("product", document.getElementById("label0").innerText);
	localStorage.setItem("cat", "gears");
	$(window).attr("location", "product.html");
	return false;
});
$("#seat1")  .on("click", function(){
	localStorage.setItem("product", document.getElementById("label10").innerText);
	localStorage.setItem("cat", "seats");
	$(window).attr("location", "product.html");
	return false;
});
$("#seat2")  .on("click", function(){
	localStorage.setItem("product", document.getElementById("label11").innerText);
	localStorage.setItem("cat", "seats");
	$(window).attr("location", "product.html");
	return false;
});


