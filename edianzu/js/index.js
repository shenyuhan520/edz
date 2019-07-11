$(".banner").banner({
    aimg:$(".banner").find("img"),			

    isList:true ,			
    left:$("#left"),
    right:$("#right"),
    autoPlay:true,		
    delayTime:3000,			
    moveTime:2000,			
    index:0
})

//本周精选
$(".Jinx_box_wrap").find("li").mouseover(function(){
    $(this).stop().animate({
        width:468
    },500).siblings().stop().animate({
        width:240
    },300);
})

console.log($(".Jinx_box_wrap"));

//

//商品数据
class List{
    constructor(){
     this.img_box = document.querySelector(".xinZ_box .img_box_r");
    //  console.log(this.img_box);
    this.url = "http://localhost/1905/edianzu/data/data.json";
    this.init();
    }
    init(){
        let that = this;
    
        $.ajax({
            url:this.url,
            success:function(res){
        //   jQuery.ajax数据已经转好对象
              that.res  = res;
              that.display()
            },
           error:function(res){


           }
           
            
        })
    }
    display(){
        console.log(this.res);
        var str = "";
        for(var i=0;i<this.res.length;i++){
            str +=`
                    <a href="libs/libs.html?Id=${this.res[i].Id}">
                        <div class="dataBox" index="${this.res[i].Id}">
                            <img src="${this.res[i].src}">
                            <p>${this.res[i].name}</p>
                            <span>${this.res[i].price}</span>
                        </div>
                    </a>
                `
            console.log(this.res[i].Id);
        }
        this.img_box.innerHTML = str;
        //渲染的图片动画
       $(".xinZ_box .xinZ_box_cont").children(".xinZ_tupian").children(".img_box_r").children().children("img").mouseover(function(){
            $(this).stop().animate({
              width:120,
              height:100
            },1000)
        })

        $(".xinZ_box .xinZ_box_cont").children(".xinZ_tupian").children(".img_box_r").children().children("img").mouseout(function(){
                $(this).stop().animate({
                  width:115,
                  height:88
                },1000)
        })
    }
}
new List;
//楼梯效果
//起始楼梯是隐藏
if($("html").scrollTop()==0){
    $(".list").css({
        display:"none"
    })
}
//楼梯滚动时让他显示
$(window).scroll(function(){
      
            if($("html").scrollTop()==0){
                $(".list").css({
                    display:"none"
                })
            }
        // console.log($("html").scrollTop())
        if($(this).scrollTop()>=300){
            $(".list").css({
                display:"block"
            })
        }
    
    })





$(".list").children("li").mouseover(function(){
    $(this).css({
        background:"#169dff",
        color:"#fff"
    }).siblings().css({
        background:"#ccc",
        color:"#000"
    })
})
$(".list").children("li").mouseout(function(){
    $(this).css({
        background:"#ccc",
        color:"#000"
    })
})

$(".list").children("li").click(function(){
   
//   console.log($(".Lc").eq($(this).index()).offset().top)
//   $(document).scrollTop($(".Lc").eq($(this).index()).offset().top)
  $("html").animate({
      scrollTop:$(".Lc").eq($(this).index()).offset().top
  })   
})

$(".right_nav_itme").children("li").mouseover(function(){
    $(this).css({
        borderColor:"skyblue",
    }).siblings().css({
        borderColor:"",
    })
})

//
// console.log($(".Lc").children().children().children().children().children().children().children())
// $(".Lc").children().children().children().children().children().children().children().mouseover(function(){
//     $(this).css({
//         width:300,
//         height:250
//     })
//     $(this).siblings().css({
//         width:190,
//         height:225
//     })
// })
// $(".Lc").children().children().children().children().children().children().children().children().mouseout(function(){
//     $(this).stop().animate({
//       width:190,
//       height:225,
//     },500)
// })

//右边导航
$(".right_nav .te").mouseover(function(){
    // console.log($(this).parent().siblings())
    $(this).parent().prev().show().stop().animate({},500)
})

$(".right_nav .te").mouseout(function(){
    // console.log($(this).parent().siblings())
    $(this).parent().prev().hide()
})
$(".right_nav .te1").mouseover(function(){
    // console.log($(this).parent().siblings())
    $(this).parent().next(".i2").show()
})
$(".right_nav .te1").mouseout(function(){
    // console.log($(this).parent().siblings())
    $(this).parent().next(".i2").hide()
})

//侧边栏上拉下拉
console.log($(".my_nav"))
$(".my_nav").children(".nav_l_nav").mouseover(function(){
   $(this).parent().parent().next().children().children(".a").slideToggle(500)
   
})

// $(".my_nav").children(".nav_l_nav").click(function(){
//     $(this).parent().parent().next().children().children(".a").hide().stop().animate({},3000)
//  })

//3级菜单
   $("main .a").children("ul").children().mouseover(function(){
      $(this).css({
          borderBottom:"2px solid #ccc"
      }).siblings().css({
        borderBottom:"2px solid #fff"
      })
//重要把li的当前索引付给.HM，这样就可以实现一一对应
     $(".hm").eq($(this).index()).show().siblings(".hm").hide()
           
     if($("main .a").children("ul").css({
         zIndex:-1
     })){
        $(".hm").css({
            zIndex:9999
        })
     }
   })
 $(".hm").mouseover(function(){
    $(".hm").show()
   $(this).mouseout(function(){
    $(".hm").hide()
   })
 })  

