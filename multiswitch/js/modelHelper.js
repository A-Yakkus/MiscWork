var canvas = document.getElementById("model");

$(document).init(function(){
	canvas.height = 480;
	canvas.width = 480;
	var engine = new BABYLON.Engine(canvas, true);
	var scene = new BABYLON.Scene(engine);
	var camera = new BABYLON.ArcRotateCamera('camera',1.5708, 1.5708, 20, new BABYLON.Vector3(0, 0, 0), scene);
	camera.attachControl(canvas, false);
	var lightTop = new BABYLON.HemisphericLight('lightTop', new BABYLON.Vector3(0,10,0), scene);
	var bikeMat = new BABYLON.StandardMaterial("bike", scene);

	var bikeFrame = function(){
		var cbu = BABYLON.Mesh.CreateCylinder("cbu", 6,.4,.4,10,0, scene, false);
		cbu.rotation = new BABYLON.Vector3(0,0,1.5708);
		var cbl = BABYLON.Mesh.CreateCylinder("cbl", 6,.5,.5,10,0, scene, false);
		cbl.rotation = new BABYLON.Vector3( 0, 0, 1.7453);
		cbl.position = new BABYLON.Vector3( .3, -3, 0);
		var sp = BABYLON.Mesh.CreateCylinder("sp", 6,.75,.75,10,0, scene, false);
		sp.rotation = new BABYLON.Vector3(0, 0, 0.0873);
		sp.position = new BABYLON.Vector3( -3, -1.3, 0);
		var hbp = BABYLON.Mesh.CreateCylinder("hbp", 2.5,.5,.5,10,0, scene, false);
		hbp.rotation = new BABYLON.Vector3( 0, 0, 0.1745);
		hbp.position = new BABYLON.Vector3( 3,-1,0);
		//var frontlwh = BABYLON.Mesh.CreateCylinder("frontlwh", 3,.5,.5,40,1, scene, true);
		//var frontrwh = BABYLON.Mesh.CreateCylinder("frontrwh", 3,.5,.5,40,1, scene, true);
		var bllwh = BABYLON.Mesh.CreateCylinder("bllwh",   4,.2,.2,10,0, scene, false);
		bllwh.rotation = new BABYLON.Vector3(  0,0.0873,1.5708);
		bllwh.position = new BABYLON.Vector3( -4.9,-4, .4);
		var bluwh = BABYLON.Mesh.CreateCylinder("bluwh",   4,.2,.2,10,0, scene, false);
		bluwh.rotation = new BABYLON.Vector3(  0,0.0873,-1.1345);
		bluwh.position = new BABYLON.Vector3(  -4.9,-2.1, .4);
		var brlwh = BABYLON.Mesh.CreateCylinder("brlwh", 4,.2,.2,10,0, scene, false);
		brlwh.rotation = new BABYLON.Vector3( 0,-0.0873,1.5708);
		brlwh.position = new BABYLON.Vector3( -4.9,-4,-.4);
		var bruwh = BABYLON.Mesh.CreateCylinder("bruwh", 4,.2,.2,10,0, scene, false);
		bruwh.rotation = new BABYLON.Vector3( 0,-0.0873,-1.1345)
		bruwh.position = new BABYLON.Vector3( -4.9,-2.1,-.4);
		var lwh = BABYLON.Mesh.CreateTorus("lwh", 1.1,.2,10,scene,false);
		lwh.rotation = new BABYLON.Vector3( 0, 1.5708, 1.5708);
		lwh.position = new BABYLON.Vector3( -6.9,-3.5,.6);
		var rwh = BABYLON.Mesh.CreateTorus("rwh", 1.1,.2,10,scene,false);
		rwh.rotation = new BABYLON.Vector3( 0, 1.5708, 1.5708);
		rwh.position = new BABYLON.Vector3( -6.9,-3.5,-.6);
		var returnMesh = BABYLON.Mesh.MergeMeshes([cbu,cbl,sp,hbp,lwh,rwh,bllwh,bluwh,brlwh,bruwh]);
		returnMesh.material = bikeMat;
		return returnMesh;
	}
	
	var seat = function(){
		var seatLower = BABYLON.Mesh.CreateCylinder("seat",.5,1.5,2,40,0, scene, false);
		var neck = BABYLON.Mesh.CreateCylinder("neck",1,.5,.5,40,0, scene, false);
		var end = BABYLON.Mesh.CreateSphere("end",40,.5,scene,true);
		neck.rotation = new BABYLON.Vector3(0,0,1.5708);
		neck.position = new BABYLON.Vector3(1,0,0); 
		end.position  = new BABYLON.Vector3(1.5,0,0);
		var returnMesh = BABYLON.Mesh.MergeMeshes([seatLower,neck,end]);
		returnMesh.material = bikeMat;
		return returnMesh;
	}
	
	var gears = function(amount){
		var parsedAmount = parseInt(amount.substr(0,1));
		var returnedMeshes = [];
		for(var i = 0; i<parsedAmount; i++){
			var internalGear = gear().clone("gear"+i);
			internalGear.scaling  = new BABYLON.Vector3(1,i+1,i+1);
			internalGear.position = new BABYLON.Vector3(-.11*i,0,0);
			returnedMeshes.push(internalGear);
		}
		var returnMesh = BABYLON.Mesh.MergeMeshes(returnedMeshes);
		returnMesh.material = bikeMat;
		return returnMesh;
	}

	var gear = function(){
		var toothRoot = BABYLON.Mesh.CreateCylinder("tooth",.1,.5,.5,3,0,scene,true);
		toothRoot.rotation = new BABYLON.Vector3(0,0,1.5708);
		var tooth2 = toothRoot.clone("toothClone2");
		tooth2.rotation.x=Math.PI;
		var tooth3 = toothRoot.clone("toothClone3");
		tooth3.rotation.x=Math.PI/6;
		var tooth4 = toothRoot.clone("toothClone4");
		tooth4.rotation.x=-Math.PI/6;
		var tooth5 = toothRoot.clone("toothClone5");
		tooth5.rotation.x=Math.PI/12;
		var tooth6 = toothRoot.clone("toothClone6");
		tooth6.rotation.x=-Math.PI/12;
		var tooth7 = toothRoot.clone("toothClone7");
		tooth7.rotation.x=11*Math.PI/12;
		var tooth8 = toothRoot.clone("toothClone8");
		tooth8.rotation.x=-11*Math.PI/12;
		return BABYLON.Mesh.MergeMeshes([toothRoot,tooth2,tooth3,tooth4,tooth5,tooth6,tooth7,tooth8]);
	}
	
	var wheels = function(scale){
		var center = new BABYLON.Mesh.CreateCylinder("center", 1*scale,.5,.5,10,0,scene);
		var spokeSet1 = spokes(scale);
		var spokeSet2 = spokes(scale);
		spokeSet2.position=new BABYLON.Vector3(.3*scale,0,0);
		center.rotation.z=1.5708;
		spokeSet1.position=new BABYLON.Vector3(-.3*scale,0,0);
		var tyre = new BABYLON.Mesh.CreateTorus("tyre",3.5*scale,1*scale,40,scene);
		tyre.rotation.z=1.5708;
		
		
		var returnMesh = BABYLON.Mesh.MergeMeshes([center,spokeSet1,spokeSet2,tyre]);
		returnMesh.rotation.y=1.5708;
		returnMesh.material = bikeMat;
		return returnMesh;
		
	}
	
	var spokes = function(scale){
		var spoke = new BABYLON.Mesh.CreateCylinder("spoke",3*scale,.1,.1,10,0,scene);
		var spoke2 = spoke.clone("spoke2");
		spoke2.rotation.x = (Math.PI/5);
		var spoke3 = spoke.clone("spoke3");
		spoke3.rotation.x = 2*(Math.PI/5);
		var spoke4 = spoke.clone("spoke4");
		spoke4.rotation.x = 3*(Math.PI/5);
		var spoke5 = spoke.clone("spoke5");
		spoke5.rotation.x = 4*(Math.PI/5);
		return BABYLON.Mesh.MergeMeshes([spoke,spoke2,spoke3,spoke4,spoke5]);
	}
	
	var handleBars = function(){
		var crossPole = new BABYLON.Mesh.CreateCylinder("crossPole",4,.3,.3,10,0,scene);
		var leftGrip = new BABYLON.Mesh.CreateCylinder("leftGrip",1,.5,.5,10,0,scene);
		var attatchmentPole = new BABYLON.Mesh.CreateCylinder("attatchmentPole",1,.4,.4,10,0,scene);
		attatchmentPole.position = new BABYLON.Vector3(0,-.5,0);
		crossPole.rotation.z=1.5708;
		leftGrip.rotation.z=1.5708;
		var rightGrip = leftGrip.clone("rightGrip");
		leftGrip.position=new BABYLON.Vector3(1.55,0,0);
		rightGrip.position=new BABYLON.Vector3(-1.55,0,0);
		var returnMesh = BABYLON.Mesh.MergeMeshes([crossPole,leftGrip,attatchmentPole,rightGrip]);
		returnMesh.material=bikeMat;
		return returnMesh;
	}
	
	var pedals = function(){
		var pole = BABYLON.Mesh.CreateCylinder("center", 2,.2,.2,10,0,scene,true);
		var leg = BABYLON.Mesh.CreateCylinder("leg",1,.2,.2,10,0,scene);
		var end = BABYLON.Mesh.CreateBox("end", .2,scene,true);
		end.scaling.z = 5;
		var middle = end.clone("middle",scene);
		var left = end.clone("left",scene);
		left.rotation.y=1.5708;
		left.scaling.z=4;
		var right = left.clone(right, scene);
		pole.rotation.z=1.5708;
		end.position.x =1;
		left.position.z=.4;
		right.position.z=-.4;
		left.position.x=.5;
		right.position.x=.5;
		leg.position.x=-1;
		leg.position.y=.5;
		leg.rotation.z=.1;
		var returnMesh = BABYLON.Mesh.MergeMeshes([middle,end,left,pole,right,leg]);
		returnMesh.material = bikeMat;
		return returnMesh;
	}
	
	var active = BABYLON.Mesh.CreateSphere("inactive", 3,1,scene,false);
	
	engine.runRenderLoop(function(){
		changeMesh();
		scene.render();
	});

	function changeMesh(){
		active.dispose();
		switch(localStorage.getItem("cat")){
			case "frames"		: active = bikeFrame(); 										break;
			case "seats" 		: active = seat();												break;
			case "gears" 		: active = gears(localStorage.getItem("product"));				break;
			case "wheels"		: active = wheels(parseInt(localStorage.getItem("product"))/10);break;
			case "handlebars"	: active = handleBars();										break;
			case "pedals"		: active = pedals();											break;
		}
		return active;
	}
	
	$("#productColor").on("change", function(){
		bikeMat.diffuseColor = BABYLON.Color3.FromHexString(document.getElementById("productColor").value);
	});
});