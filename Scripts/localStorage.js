// JavaScript Document
window.loop = 0;
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

document.getElementById('output').innerHTML = "Time: "+months[time.month]+" "+time.day+", "+time.year+", "+time.hours+":"+time.minutes()+":"+time.seconds();
var timeReset = setTimeout(checkTime, 500);
	
return time;
}



// Catch the order
function birthday(carName){
	
	// Array with months to convert numeral months	
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	//Inherit the object so the functions still work from the  object that was passed
	var time2 = Object.create(checkTime()); 
	
	//Capture the carname to create an ID
	var carID = carName;
	
	//This variable will print the stored values
	var displayStorage = ''; 
	
	
	//The time object is now an exact copy of the time object in the checkTime function above.
	
	//So in this example we use a different initialize which allows us to clearly assign to each on the fly.
	//We are trying to catch the time as the item is brought over in a static format for storage
	var orderTime = {};
	orderTime.carModel = carName;
	orderTime.year = time2.year;
	orderTime.month = months[time2.month];
	orderTime.day = time2.day;
	orderTime.hours = time2.hours
	orderTime.minutes = time2.minutes();
	orderTime.seconds = time2.seconds();
	
	//To save all the Orders that come in we will need to use localStorage
	if(localStorage.getItem(carID) === null){
	localStorage.setItem(carID,JSON.stringify(orderTime));
	}else{
		loop++;
		carID=carID+"_"+loop;
		localStorage.setItem(carID,JSON.stringify(orderTime));
	}
	
	//We can then access the stored item by name
			
	document.getElementById('output2').innerHTML = "You Ordered the Exotic: " + carName + "<br><br> On: " + orderTime.month+" "+orderTime.day+", "+orderTime.year+", "+orderTime.hours+":"+orderTime.minutes+":"+orderTime.seconds+"<br> Your Order ID is: <b>"+ carID+"</b>";
	
	//Display all that is stored in localStorage	

		for (var key in localStorage) {
			
			if(key === "key" || key === "getItem" || key === "setItem" || key === "removeItem" || key === "clear"){
				//do nothing
			}else{
			  displayStorage = displayStorage+(key + ':' +localStorage[key])+'<br>';
			}
		}
	
	document.getElementById('output2').innerHTML += "<br><br><br>"+displayStorage;
	
	return false;
}

function unRavelStorage(){
	
	var carID = document.getElementById('carID').value;
	var carColorPicker1 = document.getElementById("carColorPicker");
	var carColor = carColorPicker1.options[carColorPicker1.selectedIndex].text;
	var getCar = localStorage.getItem(carID);
	var retrievedCar = JSON.parse(getCar);
	
	 if (carID === "") {
		alert("Please Enter the Car ID");
		return false;
	 }
	
	
	//Instantiate an Object with Functional method, which allows you to pass variables to the Object
	var carColorHolder = function(carModel, carColor, carID) {
		
		//Create an empty object that will allow you create properties
		var car = { };
		
		//Create the properties needed to collect data
		//object.key = value 
		car.carModel = carModel;
		car.carColor = carColor;
		car.carID = carID;

		car.whatColor=function(){
			return this.carColor;
		}

		return car;
	}
	
	//You can now call the object like a function and pass calues to it
	var finalCarOrder = carColorHolder(retrievedCar.carModel,carColor,carID);
	
	//If successful the values should now be in finalCarOrder
	document.getElementById('output3').innerHTML = "<br><br>"+"Your "+finalCarOrder.whatColor()+" "+finalCarOrder.carModel+" with carID of: "+finalCarOrder.carID+"<br>Is ready for pickup!";
	
	return false;
}


function unRavelStorage2(){
	
	var carID = document.getElementById('carID2').value;
	var carColorPicker2 = document.getElementById("carColorPicker2");
	var carColor = carColorPicker2.options[carColorPicker2.selectedIndex].text;
	var getCar = localStorage.getItem(carID);
	var retrievedCar = JSON.parse(getCar);
	
	 if (carID === "") {
		alert("Please Enter the Car ID");
		return false;
	 }
	
	
	//Instantiate an Object with Prototype method
	var carColorHolder = function(carModel, carColor, carID) {
		
		//Create an empty object using Object.create()
		var car = Object.create(carColorHolder.prototype);
		
		//Create the properties needed to collect data
		//object.key = value 
		car.carModel = carModel;
		car.carColor = carColor;
		car.carID = carID;

		return car;
	}
	
	carColorHolder.prototype.whatModel = function(){
		return this.carModel;
	}
	
	//You can now call the object like a function and pass calues to it
	var finalCarOrder2 = carColorHolder(retrievedCar.carModel,carColor,carID);
	
	//If successful the values should now be in finalCarOrder2 lets use the METHOD toUpperCase to display color this time.
	document.getElementById('output4').innerHTML = "<br><br>"+"Your "+finalCarOrder2.carColor.toUpperCase()+" "+finalCarOrder2.whatModel()+" with carID of: "+finalCarOrder2.carID+"<br>Is ready for pickup!";
	
	// Our prototype function works and all is well
	return finalCarOrder2;
}

function unRavelStorage3(){
	
	var carID = document.getElementById('carID3').value;
	var carColorPicker3 = document.getElementById("carColorPicker3");
	var carColor = carColorPicker3.options[carColorPicker3.selectedIndex].text;
	var getCar = localStorage.getItem(carID);
	var retrievedCar = JSON.parse(getCar);
	
	 if (carID === "") {
		alert("Please Enter the Car ID");
		return false;
	 }
	
	
	//Instantiate an Object with Psuodo Classical method
	var carColorHolder3 = function(carModel, carColor, carID) {
		
		//The Compiler creates the line below for you
		//var car = Object.create(carColorHolder.prototype);
		
		//Create the properties needed to collect data as usual but use [this]
		//this.key = value 
		this.carModel = carModel;
		this.carColor = carColor;
		this.carID = carID;
		
		//the return statement also is created automatically
		//return car;
	}
	
	//You can use the prototype function without worry and it still works.
	carColorHolder3.prototype.whatModel = function(){
		return this.carModel;
	}
	
	//You can now call the object with new as if creating an Object
	var finalCarOrder3 = new carColorHolder3(retrievedCar.carModel,carColor,carID);
	
	//If successful the values should now be in finalCarOrder2 lets use the METHOD toUpperCase twice to display color and model this time.
	document.getElementById('output5').innerHTML = "<br><br>"+"Your "+finalCarOrder3.carColor.toUpperCase()+" "+finalCarOrder3.whatModel().toUpperCase()+" with carID of: "+finalCarOrder3.carID+"<br>Is ready for pickup!";
	
	// Our prototype function works and all is well
	return finalCarOrder3;
}

function clearLocalStorage(){
	
	localStorage.clear();
	document.location.reload(true);
	return false;
}
	
//END