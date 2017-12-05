$(document).ready(function(){
    $("html,body").animate({
        scrollTop: $("body").offset().top
    }, {duration: 10,easing: "swing"});
    $("header").fadeOut(0);
    // $(".body_story_downgif_over").hide();
    // $("img.body_story_downgif").fadeOut(0);

    // var i=0;
    // var change_01=new Array(14);

    // change_01[0]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(0).text("0");
    //         $("#change span.change_number").eq(0).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(0).text("1");
    //         $("#change span.change_number").eq(0).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[1]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(1).text("0");
    //         $("#change span.change_number").eq(1).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(1).text("1");
    //         $("#change span.change_number").eq(1).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[2]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(2).text("0");
    //         $("#change span.change_number").eq(2).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(2).text("1");
    //         $("#change span.change_number").eq(2).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[3]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(3).text("0");
    //         $("#change span.change_number").eq(3).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(3).text("1");
    //         $("#change span.change_number").eq(3).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[4]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(4).text("0");
    //         $("#change span.change_number").eq(4).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(4).text("1");
    //         $("#change span.change_number").eq(4).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[5]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(5).text("0");
    //         $("#change span.change_number").eq(5).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(5).text("1");
    //         $("#change span.change_number").eq(5).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[6]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(6).text("0");
    //         $("#change span.change_number").eq(6).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(6).text("1");
    //         $("#change span.change_number").eq(6).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[7]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(7).text("0");
    //         $("#change span.change_number").eq(7).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(7).text("1");
    //         $("#change span.change_number").eq(7).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[8]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(8).text("0");
    //         $("#change span.change_number").eq(8).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(8).text("1");
    //         $("#change span.change_number").eq(8).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[9]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(9).text("0");
    //         $("#change span.change_number").eq(9).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(9).text("1");
    //         $("#change span.change_number").eq(9).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[10]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(10).text("0");
    //         $("#change span.change_number").eq(10).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(10).text("1");
    //         $("#change span.change_number").eq(10).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[11]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(11).text("0");
    //         $("#change span.change_number").eq(11).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(11).text("1");
    //         $("#change span.change_number").eq(11).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[12]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(12).text("0");
    //         $("#change span.change_number").eq(12).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(12).text("1");
    //         $("#change span.change_number").eq(12).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);
    // change_01[13]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(13).text("0");
    //         $("#change span.change_number").eq(13).css({"color":"white","WebkitTextStroke":"2px black"});
    //     }
    //     else {
    //         $("#change span.change_number").eq(13).text("1");
    //         $("#change span.change_number").eq(13).css({"color":"black","WebkitTextStroke":"1px white"});
    //     }
    // },70);

    // change_01=setInterval(function(){
    //     for(i=0;i<14;i++){
    //         if(Math.random()<0.5){
    //             $("#change span.change_number").eq(i).text("0");
    //             $("#change span.change_number").eq(i).css({"color":"white","WebkitTextStroke":"2px black"});
    //         }
    //
    //         else {
    //             $("#change span.change_number").eq(i).text("1");
    //             $("#change span.change_number").eq(i).css({"color":"black","WebkitTextStroke":"1px white"});
    //         }
    //     }
    // },70);
    //
    // $("*").click(function(){
    //     var n=0;
    //     var story="Thisisourstory";
    //     var change_word;
    //     change_word=setInterval(function(){
    //         clearInterval(change_01[n]);
    //         if(n==14){
    //             n=0;
    //             clearInterval(change_word);
    //             $("img.body_story_downgif").css({"opacity":"1"});
    //             $(".body_story_downgif_over").show();
    //             $("img.body_story_downgif").fadeIn(500);
    //             // callback();
    //         }
    //         else if(n>=9&&n<=13){
    //             $("#change span.change_number").eq(n).css({"color":"white","WebkitTextStroke":"2px black"});
    //         }
    //         else{
    //             $("#change span.change_number").eq(n).css({"color":"black","WebkitTextStroke":"1px white"});
    //         }
    //         $("#change span.change_number").eq(n).text(story[n]);
    //         n++;
    //     },50);
    // });

    // var change_01=[];
    // change_01[0]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(0).text("0");
    //     }
    //     else {
    //         $("#change span.change_number").eq(0).text("1");
    //     }
    // },50);
    // change_01[1]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(1).text("0");
    //     }
    //     else {
    //         $("#change span.change_number").eq(1).text("1");
    //     }
    // },50);
    // change_01[2]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(2).text("0");
    //     }
    //     else {
    //         $("#change span.change_number").eq(2).text("1");
    //     }
    // },50);
    // change_01[3]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(3).text("0");
    //     }
    //     else {
    //         $("#change span.change_number").eq(3).text("1");
    //     }
    // },50);
    // change_01[4]=setInterval(function(){
    //     if(Math.random()<0.5){
    //         $("#change span.change_number").eq(4).text("0");
    //     }
    //     else {
    //         $("#change span.change_number").eq(4).text("1");
    //     }
    // },50);

    //
    // var change_item1="story";
    // var change_item2="work ";
    // var change_item3="time ";
    // var change=[];
    // var change_word;
    // change[0]=change_item1;
    // change[1]=change_item2;
    // change[2]=change_item3;
    // var i=0,j=0;
    // var change_number=setInterval(function(){
    //     change_01[0]=setInterval(function(){
    //         if(Math.random()<0.5){
    //             $("#change span.change_number").eq(0).text("0");
    //         }
    //         else {
    //             $("#change span.change_number").eq(0).text("1");
    //         }
    //     },50);
    //     change_01[1]=setInterval(function(){
    //         if(Math.random()<0.5){
    //             $("#change span.change_number").eq(1).text("0");
    //         }
    //         else {
    //             $("#change span.change_number").eq(1).text("1");
    //         }
    //     },50);
    //     change_01[2]=setInterval(function(){
    //         if(Math.random()<0.5){
    //             $("#change span.change_number").eq(2).text("0");
    //         }
    //         else {
    //             $("#change span.change_number").eq(2).text("1");
    //         }
    //     },50);
    //     change_01[3]=setInterval(function(){
    //         if(Math.random()<0.5){
    //             $("#change span.change_number").eq(3).text("0");
    //         }
    //         else {
    //             $("#change span.change_number").eq(3).text("1");
    //         }
    //     },50);
    //     change_01[4]=setInterval(function(){
    //         if(Math.random()<0.5){
    //             $("#change span.change_number").eq(4).text("0");
    //         }
    //         else {
    //             $("#change span.change_number").eq(4).text("1");
    //         }
    //     },50);
    //     change_word=setInterval(function(){
    //         clearInterval(change_01[j]);
    //         $("#change span.change_number").eq(j).text(change[i][j]);
    //         j++;
    //         j=j%5;
    //     },200);
    //     setInterval(function(){},1000);
    //     i++;
    //     i=i%3;
    // },2000);
    //



    //     // $("html,body").animate(
    //     //     {scrollTop: $(".body_photos").offset().top},
    //     //     {duration: 500,easing: "swing"}
    //     // );
    //     // var t=setTimeout(function(){
    //     //     // $("body").css({"overflow":"auto"});
    //     //     $("body").attr({"onmousewheel":"return true"});
    //     //     $("header").css({"opacity":"1"});
    //     //     $("header").fadeIn(1000);
    //     // },1000);
    // });

    $.fn.typer = function(options){

        var defaults = $.extend({
            search: '',
            replace: [],
            speed: 70,
            delay: 2000
        }, options);

        var bintext = function(length){
            var text = '';
            for(var $i = 0; $i<=length;$i++) {
                text = text + Math.floor(Math.random() * 2)
            }
            return text;
        };

        this.each(function(){

            var $this = $(this);
            var $text = $this.data('text');
            var position = 0;

            var indexOf = $text.indexOf( defaults.search );
            var normal = $text.substr(0, indexOf);
            var changer = $text.substr(indexOf, $text.length);

            defaults.replace.push(changer);

            var interval = setInterval(function(){
                var $bintext = '';

                if( position == indexOf ) {

                    $bintext = bintext(changer.length-1);

                    $this.html( $text.substr(0, normal.length) );
                    $this.append('<span>' + $bintext + '</span>')

                } else if( position > indexOf ) {


                    $bintext = bintext($text.length-1);

                    $this.delay(defaults.speed).find('span').html(
                        changer.substring(0, position - indexOf) +
                        $bintext.substring(position, ($bintext.length))
                    );

                } else if( position < indexOf ) {

                    $bintext = bintext($text.length-1);

                    $this.delay(defaults.speed).html(
                        normal.substring(0, position) +
                        $bintext.substring(position, ($bintext.length))
                    );

                }

                if( position < $text.length ) {
                    position++;
                } else {
                    clearInterval(interval);

                    var index = 0;
                    setInterval(function(){

                        var position = 0;
                        var newText = defaults.replace[index];

                        var changeInterval = setInterval(function(){

                            var $bintext = '';
                            for(var $i = 0; $i<=newText.length-1;$i++) {
                                $bintext = $bintext + Math.floor(Math.random() * 2)
                            }

                            $this.delay(defaults.speed).find('span').html(
                                newText.substring(0, position) +
                                $bintext.substring(position, ($bintext.length))
                            );

                            if( position < $text.length ) {
                                position++;
                            } else {
                                clearInterval(changeInterval);
                            }

                        }, defaults.speed);

                        if( index < defaults.replace.length-1 ) {
                            index++;
                        } else {
                            index = 0;
                        }
                    }, defaults.delay)


                }
            }, defaults.speed)

        });

    }


    $('#slogan').typer({
        search: 'story……',
        replace: ['dream……','time……','achievement……']
    });


    $(".body_story_background").click(function() {
        $("html, body").animate({
            scrollTop: $("span.body_did_title").offset().top
        }, 1000, function () {
            // $("body").css({"overflow-y": "auto"});
            // $("body").attr({"onmousewheel": "return true"});
            $("header").css({"opacity": "1"});
            $("header").fadeIn(1500);
        });
    });



    //explain
    // $(".body_did_explain").fadeOut(0);

    var body_did_explain_0="HTML 5：万维网的核心语言、标准通用标记语言下的一个应用超文本标记语言（HTML）的第五次重大修改。\n" +
        "HTML5的设计目的是为了在移动设备上支持多媒体，新的语法特征被引进以支持这一点，如video、audio和canvas 标记。HTML5还引进了新的功能，可以真正改变用户与文档的交互方式。";
    var body_did_explain_1="CSS：层叠样式表（Cascading StyleSheet）。 在网页制作时采用层叠样式表技术，可以有效地对页面的布局、字体、颜色、背景和其它效果实现更加精确的控制。" +
        "CSS3是CSS技术的升级版本，CSS3语言开发是朝着模块化发展的。以前的规范作为一个模块实在是太庞大而且比较复杂，所以，把它分解为一些小的模块，更多新的模块也被加入进来。";
    var body_did_explain_2="JavaScript：一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。";
    var body_did_explain_3="JQuery：一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。" +
        "jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。";
    var body_did_explain_4="Python：一种面向对象的解释型计算机程序设计语言。Python是纯粹的自由软件， 源代码和解释器CPython遵循 GPL(GNU General Public License)协议[2]  。Python语法简洁清晰，特色之一是强制用空白符(white space)作为语句缩进。" +
        "自从20世纪90年代初Python语言诞生至今，它已被逐渐广泛应用于系统管理任务的处理和Web编程。";
    var body_did_explain_5="JSON：(JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式。它基于 ECMAScript (w3c制定的js规范)的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。简洁和清晰的层次结构使得 JSON 成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。";
    var body_did_explain=[body_did_explain_0,body_did_explain_1,body_did_explain_2,body_did_explain_3,body_did_explain_4,body_did_explain_5];

    $("img.body_did_img").mouseenter(function(){
        $(".body_did_explain").animate({opacity:'1'},500);
    });
    $("div.body_did_image").mouseleave(function(){
        $(".body_did_explain").animate({opacity:'0'},500);
        for(var i=0;i<6;i++){
            $("img.body_did_img").eq(i).animate({opacity:'1'},1000);
        }
    });
    $("#icon_1").mouseenter(function(){
        $("#icon_1").animate({opacity:'1'},250);
        $("#icon_2").animate({opacity:'0.3'},250);
        $("#icon_3").animate({opacity:'0.3'},250);
        $("#icon_4").animate({opacity:'0.3'},250);
        $("#icon_5").animate({opacity:'0.3'},250);
        $("#icon_6").animate({opacity:'0.3'},250);
        $(".body_did_explain p").text(body_did_explain[0]);
    });
    $("#icon_2").mouseenter(function(){
        $("#icon_1").animate({opacity:'0.3'},250);
        $("#icon_2").animate({opacity:'1'},250);
        $("#icon_3").animate({opacity:'0.3'},250);
        $("#icon_4").animate({opacity:'0.3'},250);
        $("#icon_5").animate({opacity:'0.3'},250);
        $("#icon_6").animate({opacity:'0.3'},250);
        $(".body_did_explain p").text(body_did_explain[1]);
    });
    $("#icon_3").mouseenter(function(){
        $("#icon_1").animate({opacity:'0.3'},250);
        $("#icon_2").animate({opacity:'0.3'},250);
        $("#icon_3").animate({opacity:'1'},250);
        $("#icon_4").animate({opacity:'0.3'},250);
        $("#icon_5").animate({opacity:'0.3'},250);
        $("#icon_6").animate({opacity:'0.3'},250);
        $(".body_did_explain p").text(body_did_explain[2]);
    });
    $("#icon_4").mouseenter(function(){
        $("#icon_1").animate({opacity:'0.3'},250);
        $("#icon_2").animate({opacity:'0.3'},250);
        $("#icon_3").animate({opacity:'0.3'},250);
        $("#icon_4").animate({opacity:'1'},250);
        $("#icon_5").animate({opacity:'0.3'},250);
        $("#icon_6").animate({opacity:'0.3'},250);
        $(".body_did_explain p").text(body_did_explain[3]);
    });
    $("#icon_5").mouseenter(function(){
        $("#icon_1").animate({opacity:'0.3'},250);
        $("#icon_2").animate({opacity:'0.3'},250);
        $("#icon_3").animate({opacity:'0.3'},250);
        $("#icon_4").animate({opacity:'0.3'},250);
        $("#icon_5").animate({opacity:'1'},250);
        $("#icon_6").animate({opacity:'0.3'},250);
        $(".body_did_explain p").text(body_did_explain[4]);
    });
    $("#icon_6").mouseenter(function(){
        $("#icon_1").animate({opacity:'0.3'},250);
        $("#icon_2").animate({opacity:'0.3'},250);
        $("#icon_3").animate({opacity:'0.3'},250);
        $("#icon_4").animate({opacity:'0.3'},250);
        $("#icon_5").animate({opacity:'0.3'},250);
        $("#icon_6").animate({opacity:'1'},250);
        $(".body_did_explain p").text(body_did_explain[5]);
    });

    $(".body_did_title").click(function() {
        $("html, body").animate({
            scrollTop: $(".body_story_background").offset().top
        }, 1000);
    });
    $(".body_did_explain").click(function() {
        $("html, body").animate({
            scrollTop: $(".body_blackglass").offset().top
        }, 1000);
    });

    $(".body_blackglass_title").click(function() {
        $("html, body").animate({
            scrollTop: $("span.body_did_title").offset().top
        }, 1000);
    });

    $(".body_blackglass_down").click(function(){
        $("html, body").animate({
            scrollTop: $("span.body_pictureWall_title").offset().top
        }, 1000,function(){
            $("body").css({"overflow-y": "auto"});
            $("body").attr({"onmousewheel": "return true"});
        });
    });

    $(".body_pictureWall_glass div div.glass_not").css("opacity","1");
    $(".body_pictureWall_glass div div.body_pictureWall_glass_text").mouseenter(function(){
        $(this).animate({opacity:'1'},50);
    });
    $(".body_pictureWall_glass div div.body_pictureWall_glass_text").mouseleave(function(){
        $(this).animate({opacity:'0'},50);
    });

    $("span.body_pictureWall_title").click(function(){
        $("html, body").animate({
            scrollTop: $(".body_blackglass").offset().top
        }, 1000);
    });

    // $(".footer_stick_img").click(function(){
    //     $("html, body").animate({
    //         scrollTop: $("").offset().top
    //     }, 1000);
    // });
    $(".footer_stick_img").click(function(){
        $("html,body").animate({
            scrollTop: $(".body_story_background").offset().top
        }, {duration: 1000,easing: "swing"});
        return false;
    });

    $(".body_sorry").fadeOut(0);
    $(".button_look").click(function(){
        $(".body_glass").css({"opacity":"1"});
        $(".body_glass").fadeIn(300);
        $(".body_sorry").fadeIn(0);
        $(".body_sorry").animate({opacity:'1'},300);
    });
    $(".body_sorry button").click(function(){
        $(".body_glass").fadeOut(300,function(){
            $(".body_glass").css({"opacity":"0"});
        });
        $(".body_sorry").animate({opacity:'0'},300,function(){
            $(".body_sorry").fadeOut(0);
        });
    });
    $("#close img").click(function(){
        $(".body_glass").fadeOut(300,function(){
            $(".body_glass").css({"opacity":"0"});
        });
        $(".body_sorry").animate({opacity:'0'},300,function(){
            $(".body_sorry").fadeOut(0);
        });
    });

    $("#close img").mouseenter(function(){
        $(this).attr('src','img/home/close_2.png');
    });
    $("#close img").mouseleave(function(){
        $(this).attr('src','img/home/close_1.png');
    });


});
