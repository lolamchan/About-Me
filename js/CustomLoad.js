function Customload() {
  var reveals = document.querySelectorAll(".CustomLeft");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0; /*this is for preloading, still experimenting*/
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else if (elementTop > windowHeight){
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", Customload);
