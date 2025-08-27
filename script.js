
var a = document.getElementById("ii");
var b = document.querySelector(".shadowscreen")
var c = document.querySelector(".power")
a.addEventListener("click",function()
{
    b.style.display = "block"
    c.style.display = "block"
})
var d = document.getElementById("cancel")
d.addEventListener("click",function(event)
{
    event.preventDefault()
    b.style.display = "none"
    c.style.display = "none"
})
var x = document.querySelector(".container")
var ad = document.getElementById("add")
var inb = document.getElementById("p")
var ina = document.getElementById("q")
var ind = document.getElementById("r")
ad.addEventListener("click",function(event)
{
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","box")
    div.innerHTML = `<h2>${inb.value}</h2>
                    <h5>${ina.value}</h5>
                    <p>${ind.value}</p>
                    <button onclick="deletebook(event)">Delete</button>`
    x.append(div)
    b.style.display = "none"
    c.style.display = "none"
})
function deletebook(event)
{
    event.target.parentElement.remove()
}
