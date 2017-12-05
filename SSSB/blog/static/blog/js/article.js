$(document).ready(function(){
    $(".body_main_article_comment_text").focus(function () {
        $(this).text("");
    });
    $(".body_main_article_comment_text").blur(function () {
        $(this).text("请在这里留下您的评论");
    });
    // $(".list").slideUp(0);
    //
    // var flag_1=1,flag_2=1,flag_3=1,flag_4=1;
    // $(".list_head1").click(function(){
    //     if(flag_1==1){
    //         $(this).find(".spread").rotate({angle:-180,animateTo:-90,duration:300});
    //         $(this).next().slideDown(300);
    //         flag_1=0;
    //     }
    //     else{
    //         $(this).find(".spread").rotate({angle:-90,animateTo:-180,duration:300});
    //         $(this).next().slideUp(300);
    //         flag_1=1;
    //     }
    // });
    //
    // $(".list_head2").click(function(){
    //     if(flag_2==1){
    //         $(this).find(".spread").rotate({angle:-180,animateTo:-90,duration:300});
    //         $(this).next().slideDown(300);
    //         flag_2=0;
    //     }
    //     else{
    //         $(this).find(".spread").rotate({angle:-90,animateTo:-180,duration:300});
    //         $(this).next().slideUp(300);
    //         flag_2=1;
    //     }
    // });
    //
    // $(".list_head3").click(function(){
    //     if(flag_3==1){
    //         $(this).find(".spread").rotate({angle:-180,animateTo:-90,duration:300});
    //         $(this).next().slideDown(300);
    //         flag_3=0;
    //     }
    //     else{
    //         $(this).find(".spread").rotate({angle:-90,animateTo:-180,duration:300});
    //         $(this).next().slideUp(300);
    //         flag_3=1;
    //     }
    // });
    //
    // $(".list_head4").click(function(){
    //     if(flag_4==1){
    //         $(this).find(".spread").rotate({angle:-180,animateTo:-90,duration:300});
    //         $(this).next().slideDown(300);
    //         flag_4=0;
    //     }
    //     else{
    //         $(this).find(".spread").rotate({angle:-90,animateTo:-180,duration:300});
    //         $(this).next().slideUp(300);
    //         flag_4=1;
    //     }
    // });
});