$(document).ready(function() {
    if ((screen).width <= 980){
        $('.buttonNavArea').animate({height: 'toggle'});
    }
});

$(window).scroll(function() {
    let height = $(window).scrollTop();
    let photoHeight = $('.photoMain').height();
    let absoluteWidth = window.screen.width;
    if (absoluteWidth <= 980){
        if(height  > photoHeight && menu_toggle) {
            $(".myNav").css('background-color', '#5A6161');
        }else if(height  < photoHeight && menu_toggle){
            $(".myNav").css('background-color', 'transparent');
        }
    }
});

function color(){
    let globalHeight = $(document).scrollTop();
    let photoHeight = $('.photoMain').height();
    return globalHeight < photoHeight;
}

let menu_toggle = true;
$('.menu').click(function () {
    if (menu_toggle){
        menu_toggle = false;
        $(".menu").fadeOut('fast', function () {
            $(".menu > img").attr('src', 'img/x.svg').ready(function () {
                $(".myNav").css('background-color', '#5A6161').ready(function () {
                    $(".buttonNavArea").animate({height: 'toggle'},function () {
                        $(".menu").fadeIn('fast',function () {
                        });
                    })
                })
            });
        });
    }else{
        menu_toggle = true;
        $(".menu").fadeOut('fast', function () {
            $(".menu > img").attr('src', 'img/exp.svg').ready(function () {
                $(".buttonNavArea").animate({height: 'toggle'},function () {
                    if (color()){$(".myNav").css('background-color', 'transparent');}
                    $(".menu").fadeIn('fast',function () {
                    });
                });
            });
        });
    }
});

$('.buttonNavArea').click(function () {
    let absoluteWidth = window.screen.width;
    if (absoluteWidth <= 980){
        menu_toggle = true;
        $(".buttonNavArea").animate({height: 'toggle'},function () {
            $(".menu > img").attr('src', 'img/exp.svg').ready(function () {
                if (color()){$(".myNav").css('background-color', 'transparent');}
            })
        });
    }
})

function value(){
    let height = window.screen.height;
    let absoluteWidth = window.screen.width;
    if (absoluteWidth <= 980){return 10;}
    return height/6;
}

function firstLook(){
    let height = window.innerHeight;
    let absoluteWidth = window.screen.width;
    if (absoluteWidth > 980){
        $('html,body').animate({scrollTop: $(".aboutMe").offset().top - height}, 'slow');
    }else{
        $('html,body').animate({scrollTop: $(".photoMain").offset().top}, 'slow');
    }
}

$("#buttonDown").click(function() {
        $('html,body').animate({scrollTop: $(".aboutMe").offset().top - value()}, 'slow');
    });

$("#experience").click(function() {
        $('html,body').animate({scrollTop: $(".experience").offset().top - value()}, 'slow');
    });

$("#education").click(function() {
        $('html,body').animate({scrollTop: $('.education').offset().top - value()}, 'slow');
    });

$("#skills").click(function() {
        $('html,body').animate({scrollTop: $(".skills").offset().top - value()}, 'slow');
    });

$("#gallery").click(function() {
        $('html,body').animate({scrollTop: $(".gallery").offset().top - value()}, 'slow');
    });

$("#codingSkills").click(function() {
        $('html,body').animate({scrollTop: $(".otherSkill").offset().top - value()}, 'slow');
    });

$("#other").click(function() {
        $('html,body').animate({scrollTop: $(".otherSkill").offset().top - value()}, 'slow');
    });

$("#contactMe").click(function() {
        $('html,body').animate({scrollTop: $(".contact").offset().top - value()}, 'slow');
    });
