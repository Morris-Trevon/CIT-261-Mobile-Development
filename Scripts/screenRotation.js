// JavaScript Document

var storage = {};

function submitExplorer() {
	//Ensure that fresh data is stored by the end of program
	
	var dInfo = {};
	
	dInfo.fname = document.forms["personnelForm"]["fname"].value;
	
	
	//Validate information entered
	if (dInfo.fname === "") {
		alert("All fields must be filled in");
		return false;
	 }
	
	document.getElementById('output').innerHTML = 'Explorer '+dInfo.fname+" starts their journey!";
	
	document.getElementById('homeContent').style.visibility="visible";
	document.getElementById('homeContent').style.display="block";
		
	
	document.getElementById('personalInformation').style.display="none";
	
	
	dataStorage("explorerInfo",dInfo);

	
	return false;	

}

function dataStorage(type,getInfo){
	
	
	localStorage.setItem(type,JSON.stringify(getInfo));
	
	return false;
}
		
	

function unRavelStorage(){
	
	
	//Unraveling LocalStorage to get information for Driver profile.
	var getProfile = localStorage.getItem("explorerInfo");
	var retrievedProf = JSON.parse(getProfile);
	
	
	if(retrievedProf.fname===""){
		
		return false;
		
	}else{
	
	//If successful the values should now be in finalCarOrder
	document.getElementById('output').innerHTML = '<b>Welcome back Explorer '+retrievedProf.fname+"!</b>";
	
	document.getElementById('homeContent').style.visibility="visible";
	document.getElementById('homeContent').style.display="block";
		
	document.getElementById('resetProfile').style.visibility="visible";
	document.getElementById('resetProfile').style.display="block";
	
		
	document.getElementById('personalInformation').style.display="none";
	
		
		
	}
	
	return false;
}

function resetProfile(){
	
	localStorage.clear();
	location.reload(); 
}

function detectClick(catchPage){
	
	
	//Show the screen based on userRequest
	if(catchPage==="home"){
		document.getElementById('homeContent').style.visibility="visible";
		document.getElementById('homeContent').style.display="block";
		document.getElementById('weatherMap').style.display="none";
		document.getElementById('mediaPlayer').style.display="none";
		document.getElementById('contactMe').style.display="none";
		
	}else if(catchPage==="map"){
		document.getElementById('homeContent').style.display="none";
		document.getElementById('weatherMap').style.visibility="visible";
		document.getElementById('weatherMap').style.display="block";
		document.getElementById('mediaPlayer').style.display="none";
		document.getElementById('contactMe').style.display="none";
	}else if(catchPage==="media"){
		document.getElementById('homeContent').style.display="none";
		document.getElementById('weatherMap').style.display="none";
		document.getElementById('mediaPlayer').style.visibility="visible";
		document.getElementById('mediaPlayer').style.display="block";
		document.getElementById('contactMe').style.display="none";
	}else{
		document.getElementById('homeContent').style.display="none";
		document.getElementById('weatherMap').style.display="none";
		document.getElementById('mediaPlayer').style.display="none";
		document.getElementById('contactMe').style.visibility="visible";
		document.getElementById('contactMe').style.display="block";
	}
	
	return false;
	
}

$(function() {
    $('.toggler').click(function() {
        $(this).find('div').slideToggle();
    });
});

//END