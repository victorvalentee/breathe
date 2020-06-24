var breathe = document.getElementById("breathe");

var breath_counter = 30;

breathe.addEventListener("animationStart", animationStart);
breathe.addEventListener("animationIteration", animationRepeat);
breathe.addEventListener("animationEnd", animationEnd);

function animationStart() {
  this.innerHTML = breath_counter;
}

function animationRepeat() {
  breath_counter--;
  this.innerHTML = breath_counter;
}

function animationEnd() {
  this.innerHTML = "Have a great day!";
}
