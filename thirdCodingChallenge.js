
var bills = [124, 48, 268];
var tips = new Array();
var totals = new Array();

function tipAndTotalCalculator(bill)
{
    var percentage;
    if (bill < 50) 
    {
        percentage = 0.2;
    } 
    else if (bill >= 50 && bill < 200) 
    {
        percentage = 0.15;
    } 
    else 
    {
        percentage = 0.1;
    }
    tips.push(bill * percentage);
    totals.push(bill + (bill * percentage));
}

tipAndTotalCalculator(bills[0]);
tipAndTotalCalculator(bills[1]);
tipAndTotalCalculator(bills[2]);

console.log(tips);
console.log(totals);





































