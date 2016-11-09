$(function(){
    // 导航
    var width=$(window).width();
    $(".nav .menu").click(function () {
        $(".nav").toggleClass("active");
        $(document.body).toggleClass("html-body-overflow");
    })
    $(window).resize(function () {
        // width=$(window).width();
        if(width>767){
            $(".nav").removeClass("active");
            $(document.body).removeClass("html-body-overflow");
            $(".banner .images li").css("width","100%");
            $(".banner .images li figure").css("width","100%");
        }
    })
    // banner

    var num=0;
    var next=0
    $(".banner .images ul>li").css("z-index","0").eq(0).css("z-index","1");
    var flag=false;
    function move(type){
        if(flag){
           return;
        }
        flag=true;
        type=type||"next";
        if(type=="pre") {
            num--;
            if(num<0){
                num=$(".banner .images li").length-1;
            }
            $(".banner .images ul>li").eq(num).css({left:0,"z-index":1});
            $(".banner .images ul>li").eq(next).css({"z-index": 2}).animate({left:width},1000,"easeInExpo",function(){
                $(".banner .images ul>li").eq(num).css({"z-index":2});
                $(".banner .images ul>li").eq(next).css({"z-index":1});
                flag=false;
            })

        }else if(type=="next") {
            num++;
            if (num >= $(".banner .images li").length) {
                num = 0;
            }
            $(".banner .images ul>li").eq(num).css({left: 0, "z-index": 1});
            $(".banner .images ul>li").eq(next).css({"z-index": 2}).animate({left: "-" + width}, 1000, "easeInExpo", function () {
                $(".banner .images ul>li").eq(num).css({"z-index": 2});
                $(".banner .images ul>li").eq(next).css({"z-index": 1});
                flag=false;
            })
        }
        $(".banner .dot_nav li").removeClass("active").eq(num).addClass("active");
        next=num;
    }
    var t =  setInterval(move,2000)
    $(".banner").hover(function () {
        clearInterval(t)
    },function () {
         t =  setInterval(move,2000)

    })
    $(".banner .pre").click(function () {
        move("pre")
    })
    $(".banner .next").click(function () {
        move("next")
    })

    $(".banner .dot_nav li").click(function () {
        num=$(this).index();
        if(num>next){
            num=$(this).index()-1;
            move("next")
        }else if(num<next){
            num=$(this).index()+1;
            move("pre")
        }else if(num=next){
            return;
        }
    })




// 底部
    $(".footer .directory dl>dt").click(function(){
        $(this).toggleClass("active")

    })
})