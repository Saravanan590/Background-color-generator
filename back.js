var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3=document.querySelector("h3");
var bg = document.getElementById("gradient");
function changebg(event){
bg.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
h3.textContent=bg.style.background;
}
color1.addEventListener("input",changebg);
color2.addEventListener("input",changebg);
