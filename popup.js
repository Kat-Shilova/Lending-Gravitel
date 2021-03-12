$(document).ready(function($) {
    $('.capture-point').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });	

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });		

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });
    
    $('.popup-fade').mousedown(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();					
        }
    });


    $('.form-button').click(function() {
        $('.popup').hide();
        $('.thx').fadeIn();
        return false;
    })
});
    