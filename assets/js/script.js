// $(document).ready(function(){

    // display time
    var timeDisplayEl = $('#time-display')

    function displayTime() {
        var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
        timeDisplayEl.text(rightNow);
      }

      displayTime();

    // enable save button
    $(".saveBtn").on('click', function(){
            
            // set variables for my values
        var value = $(this).siblings('.userInput').val();
        var time = $(this).parent().attr('id');
        // var demo = $(this).siblings().attr('value');

        localStorage.setItem(time, value);
    })


    // create function to update time as application runs
    function timeUpdater(){
        var currentTime = moment().hours();
        
        $('.time-block').each(function(){
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            
            if (blockHour < currentTime) {
                $(this).addClass('past');
            }
            else if (blockHour === currentHour){
                $(this).removeClass('past');
                $(this).addClass('present');
            }
            else{
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
    }

    timeUpdater();


    // load things in from local storage, repeat once it works
    $('#hour-8 .userInput').val(localStorage.getItem('hour-8'));
    $('#hour-9 .userInput').val(localStorage.getItem('hour-9'));
    $('#hour-10 .userInput').val(localStorage.getItem('hour-10'));
    $('#hour-11 .userInput').val(localStorage.getItem('hour-11'));
    $('#hour-12 .userInput').val(localStorage.getItem('hour-12'));
    $('#hour-13 .userInput').val(localStorage.getItem('hour-13'));
    $('#hour-14 .userInput').val(localStorage.getItem('hour-14'));
    $('#hour-15 .userInput').val(localStorage.getItem('hour-15'));
    $('#hour-16 .userInput').val(localStorage.getItem('hour-16'));
    $('#hour-17 .userInput').val(localStorage.getItem('hour-17'));

// })


