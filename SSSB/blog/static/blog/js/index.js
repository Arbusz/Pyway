
$(document).ready(function(){
    $(".list").slideUp(0);
   $("div.articleInfo_info").mouseenter(function()
       {
           $(this).siblings("div.articleInfo_time").find("div.articleInfo_time_nyr").animate({
               backgroundColor:"gray",
               opacity:"1",
               borderRadius:"50px"
           },200);
       }
   );

    $("div.articleInfo_info").mouseleave(function(){
        $(this).siblings("div.articleInfo_time").find("div.articleInfo_time_nyr").stop();
        $(this).siblings("div.articleInfo_time").find("div.articleInfo_time_nyr").animate({
            backgroundColor:"transparent",
            opacity:"0.5",
            borderRadius:"0px"
        },200);
    });

    // $("*").not("div.articleInfo_info").mouseover(function(){
    //     $("div.articleInfo_info_rmation").css({"background-color":"rgba(0,0,0,0.3)"});
    // });

    var flag_1=1,flag_2=1,flag_3=1,flag_4=1;
    $(".list_head1").click(function(){
        if(flag_1==1){
            $(this).find(".spread").rotate({angle:-180,animateTo:-90,duration:300});
            $(this).next().slideDown(300);
            flag_1=0;
        }
        else{
            $(this).find(".spread").rotate({angle:-90,animateTo:-180,duration:300});
            $(this).next().slideUp(300);
            flag_1=1;
        }
    });

    $(".list_head2").click(function(){
        if(flag_2==1){
            $(this).find(".spread").rotate({angle:-180,animateTo:-90,duration:300});
            $(this).next().slideDown(300);
            flag_2=0;
        }
        else{
            $(this).find(".spread").rotate({angle:-90,animateTo:-180,duration:300});
            $(this).next().slideUp(300);
            flag_2=1;
        }
    });

    $(".list_head3").click(function(){
        if(flag_3==1){
            $(this).find(".spread").rotate({angle:-180,animateTo:-90,duration:300});
            $(this).next().slideDown(300);
            flag_3=0;
        }
        else{
            $(this).find(".spread").rotate({angle:-90,animateTo:-180,duration:300});
            $(this).next().slideUp(300);
            flag_3=1;
        }
    });

    $(".list_head4").click(function(){
        if(flag_4==1){
            $(this).find(".spread").rotate({angle:-180,animateTo:-90,duration:300});
            $(this).next().slideDown(300);
            flag_4=0;
        }
        else{
            $(this).find(".spread").rotate({angle:-90,animateTo:-180,duration:300});
            $(this).next().slideUp(300);
            flag_4=1;
        }
    });

    $(".labels").mouseenter(function(){
        $(this).css({"opacity":"1"});
    });

    $(".labels").mouseleave(function(){
        $(this).css({"opacity":"0.75"});
    });
});
