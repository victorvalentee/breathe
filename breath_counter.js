window.onload = function () {
  var breathe = document.getElementById("breathe");

  var breath_counter = 30;

  breathe.addEventListener("webkitAnimationStart", animationStart);
  breathe.addEventListener("webkitAnimationIteration", animationRepeat);
  breathe.addEventListener("webkitAnimationEnd", animationEnd);

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
}
