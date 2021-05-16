// var timeDisplayEl = $('#display-time');

// function displayTime() {
//     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//     timeDisplayEl.text(rightNow);
//   }

$( document ).ready(function() {

// display current date & time
    var time= moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $('#time-display').text(time);

    var row = ""
    //loop to dispaly 9am-18pm
      for (var i= 9 ; i<=24; i++){
       
        // Create row elements

        row = $(`<div class="row">`)
        col1 = $(`<div class ="col hour">${displayAmorPm(i)}</div>`)
        col2 = $(`<div class ="col-8 inputcontent">
                    <input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput">
                    </div>`)
        col3 = $(`<div class ="col">
                    <button data-id="${i}" id="savePlanner" class="btn btn-success btn-block">
                    <i class="fas fa-save"></i> Save</button></div>`)
        row.append(col1)
        row.append(col2)
        row.append(col3)
        $("#planner").append(row)
        getlocalStorage(i)
      }

    //   function to enable save button
     $("button.btn.btn-success").click(function(e){
     var id = $(this).data("id")
     var inputText = $(this).parent().siblings().find("input").val()
     localStorage.setItem(id,inputText)
     })
    
     //  Convert Am to Pm
     function displayAmorPm(hour){
       var timeOD=""
       if(hour<=12){
         timeOd= "AM"
       }else{
         timeOd="PM"
       }
       hour = hour % 12
       hour = hour ? hour : 12
       return hour + " " + timeOd
     }
    });

    // setting up local storage to save text
     function getlocalStorage(hour){
       let inputval = localStorage.getItem(hour)
       if(true){
        //  $("input").data(`input${hour}`)
        var text= $(`input#inputText${hour}`).val(inputval)
        console.log(text)
       }
     }

    // //  update color- does not work
    //  function updateColor(){
    //    var hour = new Date().getHours();
    //    for (var i= 9 ; i<=18; i++){
    //      console.log(hour,i)
    //      if(hour==i ) {
    //       $(`#inputText${i}`).css("background","red")
    //      }else  if(hour<i ){
          
    //        $(`#inputText${i}`).css("background","lightblue")
  
    //      }
    //    }
    //  }  

setInterval(function(){

},1000);

setInterval(displayTime,1000);