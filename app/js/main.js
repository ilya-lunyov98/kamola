
$(function(){

    $('.price-item ').hover(function(){
        $(this).children('.price-item__price').toggleClass('orange')
    })

    $('.customers-slider__items').slick({
        arrows:false,
        dots: true
      });

    var mixer = mixitup('.latest-project__elements');
});

