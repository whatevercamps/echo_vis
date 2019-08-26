var MOUSE_OVER = false;
$('body').bind('mousewheel', function (e) {
    var delta = e.wheelDelta;
    if (delta > 0) {
        console.log("subiendoo")
    }
    else {
        console.log("bajandooo")
    }
});

