/**
 * Created by kozin on 08.10.2016.
 */

$ (function () {

     //Script for Select
     $('input, select').styler();


    //Script for menu
    var $links = $('.main-menu a');

    $links.on('click', function (e) {
        var $submenu = $(this).siblings('.sub-menu');
        e.preventDefault();
        $submenu.slideToggle();
    })

});