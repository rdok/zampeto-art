//Add Hover effect to menus
jQuery('ul.nav li.dropdown').hover(function () {
    jQuery(this).find('.dropdown-menu').stop(true, true).show();
    jQuery(this).find('dropdown').addClass('open');
}, function () {
    jQuery(this).find('.dropdown-menu').stop(true, true).hide();
    jQuery(this).find('dropdown').removeClass('open');
});
