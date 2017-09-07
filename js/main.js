
// register
Vue.component('header-component', {
    template: '\
    <div>\
       <div class="navbar-wrapper">\
          <nav class="navbar navbar-inverse navbar-static-top">\
            <div class="container">\
              <div class="navbar-header">\
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\
                  <span class="sr-only">Toggle navigation</span>\
                  <span class="icon-bar"></span>\
                  <span class="icon-bar"></span>\
                  <span class="icon-bar"></span>\
                </button>\
                <a class="navbar-brand" href="#"><img src="img/logo.png" alt="Rogmanoli Silos Metálicos"/></a>\
              </div>\
              <div id="navbar" class="navbar-collapse collapse">\
                <ul class="nav navbar-nav navbar-right">\
                  <li class="active"><a href="/index.html">Inicio</a></li>\
                  <li><a href="#about">Nuestra Empresa</a></li>\
                  <li class="higlight-menu-item"><a href="#productos">Productos</a></li>\
                  <li><a href="#contact">Clientes</a></li>\
                  <li><a href="#contact">Contacto</a></li>\
                </ul>\
              </div>\
            </div>\
          </nav>\
        </div>\
    </div>\
    '
})
Vue.component('footer-component', {
    template: '\
    <div>\
         This is a footer\
    </div>\
     '
})
// create a root instance
new Vue({
  el: '#app'
})

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
  function toggleDetail1(){
        
          $("#product-1").toggleClass("visible-item");
          $(".main-container .marketing .col-lg-2 a i").toggleClass("active");
  }
  function toggleDetail2(){
      
          $("#product-1").toggleClass("visible-item");
          $(".main-container .marketing .col-lg-2 a i").toggleClass("active");
  }
  function toggleDetail3(){
      
          $("#product-1").toggleClass("visible-item");
          $(".main-container .marketing .col-lg-2 a i").toggleClass("active");
  }
  function toggleDetail4(){
      
          $("#product-1").toggleClass("visible-item");
          $(".main-container .marketing .col-lg-2 a i").toggleClass("active");
  }
  