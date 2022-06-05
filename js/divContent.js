let jobArr =["#job1", "#job2", "#job3"];
let counter = 0;


function firstJob(){
    $(jobArr[counter]).fadeIn('fast');
}

function jobChange(input){

    $(jobArr[counter]).fadeOut(250);

    if (!input){
        counter = counter + 1;
        if (counter > 2){
            counter = 0;
        }
        $('#rightExp').prop('disabled', true);
        setTimeout(function() {
            $('#rightExp').prop('disabled', false);
        }, 500);

    }

    if (input){
        counter = counter -1;
        if (counter < 0){
            counter = 2;
        }
        $('#leftExp').prop('disabled', true);
        setTimeout(function() {
            $('#leftExp').prop('disabled', false);
        }, 500);
    }
    $(jobArr[counter]).delay(250).fadeIn(250);
}


let touchstartX = 0
let touchendX = 0
const slider = document.getElementById('slider')
function handleGesture() {
    console.log(touchendX - touchstartX)
    if ((touchendX - touchstartX) > 50 || (touchendX - touchstartX) < -50){
        if (touchendX < touchstartX) jobChange(false)
        if (touchendX > touchstartX) jobChange(true)
    }
}
slider.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
})
slider.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    handleGesture()
})