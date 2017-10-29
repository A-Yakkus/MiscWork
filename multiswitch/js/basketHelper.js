$(document).init(function(){
	var basketData;
	if(localStorage.getItem("basket")=="undefined"||localStorage.getItem("basket")==null)
	{
		localStorage.setItem("basket", '{"basket":[]}');
	}
	else
	{
		basketData = JSON.parse(localStorage.getItem("basket"));
		console.log(basketData);
		console.log(basketData.basket);
		var currentBasket = basketData.basket;
		var display = "";
		for(var i = 0; i<currentBasket.length;i++){
			var activeItem = currentBasket[i];
			console.log(activeItem);
			//if (!activeItem.hasOwnProperty(activeItem)) continue;
			display+=createItemElement(activeItem.name,activeItem.category,activeItem.price,activeItem.colour);
		}
		console.log(display);
		document.getElementById("basket").innerHTML=display;
	}
	
	function createItemElement(name, category, price, colour){
		//console.log(name);
		return "<item id=" + name + category + price + colour + " class='fgcolorBclass'><p class='textcolorclass left inline'>"
		+ name + "-" + category + "</p><p class='textcolorclass right inline'>Price : £" + price + 
		"<br><p class='textcolorclass left inline'>Colour : " + colour +
		"</p><p class='textcolorclass right inline'>Quantity : " 
		+ getQuantity(name, category, price, colour) +" <button class='addButton'>+</button><button class='subButton'>-</button></p><br>";
	}
	
	function getQuantity(name, category, price, colour){
		var currentID = name+category+price+colour;
		//console.log(currentID);
		var localQuantity = 0;
		for(var i = 0; i<basketData.basket.length;i++){
			//console.log("index1"+i);
			for(var j=i;j<basketData.basket.length;j++){
				//console.log("index2"+j);
				var testID = basketData.basket.name+basketData.basket.category+basketData.basket.price+basketData.basket.colour;
				//console.log(testID);
				if(currentID===testID){
					localQuantity++;
				}
			}
		}
		//console.log(localQuantity);
		return localQuantity;
	}
	
});