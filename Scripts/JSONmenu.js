// JavaScript Document

function generateJSON(){
	
	//JSON code
	
	data = {Movie: "Golden Eye", releaseDate: "Nov 13, 1995",  budget: "$60 million", boxoffice:"$355 million"};

	//Declare variable and load JSON string into it
	
	var stringJSON = JSON.stringify(data);
	
	//create objects from the segments of the JSON string
	var movie = JSON.parse(stringJSON);
	
	//Output the text 
	document.getElementById("output").innerHTML = "Movie Name: "+movie.Movie+"<br>Release Date: "+movie.releaseDate+"<br>Budget: "+movie.budget+"<br>Box Office: "+movie.boxoffice;
	
}

