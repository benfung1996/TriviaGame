$(document).ready(function() {

    var number = 3;

    var count = 0;

    var correct = false;

    var intervalId;

    var questions = ["Q1", "Q2", "Q3"];

    var answers = ["A1", "A2", "A3"];

    function displayQuestion() {
        $("#question").html("<h3>" + questions[count] + "</h3>");
    }

    function displayAnswer() {

        if (correct === true) {
            $("#timeUp").html("<h2> Correct! </h2>");
        }
        else {
            $("#timeUp").html("<h2> Nope! </h2>");
        }

        $("#question").html("<h3>" + answers[count] + "</h3>");
    }

    function start() {
        $("#startBtn").hide();
        intervalId = setInterval(decrement, 1000);
        displayQuestion;
    }

    function stop() {
        clearInterval(intervalId);
    }

    function decrement() {
        number--;
        $("#showNum").html("<h2> Time Remaining: " + number + " Seconds </h2>");

        if (number === 0) {
            stop();
            $("#timeUp").html("<h2> Time Up !! </h2>");
            displayAnswer;
        }
    }

    $("#startBtn").on("click", start);

    $(".answerBtn").on("click", stop);

});