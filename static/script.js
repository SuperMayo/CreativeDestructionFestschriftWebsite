document.addEventListener("DOMContentLoaded", function () {
    function darkBackgroundGradient(){
      var s = window.scrollY;
      var angle = (s % (5 * 360)) / 5;
      var linearGradient = "linear-gradient(" + angle + "deg" + ", #004e9f, #073361)"
      var db = document.getElementsByClassName("background-dark");
  
      for(let el of db) {
        el.style.background = linearGradient;
      }
    }
  
    darkBackgroundGradient()
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    window.addEventListener('scroll', function() {
      darkBackgroundGradient()
    });
  });