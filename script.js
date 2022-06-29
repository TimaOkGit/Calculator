
alert("Press Buttons to use the calculator!")

document.getElementById("1").onclick = function()
{
    document.getElementById("output").innerHTML += "1"
}

document.getElementById("c").onclick = function()
{
    document.getElementById("output").innerHTML = ""
}