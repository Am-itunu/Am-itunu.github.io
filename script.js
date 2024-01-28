$(document).ready(function() {
    $('.skill-per').each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({ animatedValue: 0 }).animate({ animatedValue: per }, {
            duration: 1000,
            step: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
    
            },
            complete: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
    
            }
    
        });
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 3 seconds
}

function submitForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("e-mail").value;
  var message = document.getElementById("message").value;

  
  var mailtoLink = "mailto:itunuanwo@gmail.com?subject=Message from " + fname + lname + "&body=" + message;

  // Open the user's default email client with the mailto link
  window.location.href = mailtoLink;
}

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});
