var currentTime = dayjs().hour();
var currentDate = dayjs().format('MMM D YYYY');

$("#currentDay").html(currentDate);

    function timeTracker() {
        $(".time-block").each(function () {
            
            var checkTime = parseInt($(this).attr("id").split("hour")[1]);
        if (checkTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        else if (checkTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
            }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
             }
        })
    }

    $(document).ready(function () {

     $(".saveBtn").on("click", function () {
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
                localStorage.setItem(time, text);
        })

        $("#hour-8am .description").val(localStorage.getItem("hour-8am"));
        $("#hour-9am .description").val(localStorage.getItem("hour-9am"));
        $("#hour-10am .description").val(localStorage.getItem("hour-10am"));
        $("#hour-11am .description").val(localStorage.getItem("hour-11am"));
        $("#hour-12pm .description").val(localStorage.getItem("hour-12pm"));
        $("#hour-1pm .description").val(localStorage.getItem("hour-1pm"));
        $("#hour-2pm .description").val(localStorage.getItem("hour-2pm"));
        $("#hour-3pm .description").val(localStorage.getItem("hour-3pm"));
        $("#hour-4pm .description").val(localStorage.getItem("hour-4pm"));
        $("#hour-5pm .description").val(localStorage.getItem("hour-5pm"));
    timeTracker();
})