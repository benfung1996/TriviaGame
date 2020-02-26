$(document).ready(function() {

    var number = 3;

    var count = 0;

    var correct = 0;

    var incorrect = 0;

    var intervalId;

    $("#startBtn").on("click", start);
    
    var trivia = {
        questions: [
            {
                question:"What are dogs most closely related to?",
                choices: ["bears","pigs","cats","wolves"],
                answer: 3
            },
            {
                question:"Akita, a dog, is a national treasure of which country?",
                choices: ["Japan", "Spain", "Italy", "China"],
                answer: 0
            },
            {
                question:"How many bones does a dog have in its spine?",
                choices: ["12", "25", "31", "27"],
                answer: 3
            },
        ]
    }

    function displayQuestion() {

        $("#question").html("<h3>" + trivia.questions[count].question + "</h3>");

        for ( var i = 0; i < trivia.questions[count].choices.length; i++) {

            var choices = $("<button>");
            choices.text(trivia.questions[count].choices[i]);
            choices.attr({"data-index": i });
            choices.addClass("multipleChoices", "list-group-item");
            $("#choices").append(choices);
            console.log(choices);
            
        };

        $(".multipleChoices").on("click",function() {
            userselect = $(this).data("index");
            console.log(userselect);
            clearInterval(intervalId);
            checkAnswer();
        });

    };

    function checkAnswer() {

        if (userselect == trivia.questions[count].answer) {
            $("#timeUp").html("<h2> Correct! </h2>");
            correct++;
        }
        else {
            $("#timeUp").html("<h2> Nope! </h2>");
            incorrect++;
        }

        displayAnswer();
    };

    function displayAnswer() {
        $("#question").html("<h3> Answer: " + trivia.questions[count].choices[trivia.questions[count].answer] + "</h3>");
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

});