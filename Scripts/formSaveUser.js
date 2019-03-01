// JavaScript Document
var loop = 0;
var storage = {};
storage.car = [];

//################Driver Info #######################

function submitDriver() {
	//Ensure that fresh data is stored by the end of program
	localStorage.clear();
	var dInfo = {};
	
	dInfo.fname = document.forms["personnelForm"]["fname"].value;
	dInfo.lname = document.forms["personnelForm"]["lname"].value;
	dInfo.age = document.forms["personnelForm"]["age"].value;
	var maritalvalue = document.getElementById("maritalstatus");
	dInfo.maritalstatus = maritalvalue.options[maritalvalue.selectedIndex].text;
	
	//Validate information entered
	if (dInfo.fname === "" || dInfo.lname === "" || dInfo.age == 0 || dInfo.maritalstatus === "") {
		alert("All fields must be filled in");
		return false;
	 }
	
	document.getElementById('output').innerHTML = '<br><b>Driver Information:</b><br>'+dInfo.fname+" "+dInfo.lname+" Welcome to our site."+"<br>You may now enter your Driver Qualification data.<br><br>";
	
	
	document.getElementById('personalInformation').style.display="none";
	
	
	dataStorage("driverInfo",dInfo);

	// Make the Driver Qualification area appear using DOM Manipulation.
	document.getElementById('qualifyData').style.visibility="visible";
		
	
	return false;	

}

//#####################Quick Check if Qualify##################

function quickCheck(){
	
	var confirmStatus = document.querySelector('input[name = "qualConf"]:checked').value;
	
	
	if(confirmStatus === "No"){
	
		document.getElementById('output2').innerHTML = "You are not eligible to use this site. Visit any of our dealers for a personal interview to qualify."
		document.getElementById('qualifyData').style.display="none";
		document.getElementById('chooseCar').style.display="none";
		document.getElementById('output').style.display="none";
		return false;
	}else{
		
		document.getElementById('qualForm').style.visibility="visible";
		return false;
	}
	
	return false;
}


//##################Driver Qualification#####################

function driverQual() {
	
	var qInfo = {};
	
	qInfo.taxNum = document.forms["qualForm"]["taxNum"].value;
	var carOwned = document.getElementById("superCar");
	qInfo.superCarOwned = carOwned.options[carOwned.selectedIndex].text;
	
	//Validate information entered
	if (qInfo.taxNum === "" || qInfo.exoticConfirm === "" || qInfo.superCarOwned === "") {
		alert("All fields must be filled in");
		return false;
	 }
	
	
	document.getElementById('output2').innerHTML = '<br><b>Qualification Information:</b>'+' <br>Tax Number: '+qInfo.taxNum+" Car Previously Owned: "+qInfo.superCarOwned+" "+"<br>You may now Select the Car Based on your Qualification.<br><br>";
	
	
	document.getElementById('qualifyData').style.display="none";
	
	
	dataStorage("qualInfo",qInfo);

	// Make the Car Choice area appear using DOM Manipulation.
	document.getElementById('chooseCar').style.visibility="visible";
	
	//Show the cars available based on Qualification
	if(qInfo.superCarOwned==="Porsche"){
		document.getElementById('porsche').style.visibility="visible";
		document.getElementById('ferrari').style.visibility="visible";
		document.getElementById('bugatti').style.display="none";
		document.getElementById('benz').style.display="none";
	}else if(qInfo.superCarOwned==="Ferrari"){
		document.getElementById('porsche').style.visibility="visible";
		document.getElementById('ferrari').style.visibility="visible";
		document.getElementById('benz').style.visibility="visible";
		document.getElementById('bugatti').style.display="none";
	}else if(qInfo.superCarOwned==="Benz"){
		document.getElementById('benz').style.visibility="visible";
		document.getElementById('porsche').style.visibility="visible";
		document.getElementById('bugatti').style.display="none";
		document.getElementById('ferrari').style.display="none";
	}else{
		document.getElementById('porsche').style.visibility="visible";
		document.getElementById('ferrari').style.visibility="visible";
		document.getElementById('benz').style.visibility="visible";
		document.getElementById('bugatti').style.visibility="visible";
	}
		
	
	return false;	

}

//#########################Data Storage function###########################

//Store all data from all sources and also make a final storage
function dataStorage(type,getInfo){
	
	
	if(type==="driverInfo"){
		storage.driveInfo = getInfo;
		
	}else if(type==="qualInfo"){
		storage.qualInfo = getInfo;
	}else if(type === "Porsche" || type === "Ferrari" || type === "Benz" || type === "Bugatti"){
		storage.car[loop]=getInfo.carModel;
		console.log(storage.car[loop]);
		loop++;
	}else if(type === "final"){
	loop = 0; // reset loop in case need to be used again
	localStorage.setItem(type,JSON.stringify(storage));
	
	document.getElementById("vOrder").remove();
	document.getElementById("chooseCar").remove();
	document.getElementById('output3').innerHTML += "<br><br>Your Order is Finalized " + storage.driveInfo.fname + " " + storage.driveInfo.lname+"<br><br> We have stored the above Data to your profile:<br><br><a href='./profile.html' target='_self'>View Profile</a><br><br>";
	signDocument();

	}
		
	
	return false;
}


//######Store Car Information and Deny Purchase or Grant based on Permission######

function carChoice(carName){
	
		// Array with months to convert numeral months	
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		//Inherit the object from the Check Time function
		var time2 = Object.create(checkTime()); 
		//Capture the carname to create an ID
		var carID = carName;


		//The time object is now an exact copy of the time object in the checkTime function above.

		//So in this example we use a different initialize which allows us to clearly assign to each on the fly.
		//We are trying to catch the time as the item is brought over in a static format for storage
		var orderedCar = {};
		orderedCar.carModel = carName;
		orderedCar.year = time2.year;
		orderedCar.month = months[time2.month];
		orderedCar.day = time2.day;
		orderedCar.hours = time2.hours
		orderedCar.minutes = time2.minutes();
		orderedCar.seconds = time2.seconds();


		//Store car into the dataStorage function
		dataStorage(carName,orderedCar);

		//Print a Confirmation of the car oderered

		document.getElementById('output3').innerHTML += "<br><br>You Ordered the Exotic: " + carName + "<br><br> On: " + orderedCar.month+" "+orderedCar.day+", "+orderedCar.year+", "+orderedCar.hours+":"+orderedCar.minutes+":"+orderedCar.seconds+"<br> Your Ordered Car is: <b>"+ carID+"</b>";

		//Remove the exotic car ordered

		carID = carName.toLowerCase();

		document.getElementById(carID).style.display="none";

		var final = {};

		var vOrder = document.createElement("BUTTON");        // Create a <button> element
		var buttonText = document.createTextNode("Finalize"); // Create a text node
		vOrder.appendChild(buttonText);                       // Append the text to <button>
		vOrder.setAttribute("id","vOrder");
		vOrder.addEventListener('click', function(){dataStorage("final",final);});
		//vOrder.onclick("dataStorage('final',final)");
		var buttonHolder =	document.getElementById("buttonHolder");

		//remove Entity if exists and recreate it basicaly an overwrite
		if (document.contains(document.getElementById("vOrder"))){
			document.getElementById("vOrder").remove();
			buttonHolder.appendChild(vOrder);
		}else{
			buttonHolder.appendChild(vOrder);
		}



		return false;
}

//##################Retrieve Profile and Car Information###################################

function unRavelStorage(){
	
	
	//Unraveling LocalStorage to get information for Driver profile.
	
	
	var getProfile = localStorage.getItem("final");
	var retrievedProf = JSON.parse(getProfile);
	
	//If successful the values should now be in finalCarOrder
	document.getElementById('fullNameP').innerHTML = retrievedProf.driveInfo.fname+" "+retrievedProf.driveInfo.lname;
	document.getElementById('ageP').innerHTML = retrievedProf.driveInfo.age;
	document.getElementById('maritalP').innerHTML = retrievedProf.driveInfo.maritalstatus;
	
	document.getElementById('carsOwnedP').innerHTML = retrievedProf.car.toString();
	
	return false;
}



//############Ensure we can catch the time of the orders#################

function checkTime(){
	
		// Array with months to convert numeral months	
		var months = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"];

		//Create a date object using the Date Constructor method.
		var today = new Date();

		//Create an Object called time	
		var time = {

			//Properties of the Object
			year	: today.getFullYear(),
			day		: today.getDay(),
			month 	: today.getMonth(),
			hours	: today.getHours(),
			//Function of the Object
			minutes	: function(){

						if(today.getMinutes() < 10) {
							return "0"+today.getMinutes();
						}else{
							return today.getMinutes();
						}

					},
			seconds	: function(){

						if(today.getSeconds() < 10) {
							return "0"+today.getSeconds();			
						}else{
							return today.getSeconds();
						}

					},
			milliSeconds : today.getMilliseconds()

			};

	
		return time;
}

//#########Video Functionality and button click Modification##########

function runVideo(carID){

			if(carID === "benz.mp4"){

				document.getElementById("benzClick").style.backgroundColor = "#008CBA";

				document.getElementById("ferrariClick").style.backgroundColor = "#4CAF50";
				document.getElementById("porscheClick").style.backgroundColor = "#4CAF50";
				document.getElementById("bugattiClick").style.backgroundColor = "#4CAF50";

			}else if(carID === "ferrari.mp4"){


				document.getElementById("ferrariClick").style.backgroundColor = "#008CBA";

				document.getElementById("benzClick").style.backgroundColor = "#4CAF50";
				document.getElementById("porscheClick").style.backgroundColor = "#4CAF50";
				document.getElementById("bugattiClick").style.backgroundColor = "#4CAF50";

			}else if(carID === "porsche.mp4"){


				document.getElementById("porscheClick").style.backgroundColor = "#008CBA";

				document.getElementById("benzClick").style.backgroundColor = "#4CAF50";
				document.getElementById("ferrariClick").style.backgroundColor = "#4CAF50";
				document.getElementById("bugattiClick").style.backgroundColor = "#4CAF50";

			}else if(carID === "bugatti.mp4"){


				document.getElementById("bugattiClick").style.backgroundColor = "#008CBA";

				document.getElementById("benzClick").style.backgroundColor = "#4CAF50";
				document.getElementById("ferrariClick").style.backgroundColor = "#4CAF50";
				document.getElementById("porscheClick").style.backgroundColor = "#4CAF50";


			}


		var video = document.getElementById('theVideo');
		var source = document.createElement('source');
		source.setAttribute("id","sourceLife");

		if (document.contains(document.getElementById("sourceLife"))){
			document.getElementById("sourceLife").remove();

			source.setAttribute('src', 'videos/'+carID);
			video.appendChild(source);

		}else{

			source.setAttribute('src', 'videos/'+carID);
			video.appendChild(source);

		}



		video.play();

		setTimeout(function() {  
			video.pause();

			source.setAttribute('src', 'videos/'+carID); 

			video.load();
			video.play();
		}, 100);
	
		return false;
	
}

//##############Canvas Signature(Will not be saved just demoed###########################

//context = document.getElementById('signatureCanvas').getContext("2d");
function signDocument(){
	
		var canvasWidth = 300;
		var canvasHeight = 200;

		var canvasDiv = document.getElementById('signatureCanvas');
		canvasDiv.style.visibility = "visible";
		canvasDiv.backgroundColor = "white";

		//Create the canvas and append to DIV using Javascript
		canvas = document.createElement('canvas');
		canvas.setAttribute('width', canvasWidth);
		canvas.setAttribute('height', canvasHeight);
		canvas.setAttribute('id', 'canvas');
		canvas.style.backgroundColor = "white";
		canvasDiv.appendChild(canvas);

		if(typeof G_vmlCanvasManager != 'undefined') {
			canvas = G_vmlCanvasManager.initElement(canvas);
		}
		context = canvas.getContext("2d");

		//Mouse Down Event
		$('#canvas').mousedown(function(e){
		  var mouseX = e.pageX - this.offsetLeft;
		  var mouseY = e.pageY - this.offsetTop;

		  paint = true;
		  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		  redraw();
		});

		//Mouse Move Event
		$('#canvas').mousemove(function(e){
		  if(paint){
			addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
			redraw();
		  }
		});


		//Mouse Up Event
		$('#canvas').mouseup(function(e){
		  paint = false;
		});


		//Mouse Leave Event
		$('#canvas').mouseleave(function(e){
		  paint = false;
		});

		//Save Click Position
		var clickX = new Array();
		var clickY = new Array();
		var clickDrag = new Array();
		var clickColor = new Array();
	
		var paint;

		function addClick(x, y, dragging)
		{
		  clickX.push(x);
		  clickY.push(y);
		  clickDrag.push(dragging);
		}
	
	//Clear the canvas
function redraw(){
  /* context.strokeStyle = "#df4b26"; */
  context.lineJoin = "round";
  context.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++)
  {		
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
    }else{
      context.moveTo(clickX[i]-1, clickY[i]);
    }
    context.lineTo(clickX[i], clickY[i]);
    context.closePath();
    context.strokeStyle = clickColor[i];
    context.stroke();
  }
}
	
}


	

//END