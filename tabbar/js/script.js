$(function () {
    $('.tab_menu li').on('click', function () {
        var num = $('.tab_menu li').index(this);
        var $target = $('.tab_box').eq(num);
        $('.tab_box').hide();
        $target.fadeIn();
    });
});