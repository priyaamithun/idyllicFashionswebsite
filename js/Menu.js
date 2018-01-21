
/* sticky navbar*/



var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/* sticky navbar*/




/* search function*/
$(function () {
  $('a[href="#search"]').on('click', function(event) {
      event.preventDefault();
      $('#search').addClass('open');
      $('#search > form > input[type="search"]').focus();
  });
  
  $('#search, #search button.close').on('click keyup', function(event) {
      if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
          $(this).removeClass('open');
      }
  });
  
  


});
/* search function*/

//page navigation
$(document).ready(function(){
  $('.view').zoom();  

});

$('#silkthread').on('click',function(){
  window.location="SilkThread.html";
  });
  $('#home').on('click',function(){
    window.location="Main.html";
    });
  $('#terracotta').on('click',function(){
      window.location="Terracotta.html";
      });
      $('#fashionJwellery').on('click',function(){
          window.location="FashionJwellery.html";
          });
          $('#silverJwellery').on('click',function(){
              window.location="SilverJwellery.html";
              });
              $('#dress').on('click',function(){
                  window.location="dress.html";
                  });
                  $('#contact').on('click',function(){
                    window.location="contact.html";
                    });
                  $('#blog').on('click',function(){
                      window.location="blog.html";
                      });
                      $('#cart').on('click',function(){
                          window.location="cart.html";
                          });
                          
  $('#forgotPassword').on('click',function(){
      window.location="forgotPassword.html";

  });


  //rangeSlider
  function showAmount(newAmount){
      document.getElementById('amount').innerHTML = newAmount;
      }
 

      //heart function
      $(".heart.fa").click(function() {
          $(this).toggleClass("fa-heart fa-heart-o");
        });

      /*  
        (function() {
          'use strict';
        
        window.addEventListener('load', function() {
            var form = document.getElementById('needs-validation');
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          }, false);
        })();*/