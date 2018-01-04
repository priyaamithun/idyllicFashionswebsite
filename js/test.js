


//page navigation
$(document).ready(function(){
    $('.view').zoom();

});

$('#silkthread').on('click',function(){
    window.location="SilkThread.html";
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
                    $('#blog').on('click',function(){
                        window.location="blog.html";
                        });
                        $('#cart').on('click',function(){
                            window.location="cart.html";
                            });
                            
    
    //rangeSlider
    function showAmount(newAmount){
        document.getElementById('amount').innerHTML = newAmount;
        }
   
        $(".heart.fa").click(function() {
            $(this).toggleClass("fa-heart fa-heart-o");
          });

          $("#alert-target").click(function () {
            toastr["info"]("I was launched via jQuery!")
        }); 