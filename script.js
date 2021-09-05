function vibrate(type) {

    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    if (navigator.vibrate) {

        if (type == 'throb') {
            navigator.vibrate([500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500]);
        } else if (type == 'shake') {
            navigator.vibrate([125, 75, 125, 275, 200, 275, 125, 75, 125, 275, 200, 600, 200, 600]);
        } else if (type == 'pulsate') {
            navigator.vibrate([75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 450, 75, 75, 75, 75, 75, 525]);
        } else if (type == 'vibrate') {
            navigator.vibrate([150, 150, 150, 150, 75, 75, 150, 150, 150, 150, 450]);
        } else if (type == 'phone-call') {
            navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]);
        } else if (type == '007') {
            navigator.vibrate([200, 100, 200, 275, 425, 100, 200, 100, 200, 275, 425, 100, 75, 25, 75, 125, 75, 25, 75, 125, 100, 100]);
        } else {
            navigator.vibrate(50);
        }

    }

}

$(document).ready(function($) {

    $('.button--normal').click(function() {
        vibrate();
    });

    $('.button--phone-call').click(function() {
        vibrate('phone-call');
    });

    $('.button--vibrate').click(function() {
        vibrate('vibrate');
    });

    $('.button--shake').click(function() {
        vibrate('shake');
    });

    $('.button--throb').click(function() {
        vibrate('throb');
    });

    $('.button--pulsate').click(function() {
        vibrate('pulsate');
    });

    $('.button--pulse').click(function() {
        vibrate('pulse');
    });

});