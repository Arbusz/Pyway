$(document).ready(function(){

    //Options
    $("a.header_options_text").mouseenter(function(){
        $(this).css({"background-color":"rgba(255,255,255, 0.3)"});
    });
    $("a.header_options_text").mouseleave(function(){
        $(this).css({"background-color":"transparent"});
    });

    //expand
    $("a.header_options_text").mouseenter(function(){
        $(this).find("span.header_options_expand").animate({
            opacity:'1',
            bottom:'5%',
        },250);
    });
    $("a.header_options_text").mouseleave(function(){
        $(this).find("span.header_options_expand").animate({
            opacity:'0',
            bottom:'30%',
        },250);
    });

    //Spot

    $(".body_glass").fadeOut(0);
    $("input.body_spot_frame").fadeOut(0);
    $(".submit").fadeOut(0);

    $(".body_spot_try").find("*").fadeOut(0);

    $(".spot").click(function(){
        $(".body_glass").css({"opacity":"1"});
        $("div.body_spot_frame").css({"opacity":"1"});


        $(".body_glass").fadeIn(300);

        $("input.body_spot_frame").fadeIn(300);
        $(".submit").fadeIn(300);
        $("div.body_spot_frame").animate({
            marginTop:"200px"
        },300);
    });

    $(".spot").click(function(){
        $(".body_spot_try").find("*").css({"opacity":"1"});
        $(".body_spot_try").find("*").fadeIn(300);
        $(".body_spot_try").animate({
            marginTop:"260px"
        },300);
    });

    $(".body_glass").click(function(){
        $(this).fadeOut(300);
        $("input.body_spot_frame").fadeOut(300);
        $(".submit").fadeOut(300);
        $("div.body_spot_frame").animate({
            marginTop:"0px"
        },300,function () {
            $(".body_glass").css({"opacity":"0"});
            $("div.body_spot_frame").css({"opacity":"0"});
            $("input.body_spot_frame").val("搜索");
            $("input.body_spot_frame").css({"color":"#9c9999"});
        });
    });

    $(".body_glass").click(function(){
        $(".body_spot_try").find("*").fadeOut(300);
        $(".body_spot_try").animate({
            marginTop:"600px"
        },300);
    });

    $("input.body_spot_frame").click(function(){
        var input=$(this).val();
        if(input=="搜索"){
            $(this).val("");
            $(this).css({"color":"#f3ecec"});
        }
    });

    $(".try_text").mouseenter(function(){
        $(this).css({"background-color":"rgba(255,255,255,0.5)"});
    });
    $(".try_text").mouseleave(function(){
        $(this).css({"background-color":"rgba(255,255,255,0.3)"});
    });
    $(".try_text").click(function(){
        var s=$(this).find("span").text();
        $("input.body_spot_frame").css({"color":"#f3ecec"});
        $("input.body_spot_frame").val(s);
    });


    // 监控搜索提交
    $("input.body_spot_frame").bind('keypress',function(event){
        if(event.keyCode == 13)
        {
            alert('没有关于“' + $("input.body_spot_frame").val()+'”的博文');
            location.reload();
        }
    });
    $(".submit").click(function(){
        alert('没有关于“' + $("input.body_spot_frame").val()+'”的博文');
        location.reload();
    });



    //Follow Us
    $("#follow_img1").mouseenter(function(){
        $(this).attr("src","img/main/Facebook_2.png");
    });
    $("#follow_img1").mouseleave(function(){
        $(this).attr("src","img/main/Facebook_1.png");
    });
    $("#follow_img2").mouseenter(function(){
        $(this).attr("src","img/main/Twitter_2.png");
    });
    $("#follow_img2").mouseleave(function(){
        $(this).attr("src","img/main/Twitter_1.png");
    });
    $("#follow_img3").mouseenter(function(){
        $(this).attr("src","img/main/Google_2.png");
    });
    $("#follow_img3").mouseleave(function(){
        $(this).attr("src","img/main/Google_1.png");
    });
    $("#follow_img4").mouseenter(function(){
        $(this).attr("src","img/main/Sina_2.png");
    });
    $("#follow_img4").mouseleave(function(){
        $(this).attr("src","img/main/Sina_1.png");
    });
    $("#follow_img5").mouseenter(function(){
        $(this).attr("src","img/main/Wechat_2.png");
    });
    $("#follow_img5").mouseleave(function(){
        $(this).attr("src","img/main/Wechat_1.png");
    });
    $("#follow_img6").mouseenter(function(){
        $(this).attr("src","img/main/Email_2.png");
    });
    $("#follow_img6").mouseleave(function(){
        $(this).attr("src","img/main/Email_1.png");
    });

    //Stick
    $(".footer_stick_img").mouseenter(function(){
        $(this).css("opacity","1");
    });
    $(".footer_stick_img").mouseleave(function(){
        $(this).css("opacity","0.5");
    });
});