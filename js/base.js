$(document).ready(function(){


    var count = 0;

    setInterval(function(){
        count++;
        count %= 3; // 0 1 2 순환

        $("#swiper .swiper-slide").eq(count).addClass('action').siblings().removeClass('action');

    }, 3000)

    $('.twotab h3').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on')
    })

    $('[href="#popupnm"]').click(function(e){
        e.preventDefault();
        $('#popupnm').addClass('d-block')
    })

    $('#popupnm button').click(function(){        
        $('#popupnm').removeClass('d-block')
    })



})