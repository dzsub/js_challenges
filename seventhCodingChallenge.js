/////////////////////////////
// Coding Challenge, my code
(function(){
    var questionsArr, firstQ, secondQ, thirdQ, randomObj;
    
    // constructor for questions with answers
    function Question(question, answers, correctAnswer)
    {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    // make Question object instances
    firstQ = new Question ("What is the name of this course's teacher?", ["John", "Michael", "Jonas"], 2);
    secondQ = new Question ("Is JavaScipt the coolest programming language in the world?", ["Yes", "No"], 0);
    thirdQ = new Question ("What does best describe coding?", ["Boring", "Hard", "Fun", "Tedious"], 2);
    
    // store the Question object instances in an array
    questionsArr = [firstQ, secondQ, thirdQ];
    
    // check if the answer was correct or not and write on the screen
    Question.prototype.checkAnswer = function(callbackFn)
    {
        var score;
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++)
        {
            console.log(i + ": " + this.answers[i]);
        }
    
        var askPlayer = prompt("Please select the correct answer (just type the number). Write 'exit' if you finished.");
        if ( askPlayer !== "exit")
        { 
            if (askPlayer == this.correctAnswer)
            {
                score = callbackFn(true);
                console.log("Correct Answer!");
                ShowPoints(score);
            } 
            else
            {
                score = callbackFn(false);
                console.log("Wrong Answer! Try again.");
                ShowPoints(score);
            }
            console.log("-----------------------------");
            NewQuestion();
        }
        else
        {
            console.log("Finished!");
        }
    }
    
    function Points()
    {
        var points = 0;
        return function(isCorrect)
        {
            if (isCorrect)
            {
                points++;
            }
            return points;
        }
    }
    
    var countPoints = Points();
    
    function ShowPoints(points)
    {
        console.log("Your score is: " + points);
    }
    
    // start the game
    function NewQuestion()
    {
        randomObj = questionsArr[Math.floor(Math.random() * questionsArr.length)];
    
        // ask the answer and check it
        randomObj.checkAnswer(countPoints);
    }
    
    NewQuestion();
    
    })();
    
    
    // Code Challenge, Jonas' code part 1
    /*
    (function() {
    
    function Question(question, answers, correct)
    {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function()
    {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++)
        {
            console.log(i + ": " + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans)
    {
        if (ans === this.correct)
        {
            console.log("Correct answer!");
        }
        else
        {
            console.log("Wrong answer. Try again :)")
        }
    }
    
    var q1 = new Question ("Is JavaScipt the coolest programming language in the world?", ["Yes", "No"], 0);
    var q2 = new Question ("What is the name of this course's teacher?", ["John", "Michael", "Jonas"], 2);
    var q3 = new Question ("What does best describe coding?", ["Boring", "Hard", "Fun", "Tedious"], 2);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt("Please select the correct answer."));
    
    questions[n].checkAnswer(answer);
    
    })();
    */
    
    // Coding Challenge, Jonas' code part 2
    /*
    (function() {
    
        function Question(question, answers, correct)
        {
            this.question = question;
            this.answers = answers;
            this.correct = correct;
        }
        
        Question.prototype.displayQuestion = function()
        {
            console.log(this.question);
        
            for (var i = 0; i < this.answers.length; i++)
            {
                console.log(i + ": " + this.answers[i]);
            }
        }
        
        Question.prototype.checkAnswer = function(ans, callback)
        {
            var sc;
    
            if (ans === this.correct)
            {
                console.log("Correct answer!");
                sc = callback(true);
            }
            else
            {
                console.log("Wrong answer. Try again :)")
                sc = callback(false);
            }
            this.displayScore(sc);
        }
    
        Question.prototype.displayScore = function(score)
        {
            console.log("Your current score is " + score);
            console.log("------------------------------")
        }
        
        var q1 = new Question ("Is JavaScipt the coolest programming language in the world?", ["Yes", "No"], 0);
        var q2 = new Question ("What is the name of this course's teacher?", ["John", "Michael", "Jonas"], 2);
        var q3 = new Question ("What does best describe coding?", ["Boring", "Hard", "Fun", "Tedious"], 2);
    
        var questions = [q1, q2, q3];
    
        function score()
        {
            var sc = 0;
            return function(correct)
            {
                if (correct)
                {
                    sc++;
                }
                return sc;
            }
    
        }
        var keepScore = score();
    
        function nextQuestion()
        {
            var n = Math.floor(Math.random() * questions.length);
            
            questions[n].displayQuestion();
            
            var answer = prompt("Please select the correct answer.");
            
            if (answer !== "exit")
            {
                questions[n].checkAnswer(parseInt(answer), keepScore);
                nextQuestion();
            }
        }
    
        nextQuestion();
        
        })();
    */