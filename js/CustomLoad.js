//This is for filling my skill bars
function CustomloadFillBar() {
  var reveals = document.querySelectorAll(".CustomLeft");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var screenHeight = screen.height;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementBottom = reveals[i].getBoundingClientRect().bottom;
    var offset = 50;
    if (elementTop < windowHeight + offset && elementBottom > windowHeight - screenHeight - offset) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", CustomloadFillBar);
//This is for animating my images
function CustomloadImageUp() {
  var reveals = document.querySelectorAll(".CustomUp");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var offset = 0;
    if (elementTop < windowHeight + offset) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", CustomloadImageUp);
