
var markHasHigherBMI;
var markHeight = 1.8;
var markMass = 60;
var johnHeight = 2;
var johnMass = 50;

markBMI = BMI(markHeight, markMass);
johnBMI = BMI(johnHeight, johnMass);
markHasHigherBMI = markBMI > johnBMI;
console.log("Mark's BMI: " + markBMI, "John's BMI: " + johnBMI);

if (markHasHigherBMI) 
{
    console.log("Mark has higher BMI than John.");
}
else if (markBMI < johnBMI) 
{
    console.log("John has higher BMI than Mark.");
}
else 
{
    console.log("Mark's BMI equal with John's BMI.");
}

function BMI(height, mass) 
{
    return mass / (height * height);
}



























