let gameDiv = $('#gameWindow'), pigDiv = $('#piggy'), coin = $('#coin'), pig = $('#pig'), play = $('.play'),
    width = gameDiv.width() - pigDiv.width(),
    height = gameDiv.height() - coin.height(),
    keyPressed = {},
    pixelJump = 6,
    timer = null,
    coinFall = 0,
    counterGame = 0,
    coinPosition = gameDiv.width()/2,
    offClick = true;

function mainFunction(v,a,b) {

    let n = parseInt(v, 10) - (keyPressed[a] ? pixelJump : 0) + (keyPressed[b] ? pixelJump : 0);

    keyPressed[a] ? pig.css('transform', 'scaleX(-1)') : 0;
    keyPressed[b] ? pig.css('transform', 'scaleX(1)') : 0;

    if (coinFall > (height - (coin.height()/2)) && n >= (coinPosition - coin.width()) && n <= (coinPosition + coin.width()) ){
        counterGame += 1;
        coinPosition = Math.floor((Math.random() * (width-coin.width()) + coin.width()));
        coinFall = 0;
        coin.css('left', coinPosition);
    }

    coin.css('top', coinFall); coinFall += 6;

    if (coinFall > height){
        coinFall = 0;
        clearInterval(timer);
        play.text('Game Over');
        offClick = true;
    }

    $('#counter').text(counterGame);
    return n < 0 ? 0 : n > width ? width : n;
}

$(window).keydown(function(e) { keyPressed[e.which] = true; });
$(window).keyup(function(e) { keyPressed[e.which] = false; });

$('.game').click(function () {
    play.text('');
    if (offClick){
        timer = setInterval(function() {
            pigDiv.css({left: function(i,v){return mainFunction(v, 37, 39);},});
        }, 20);
    }
    offClick = false;
    counterGame = 0;
})