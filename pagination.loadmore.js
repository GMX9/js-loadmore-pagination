// deploy_btn_div --> Div id to where you want to place the BTN
// item_class --> Item's class/id that are looped
// Item limit --> Number of display items to show
function loadMore_Pagination(deploy_btn_div, item_class, item_limit) {
    
    // Replce the button with your custom one keeping the ID of the btn
    var load_btn = '<a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black mb-30 mt-45 res-991-mt-0 float-right" id="loadMore" style="float: initial !important; margin: 0 auto;" href="#">MAIS NOTÍCIAS</a>';
    $(deploy_btn_div).append(load_btn);
    

    // Prevent Button from showing if there is no content to show
    if ($(item_class).length <= item_limit) {
            $("#loadMore").fadeOut('slow');
    }


    $(function() {
        $(item_class).hide();
        $(item_class).slice(0, item_limit).show();
        $("#loadMore").on('click', function(e) {
            
            e.preventDefault();
            $(item_class +":hidden").slice(0, item_limit).slideDown();
            
            // hide btn since there is no content to show
            if ($(item_class +":hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
            }

            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });    
}   
