  //Initialise la class "nav-transparent"
  $(document).ready(function(){
    $(".navbar").addClass("nav-transparent");
  });

  // Ajoute & supprime class au scroll
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll < 400) {
          $(".navbar").addClass("nav-transparent");
      } else {
          $(".navbar").removeClass("nav-transparent");

      }
  });