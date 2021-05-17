$( document ).ready(function() {

// display current date & time
    var time= moment().format('MMM DD, YYYY [@] hh:mm:ss a');
    $('#time-display').text(time);

    var row = ""
    //loop to display 8am - 8pm
      for (var i= 8 ; i<=20; i++){
       
        // create styles for rows & cols
        row = $(`<div class="row">`)
        col1 = $(`<div class ="col hour">
                    ${displayAmorPm(i)}
                    </div>`)
        col2 = $(`<div class ="col-8 inputcontent">
                    <input data-input="${i}" id="inputTxt${i}" class="form-control inputText" type="text" name="userInput">
                    </div>`)
        col3 = $(`<div class ="col">
                    <button data-id="${i}" id="savePlanner" class="btn btn-success btn-block">
                    <i class="fas fa-save"></i></button></div>`)

        // append to create new rows
        row.append(col1)
        row.append(col2)
        row.append(col3)
        $("#planner").append(row)
        getlocalStorage(i)
      }

    //  click function for save button & accessing local storage
     $("button.btn.btn-success").click(function(sucessBtn){
     var id = $(this).data("id")
     var inputText = $(this).parent().siblings().find("input").val()
     localStorage.setItem(id,inputText)
     })
    
     //  Convert Am to Pm on table
     function displayAmorPm(hour){
       var tod=""
       if(hour<=12){
         tod= "am"
       }else{
         tod="pm"
       }
       hour = hour % 12
       hour = hour ? hour : 12
       return hour + " " + tod
     }
    });

    // Set up local storage to save section related to hour
     function getlocalStorage(hour){
       var input = localStorage.getItem(hour)
       if(true){
        var text= $(`input#inputTxt${hour}`).val(input)
        // console.log(text)
       }
     }

    //  change color of background: 
        // past hours text box turns gray
        // current hour text box turns turquoise
     function updateColor(){
       var hour = new Date().getHours();
       for (var i= 8 ; i<=20; i++){
        //  console.log(hour,i)
         if(hour==i) {
          $(`#inputTxt${i}`).css("background","turquoise")
         }
         else  if(hour>i ){
           $(`#inputTxt${i}`).css("background","lightsteelblue")
         }
       }
     }  

// call calender- run time & change color to run
setInterval(function(){
    updateColor()
},1000);
