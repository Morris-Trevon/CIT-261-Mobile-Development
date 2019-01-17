// JavaScript Document

//Declare Global Variables

window.loop = 0;
window.fnameStorage = [];
window.lnameStorage = [];
window.ageStorage = [];
window.maritalStatusStorage = [];

//Function to catch Form Submission

function submitCatch() {
	
	var fname = document.forms["personnelForm"]["fname"].value;
	var lname = document.forms["personnelForm"]["lname"].value;
	var age = document.forms["personnelForm"]["age"].value;
	var maritalvalue = document.getElementById("maritalstatus");
	var maritalstatus = maritalvalue.options[maritalvalue.selectedIndex].text;

	// Call validation function and passing variables

	validatePersonnelForm(fname, lname, age, maritalstatus); 
	return false;	

}

//validate form

function validatePersonnelForm(fname, lname, age, maritalstatus) {
    	

  	 if (fname === "" || lname === "" || age == 0 || maritalstatus === "") {
		alert("All fields must be filled in");
		return false;
	 }
	
	document.getElementById('output').innerHTML = '<br>'+fname+" "+lname+" Welcome to our site."+" So you are "+maritalstatus+", below are some stars to celebrate your age.<br>";
	
	
	//Conditional Statement to check if Single or Married print twice the stars if Married.
	
	if(maritalstatus == "Single"){
		
			//Single stars for loop
			for(i=0; i < age; i++){

				// Write to DIV
				document.getElementById('output').innerHTML += '*';
			}
			
			
		} else {
		
			//Married Double Star loop
			for(i=0; i < age * 2; i++){
			
				// Write to DIV
				document.getElementById('output').innerHTML += '*';
			}
			
		}
	
	dataStorage(fname, lname, age, maritalstatus);
	
	return false;
}

function dataStorage(fname, lname, age, maritalstatus){
	
	
	fnameStorage[loop] = fname;
	lnameStorage[loop] = lname;
	ageStorage[loop] = age;
	maritalStatusStorage[loop] = maritalstatus;
		
	document.getElementById('output').innerHTML += "<br><br>The profile: <br>"
												+"First Name: "+fnameStorage[loop]
												+"<br>Last Name: "+lnameStorage[loop]
												+"<br>age: "+ageStorage[loop]
												+"<br>Marital Status: "+maritalStatusStorage[loop]+"<br>Was submitted to the Array"+"["+loop+"].";
	
	loop++;
	
	
	if(loop == 5){
	
		document.getElementById('personnelForm').style.display="none";
		document.getElementById('output').innerHTML = "<br>Five entries recieved:<br>";
		
		
		for(i=0; i < loop; i++){
		document.getElementById('output').innerHTML += "Profile #"+ (i+1) 
																  + ": "+ fnameStorage[i]
																  + ", "+ lnameStorage[i]
																  + ", "+ ageStorage[i]
																  + ", "+maritalStatusStorage[i]+".<br>";
		}
	
	}
	
	return false;
}

	
//END