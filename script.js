
//Live time displayed on top underneath the main heading.
var datetimeTracker = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(datetimeTracker);

//save button in conjunction to "setting" the values into the local storage
$('.saveBtn').click(function () {
    $('.message').each(function() {    
       var id = $(this).attr('id');
       var value = $(this).val();
      localStorage.setItem(id, value);
   }); 
})
//Function in order to get the "imput" data from local storage.
$(document).ready(function() {
   $('input').each(function(){    
       var id = $(this).attr('id');
       var value = localStorage.getItem(id);
       
       $(this).val(value);
       
   }); 
});

//calling "currentTime" in the function in order to color code the background for past, future, and present memos saved.
var currentTime = moment().format('HH');  

function colorCodeTime() {
    $('.message').each(function () {
        var timeBlock = parseInt($(this).attr('id'));
        if (currentTime < timeBlock) {
            $(this).addClass('future');
        }
        else if (currentTime > timeBlock) {
            $(this).addClass('past');
        }
        else if (currentTime === timeBlock) {
            $(this).addClass('present')
        }
        
        
    });
} 
colorCodeTime()