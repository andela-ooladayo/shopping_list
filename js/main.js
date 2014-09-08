$(document).ready(function(){
	$('#warning').hide();

	function addToList(evnt){
		evnt.preventDefault();
		if( (($('#input_list').val()).length < 3) ){
			$('#warning').show();
		}

		else {
			var checkbox = $('<input>', {name: 'check_item', class: 'checkbox', type: 'checkbox'});
			$('.welcome').fadeOut("fast");
			$('#warning').hide();
			$('.listwrapper').removeClass("hide_ppt");
			$('.roughList ul').append($('<li></li>').html($('#input_list').val() + '<a href="#delete" id="del">Delete</a>').prepend(checkbox));
			$('#input_list').val("");
		}
	 }

	$('#add_list').click(addToList);

	function toggleList(evnt){
		evnt.preventDefault();
		if($(this).is(':checked')){
			$('.finalList').removeClass('hide_ppt');
			$(this).parent().toggleClass('checked');
			$(this).parent().appendTo(".finalList ul");			
		}
		else{
			$(this).parent().appendTo(".roughList ul");	
		}
	}

	$(".listWrapper ul").on("change", 'input[type=checkbox]', toggleList);

	function deleteList (evnt){
		evnt.preventDefault;
		$(this).parent().hide();
	}

 	$(".listWrapper .listwrapper ul").on("click", "a", deleteList)




});