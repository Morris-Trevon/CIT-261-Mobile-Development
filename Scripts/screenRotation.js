// JavaScript Document


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