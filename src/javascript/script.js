$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})

$(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="priv_arrow"><i class ="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class ="fas fa-angle-right"></i></span>',
        autoplay: true,
        autoplaySpeed: 2000,
    });
});