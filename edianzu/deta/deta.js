class Details{
        constructor(){
            this.box = document.querySelector(".main_box")
            //    console.log(this.box) 
            this.url = "http://localhost/1905/edianzu/data/data.json";
            this.id = this.getUrlParam("Id")
            // console.log(this.id)
            
        this.init()
        // this.addEvent()
            }
        init(){
            var that = this;
            $.ajax({
                url:this.url,
                success:function(res){
                    // console.log(res)
                    that.res = res;
                    that.display()
                },
                error:function(res){
            
                }
            })
        }




        addEvent(){
            // console.log(this.res)
            // console.log(this.jbtn)
            var that = this;
            this.box = addEventListener("click",function(eve){
                    var e = eve || window.event;
                    var target = e.target || e.srcElement;
                    console.log(target.className)
                    if(target.className =="jbtn"){
                       that.id=target.parentNode.parentNode.getAttribute("index")
                       that.setDate()
                    }
                
            })
        }
        setDate(){
            console.log(this.id)
            console.log(getCookie("goods"))
            this.goods  = localStorage.getItem("goods")
            if(this.goods){
                //不是第一次
                this.goods = JSON.parse(this.goods);
                var onoff = true;

                for(var i=0;i<this.goods.length;i++){
                    if(this.goods[i].id == this.id){
                        this.goods[i].num++;
                        onoff = false;
                    }
                }
                if(onoff){
                    this.goods.push({
                        id:this.id,
                        num:1
                    })
                }
            }else{
                this.goods = [{
                    id:this.id,
                    num:1
                }]
            }
            //设置回去
            localStorage.setItem("goods",JSON.stringify(this.goods))
        }
    getUrlParam(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
                             

    display(){
        // console.log(this.res)
        var str = ""
        
       
        for(var i=0;i<this.res.length;i++){
          
            if(this.res[i].Id == this.id){
                // console.log(this.res)
                str =`
                <div class="maximg" index="${this.res[i].Id}">
                                <div class="imgbox">
                                    <img src="../${this.res[i].src}">
                                    <span></span>
                                    <p></p>
                                </div>
                                <div class="cont">
                                    <p>${this.res[i].name}</p>
                                    <b>月租:</b><span>${this.res[i].price}</span>
                                    <input type="button" value="加入购物车" class="jbtn">
                                    <a href="../shop/shop.html" class="shop">进入购物车</a>
                                </div>
                                <div class="minimg_box">
                                    <input type="button" name="" id="" value="<" class="btn1">
                                    <dl>
                                        <dd><img src="../${this.res[i].src}" alt=""></dd>
                                        <dd><img src="" alt=""></dd>
                                        <dd><img src="" alt=""></dd>
                                        <dd><img src="" alt=""></dd>
                                    </dl>
                                    <input type="button" name="" class="btn" value=">">
                                </div>
                                <div class="b_box">
                                <img src="../${this.res[i].src}" alt="">
                                </div>
                            </div>`
                        }
                
        }
        this.box.innerHTML = str;
        this.jbtn = document.querySelector(".main_box .jbtn")
        this.addEvent()
        new Fdj()
        // new Shop()
    }
    
   
}
new Details()




// class Shop{
//     constructor(){
//         this.box = document.querySelector(".main_box")
//     }
//     addEvent(){
//         this.box = addEventListener("click",function(eve){
//                 var e = eve || window.event;
//                 var target = e.target || e.srcElement;
//                 if(target.className =="btn"){
//                     that.id =target.parentNode.getAttribute("index")
//                     that.setCookie()
//                 }
//         })
//     }
//     setCookie(){
//         console.log(getCookit("goods"))
//     }
// }


class Fdj{
    constructor(){
        this.sBox = document.querySelector(".imgbox");
        this.bBox = document.querySelector(".b_box");
        this.span = document.querySelector(".imgbox span");
        this.bImg = document.querySelector(".b_box img");
        this.addEvent();
        // console.log(this.sBox)
    }
    init(){
       let w = this.bBox.offsetWidth/this.bImg.offsetWidth;
       let h = this.bBox.offsetHeight/this.bImg.offsetHeight;
    //    console.log(w,h)
       this.span.style.width = this.sBox.offsetWidth * w +"px";
       this.span.style.height = this.sBox.offsetHeight * h +"px";
    }
    addEvent(){
        let that = this;
        this.sBox.addEventListener("mouseover",function(){
            that.over();
            that.init();
        })
        this.sBox.addEventListener("mouseout",function(){
            that.out();
        })
        this.sBox.addEventListener("mousemove",function(eve){
            var e = eve || window.event;
            that.move(e);
        })
    }
    over(){
      this.span.style.display = "block";
      this.bBox.style.display = "block";
    }
    out(){
        this.span.style.display = "none";
        this.bBox.style.display = "none"
    }
    move(e){
        let l = e.offsetX - this.span.offsetWidth/2;
        let t = e.offsetY - this.span.offsetHeight/2;
        if(l<0)l=0;
        if(t<0)t=0;
        if(l>this.sBox.offsetWidth-this.span.offsetWidth){
            l=this.sBox.offsetWidth-this.span.offsetWidth
        }
        if(t>this.sBox.offsetHeight-this.span.offsetHeight){
            t= this.sBox.offsetHeight - this.span.offsetHeight
        }
        this.span.style.left = l+"px";
        this.span.style.top = t + "px";
        var x = l/(this.sBox.offsetWidth-this.span.offsetWidth)
        var y = t/(this.sBox.offsetHeight - this.span.offsetHeight)
        
        this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
        this.bImg.style.top = - y * (this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
    }
}
// function FdJ(){
//     this.sBox = document.querySelector(".s_box")
//    this.bBox = document.querySelector(".b_box")
//    this.span = document.querySelector(".s_box span")
//    this.bImg = document.querySelector(".b_box img")
//    this.body = document.querySelector("body")
//    this.addEvent()
//  }
//  FdJ.prototype.init = function(){
//     let w = this.bBox.offsetWidth/this.bImg.offsetWidth;
//     let h = this.bBox.offsetHeight/this.bImg.offsetHeight;
//     console.log(w,h)
//     this.span.style.width = this.sBox.offsetWidth * w +"px";
//     this.span.style.height = this.sBox.offsetHeight * h + "px";
// }
//  FdJ.prototype.addEvent = function(){
//       let  that = this;
//       this.sBox.addEventListener("mouseover",function(){
//            that.over();
//            that.init()
//       })
//       this.sBox.addEventListener("mouseout",function(){
//           that.out();
//         })
//     this.sBox.addEventListener("mousemove",function(eve){
//             var e = eve || window.event;
//           that.move(e);
//         })
//   }
//   FdJ.prototype.over = function(){
//       this.span.style.display = "block"
//       this.bBox.style.display = "block"

//   }
//   FdJ.prototype.out = function(){
//       this.span.style.display = "none";
//       this.bBox.style.display = "none";
//   }
//   FdJ.prototype.move = function(e){
//     let l = e.offsetX - this.span.offsetWidth/2;
//     let t = e.offsetY - this.span.offsetHeight/2;
//     if(l<0)l=0;
//     if(t<0)t=0;
//     if(l>this.sBox.offsetWidth-this.span.offsetWidth){
//         l=this.sBox.offsetWidth-this.span.offsetWidth
//     }
//     if(t>this.sBox.offsetHeight-this.span.offsetHeight){
//         t= this.sBox.offsetHeight - this.span.offsetHeight
//     }
//     this.span.style.left = l+"px";
//     this.span.style.top = t + "px";
//     var x = l/(this.sBox.offsetWidth-this.span.offsetWidth)
//     var y = t/(this.sBox.offsetHeight - this.span.offsetHeight)
    
//     this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
//     this.bImg.style.top = - y * (this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
//   }
   

//   onload = function(){

//  new FdJ();
//   }
