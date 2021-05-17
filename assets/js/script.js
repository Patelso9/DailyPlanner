$(".saveBtn").on('click', function(){

// set variables for my values
var value = $(this).parent().siblings('.userinput').val();
var time = $(this).parent().attr('id');
// var demo = $(this).siblings().attr('value');

localStorage.setItem(time, value);

})


// load things in from local storage
$('#hour-8, userInput').val(localStorage.getItem('hour-9'));


