$(function(){
    $(".p_click").click(function(){
        $(".popup, .pop_bg").show();
    })

    $(".close").click(function(){
        $(".popup, .pop_bg").hide();
    })

    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false
    })


    $(".ham_btn").click(function(){
        if($(".hamburger").hasClass("act") == true){
            $(".hamburger").removeClass("act");
        }else{
            $(".hamburger").addClass("act");
        }
    });
})