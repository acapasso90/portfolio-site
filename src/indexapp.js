var text = ["React.js", "JavaScript", "Responsive Web Design", "CSS", "HTML", "Front-end Web Developer based in CT"];
var counter = 0;
var basedIn = document.querySelector(".basedIn");
setInterval(change, 2000);
function change() {
basedIn.innerHTML = text[counter];
counter++;
if(counter >= text.length) { counter = 0; };}