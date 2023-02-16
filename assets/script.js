var currentTime = 13 //dayjs().hour();
var currentDate = dayjs().format('MMM D YYYY');

$("#currentDay").html(currentDate);

    function timeTracker() {
        $(".time-block").each(function () {
            
    var checkTime = parseInt($(this).attr("id").split("-")[1]);
    console.log(checkTime);
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

        $("#hour-8 .description").val(localStorage.getItem("hour-8"));
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    timeTracker();
})