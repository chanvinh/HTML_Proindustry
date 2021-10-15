//MAIN
$(window).scroll(function() {
    //MAIN_1
    if($(this).scrollTop() > 500)
    {
        $(".row1_item_main_1").addClass("transform_main_1_row_1_2")
    }
    if($(this).scrollTop() > 800)
    {
        $(".row2_item_main_1").addClass("transform_main_1_row_1_2") 
    }
    if($(this).scrollTop() > 1200)
    {
        $(".content_main_1").addClass("transform_content_main_1")
    }
    //-----------------------------------------------------------------------------------------------------------
    //MAIN_2
    if($(this).scrollTop() > 1400)
    {
        $(".top_main_2 h2").addClass("transform_top_main_2")
    }
    if($(this).scrollTop() > 1500)
    {
        $(".top_main_2 h3").addClass("transform_top_main_2")
    }
    if($(this).scrollTop() > 1500)
    {
        $(".full_item_main_2").addClass("transform_full_item_main_2")
    }
    //-----------------------------------------------------------------------------------------------------------
    //MAIN_3
    if($(this).scrollTop() > 1700)
    {
        $(".full_top_main_3").addClass("transform_full_top_main_3")
    }
    //-----------------------------------------------------------------------------------------------------------
    //MAIN_4
    if($(this).scrollTop() > 2300) {
        $(".row_1_main_4").addClass("transform_row_main_4")
    }
    if($(this).scrollTop() > 2800) {
        $(".row_2_main_4").addClass("transform_row_main_4")
    }
    //-----------------------------------------------------------------------------------------------------------
})

//NAV_MOBILE
$(".icon_nav_mobile i ").click( () => {
    $(".full_list_nav_mobile").toggleClass("transform_full_list_nav_mobile")
})