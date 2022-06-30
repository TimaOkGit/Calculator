
alert("Press Buttons to use the calculator!")

document.getElementById("1").onclick = function()
{
    document.getElementById("output").innerHTML += "1"
}

document.getElementById("2").onclick = function()
{
    document.getElementById("output").innerHTML += "2"
}

document.getElementById("3").onclick = function()
{
    document.getElementById("output").innerHTML += "3"
}

document.getElementById("4").onclick = function()
{
    document.getElementById("output").innerHTML += "4"
}

document.getElementById("5").onclick = function()
{
    document.getElementById("output").innerHTML += "5"
}

document.getElementById("6").onclick = function()
{
    document.getElementById("output").innerHTML += "6"
}

document.getElementById("7").onclick = function()
{
    document.getElementById("output").innerHTML += "7"
}

document.getElementById("8").onclick = function()
{
    document.getElementById("output").innerHTML += "8"
}

document.getElementById("9").onclick = function()
{
    document.getElementById("output").innerHTML += "9"
}

document.getElementById("0").onclick = function()
{
    document.getElementById("output").innerHTML += "0"
}

var operation
var firstnum
var secondnum
var ans

document.getElementById("c").onclick = function()
{
    document.getElementById("output").innerHTML = ""
    operation = ''
    firstnum = ""
}

document.getElementById("+").onclick = function()
{
    operation = '+'
    firstnum = document.getElementById("output").innerHTML
    document.getElementById("output").innerHTML = ""
}

document.getElementById("=").onclick = function()
{
    secondnum = document.getElementById("output").innerHTML
    if(operation == '+')
    {
        ans = parseInt(firstnum) + parseInt(secondnum)
    }

    document.getElementById("output").innerHTML = ans
}