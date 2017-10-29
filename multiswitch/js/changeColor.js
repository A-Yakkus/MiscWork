var textName = "textcolor";
var fgaName = "foregroundcolora";
var fgbName = "foregroundcolorb";
var backName = "backgroundcolor";

$(document).on("change","#fgcolorA", function() {
	localStorage.setItem(fgaName, document.getElementById("fgcolorA").value);
	updateFGA();
});
$(document).on("change","#fgcolorB", function() {
	localStorage.setItem(fgbName, document.getElementById("fgcolorB").value);
	updateFGB();
});
$(document).on("change","#bgcolor", function() {
	localStorage.setItem(backName, document.getElementById("bgcolor").value);
	updateBG();
});
$(document).on("change","#textcolor", function() {
	localStorage.setItem(textName, document.getElementById("textcolor").value);
	updateText();
});

$("#navBarLogo").click(function(){localStorage.clear();});

$(document).ready(function(){
	if(typeof(Storage)!== "undefined")
	{	
		if(localStorage.getItem(textName)== "undefined"|| localStorage.getItem(textName)== null){
			localStorage.setItem(textName, "#FFFFFF");	
		}
		if(localStorage.getItem(fgaName) == "undefined"|| localStorage.getItem(fgaName)== null){
			localStorage.setItem(fgaName, "#0d47a1");	
		}
		if(localStorage.getItem(fgbName) == "undefined"|| localStorage.getItem(fgbName)== null){
			localStorage.setItem(fgbName, "#2196f3");
		}
		if(localStorage.getItem(backName) == "undefined"|| localStorage.getItem(backName)== null){
			localStorage.setItem(backName, "#FFFFFF");	
		}
		updateBG();
		updateFGA();
		updateFGB();
		updateText();
		
		if(document.getElementById("textcolor")=="undefined"||document.getElementById("textcolor")!=null)
		{
			document.getElementById("textcolor").value=localStorage.getItem(textName);
			document.getElementById("fgcolorA").value=localStorage.getItem(fgaName);
			document.getElementById("fgcolorB").value=localStorage.getItem(fgbName);
			document.getElementById("bgcolor").value=localStorage.getItem(backName);
		}
	}
});

function updateBG()
{
	var elemen = document.getElementsByClassName("bgcolorclass");
	if(elemen.length>0){
		for(var i=0; i< elemen.length; i++){
			elemen[i].style.backgroundColor = localStorage.getItem(backName);
		}
	}
}
function updateFGA()
{
	var elemen = document.getElementsByClassName("fgcolorAclass");
	if(elemen.length>0){
		for(var i=0; i< elemen.length; i++){
			elemen[i].style.backgroundColor = localStorage.getItem(fgaName);
		}
	}
}
function updateFGB()
{
	var elemen = document.getElementsByClassName("fgcolorBclass");
	if(elemen.length>0){
		for(var i=0; i< elemen.length; i++){
			elemen[i].style.backgroundColor = localStorage.getItem(fgbName);
		}
	}
}
function updateText()
{
	var elemen = document.getElementsByClassName("textcolorclass");
	if(elemen.length>0){
		for(var i=0; i< elemen.length; i++){
			elemen[i].style.color = localStorage.getItem(textName);
		}
	}
}

function clear(){
	localStorage.clear();
}
