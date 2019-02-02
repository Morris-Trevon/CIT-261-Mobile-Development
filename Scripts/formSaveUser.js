// JavaScript Document


class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}


//Function to catch Form Submission

class userProfile{
	
		
	constructor(age, user{fname = ""; lname = ""; maritalvalue = ""; maritalstatus = "";}) {
	
		age = 0;

		user{

			fname = "";
			lname = "";
			maritalvalue = "";
			maritalstatus = "";
		}

		user.fname = document.forms["personnelForm"]["fname"].value;
		user.lname = document.forms["personnelForm"]["lname"].value;
		age = document.forms["personnelForm"]["age"].value;
		user.maritalvalue = document.getElementById("maritalstatus");
		user.maritalstatus = maritalvalue.options[maritalvalue.selectedIndex].text;

		// Call validation function and passing variables
		
		// Write if statement to call right class that stores information

		validator.validatePersonnelForm(user.fname, user.lname, age, user.maritalstatus); 
		return false;	
		
	}
	
	
}



//validate class form

class validator{

	validatePersonnelForm(fname, lname, age, maritalstatus) {
    	

  	 if (fname === "" || lname === "" || age == 0) {
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

}


class storeUser{

	var loop = 0;
	var fnameStorage = [];
	var lnameStorage = [];
	var ageStorage = [];
	var maritalStatusStorage = [];

	dataStorage(fname, lname, age, maritalstatus){


		this.fnameStorage[loop] = fname;
		this.lnameStorage[loop] = lname;
		this.ageStorage[loop] = age;
		this.maritalStatusStorage[loop] = maritalstatus;

		document.getElementById('output').innerHTML += "<br><br>The profile: <br>"
													+"First Name: "+this.fnameStorage[loop]
													+"<br>Last Name: "+this.lnameStorage[loop]
													+"<br>age: "+this.ageStorage[loop]
													+"<br>Marital Status: "+this.maritalStatusStorage[loop]+"<br>Was submitted to the Array"+"["+loop+"].";

		this.loop++;


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


}




	
//END