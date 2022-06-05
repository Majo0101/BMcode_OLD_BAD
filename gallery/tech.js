$(".galleryPlate").fadeOut('fast');

let cw = $('.photoFrame').width();
$('.photoFrame').css({
    'height': cw + 'px'
});

let $number = 0;
const arr = ["gallery/1.jpg", "gallery/2.jpg","gallery/3.jpg","gallery/4.jpg","gallery/5.jpg","gallery/6.jpg","gallery/7.jpg","gallery/8.jpg"];


$("#close").click(function(){
    $(".galleryPlate").fadeOut('slow');
});

$(".photoFrame").click(function(){
    $("#invisible").attr('src', arr[$number]).ready(function () {
        $(".photoArea").css('background-image', 'url(' + arr[$number] +')').ready(function () {
            $(".galleryPlate").fadeIn('slow');
        });
    });
});

$("#left").click(
    function (){
        $(".photoArea").fadeOut(100,function () {
            $number -= 1;
            if ($number < 0){$number = 7;}
            $("#invisible").attr('src', arr[$number]).ready(function(){
                $(".photoArea").css('background-image', 'url(' + arr[$number] +')').ready(function(){
                    $(".photoArea").fadeIn(500);
                });
            });
        });
    });

$("#right").click(
    function (){
        $(".photoArea").fadeOut(100,function () {
            $number += 1;
            if ($number > 7){$number = 0;}
            $("#invisible").attr('src', arr[$number]).ready(function(){
                $(".photoArea").css('background-image', 'url(' + arr[$number] +')').ready(function(){
                    $(".photoArea").fadeIn(500);
                });
            });
        });
    });