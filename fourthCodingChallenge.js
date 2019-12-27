
var mark = 
{
    fullName: "Mark Bones",
    height: 1.8,
    mass: 60,
    calcBMI: function() 
    {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var john = 
{
    fullName: "John Blues",
    height: 2,
    mass: 50,
    calcBMI: function() 
    {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

console.log("Mark's BMI: " + mark.BMI, "John's BMI: " + john.BMI);

if (mark.calcBMI() > john.calcBMI()) 
{
    console.log(mark.fullName + " has higher BMI than " + john.fullName);
}
else if (mark.calcBMI() < john.calcBMI()) 
{
    console.log(john.fullName + " has higher BMI than " + mark.fullName);
}
else 
{
    console.log(mark.fullName + "'s BMI equal with" + john.fullName + "'s BMI.");
}


