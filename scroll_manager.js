$('html, body').animate({
    scrollTop: $("#sect" + 0).offset().top
}, 300);   
var act_sect = 0;
var max_sect = 1;
$('body').bind('mousewheel', function (e) {
    console.log(e);
    if (e.originalEvent.deltaY > 0 && act_sect < max_sect) {
        act_sect++;
        $('#sect'+(act_sect)).css('visibility', 'visible');  
        $('html, body').animate({
            scrollTop: $("#sect" + act_sect).offset().top + 60
        }, 300);
        $('#sect'+(act_sect-1)).css('visibility', 'hidden');        
       console.log('subiendooo')
    }
    else if(e.originalEvent.deltaY < 0 && act_sect > 0){
        act_sect--;
        $('#sect'+(act_sect)).css('visibility', 'visible');  
        $('html, body').animate({
            scrollTop: $("#sect" + act_sect).offset().top + 60
        }, 300);
        $('#sect'+(act_sect+1)).css('visibility', 'hidden');  
        console.log('bajandooo')
    }
    console.log(act_sect)
});

