function Customload() {
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
window.addEventListener("scroll", Customload);
