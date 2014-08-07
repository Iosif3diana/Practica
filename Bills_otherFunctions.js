			
function Points(value){
						
	var x=value;
	var finalValue = null;
	var initialPoints = parseInt(localStorage.getItem('points'), 10);

	if (x<=50){	
		finalValue = 1;
	}
	else if (x>50 && x<=100){
		finalValue = 2;
	}
	else if (x>100 && x<=200){
		finalValue = 3;
	} 	
	else if (x>200 && x<=500){
		finalValue = 4;
	} 	
	else {
		finalValue = 5;
	}
	if(!initialPoints){
		initialPoints = 0;
	}
	var total = initialPoints + finalValue;
	localStorage.setItem('points', total);
	
	//Hide the modal widnow and go back to the main screen
	 $('#action-menu').hide();
	 showValues();
};

function showValues()
{	/*
   * 	iffififi
   */
	//localStorage.clear();
	//Set total points to UI
	var totalPoints = localStorage.getItem('points');
	document.getElementById('pointss').innerHTML=totalPoints;
	
	//Set Total sum to UI
	var totalSum = parseInt(localStorage.getItem("totalSum"), 10);
	document.getElementById("totalSum").value = totalSum;
}
	
function add()
	{
		//Update total sum to localstorage
		var total = parseInt(localStorage.getItem("totalSum"), 10);
		var newSum = parseInt(document.getElementById("InputSum").value, 10);
		if(!total){
			total = 0;
		}
		if(!newSum){
			newSum = 0;
		}
		total = total + newSum;
		console.log("Total sum: ", total, newSum);
		localStorage.setItem("totalSum", total);
		
		//Calculate points for user based on InputSum;
		
		insertToDb();
		Points(newSum);
	}
	
function insertToDb(){
		
	var sum = document.getElementById("InputSum").value;
	var name = document.getElementById("nameId").value;
	var date = document.getElementById("incomeDate").value;
	
	var item = {
		name: name,
		sum: sum,
		date: date
	};
	
	//database.insertItem(item);
	updateListToUI(sum, name, date);
	
	sum = "";
	name = "";
	date = "";
	
}

function updateListToUI(){
	var list = document.getElementById("listItems");
	var li = document.createElement("li");
	
}
