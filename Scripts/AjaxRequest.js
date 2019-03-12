// JavaScript Document

// This code will automatically pull the data from an Ip Address specified from the string
var HttpClient = function() {
 	this.get = function(aUrl, aCallback) {
 	var anHttpRequest = new XMLHttpRequest();
 	
	anHttpRequest.onreadystatechange = function() { 
 	if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
 		aCallback(anHttpRequest.responseText);
 	}
 	
	anHttpRequest.open( "GET", aUrl, true ); 
 	anHttpRequest.send( null ); 
 	}
}

//URL for the API to request information from JSON file with my personal API key that I had to register to www.ipinfodb.com
var theurl='http://api.ipinfodb.com/v3/ip-city/?key=bb2eba945cc62a91147eb437555509254bb2e7a8dd3a910d4fba5f2c013c2521&format=json&ip=138.128.33.54';
var client = new HttpClient();

client.get(theurl, function(response) { 
 	var response1 = JSON.parse(response);
 	// alert(response);
 
	document.getElementById("statusCode").innerHTML = response1.name + ", " + response1.statusCode;
 
	document.getElementById("statusCode").innerHTML = response1.statusCode;
 
	document.getElementById("statusMessage").innerHTML = response1.statusMessage;
 
	document.getElementById("ipAddress").innerHTML = response1.ipAddress;
 
	document.getElementById("countryCode").innerHTML = response1.countryCode;
 
	document.getElementById("countryName").innerHTML = response1.countryName;
 
	document.getElementById("regionName").innerHTML = response1.regionName;
 
	document.getElementById("cityName").innerHTML = response1.cityName;
 
	document.getElementById("zipCode").innerHTML = response1.zipCode;
 
	document.getElementById("latitude").innerHTML = response1.latitude;
 }); 


// This code will accept the value from ipAddress and request information on it
window.onload = function() {
	
		document.getElementById("sendIPRequest").onclick = function runApiScript() {
		
			var ipAddress = document.forms["ipRequestForm"]["ipAddress"].value;
			//URL for the API to request information from JSON file with my personal API key that I had to register to www.ipinfodb.com
			var Url = "http://api.ipinfodb.com/v3/ip-city/?key=bb2eba945cc62a91147eb437555509254bb2e7a8dd3a910d4fba5f2c013c2521&format=json&ip=" +ipAddress;
			
			//create the XMLHTTP Request Object
			var xhr = new XMLHttpRequest();
			
			//Open the connection
			xhr.open('GET', Url, true);
			
			//Send the Data
			xhr.send();
			
			//Process and retrieve
			xhr.onreadystatechange = processRequest;
		
			function processRequest(e) {
	
				if (xhr.readyState == 4 && xhr.status == 200) {
					// alert(xhr.responseText);
					var response1 = JSON.parse(xhr.responseText);

					document.getElementById("statusCode").innerHTML = response1.name + ", " + response1.statusCode;

					document.getElementById("statusCode").innerHTML = response1.statusCode;

					document.getElementById("statusMessage").innerHTML = response1.statusMessage;

					document.getElementById("ipAddress").innerHTML = response1.ipAddress;

					document.getElementById("countryCode").innerHTML = response1.countryCode;

					document.getElementById("countryName").innerHTML = response1.countryName;

					document.getElementById("regionName").innerHTML = response1.regionName;

					document.getElementById("cityName").innerHTML = response1.cityName;

					document.getElementById("zipCode").innerHTML = response1.zipCode;

					document.getElementById("latitude").innerHTML = response1.latitude;

					document.getElementById("longitude").innerHTML = response1.longitude;

					document.getElementById("timeZone").innerHTML = response1.timeZone;
				}
			}
		}
}

//END