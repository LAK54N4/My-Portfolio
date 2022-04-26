$(document).ready(function(){
    //sticky navbar
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
        //scroll-up-btn show/hide
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smoth scroll
        $('html').css("scrollBehavior","auto");
    });
    $('nav .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){
        $('nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    //typing
    let typed = new Typed(".typing", {
        strings: ["Web Developer", "Mobile Developer", "UI/UX Designer"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Mobile Developer", "UI/UX Designer"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel
    $('.carousel').owlCarousel ({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                item: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});