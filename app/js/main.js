
$(function(){

    $('.price-item ').hover(function(){
        $(this).children('.price-item__price').toggleClass('orange')
    })

    $('.customers-slider__items').slick({
        arrows:false,
        dots: true
      });

    $('.menu__burger').click(function(){
        $('.menu__line').toggleClass('active'),
        $('.menu__list').toggleClass('slide')
    });

    window.onscroll = function showMenu()
    {
        var menu = document.querySelector('.menu__burger');

        if(window.pageYOffset > 1280){
            menu.classList.add('menu__fixed');
        } else{
            menu.classList.remove('menu__fixed');
        }
    }

    var mixer = mixitup('.latest-project__elements');
});

