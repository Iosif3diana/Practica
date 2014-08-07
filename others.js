
/**
 * Date calendar function
 */
$(document).ready(function(){

	$('#start').click(function() {
 			 $('#action-menu').show();
	
	});
	$('#close').click(function() {
 		$('#action-menu').hide();
	});
	showValues();
	
	$('#incomeDate').datepicker();
	
	$('input.incomeDate').datepicker({
    beforeShow: function(input, inst)
    	{
       	 inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
   		}
	});
	
	var save_button = document.getElementById('Save');
	console.log("Add button is: ", save_button);
	save_button.addEventListener("click", add, false);
	
	/*$('#showEvent').html('');
	function callback(objects){
 		for(var i=0; i<objects.length; i++){
			var item = objects[i];
				
		$('#Name').append('<div id="NameAppend">' + item.value.name+'</div>');
		$('#Price').append('<div id="PriceAppend">' + item.value.price+'</div>');
		$('#Date').append('<div class="Date">' + item.value.date+'</div>');
	
	 	}
   }*/
   
           
    /*    // Get the item when the button is clicked
        $('#Save').click(function(){
       			var item={};
       			item.name = document.getElementById("Name").value ;
		        item.price = document.getElementById("InputSum").value ;
       			item.date = document.getElementById("incomeDate").value ; 
        // Insert the item 
        insertItem(item);
        
   function callbac(objects){
	 		var i=objects.length-1;
			var item = objects[i];
				
				$('#Name').append('<div id="NameAppend">' + item.value.name+'</div>');
				$('#InputSum').append('<div id="PriceAppend">' + item.value.price+'</div>');
				$('#incomeDate').append('<div class="Date">' + item.value.date+'</div>');
   }
   
   database.getAllItems(callbac);
	 });
	 
   function updateUI(dbObjects){ 
		 
		for (var j = 0; j < dbObjects.length; j++){ 
                    len=dbObjects.length;
                    
                           	 }
                          } 
	          getAllItems(updateUI); 
 
        db.onerror = function (event) {
            console.log("Error creating/accessing IndexedDB database");
        };
    };*/
   
   //database.getAllItems(callback);
	
	
});
	
 
   
