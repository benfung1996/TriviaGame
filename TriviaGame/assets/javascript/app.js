$(document).ready(function() {

    var number = 3;

    var count = 0;

    var correct = false;

    var wins = 0;

    var losses = 0;

    var intervalId;

    var trivia = {
        questions: [
            {
                question:"What are dogs most closely related to?",
                choices: ["bears","pigs","cats","wolves"],
                answer: "wolves"
            },
            {
                question:"Akita, a dog, is a national treasure of which country?",
                choices: ["Japan", "Spain", "Italy", "China"],
                answer: "Japan"
            },
            {
                question:"How many bones does a dog have in its spine?",
                choices: ["12", "25", "31", "27"],
                answer: "27"
            },
        ]
    }

    function displayQuestion() {

        $("#question").html("<h3>" + trivia.questions[count].question + "</h3>");

        for ( var i = 0; i < 4; i++) {

            var list = trivia.questions[count].choices[i];
            console.log(list);
            $("#choices").append("<button class='list-group-item'>" + trivia.questions[count].choices[i] + "</button>");
            
        };

        $(".list-group-item").on("click",function() {
            userselect = $(this).val();
            clearInterval(intervalId);
            checkAnswer();
        });

    };

    function checkAnswer() {

        if (userselect == trivia.questions[count].answer) {
            correct === true;
            $("#timeUp").html("<h2> Correct! </h2>");
            wins++;
        }
        else {
            correct === false;
            $("#timeUp").html("<h2> Nope! </h2>");
            losses++;
        }

        displayAnswer();
    };

    function displayAnswer() {
        $("#question").html("<h3> Answer: " + trivia.questions[count].answer + "</h3>");
        nextQuestion();
    };

    function nextQuestion() {
        count++;

        if (count === trivia.questions.length) {
            stop();
        }

        setTimeout(reset, 3000);

    };

    function reset() {
        $("#choices").html("");
        $("#timeUp").html("");
        number = 3;
        intervalId = setInterval(decrement, 1000);
        displayQuestion();
    }

    function start() {
        $("#startBtn").hide();
        intervalId = setInterval(decrement, 1000);
        displayQuestion();
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
            displayAnswer();
        }
    }

    $("#startBtn").on("click", start);

});