var johnsTeamScore = [110, 92, 110];
var mikesTeamScore = [100, 88, 92];
var marysTeamScore = [110, 92, 110];

var johnsAverage = Average(johnsTeamScore[0], johnsTeamScore[1], johnsTeamScore[2]);
var mikesAverage = Average(mikesTeamScore[0], mikesTeamScore[1], mikesTeamScore[2]);
var marysAverage = Average(marysTeamScore[0], marysTeamScore[1], marysTeamScore[2]);
console.log("John's average: " + johnsAverage, "Mike's average: " + mikesAverage, "Mary's average: " + marysAverage);

// if only one person can be a winner
switch (true) 
{
    case johnsAverage > mikesAverage && johnsAverage > marysAverage:
        console.log("John's average is the highest with " + johnsAverage);
        break;
    case mikesAverage > johnsAverage && mikesAverage > marysAverage:
        console.log("Mike's average is the highest with " + mikesAverage);
        break;
    case marysAverage > mikesAverage && marysAverage > johnsAverage:
        console.log("Mary's average is the highest with " + marysAverage);
        break;
    default:
        console.log("There is a draw " + johnsAverage + " " + mikesAverage + " " + marysAverage);
}

function Average(score1, score2, score3) 
{
    return (score1 + score2 + score3) / 3;
}























