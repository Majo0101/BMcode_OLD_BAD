$('.loading').delay(2000).animate({height: 'toggle'});
$('.loadingGreen').delay(2300).animate({height: 'toggle'});




const texts = [];

texts.push(" PROGRAMMER");
texts.push(" ELECTRICIAN");

let point = 0;

function changeText(){
    $('#title').html(texts[point]);
    if(point < ( texts.length - 1 ) ){
        point++;
    }else{
        point = 0;
    }
}

setInterval(changeText, 6000); /*Call it here*/
changeText();