function compute()
{
    document.getElementById("result").innerHTML = "";
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = Number(document.getElementById("years").value);

    if (principal <= 0)
    {
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
    }
    else
    {
        var interest; 
        interest = (principal * years * rate) / 100;

        var actualyear = 2021 + years;

        document.getElementById("result").innerHTML += "If you deposit <mark>" + principal + "</mark>,";
        document.getElementById("result").innerHTML += "<br>";
        document.getElementById("result").innerHTML += "at an interest rate of <mark>" + rate + "%</mark>.";
        document.getElementById("result").innerHTML += "<br>";
        document.getElementById("result").innerHTML += "You will receive an amount of <mark>" + interest + "</mark>,";
        document.getElementById("result").innerHTML += "<br>";
        document.getElementById("result").innerHTML += "in the year <mark>" + actualyear + "</mark><br>";
    }
}

function updateValue(val) 
{
    document.getElementById("span").textContent=val;
}