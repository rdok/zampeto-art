//Add Hover effect to menus
jQuery('ul.nav li.dropdown').hover(function () {
    jQuery(this).find('.dropdown-menu').stop(true, true).show();
}, function () {
    jQuery(this).find('.dropdown-menu').stop(true, true).hide();
});

(function () {
    $("li.dropdown a").click(function (e) {
        $(this).next('ul.dropdown-menu').css("display", "block");
        e.stopPropagation();
    });
});
