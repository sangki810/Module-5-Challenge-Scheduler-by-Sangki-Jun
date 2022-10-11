jumbotronDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(jumbotronDate);

$(document).ready(function() {
    $('.saveBtn').on('click', function(){
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, text);
    })

    function timeColorTracker() {
        var currentHour = moment().hour();

        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('hour')[1]);

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

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

   timeColorTracker();
})