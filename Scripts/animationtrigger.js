// JavaScript Document

function disruptAnimation(){
	
	//Pull the HTML ID into JavaScript to be toggled
	var balledit = document.getElementById("ballbounce");
	
	//Use the classList.toggle function to pull from CSS the roll animation
	balledit.classList.toggle('roll');
	
	
}


// Transition Triggers

function playTransition2(){
	var lambo=document.getElementById('cardrive');
	
	if(lambo.classList.contains('zoom2'))
  {
    lambo.classList.remove('zoom2');
	lambo.classList.remove('zoom');
	//Then jump out and use it
	 lambo.classList.add('zoom2');
  } else{
	
	lambo.classList.add('zoom2');
  }
  
	return false;
}

function playTransition(){
	var lambo=document.getElementById('cardrive');
	
	if(lambo.classList.contains('zoom'))
  {
    lambo.classList.remove('zoom');
	lambo.classList.remove('zoom2');
	//Then jump out and use it
	lambo.classList.add('zoom');
  } else{
	
	lambo.classList.add('zoom');
  }
	
  
  return false;
}

	
//END