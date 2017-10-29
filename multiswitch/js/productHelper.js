var productName;
var JSONdata ='{"frames":{"extra-small":{"price":12,"description":"A smaller frame, suitable for 5-10 year olds or those under 3feet ","defaultColour":"#000000"},"small":{"price":18,"description":"A smaller frame, suitable for 10-15 year olds or those over 5feet and under 5feet ","defaultColour":"#000000"},"medium":{"price":28,"description":"A medium frame, suitable those over 5feet and under 6feet ","defaultColour":"#000000"},"large":{"price":40,"description":"A larger frame, suitable for those over 6feet ","defaultColour":"#000000"}},"wheels":{"10 Inches":{"tyreTread":"mountain","description":"A small wheel, ideal for those learning to ride. It is best coupled with an extra-small frame","defaultColourTread":"#000000","defaultColourSpoke":"#000000","price":15},"15 Inches":{"tyreTread":"mountain","description":"A smaller wheel. It works well with the small frame.","defaultColourTread":"#000000","defaultColourSpoke":"#000000","price":20},"20 Inches":{"tyreTread":"mountain","description":"A medium sized wheel. Works best with a medium frame","defaultColourTread":"#000000","defaultColourSpoke":"#000000","price":25},"25 Inches":{"tyreTread":"mountain","description":"A large wheel. Works best with a large frame.","defaultColourTread":"#000000","defaultColourSpoke":"#000000","price":30}},"handlebars":{"racing":{"price":12,"description":"Handlebars designed for racing. Speed is of the essence.","defaultColour":"#000000"},"mountain":{"price":12,"description":"Tougher handlebars designed to be gripped hard, yet still be comfortable.","defaultColour":"#000000"},"everyday":{"price":12,"description":"Handlebars that can be used everyday, no matter the weather.","defaultColour":"#000000"}},"pedals":{"regular":{"price":12,"description":"Simple regular pedals, designed for smaller feet.","defaultColour":"#000000"},"large":{"price":12,"description":"Simple Large pedals, designed for larger feet.","defaultColour":"#000000"},"small":{"price":10,"description":"Smaller pedals for smaller feet.","defaultColour":"#000000"}},"gears":{"1 Gear":{"price":12,"description":"A set of gears containing 1 gear. (Includes gear changer)","defaultColour":"#000000"},"2 Gears":{"price":18,"description":"A set of gears containing 2 gears. (Includes gear changer)","defaultColour":"#000000"},"3 Gears":{"price":24,"description":"A set of gears containing 3 gears. (Includes gear changer)","defaultColour":"#000000"},"4 Gears":{"price":30,"description":"A set of gears containing 4 gears. (Includes gear changer)","defaultColour":"#000000"},"5 Gears":{"price":40,"description":"A set of gears containing 5 gears. (Includes gear changer)","defaultColour":"#000000"},"6 Gears":{"price":50,"description":"A set of gears containing 6 gears. (Includes gear changer)","defaultColour":"#000000"}},"seats":{"narrow":{"price":20,"description":"A narrow seat designed for smaller bums. Made of memory foam and covered in real leather for a superb ride.","defaultColour":"#000000"},"regular":{"price":30,"description":"A regular sized seat designed for most bums. Made of memory foam and covered in real leather for a superb ride.","defaultColour":"#000000"},"wide":{"price":40,"description":"A large seat designed for wider bums. Made of memory foam and covered in real leather for a superb ride.","defaultColour":"#000000"},"extranarrow":{"price":15,"description":"An extremely narrow seat designed for the smallest of bums. Made of memory foam and covered in real leather for a superb ride.","defaultColour":"#000000"}}}';
var texts = [
	framesText,wheelsText,barsText,pedalsText,gearText,seatText
]
var objectsInjson=[];
var activeProduct=null;

$(document).init(function(){
	productName = localStorage.getItem("product");
	if(productName == "undefined" || productName == null){
		populatePage("Extra-Small", "frames");

	}
	else
	{
		populatePage(productName, localStorage.getItem("cat"));
	}
	{
		addTitle(0, "Frames");
		addTitle(1, "Wheels");
		addTitle(2, "Handlebars");
		addTitle(3, "Pedals");
		addTitle(4, "Gears");
		addTitle(5, "Seats");
		addProductList();
	}
});

function populatePage(productName, productCategory){
	localStorage.setItem("cat", productCategory);
	var productTitle = productCategory + " : " + productName
	document.getElementById("productName").innerText=productTitle.substr(0,1).toUpperCase()+productTitle.substr(1);
	for(var i in objectsInjson){
		if(objectsInjson[i].name.toLowerCase()==productName.toLowerCase() && objectsInjson[i].category==productCategory){
				document.getElementById("productDescription").innerText="Description : "+objectsInjson[i].description;
				document.getElementById("productPrice").innerText="Price : £"+objectsInjson[i].price;
				activeProduct=objectsInjson[i];
			}
		}
	}

function addProductList(){
	if(document.getElementById("productList")!==null||document.getElementById("productList")!==null)
	{
		var list="";
		for(var i in texts)
		{
			
			list+="<ul>";
			for(var j in texts[i])
			{
				if(j==0){
					list+="<li id="+texts[i][j]+" class='block small-text'>"+texts[i][j]+"</li>";
				}
				else{
					list+="<li id="+texts[i][j]+" class='block small-text' onclick='setProduct(this)'>"+texts[i][j]+"</li>";
				}
			}
			list+="</ul><br>";
			document.getElementById("productList").innerHTML+=list;
			list="";
		}
		
	}
}

function setProduct(elementIn)
{
	localStorage.setItem("product", elementIn.innerText);
	var productCategory = $(elementIn).parent().children().first().text().toLowerCase();
	if(localStorage.getItem("cat")=="undefined"||localStorage.getItem("cat")==null){
		localStorage.setItem("cat", productCategory);
	}
	populatePage(elementIn.innerText, productCategory);
}

$("#AddToBasket").on("click", function(){
	if(localStorage.getItem("basket")=="undefined" || localStorage.getItem("basket")==null){
		localStorage.setItem("basket", '{"basket":[]}');
	}
	else
	{
		var basket = localStorage.getItem("basket").slice(0,-2);
		var basketItem = {
			basket_productName:localStorage.getItem("product"),
			basket_productCategory:localStorage.getItem("cat"),
			basket_productPrice:activeProduct.price,
			basket_productColor:document.getElementById("productColor").value
		}
		var stringBasketItem =JSON.stringify(basketItem);
		console.log(stringBasketItem);
		var toAddToBasket = "";
		if(basket!=='{"basket":['){
			toAddToBasket+=",";
		}
		toAddToBasket+=stringBasketItem
		basket+=toAddToBasket;
		basket+="]}";
		localStorage.setItem("basket", basket);
		console.log(localStorage.getItem("basket"));
	}
});	

function addTitle(oldArrayIndex, title){
	var newArray = [];
	var tempArray = texts[oldArrayIndex];
	newArray.push(title);
	for(var j  in tempArray){
		newArray.push(tempArray[j]);
	}
	texts[oldArrayIndex]=newArray;
	newArray=[];
}

function parses()
{
	var parsedData = JSON.parse(JSONdata);

	for(var type in parsedData){
		if (!parsedData.hasOwnProperty(type)) continue;
		var size = parsedData[type];
		var objectType=[]
		for(var thing in size){
		 	if(!size.hasOwnProperty(thing))continue;
		 	var obj = size[thing];
			obj.category=type;
			obj.name=thing;
	 	 	objectsInjson.push(obj);
		}
	}
}

parses();