
$(function(){

    $('.price-item ').hover(function(){
        $(this).children('.price-item__price').toggleClass('orange')
    })

    

    var mixer = mixitup('.latest-project__elements');
});

