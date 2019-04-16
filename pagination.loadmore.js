// deploy_btn_div --> Div id to where you want to place the BTN
// item_class --> Item's class/id that are looped
// Item limit --> Number of display items to show
function loadMore_Pagination(deploy_btn_div, item_class, item_limit) {

    var load_btn = '<a href="#" id="loadMore" class="butn medium"><span>Load More</span></a>';
    $(deploy_btn_div).append(load_btn);

    $(function() {
        $(item_class).slice(0, item_limit).show();
        $("#loadMore").on('click', function(e) {
            e.preventDefault();
            $(item_class + ":hidden").slice(0, item_limit).slideDown();
            if ($(item_class + ":hidden").length == 0) {
                $("#load").fadeOut('slow');
            }

            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });

}
