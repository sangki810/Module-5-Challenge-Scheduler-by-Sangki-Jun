//adds full length day of the week, month, and ordinal date to jumbotron
jumbotronDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(jumbotronDate);


$(document).ready(function() { //ensures fucntion will only run after DOM is ready
    $('.saveBtn').on('click', function(){ //adds event listener on save button for 'click'
        //gets nearby values and stores them in variables
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        //sets the variables above as items in local storage
        localStorage.setItem(time, text);
    })

    
    function timeColorTracker() {//function for color-coding each hour as past, present, or future live on the site
        //stores real-time from moment.js in variable
        var currentHour = moment().hour();

        //for loop for each time block div 
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('hour')[1]); //takes only the number after hour as variable
            //console.log(blockHour)

            //checks hours in each block to current hours and changes color by adding or removing css via class
            if (blockHour < currentHour) {
                $(this).addClass('past')
                $(this).removeClass('present')
                $(this).removeClass('future')
            } else if (blockHour === currentHour) {
                $(this).removeClass('past')
                $(this).addClass('present')
                $(this).removeClass('future')
            } else {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addClass('future')
            }
        })
    }


    //loads saved data from local storage if there is any for each hour block
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

   timeColorTracker(); //runs color changing function again 
})