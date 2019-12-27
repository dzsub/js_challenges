
var johnFamily =
{
    name: "John",
    bills: [124, 48, 268, 180, 42],
    tipCalc: function()
    {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++)
        {
            // tipping rules in percentage
            var percentage;
            var currBill = this.bills[i];
            if (currBill < 50) 
            {
                percentage = 0.2;
            } 
            else if (currBill >= 50 && currBill < 200) 
            {
                percentage = 0.15;
            } 
            else 
            {
                percentage = 0.1;
            }
            // adding tips and total (bill + tip) to an array
            this.tips[i] = percentage * currBill;
            this.totals[i] = currBill + this.tips[i];
        }
    }
}

var markFamily =
{
    name: "Mark",
    bills: [77, 375, 110, 45],
    tipCalc: function()
    {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++)
        {
            // tipping rules in percentage
            var percentage;
            var currBill = this.bills[i];
            if (currBill < 100) 
            {
                percentage = 0.2;
            } 
            else if (currBill >= 100 && currBill <= 300) 
            {
                percentage = 0.1;
            } 
            else 
            {
                percentage = 0.25;
            }
            // adding tips and total (bill + tip) to an array
            this.tips[i] = percentage * currBill;
            this.totals[i] = currBill + this.tips[i];
        }
    }
}

johnFamily.tipCalc();
markFamily.tipCalc();
johnFamily.average = Average(johnFamily.tips);
markFamily.average = Average(markFamily.tips);
console.log(johnFamily);
console.log(markFamily);

if (john.average > mark.average) 
{
    console.log(johnFamily.name + "'s family has higher average tips");
} 
else if (john.average < mark.average)
{
    console.log(markFamily.name + "'s family has higher average tips");
}
else
{
    console.log(johnFamily.name + "'s family average tips equal with " + markFamily.name + "'s family average tips");
}

function Average(tipsArr)
{
    var totalTip = 0;
    for (var i = 0; i < tipsArr.length; i++)
    {
        totalTip += tipsArr[i];
    }
    return totalTip / tipsArr.length;
}
















