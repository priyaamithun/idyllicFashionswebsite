
//sticky navbar//
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


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
    $('.polaroid').zoom();

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
       //forgot password//
 $('#forgotPassword').on('click',function(){
 window.location="forgotPassword.html";
});