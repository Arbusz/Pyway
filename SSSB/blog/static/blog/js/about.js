$(document).ready(function(){
        var str="蚂蚁部落欢迎您，只有奋斗才会有美好的未来。";
        var i=0;
        var flag=null;
        function done(){
            if(i<str.length){
                ocontent.innerHTML=str.substring(0,i+1);
                i=i+1;
            }
            else{
                clearInterval(flag);
            }
        }
        flag=setInterval(done,200);
});