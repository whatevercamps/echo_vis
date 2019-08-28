$('html, body').animate({
    scrollTop: $("#sect" + 2).offset().top
}, 1000);
var act_sect = 0;
var max_sect = 2;
var wait_im_scrolling = false;

$('body').bind('mousewheel', $.debounce(50, true, function (e) {

    if (e.originalEvent.deltaY > 0 && act_sect < max_sect && !wait_im_scrolling) {
        //wait_im_scrolling = true;
        act_sect++;
        $('#sect' + (act_sect)).css('visibility', 'visible');
        $('html, body').animate({
            scrollTop: $("#sect" + act_sect).offset().top - 60
        }, 500);
        $('#sect' + (act_sect - 1)).css('visibility', 'hidden');
        //console.log('subiendooo');
        //setTimeout(function () { wait_im_scrolling = false }, 500);
    }
    else if (e.originalEvent.deltaY < 0 && act_sect > 0 && !wait_im_scrolling) {
        //wait_im_scrolling = true;

        act_sect--;
        $('#sect' + (act_sect)).css('visibility', 'visible');
        $('html, body').animate({
            scrollTop: $("#sect" + act_sect).offset().top - 60
        }, 500);
        $('#sect' + (act_sect + 1)).css('visibility', 'hidden');
        //console.log('bajandooo');
        //setTimeout(function () { wait_im_scrolling = false }, 500);
    }
    //console.log(act_sect)
})
);

