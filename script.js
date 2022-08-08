var datetimeTracker = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(datetimeTracker);

$('.saveBtn').click(function () {
    $('.message').each(function() {    
       var id = $(this).attr('id');
       var value = $(this).val();
      localStorage.setItem(id, value);
   }); 
})

$(document).ready(function() {
   $('input').each(function(){    
       var id = $(this).attr('id');
       var value = localStorage.getItem(id);
       
       $(this).val(value);
       
   }); 
});


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