function render_new_page(caller_id){
    /* Turn off the old selected item to turn on the new one*/
    $(".active").removeClass("active");
    $("#"+caller_id).addClass("active");
    /* Un-render the current page and render the new one from the
     * caller_id
     */
    //$(".current_page").removeClass("current_page");
    //$("#"+caller_id+"_page").addClass("current_page");
}

$(document).ready(function(){
    //add click stuff to ui
    
    $("nav li").each(function(i){
        $(this).click(function(eventObject){
            render_new_page($(this).attr("id"));
        });
        $(this).css("cursor","pointer");
    });
    

});
