// //Shoppingtool application is an application written to solve 
// the problem of keeping track of users shopping list items. Users can add items to the list, check items
// after purchase and delete items from the list

// @2014 oladayo.oyelade@andela.co


var shoppingList = {
	//warning message
	warning: $('#warning'),
	//To add user input to the list, if the users input is is greater than 2 charcters.
	addToList:function (evnt){
					//prevent submit button default action of refreshing the page
					evnt.preventDefault();
					//show warning message when the user enter less than 3 characters
					if( ($.trim($('#input_list').val()).length < 3) ){
						shoppingList.warning.show();
					}
					// To add to list when the user input pass the conditon
					else {
						//create a checkbox
						var checkbox = $('<input>', {name: 'check_item', class: 'checkbox', type: 'checkbox'});
						//hide the initial welcome message
						$('.welcome').fadeOut("fast");
						shoppingList.warning.hide();
						//remove the class hide_ppt from class (listwapper hide_ppt)
						$('.listwrapper').removeClass("hide_ppt");
						//append the user input with the checkbox and delete link dynamically to the the uncompleted list
						$('.roughList ul').append($('<li></li>').html($('#input_list').val() + '<a href="#delete" id="del">Delete</a>').prepend(checkbox));
						//clear user input after adding it to the list
						$('#input_list').val("");
					}
			 	},

	toggleList:function (evnt){
					evnt.preventDefault();
					//to toggle between completed list and Uncompleted list
					if($(this).is(':checked')){
						//remove the class hide_ppt from class (finalList hide_ppt)
						$('.finalList').removeClass('hide_ppt');
						// to toggle between checkbox class
						$(this).parent().toggleClass('checked');
						//when the checkbox is checked toggle the list from uncompleted list to completed list
						$(this).parent().appendTo(".finalList ul");			
					}
					else{
						//when the checkbox is unchecked toggle the list from completed list to uncompleted list
						$(this).parent().appendTo(".roughList ul");	
					}
				},

	deleteList:function(evnt){
					//to delete list
					evnt.preventDefault;
					$(this).parent().remove();
				},

	onReady:function(){
	 			shoppingList.warning.hide();
	 			$('#add_list').click(shoppingList.addToList);
	 			$(".listWrapper .listwrapper ul").on("click", "a", shoppingList.deleteList);
	 			$(".listWrapper ul").on("change", 'input[type=checkbox]', shoppingList.toggleList);
	 		}
}	
$(document).ready(shoppingList.onReady);
