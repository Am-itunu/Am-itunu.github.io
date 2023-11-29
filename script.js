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

